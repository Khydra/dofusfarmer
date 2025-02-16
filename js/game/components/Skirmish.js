import { Element } from '../../utils/Element.js';

export class Skirmish {
	constructor(main, player, enemy) {
		this.main = main;
		this.player = player;
		this.enemy = enemy;
		
		this.ubication = player.ubication;
		this.render();
	}	

	render = () => {
		this.container = new Element(this.main.centerContainer, { className: 'skirmish-container', image: this.ubication.background }).element;

		this.ubicationName = new Element(this.container, { className: 'skirmish-ubication-name', text: this.ubication.name.toUpperCase() }).element;

		this.enemyImage = new Element(this.container, { className: 'skirmish-enemy-image', image: this.enemy.image }).element;
		this.enemyName = new Element(this.container, { className: 'skirmish-enemy-name', text: `${this.enemy.name}, lv ${this.enemy.level}` }).element;
		this.enemyHealthBarContainer = new Element(this.container, { className: 'skirmish-enemy-health-bar-container' }).element;
		this.enemyHealthBar = new Element(this.enemyHealthBarContainer, { className: 'skirmish-enemy-health-bar' }).element;
		this.enemyHealth = new Element(this.enemyHealthBarContainer, { className: 'skirmish-enemy-health' }).element;

		this.update();
	}

	update = () => {
		this.enemyHealth.innerText = `${this.enemy.vit[0]}/${this.enemy.vit[1]}`;
	}


}