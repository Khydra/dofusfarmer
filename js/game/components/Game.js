
import { Element } from '../../utils/Element.js';

export class Game {
	constructor(main) {
		this.main = main;

		this.ubication;
		this.render();
	}	

	render = () => {
		this.container = new Element(this.main.centerContainer, { className: 'game-container' }).element;

		this.update();
	}

	update = () => {
		this.ubication = this.main.player.ubication;

		this.container.style.backgroundImage = `url("${this.ubication.background}")`;

	}



}