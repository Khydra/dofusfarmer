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

		this.update();
	}

	update = () => {
		console.log(this.spot)
	}

	travel = () => {
		
	}

	destroy = () => {
        if (this.condition) this.condition.remove();
        if (this.button) this.button.remove();
    }
}

