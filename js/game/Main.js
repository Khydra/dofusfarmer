import { Element } from '../utils/Element.js';

import { Status } from './components/Status.js';
import { Menu } from './components/Menu.js';
import { Game } from './components/Game.js';
import { Scenes } from './components/Scenes.js';
import { Toolbar } from './components/Toolbar.js';

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
		this.inventory.obtainItem(resourceData['ortiga'], 230)
		this.inventory.obtainItem(resourceData['ferrita'], 12)
		this.inventory.obtainItem(resourceData['piel_de_goota'], 85)
		this.inventory.obtainItem(resourceData['madera_de_fresno'], 6)
		this.inventory.obtainItem(resourceData['lana_celeste'], 4)
		this.inventory.obtainItem(resourceData['petalo_diafano'], 412)
		this.inventory.obtainItem(resourceData['tabla_de_aglomerado'], 1500)
		this.inventory.obtainItem(resourceData['cenizas_eternas'], 117)
		
		this.inventory.obtainItem(resourceData['runa_su_vi'], 1131)
		this.inventory.obtainItem(resourceData['runa_bu_fu'], 3117)
		this.inventory.obtainItem(resourceData['runa_da_agua'], 1411)
		this.inventory.obtainItem(resourceData['runa_bu_da_agua'], 6117)
		this.inventory.obtainItem(resourceData['runa_da_aire'], 2231)
		this.inventory.obtainItem(resourceData['runa_bu_da_aire'], 1317)
		this.inventory.obtainItem(resourceData['runa_da_cri'], 8971)
		this.inventory.obtainItem(resourceData['runa_bu_da_cri'], 8717)
		this.inventory.obtainItem(resourceData['runa_por_he'], 1361)
		this.inventory.obtainItem(resourceData['runa_por_ar'], 1817)
		this.inventory.obtainItem(resourceData['runa_por_res'], 1618)
		this.inventory.obtainItem(resourceData['runa_por_reen'], 5144)
		this.inventory.obtainItem(resourceData['runa_agi'], 1131)
		this.inventory.obtainItem(resourceData['runa_bu_agi'], 3117)
		this.inventory.obtainItem(resourceData['runa_su_agi'], 1411)
		this.inventory.obtainItem(resourceData['runa_pa'], 6117)
		this.inventory.obtainItem(resourceData['runa_pm'], 1131)
		this.inventory.obtainItem(resourceData['runa_lu'], 3117)
		this.inventory.obtainItem(resourceData['runa_be'], 1411)
		this.inventory.obtainItem(resourceData['runa_prospe'], 6117)
		this.inventory.obtainItem(resourceData['runa_bu_prospe'], 1131)
		this.inventory.obtainItem(resourceData['runa_pot'], 3117)
		this.inventory.obtainItem(resourceData['runa_bu_pot'], 1411)
		this.inventory.obtainItem(resourceData['runa_su_pot'], 6117)
		this.inventory.obtainItem(resourceData['runa_cri'], 2231)
		this.inventory.obtainItem(resourceData['runa_da'], 1317)
		this.inventory.obtainItem(resourceData['runa_cu'], 8971)
		this.inventory.obtainItem(resourceData['runa_bu_cu'], 8717)
		this.inventory.obtainItem(resourceData['runa_da_tierra'], 1361)
		this.inventory.obtainItem(resourceData['runa_bu_da_tierra'], 1817)
		this.inventory.obtainItem(resourceData['runa_da_fuego'], 1618)
		this.inventory.obtainItem(resourceData['runa_bu_da_fuego'], 5144)
		this.inventory.obtainItem(resourceData['runa_su_fu'], 1317)
		this.inventory.obtainItem(resourceData['runa_inte'], 8971)
		this.inventory.obtainItem(resourceData['runa_bu_inte'], 8717)
		this.inventory.obtainItem(resourceData['runa_su_inte'], 1361)
		this.inventory.obtainItem(resourceData['runa_sue'], 1817)
		this.inventory.obtainItem(resourceData['runa_bu_sue'], 1618)
		this.inventory.obtainItem(resourceData['runa_su_sue'], 5144)
		this.inventory.obtainItem(resourceData['runa_vi'], 8717)
		this.inventory.obtainItem(resourceData['runa_bu_vi'], 1361)
		this.inventory.obtainItem(resourceData['runa_fu'], 1618)

		this.inventory.obtainItem(resourceData['runa_sa'], 88)
		this.inventory.obtainItem(resourceData['runa_bu_sa'], 5)
		this.inventory.obtainItem(resourceData['runa_su_sa'], 10)

		this.inventory.obtainItem(generateItemStats(equipmentData['sombrero_de_jalato']));
		this.inventory.obtainItem(generateItemStats(equipmentData['capa_bilidad']));
		this.inventory.obtainItem(generateItemStats(equipmentData['el_flud']));
		this.inventory.obtainItem(generateItemStats(equipmentData['capa_oscura']));
		this.inventory.obtainItem(generateItemStats(equipmentData['suerte_de_zurcarak']));
		this.inventory.obtainItem(generateItemStats(equipmentData['botas_del_hombre_oso']));
		this.inventory.obtainItem(generateItemStats(equipmentData['borrar']));
		this.inventory.obtainItem(generateItemStats(equipmentData['cintobermuda_de_campesino']));
		this.inventory.obtainItem(generateItemStats(equipmentData['capa_invisible']));
		this.inventory.obtainItem(generateItemStats(equipmentData['escudo_de_jalato']));
		
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






