import { Element } from '../utils/Element.js';

import { Status } from './components/Status.js';
import { Quest } from './components/Quest.js';
import { Menu } from './components/Menu.js';
import { Battle } from './components/Battle.js';
import { Zaap } from './components/Zaap.js';

import { Player } from './core/Player.js';

export class Main {
	constructor(charData) {
		//scenes
		this.mainContainer = new Element(document.body, { className: 'main-container' }).element;
		this.leftContainer = new Element(this.mainContainer, { className: 'left-container' }).element;
		this.centerContainer = new Element(this.mainContainer, { className: 'center-container' }).element;
		this.rightContainer = new Element(this.mainContainer, { className: 'right-container' }).element;

		//data
		this.player = new Player(this, charData);

		//components
		this.status = new Status(this, this.player);
		this.menu = new Menu(this, this.player);
		this.quest = new Quest(this, this.player);
		this.battle = new Battle(this, this.player);
		this.zaap = new Zaap(this, this.player);
	}
}