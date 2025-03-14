import { Element } from '../../utils/Element.js';
import { BattleWindow } from '../windows/BattleWindow.js';

export class Skirmish {
	constructor(game, player, spot) {
		this.game = game;
		this.player = player;
		this.spot = spot;
		this.battleWindow; 
		
		this.render();
	}	

	render = () => {
		this.zoneContainer = new Element(this.game.container, { className: 'skirmish-zone-container' }).element;
		this.zone = [];
		this.zoneName = [];
		this.zoneImage = [];

		Object.keys(this.spot.zone).forEach((key) => {
			this.zone[key] = new Element(this.zoneContainer, { className: 'skirmish-zone' }).element;
			this.zoneName[key] = new Element(this.zone[key], { className: 'skirmish-zone-name', text: this.spot.zone[key].name }).element;
			this.zoneImage[key] = new Element(this.zone[key], { className: 'skirmish-zone-image', image: this.spot.zone[key].enemies[0].image }).element;

			this.zone[key].addEventListener('click', () => { this.enterBattle(this.spot.zone[key]) })
		})
	}

	enterBattle = (zone) => {
		this.battleWindow = new BattleWindow(this, zone);
		this.battleWindow.open()
	}

	destroy = () => {
        this.zone.forEach((zoneElement, i) => {
	        this.zoneName[i].remove();
	        this.zoneImage[i].remove();
	        zoneElement.remove();
	    });

	    if (this.zoneContainer) {
	        this.zoneContainer.remove();
	    }

	    this.zone = [];
		this.zoneName = [];
		this.zoneImage = [];
	    this.zoneContainer = null;
    }
}

