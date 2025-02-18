import { Element } from '../../utils/Element.js';

export class Zaap {
	constructor(game, player, spot) {
		this.game = game;
		this.player = player;
		this.spot = spot;
		this.zaapListShowed = false;

		this.render();
	}

	render = () => {
		this.memorizeZaap();

		this.zaapList = new Element(this.game.container, { className: 'zaap-list' }).element;

		this.zaapRows = [];
		//this.zaapSaved = [];
		this.zaapName = [];
		this.zaapPrice = [];

		this.player.zaaps.forEach((zaap, i) => {
			this.zaapRows[i] = new Element(this.zaapList, { className: 'zaap-row' }).element;
			//this.zaapSaved[i] = new Element(this.zaapRows[i], { className: 'zaap-saved' }).element;
			this.zaapName[i] = new Element(this.zaapRows[i], { className: 'zaap-name', text: zaap.toUpperCase() }).element;
			this.zaapPrice[i] = new Element(this.zaapRows[i], { className: 'zaap-price', text: '0 Kamas' }).element;
			this.zaapRows[i].addEventListener('click', () => this.travel(zaap))
		})

		this.buttonContainer = new Element(this.game.container, { className: 'zaap-button-container',  }).element;

		this.buttonView = new Element(this.buttonContainer, { className: 'zaap-button', text: `Mostrar Zaaps` }).element;
		this.buttonSave = new Element(this.buttonContainer, { className: 'zaap-button', text: `Guardar Zaap` }).element;

		this.buttonView.addEventListener('click', () => this.viewZaapList());
		this.buttonSave.addEventListener('click', () => this.saveZaap());
	}

	viewZaapList = () => {
		if (!this.zaapListShowed) {
			this.zaapList.style.display = 'flex';
			this.buttonView.innerText = `Ocultar Zaaps`;
			this.zaapListShowed = true;
		} else {
			this.zaapList.style.display = 'none';
			this.buttonView.innerText = `Mostrar Zaaps`;
			this.zaapListShowed = false;
		}
	}

	memorizeZaap = () => {
		if (!this.player.zaaps.includes(this.player.ubication[0])) {
			this.game.main.notification.display(`Acabas de memorizar un nuevo Zaap.`);
			this.player.zaaps.push(this.player.ubication[0]);
		} 
	}

	saveZaap = () => {
		this.player.savedZaap = this.player.ubication[0];
		this.game.main.notification.display(`Has guardado tu posición en ${this.player.ubication[0].toUpperCase()}`);
	}

	travel = (destination) => {
		this.player.ubication[0] = destination;
		this.game.update();
		this.game.main.scenes.update();
		this.game.main.notification.display(`Has viajado hasta ${this.player.ubication[0].toUpperCase()}`);
	}

	destroy = () => {
        if (this.zaapList) this.zaapList.remove();
        if (this.buttonContainer) this.buttonContainer.remove();
        if (this.buttonView) this.buttonView.remove();
        if (this.buttonSave) this.buttonSave.remove();
    }
}

