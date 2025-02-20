import { Element } from '../../utils/Element.js';

export class Gathering {
	constructor(game, player, spot) {
		this.game = game;
		this.player = player;
		this.spot = spot;

		this.job;
		this.resourceType;
		this.resourceSelected;
		this.timer;
		this.totalTime;

		this.render();
	}	

	render = () => {
		this.alert = new Element(this.game.container, { className: 'gathering-alert', text: 'Selecciona un recurso a recoletar' }).element;

		this.recollectContainer = new Element(this.game.container, { className: 'gathering-recollect-container' }).element;
		this.recollectContainerCharge = new Element(this.recollectContainer, { className: 'gathering-recollect-container-charge'  }).element;
		this.recollectContainerImage = new Element(this.recollectContainer, { className: 'gathering-recollect-container-image'  }).element;

		this.buttonContainer = new Element(this.game.container, { className: 'gathering-button-container',  }).element;
		this.button = [];

		Object.keys(this.spot.materials).forEach((key) => {
			this.button[key] = new Element(this.buttonContainer, { className: 'gathering-button', text: key.toUpperCase() }).element;
			this.button[key].addEventListener('click', () => this.buttonHandler(key))
		})
	}

	buttonHandler = (resource) => {
		this.recollectContainer.style.display = 'block';
		switch(resource) {
			case 'madera': 
				this.alert.innerText = 'Recolectando madera...';
				this.job = this.player.jobs['lenador'];
				break;
			case 'mineral': 
				this.alert.innerText = 'Recolectando minerales...';
				this.job = this.player.jobs['minero'];
				break;
			case 'cereal': 
				this.alert.innerText = 'Recolectando cereales...';
				this.job = this.player.jobs['campesino'];
				break;
			case 'planta': 
				this.alert.innerText = 'Recolectando plantas...';
				this.job = this.player.jobs['alquimista'];
				break;
		}
		this.resourceType = resource;
		this.selectResource();
	}

	selectResource = () => {
		if (this.stopwatch) this.stopwatch.destroy();

		this.resourceSelected = this.spot.materials[this.resourceType][Math.floor(Math.random() * this.spot.materials[this.resourceType].length)];
		this.recollectContainerImage.style.backgroundImage = `url("${this.resourceSelected.image}")`;

		let time = this.resourceSelected.collect.time - (this.job.level * 0.05);
		if (time < 3) time = 3;

		this.timer = time;
		this.totalTime = time;
		this.collecting();
	}

	collecting = () => {
		if (this.interval) clearInterval(this.interval);
		this.interval = setInterval(() => {
			this.timer -= 0.1;
			if (this.timer <= 0) this.timer = 0;
			let percentage = ((this.totalTime - this.timer) / this.totalTime) * 100;
			this.recollectContainerCharge.style.height = `${percentage.toFixed(1)}%`
			this.alert.innerText = `Tiempo restante: ${this.timer.toFixed(1)}s`;
			if (this.timer <= 0) {
				clearInterval(this.interval);
				this.collectResource();
			}
		}, 100);
	}

	collectResource = () => {
		let amount = Math.floor(Math.random() * (this.resourceSelected.collect.amount[1] - this.resourceSelected.collect.amount[0] + 1)) + this.resourceSelected.collect.amount[0];
		let bonus = Math.max(0, Math.floor((this.job.level - this.resourceSelected.collect.level) / 20));
		let total = amount + bonus;

		this.game.main.inventory.obtainItem(this.resourceSelected, total);

		this.selectResource();
	}

	destroy = () => {
	    this.button.forEach((btn, i) => {
	        btn.removeEventListener('click', () => this.buttonHandler(buttonLabel[i]));
	        btn.remove();
	    });

	    if (this.buttonContainer) this.buttonContainer.remove();
	    if (this.recollectContainer) this.recollectContainer.remove();
	    if (this.alert) this.alert.remove();
	    
	    this.button = [];
	    this.buttonContainer = null;
	    this.alert = null;
	};

}
