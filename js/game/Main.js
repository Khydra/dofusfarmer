import { Element } from '../utils/Element.js';

import { Status } from './components/Status.js';
import { Menu } from './components/Menu.js';
import { Battle } from './components/Battle.js';
import { Zaap } from './components/Zaap.js';
import { Game } from './components/Game.js';
import { Scenes } from './components/Scenes.js';

import { Player } from './core/Player.js';
import { Enemy } from './core/Enemy.js';
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

		//data
		this.player = new Player(this, charData);
		this.inventory = new Inventory(this, charData);
		this.equipment = new Equipment(this, charData);
		//this.enemy = new Enemy(this, enemyData);
		this.bank = new Bank(this, bankData);
		
		//components
		
		this.status = new Status(this, this.player);
		this.menu = new Menu(this, this.player);
		this.game = new Game(this);
		//this.battle = new Battle(this, this.player, this.enemy);
		this.scenes = new Scenes(this);
		
		this.notification = new Notification();
		this.test();
	}

	test = () => {

		this.inventory.obtainItem(resourceData['ortiga'], 230)
		this.inventory.obtainItem(resourceData['ferrita'], 12)
		this.inventory.obtainItem(resourceData['piel_de_goota'], 85)
		this.inventory.obtainItem(resourceData['madera_de_fresno'], 6)
		this.inventory.obtainItem(resourceData['lana_celeste'], 4)
		this.inventory.obtainItem(resourceData['petalo_diafano'], 412)
		this.inventory.obtainItem(resourceData['tabla_de_aglomerado'], 1500)
		this.inventory.obtainItem(resourceData['cenizas_eternas'], 117)

		this.inventory.obtainItem(generateItemStats(equipmentData['la_capa_slok']));
		this.inventory.obtainItem(generateItemStats(equipmentData['el_flud']));
		this.inventory.obtainItem(generateItemStats(equipmentData['el_flud']));
		this.inventory.obtainItem(generateItemStats(equipmentData['las_okupas']));
		this.inventory.obtainItem(generateItemStats(equipmentData['la_spamita']));
		this.inventory.obtainItem(generateItemStats(equipmentData['el_masano']));
		this.inventory.obtainItem(generateItemStats(equipmentData['el_smesmo']));
		this.inventory.obtainItem(generateItemStats(equipmentData['el_halt_efkuat']));
		this.inventory.obtainItem(generateItemStats(equipmentData['bunihima']));
		this.inventory.obtainItem(generateItemStats(equipmentData['el_masano']));
		
		this.player.gainExp(2000);

		document.addEventListener("keydown", (e) => {
		    if (e.key === "s") {

		    	let character = this.player.getData();
		    	//let enemy = this.enemy.getData();
		    	let bank = this.bank.getData();

		        saveData(
		        	character,
		        	//enemy,
					bank,
		        );
		    }
		});
	}



}






