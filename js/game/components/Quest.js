import { Element } from '../../utils/Element.js';

export class Quest {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.render();
	}

	render = () => {
		this.container = new Element(this.main.rightContainer, { className: 'quest-container' }).element;
	}

	update = () => {

	}
}