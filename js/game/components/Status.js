import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';

export class Status {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.render();
	}

	render = () => {
		this.container = new Element(this.main.leftContainer, { className: 'status-container' }).element;
		this.title = new Element(this.container, { className: 'status-title stroke', text: 'Características' }).element; 

		this.renderPlayer();
		this.renderStats();
	}

	renderPlayer = () => {
		this.playerContainer = new Element(this.container, { className: 'status-player-container' }).element; 
		this.portrait = new Element(this.playerContainer, { className: 'status-portrait', image: this.player.portrait }).element; 
		this.name = new Element(this.playerContainer, { className: 'status-name', text: this.player.name }).element; 
		this.level = new Element(this.playerContainer, { className: 'status-level' }).element; 

		this.expContainer = new Element(this.playerContainer, { className: 'status-exp-container' }).element; 
		this.exp = new Element(this.expContainer, { className: 'status-exp' }).element;

		this.updatePlayer();
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
		const label = ['str', 'int', 'cha', 'agi'];

		this.baseContainer = new Element(this.container, { className: 'status-base-container' }).element; 
		this.baseTitle = new Element(this.baseContainer, { className: 'status-stat-title', text: 'Base' }).element; 

		label.forEach((value) => {
			this[`baseRow${value}`] = new Element(this.baseContainer, { className: 'status-base-row' }).element; 
			this[`baseIcon${value}`] = new Element(this[`baseRow${value}`], { className: 'status-base-icon', image: `./assets/images/icons/${value}.png` }).element; 
			this[`baseLabel${value}`] = new Element(this[`baseRow${value}`], { className: 'status-base-label', text: text.stat[value] }).element; 
			this[`baseValue${value}`] = new Element(this[`baseRow${value}`], { className: 'status-base-value' }).element; 
			this[`baseButton${value}`] = new Element(this[`baseRow${value}`], { className: 'status-base-button stroke', text: '+' }).element; 
			this[`baseButton${value}`].addEventListener('click', () => {
				this.player.distributePoint(value);
				this.update();
			})
		})

		this[`baseRowPoints`] = new Element(this.baseContainer, { className: 'status-base-row-points' }).element; 
		this[`baseLabelPoints`] = new Element(this[`baseRowPoints`], { className: 'status-base-label-points', text: 'Puntos disponibles' }).element; 
		this[`baseValuePoints`] = new Element(this[`baseRowPoints`], { className: 'status-base-value-points' }).element; 


		this.updateBaseStats();
	}

	renderGeneralStats = () => {
		const label = ['pot', 'dmg', 'crt', 'strDmg', 'intDmg', 'chaDmg', 'agiDmg', 'crtDmg', 'wis', 'cur', 'pp', 'al', 'paReg', 'pmReg'];

		this.generalContainer = new Element(this.container, { className: 'status-general-container' }).element; 
		this.generalTitle = new Element(this.generalContainer, { className: 'status-stat-title', text: 'General' }).element; 

		label.forEach((value) => {
			this[`generalRow${value}`] = new Element(this.generalContainer, { className: 'status-general-row' }).element; 
			this[`generalIcon${value}`] = new Element(this[`generalRow${value}`], { className: 'status-general-icon', image: `./assets/images/icons/${value}.png` }).element; 
			this[`generalLabel${value}`] = new Element(this[`generalRow${value}`], { className: 'status-general-label', text: text.stat[value] }).element; 
			this[`generalValue${value}`] = new Element(this[`generalRow${value}`], { className: 'status-general-value' }).element; 
		})

		this.updateGeneralStats();
	}

	update = () => {
		this.updatePlayer();
		this.updateMainStats();
		this.updateBaseStats();
		this.updateGeneralStats();
	}

	updatePlayer = () => {
		this.level.innerText = `${this.player.class.name.toUpperCase()}, ${this.player.level}`;
		this.exp.style.width = `${(this.player.exp[0]/this.player.exp[1])*100}%`;
	}

	updateMainStats = () => {
		this[`mainValueVit`].innerText = `${this.player.vit[0]}/${this.player.vit[0]}`;
		this[`mainValueDps`].innerText = this.player.stats["dps"].base + this.player.stats["dps"].bonus;
		this[`mainValueDpc`].innerText = this.player.stats["dpc"].base + this.player.stats["dpc"].bonus;
		this[`mainValuePa`].innerText = `${this.player.pa[0]}/${this.player.pa[0]}`;
		this[`mainValuePm`].innerText = `${this.player.pm[0]}/${this.player.pm[0]}`;
	}

	updateBaseStats = () => {
		const label = ['str', 'int', 'cha', 'agi'];

		label.forEach((value) => {
			this[`baseValue${value}`].innerText = this.player.stats[value].base + this.player.stats[value].scroll + this.player.stats[value].bonus;

			(
				this.player.stats[value].base < 100 && this.player.availablePoints > 0 ||
				this.player.stats[value].base < 200 && this.player.availablePoints > 1 ||
				this.player.availablePoints > 2 
			) 
			? this[`baseButton${value}`].className = "status-base-button" : this[`baseButton${value}`].className = "status-base-button-disable";
		})

		this[`baseValuePoints`].innerText = this.player.availablePoints;
	}

	updateGeneralStats = () => {
		const label = ['pot', 'dmg', 'crt', 'strDmg', 'intDmg', 'chaDmg', 'agiDmg', 'crtDmg', 'wis', 'pp', 'paReg', 'pmReg',  'cur', 'al'];

		label.forEach((value) => {
			this[`generalValue${value}`].innerText = this.player.stats[value].base + this.player.stats[value].bonus;
		})
	}
}