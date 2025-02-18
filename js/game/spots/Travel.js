import { Element } from '../../utils/Element.js';

export class Travel {
	constructor(game, player, spot) {
		this.game = game;
		this.player = player;
		this.spot = spot;

		this.render();
	}

	render = () => {
		this.condition = new Element(this.game.container, { className: 'travel-condition' }).element;
		this.button = new Element(this.game.container, { className: 'travel-button', text: 'Viajar' }).element;
		this.button.addEventListener('click', () => this.travel());

		this.checkCondition();
	}

	checkCondition = () => {
		if (this.spot?.condition) {
			this.condition.style.display = 'flex';
			this.condition.innerText = this.spot.condition.description;

		}
	}

	travel = () => {
		console.log(this.spot.newUbication)
		this.player.ubication[0] = this.spot.newUbication[0];
		this.player.ubication[1] = this.spot.newUbication[1];
		this.game.update();
		this.game.main.scenes.update();
		this.game.main.notification.display(`Has viajado hasta ${this.player.ubication[0].toUpperCase()}`);
	}

	destroy = () => {
        if (this.condition) this.condition.remove();
        if (this.button) this.button.remove();
    }
}

