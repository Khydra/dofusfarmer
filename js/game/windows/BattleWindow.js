import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';
import { Enemy } from '../core/Enemy.js';

export class BattleWindow extends Window { 
	constructor(component, zone) {
		const title = `Escaramuza: ${zone.name}`;
	    const width = 800;
	    const height = 500;

	    super(title, width, height); 
	    this.component = component;

	    this.zone = zone;
	    this.player = this.component.player;
	    this.enemy = this.createEnemy();

	    this.tooltip;
	  	this.render();
	}

	render = () => {
		// BATTLE
		this.enemyInfoContainer = new Element(this.container, { className: 'battle-enemy-info-container' }).element;
		this.enemyInfoName = new Element(this.enemyInfoContainer, { className: 'battle-enemy-name stroke' }).element;
		this.enemyInfoHealthBarContainer = new Element(this.enemyInfoContainer, { className: 'battle-enemy-health-bar-container' }).element;
		this.enemyInfoHealthBar = new Element(this.enemyInfoContainer, { className: 'battle-enemy-health-bar' }).element;
		this.enemyInfoHealth = new Element(this.enemyInfoContainer, { className: 'battle-enemy-health' }).element;
		this.enemyInfoArmorBarContainer = new Element(this.enemyInfoContainer, { className: 'battle-enemy-armor-bar-container' }).element;
		this.enemyInfoArmorBar = new Element(this.enemyInfoContainer, { className: 'battle-enemy-armor-bar' }).element;
		this.enemyInfoArmor = new Element(this.enemyInfoContainer, { className: 'battle-enemy-armor' }).element;
		this.enemyInfoResisContainer = new Element(this.enemyInfoContainer, { className: 'battle-enemy-resis-container' }).element;
		this.enemyInfoActionContainer = new Element(this.enemyInfoContainer, { className: 'battle-enemy-action-container' }).element;

		this.battleContainer = new Element(this.container, { className: 'battle-container' }).element;
		this.battleBackground = new Element(this.battleContainer, { className: 'battle-background', image: this.zone.background }).element;
		this.playerImage = new Element(this.battleContainer, { className: 'battle-player-image' }).element;
		this.enemyImage = new Element(this.battleContainer, { className: 'battle-enemy-image' }).element;
		this.playerFloor = new Element(this.battleContainer, { className: 'battle-player-floor battle-floor', image: this.zone.background }).element;
		this.enemyFloor = new Element(this.battleContainer, { className: 'battle-enemy-floor battle-floor', image: this.zone.background }).element;

		this.chatButton = new Element(this.battleContainer, { className: 'battle-chat-button' }).element;

		// ACTION BAR
		this.actionBarSpell = [];
		
		this.actionBar = new Element(this.container, { className: 'battle-action-bar' }).element;
		this.actionBarSpellContainer = new Element(this.actionBar, { className: 'battle-action-bar-spell-container' }).element;
		this.actionBarEndTurn = new Element(this.actionBar, { className: 'battle-action-bar-end-turn', text: 'TERMINAR TURNO' }).element;

		for (let i = 0; i < 22; i++) {
			this.actionBarSpell[i] = new Element(this.actionBarSpellContainer, { className: 'battle-action-bar-spell-slot' }).element;
		}

		this.displayPlayer();
		this.displayEnemy();
	}

	update = () => {
		this.updatePlayer();
		this.updateEnemy();
	}

	displayPlayer = () => {
		this.playerImage.style.backgroundImage = `url("${this.player.bodyBack}")`;
	}

	displayEnemy = () => {
		this.enemyImage.style.backgroundImage = `url("${this.enemy.image}")`;
		this.enemyInfoName.innerText = `${this.enemy.name} (lv. ${this.enemy.level})`;
	}

	updatePlayer = () => {

	}

	updateEnemy = () => {

	}

	open() {
	    super.open(true); 
  	}

  	close() {
	    super.close(true); 
  	}

  	createEnemy = () => {
  		let enemyData = this.zone.enemies[Math.floor(Math.random() * this.zone.enemies.length)]
  		return new Enemy(enemyData);
  	}
}