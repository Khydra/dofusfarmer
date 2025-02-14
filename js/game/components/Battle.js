import { Element } from '../../utils/Element.js';

export class Battle {
	constructor(main, player, enemy) {
		this.main = main;
		this.player = player;
		this.enemy = enemy;
		
		this.ubication = player.ubication;
		this.render();
	}

	render = () => {
		console.log(this.ubication)
		this.container = new Element(this.main.centerContainer, { className: 'battle-container', image: this.ubication.background }).element;

		this.ubicationName = new Element(this.container, { className: 'battle-ubication-name', text: this.ubication.name.toUpperCase() }).element;

		this.enemyImage = new Element(this.container, { className: 'battle-enemy-image', image: this.enemy.image }).element;
		this.enemyName = new Element(this.container, { className: 'battle-enemy-name', text: `${this.enemy.name}, lv ${this.enemy.level}` }).element;
		this.enemyHealthBarContainer = new Element(this.container, { className: 'battle-enemy-health-bar-container' }).element;
		this.enemyHealthBar = new Element(this.enemyHealthBarContainer, { className: 'battle-enemy-health-bar' }).element;
	}

	update = () => {

	}
}