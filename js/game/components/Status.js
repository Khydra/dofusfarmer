import { Element } from '../../utils/Element.js';

export class Status {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.render();
	}

	render = () => {
		this.container = new Element(this.main.leftContainer, { className: 'status-container' }).element;
		this.title = new Element(this.container, { className: 'status-title', text: 'Características' }).element; 

		this.renderPlayer();
		this.renderStats();
	}

	renderPlayer = () => {
		this.playerContainer = new Element(this.container, { className: 'status-player-container' }).element; 
		this.portrait = new Element(this.playerContainer, { className: 'status-portrait', image: this.player.portrait }).element; 
		this.name = new Element(this.playerContainer, { className: 'status-name', text: this.player.name }).element; 
		this.class = new Element(this.playerContainer, { className: 'status-class', text: `${this.player.class.name.toUpperCase()}, ${this.player.level}` }).element; 
	}

	renderStats = () => {
		this.renderMainStats();
		this.renderBaseStats();
		this.renderGeneralStats();
	}

	renderMainStats = () => {
		const label = ['Vit', 'Dps', 'Dpc', 'Pa', 'Pm'];

		this.mainContainer = new Element(this.container, { className: 'status-main-container' }).element; 

		label.forEach((value) => {
			this[`mainRow${value}`] = new Element(this.mainContainer, { className: 'status-main-row' }).element; 
			this[`mainIcon${value}`] = new Element(this[`mainRow${value}`], { className: 'status-main-icon', image: `./assets/images/icons/${value}.png` }).element; 
			this[`mainLabel${value}`] = new Element(this[`mainRow${value}`], { className: 'status-main-label', text: value.toUpperCase() }).element; 
			this[`mainValue${value}`] = new Element(this[`mainRow${value}`], { className: 'status-main-value' }).element; 
		})

		this.updateMainStats();
	}

	renderBaseStats = () => {
		this.baseContainer = new Element(this.container, { className: 'status-base-container' }).element; 
		this.baseTitle = new Element(this.baseContainer, { className: 'status-stat-title', text: 'Base' }).element; 
	}

	renderGeneralStats = () => {
		this.generalContainer = new Element(this.container, { className: 'status-general-container' }).element; 
		this.generalTitle = new Element(this.generalContainer, { className: 'status-stat-title', text: 'General' }).element; 
	}

	update = () => {
		
	}

	updateMainStats = () => {
		this[`mainValueVit`].innerText = `${this.player.vit[0]}/${this.player.vit[0]}`;
		this[`mainValueDps`].innerText = this.player.stats.dps;
		this[`mainValueDpc`].innerText = this.player.stats.dpc;
		this[`mainValuePa`].innerText = `${this.player.pa[0]}/${this.player.pa[0]}`;
		this[`mainValuePm`].innerText = `${this.player.pm[0]}/${this.player.pm[0]}`;
	}
}