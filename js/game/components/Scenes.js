import { Element } from '../../utils/Element.js';

export class Scenes {
	constructor(main) {
		this.main = main;

		this.ubication;
		this.render();
	}	

	render = () => {
		this.container = new Element(this.main.rightContainer, { className: 'scenes-container' }).element;
		this.title = new Element(this.container, { className: 'status-title stroke' }).element; 

		this.optionContainer = new Element(this.container, { className: 'scenes-ubication-option-container' }).element;

		this.update();
	}

	update = () => {
		this.ubication = this.main.player.ubication;
		this.title.innerText = this.ubication.name;

		this.drawOptions();
	}

	drawOptions = () => {
		this.options = [];
		this.optionsTittle = [];

		Object.values(this.ubication.option).forEach((key, i) => {
			this.options[i] = new Element(this.optionContainer, { className: 'scenes-container-option', image: key.image }).element;
			this.optionsTittle[i] = new Element(this.options[i], { className: 'scenes-container-option-tittle', text: key.name }).element;
			this.options[i].addEventListener('click', () => { this.handleAction(key) })
		})

	}


	handleAction = (action) => {
	 	switch (action.type) {
	 		case 'zaap':
	 			break;
	 		case 'npc':
	 			break;
	 		case 'battle':
	 			break;
	 		case 'gathering':
	 			break;
	 		case 'travel':
	 			break;
	 	}
	}
}
