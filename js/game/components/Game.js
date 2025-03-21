import { Element } from '../../utils/Element.js';
import { ubicationData } from '../data/world/ubicationData.js';

import { Skirmish } from '../spots/Skirmish.js';
import { Gathering } from '../spots/Gathering.js';
import { Zaap } from '../spots/Zaap.js';
import { Travel } from '../spots/Travel.js';
import { Social } from '../spots/Social.js';


export class Game {
	constructor(main, player) {
		this.main = main;
		this.player = player;
		this.gameSpot;

		this.render();
	}	

	render = () => {
		this.container = new Element(this.main.centerContainer, { className: 'game-container' }).element;

		this.update();
	}

	update = () => {
		if (this.gameSpot?.destroy) {
			this.gameSpot.destroy();
			this.gameSpot = undefined;
		}

		this.spot = ubicationData[this.player.ubication[0]].spot[this.player.ubication[1]];
		this.container.style.backgroundImage = `url("${this.spot.image}")`;

		this.drawSpot()
	}

	drawSpot = () => {
		switch(this.spot.type) {
			case 'skirmish': 
				this.gameSpot = new Skirmish(this, this.player, this.spot);
				break
			case 'gathering': 
				this.gameSpot = new Gathering(this, this.player, this.spot);
				break
			case 'zaap': 
				this.gameSpot = new Zaap(this, this.player, this.spot);
				break
			case 'travel': 
				this.gameSpot = new Travel(this, this.player, this.spot);
				break
			case 'social': 
				this.gameSpot = new Social(this, this.player, this.spot);
				break
		}
	}

}