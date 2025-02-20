import { Element } from '../../utils/Element.js';

export class Social {
	constructor(game, player, spot) {
		this.game = game;
		this.player = player;
		this.spot = spot;

		this.render();
	}

	render = () => {
		this.npcContainer = new Element(this.game.container, { className: 'social-npc-container' }).element;
		this.npc = [];
		this.npcImage = [];
		this.npcName = [];

		this.spot.npc.forEach((npc, i) => {
			this.npc[i] = new Element(this.npcContainer, { className: 'social-npc'}).element;
			this.npcImage[i] = new Element(this.npc[i], { className: 'social-npc-image', image: npc.image }).element;
			this.npcName[i] = new Element(this.npc[i], { className: 'social-npc-name', text: npc.name }).element;
		})
	}

	destroy = () => {
	    this.npc.forEach((npcElement, i) => {
	        this.npcImage[i].remove();
	        this.npcName[i].remove();
	        npcElement.remove();
	    });

	    if (this.npcContainer) {
	        this.npcContainer.remove();
	    }

	    this.npc = [];
	    this.npcImage = [];
	    this.npcName = [];
	    this.npcContainer = null;
	};

}

