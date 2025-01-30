import { Element } from '../../utils/Element.js';

export class Zaap {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.render();
	}

	render = () => {
		this.container = new Element(this.main.centerContainer, { className: 'zaap-container' }).element;
	}

	update = () => {

	}
}