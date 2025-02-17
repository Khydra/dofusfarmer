import { Element } from '../../utils/Element.js';
import { Enemy } from '../core/Enemy.js';

export class Skirmish {
	constructor(game, player, spot) {
		this.game = game;
		this.player = player;
		this.spot = spot;
		this.enemy = this.setEnemy();
		
		this.render();
	}	

	render = () => {
		this.enemyImage = new Element(this.game.container, { className: 'skirmish-enemy-image', image: this.enemy.image }).element;
		this.enemyName = new Element(this.game.container, { className: 'skirmish-enemy-name', text: `${this.enemy.name}, lv ${this.enemy.level}` }).element;
		this.enemyHealthBarContainer = new Element(this.game.container, { className: 'skirmish-enemy-health-bar-container' }).element;
		this.enemyHealthBar = new Element(this.enemyHealthBarContainer, { className: 'skirmish-enemy-health-bar' }).element;
		this.enemyHealth = new Element(this.enemyHealthBarContainer, { className: 'skirmish-enemy-health' }).element;

		this.update();
	}

	update = () => {
		this.enemyHealth.innerText = `${this.enemy.vit[0]}/${this.enemy.vit[1]}`;
	}

	setEnemy = () => {
		let enemy = new Enemy(this.spot.enemies[0]);
		console.log(enemy)
		return enemy;
	}

	destroy = () => {
        if (this.enemyImage) this.enemyImage.remove();
        if (this.enemyName) this.enemyName.remove();
        if (this.enemyHealthBarContainer) this.enemyHealthBarContainer.remove();
        if (this.enemyHealthBar) this.enemyHealthBar.remove();
        if (this.enemyHealth) this.enemyHealth.remove();
    }
}

