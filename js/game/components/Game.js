import { Element } from '../../utils/Element.js';
import { ubicationData } from '../data/world/ubicationData.js';

export class Game {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.render();
	}	

	render = () => {
		this.container = new Element(this.main.centerContainer, { className: 'game-container' }).element;

		this.update();
	}

	update = () => {
		this.spot = ubicationData[this.player.ubication[0]].spot[this.player.ubication[1]];
		this.container.style.backgroundImage = `url("${this.spot.image}")`;

	}



}