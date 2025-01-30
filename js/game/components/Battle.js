import { Element } from '../../utils/Element.js';

export class Battle {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.render();
	}

	render = () => {
		this.container = new Element(this.main.centerContainer, { className: 'battle-container' }).element;
	}

	update = () => {

	}
}