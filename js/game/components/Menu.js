import { Element } from '../../utils/Element.js';
import { EquipmentWindow } from '../windows/EquipmentWindow.js';
import { InventoryWindow } from '../windows/InventoryWindow.js';
import { SpellsWindow } from '../windows/SpellsWindow.js';
import { JobsWindow } from '../windows/JobsWindow.js';
import { BankWindow } from '../windows/BankWindow.js';
import { AchievementsWindow } from '../windows/AchievementsWindow.js';
import { AlmanaxWindow } from '../windows/AlmanaxWindow.js';
//import { EncyclopediaWindow } from '../windows/EncyclopediaWindow.js';
import { SettingsWindow } from '../windows/SettingsWindow.js';

export class Menu {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.equipmentWindow = new EquipmentWindow(this);
		this.inventoryWindow = new InventoryWindow(this);
		this.spellsWindow = new SpellsWindow(this);
		this.jobsWindow = new JobsWindow(this);
		this.bankWindow = new BankWindow(this);
		this.achievementsWindow = new AchievementsWindow(this);
		this.almanaxWindow = new AlmanaxWindow(this);
		//this.encyclopediaWindow = new EncyclopediaWindow(this);
		this.settingsWindow = new SettingsWindow(this);

		this.render();
	}

	render = () => {
		const buttonName = ['gear', 'inventory', 'spells', 'jobs', 'bank', 'achievements', 'almanax', 'encyclopedia', 'settings']

		this.container = new Element(this.main.centerContainer, { className: 'menu-container' }).element;

		buttonName.forEach((buttonName, i) => {
	        this[`${buttonName}`] = new Element(this.container, { className: 'menu-button', image: `./assets/images/icons/menu/${buttonName}.png`}).element;
	        this[`${buttonName}`].addEventListener('click', () => this.handleAction(buttonName));
	    });
	}

	handleAction = (buttonName) => {
        switch (buttonName) {
        	 case 'gear':
            	(!this.equipmentWindow.isOpen) ? this.equipmentWindow.open() : this.equipmentWindow.close();
                break;
        	case 'inventory':
        		(!this.inventoryWindow.isOpen) ? this.inventoryWindow.open() : this.inventoryWindow.close();
            	break; 
           	case 'spells':
            	(!this.spellsWindow.isOpen) ? this.spellsWindow.open() : this.spellsWindow.close();
                break;   
            case 'jobs':
            	(!this.jobsWindow.isOpen) ? this.jobsWindow.open() : this.jobsWindow.close();
                break;
            case 'achievements':
            	(!this.achievementsWindow.isOpen) ? this.achievementsWindow.open() : this.achievementsWindow.close();
            	break;
            case 'bank':
            	(!this.bankWindow.isOpen) ? this.bankWindow.open() : this.bankWindow.close();
                break;
            case 'almanax':
            	(!this.almanaxWindow.isOpen) ? this.almanaxWindow.open() : this.almanaxWindow.close();
                break;
            case 'encyclopedia':
            	//(!this.encyclopediaWindow.isOpen) ? this.encyclopediaWindow.open() : this.encyclopediaWindow.close();
                break;
            case 'settings':
            	(!this.settingsWindow.isOpen) ? this.settingsWindow.open() : this.settingsWindow.close();
                break;

        }
    }
}
