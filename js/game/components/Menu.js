import { Element } from '../../utils/Element.js';

export class Menu {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.render();
	}

	render = () => {
		this.container = new Element(this.main.centerContainer, { className: 'menu-container' }).element;
	}

	update = () => {

	}
}