import { Element } from '../utils/Element.js';

import { Status } from './components/Status.js';
import { Menu } from './components/Menu.js';
import { Game } from './components/Game.js';
import { Scenes } from './components/Scenes.js';
import { Toolbar } from './components/Toolbar.js';

import { Player } from './core/Player.js';
import { Inventory } from './core/Inventory.js';
import { Equipment } from './core/Equipment.js';
import { Bank } from './core/Bank.js';

import { Notification } from '../utils/Notification.js';
//borrar
import { resourceData } from './data/item/resourceData.js'
import { equipmentData } from './data/item/equipmentData.js'
import { generateItemStats } from './manager/itemManager.js'
import { saveData } from '../file/save.js'

export class Main {
	constructor(charData, bankData) {
		//scenes
		this.mainContainer = new Element(document.body, { className: 'main-container' }).element;
		this.leftContainer = new Element(this.mainContainer, { className: 'left-container' }).element;
		this.centerContainer = new Element(this.mainContainer, { className: 'center-container' }).element;
		this.rightContainer = new Element(this.mainContainer, { className: 'right-container' }).element;

		this.notification = new Notification();
		
		//data
		this.player = new Player(this, charData);
		this.inventory = new Inventory(this, this.player); // this.player -> charData
		this.equipment = new Equipment(this, this.player); // this.player -> charData
		this.bank = new Bank(this, bankData);
		
		//components
		this.status = new Status(this, this.player);
		this.menu = new Menu(this, this.player);
		this.game = new Game(this, this.player);
		this.toolbar = new Toolbar(this, this.player);
		this.scenes = new Scenes(this, this.player);
		
		
		this.test();
	}

	test = () => {
		document.addEventListener("keydown", (e) => {
		    if (e.key === "s") {

		    	let character = this.player.getData();
		    	let bank = this.bank.getData();

		        saveData(
		        	character,
					bank,
		        );
		    }

		    if (e.key === "r") {
		    	Object.keys(resourceData).forEach((res) => {
					this.inventory.obtainItem(resourceData[res], 500)
				})
				this.player.gainExp(5000);
		    }

		});
	}



}






