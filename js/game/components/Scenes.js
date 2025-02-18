import { Element } from '../../utils/Element.js';
import { ubicationData } from '../data/world/ubicationData.js';

export class Scenes {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.ubication;
		this.spotSelected;

		this.render();
	}	

	render = () => {
		this.container = new Element(this.main.rightContainer, { className: 'scenes-container' }).element;
		this.title = new Element(this.container, { className: 'status-title stroke' }).element; 

		this.optionContainer = new Element(this.container, { className: 'scenes-ubication-spot-container' }).element;

		this.update();
	}

	update = () => {
		this.ubication = ubicationData[this.player.ubication[0]];
		this.spotSelected = ubicationData[this.player.ubication[1]];

		this.title.innerText = this.ubication.name;
		this.drawSpots();
	}

	drawSpots = () => {
		this.clearSpots(); // Limpiar spots antes de redibujar

		this.spots = [];
		this.spotsTittle = [];

		Object.values(this.ubication.spot).forEach((value, i) => {
			if (value.key == this.player.ubication[1]) {
				this.spots[i] = new Element(this.optionContainer, { className: 'scenes-container-spot-selected', image: value.image }).element;
				this.spotsTittle[i] = new Element(this.spots[i], { className: 'scenes-container-spot-tittle', text: value.name }).element;
			} else {
				this.spots[i] = new Element(this.optionContainer, { className: 'scenes-container-spot', image: value.image }).element;
				this.spotsTittle[i] = new Element(this.spots[i], { className: 'scenes-container-spot-tittle', text: value.name }).element;
				this.spots[i].addEventListener('click', () => { this.handleAction(value.key) })
			}
		})
	}

	clearSpots = () => {
	    if (this.spots) {
	        this.spots.forEach((spot, i) => {
	            spot.removeEventListener('click', () => { this.handleAction(this.ubication.spot[i]) });
	            spot.remove();
	        });
	    }
	    
	    this.spots = [];
	    this.spotsTittle = [];
	}

	handleAction = (action) => {
		this.player.ubication[1] = action;

	 	this.update();
	 	this.main.game.update()
	}
}
