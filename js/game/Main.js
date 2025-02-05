import { Element } from '../utils/Element.js';

import { Status } from './components/Status.js';
import { Quest } from './components/Quest.js';
import { Menu } from './components/Menu.js';
import { Battle } from './components/Battle.js';
import { Zaap } from './components/Zaap.js';

import { Player } from './core/Player.js';
import { Inventory } from './core/Inventory.js';
import { Equipment } from './core/Equipment.js';

//borrar
import { resourceData } from './data/item/resourceData.js'
import { equipmentData } from './data/item/equipmentData.js'
import { generateItemStats } from './manager/itemManager.js'

export class Main {
	constructor(charData) {
		//scenes
		this.mainContainer = new Element(document.body, { className: 'main-container' }).element;
		this.leftContainer = new Element(this.mainContainer, { className: 'left-container' }).element;
		this.centerContainer = new Element(this.mainContainer, { className: 'center-container' }).element;
		this.rightContainer = new Element(this.mainContainer, { className: 'right-container' }).element;

		//data
		this.player = new Player(this, charData);
		this.inventory = new Inventory(this, charData);
		this.equipment = new Equipment(this, charData);

		//components
		this.status = new Status(this, this.player);
		this.menu = new Menu(this, this.player);
		this.quest = new Quest(this, this.player);
		this.battle = new Battle(this, this.player);
		this.zaap = new Zaap(this, this.player);

		this.test();
	}

	test = () => {

		for (let i = 0; i < 230; i++) this.inventory.obtainItem(resourceData['ortiga'])
		for (let i = 0; i < 13; i++) this.inventory.obtainItem(resourceData['ferrita'])
		this.inventory.obtainItem(resourceData['piel_goota'])
		this.inventory.obtainItem(resourceData['madera_de_fresno'])
		this.inventory.obtainItem(resourceData['lana_celeste'])
		for (let i = 0; i < 412; i++) this.inventory.obtainItem(resourceData['petalo_diafano'])
		for (let i = 0; i < 1540; i++) this.inventory.obtainItem(resourceData['tabla_de_fresno'])
		this.inventory.obtainItem(resourceData['trigo'])

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
		this.inventory.obtainItem(generateItemStats(equipmentData['animamuleto']));
		this.inventory.obtainItem(generateItemStats(equipmentData['sombrero_de_aventurero']));
		this.inventory.obtainItem(generateItemStats(equipmentData['anillo_de_aventurero']));
		this.inventory.obtainItem(generateItemStats(equipmentData['botas_de_aventurero']));
		this.inventory.obtainItem(generateItemStats(equipmentData['cinturon_de_aventurero']));
		this.inventory.obtainItem(generateItemStats(equipmentData['anillo_de_aventurero']));
		this.inventory.obtainItem(generateItemStats(equipmentData['anillo_de_aventurero']));

		this.player.gainExp(2000)
	}

}






