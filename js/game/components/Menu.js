import { Element } from '../../utils/Element.js';
import { EquipmentWindow } from '../windows/EquipmentWindow.js';
import { InventoryWindow } from '../windows/InventoryWindow.js';

export class Menu {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.equipmentWindow = new EquipmentWindow(this);
		this.inventoryWindow = new InventoryWindow(this);

		this.render();
	}

	render = () => {
		const buttonName = ['gear', 'inventory', 'jobs', 'map', 'quests', 'achievements', 'dungeons', 'bestiary', 'shop']

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
            case 'jobs':
            	
                break;
            case 'map':
            	
                break;    
            case 'quests':
            	
                break;
            case 'achievements':
            	
            	break;
            case 'dungeons':
            	
            	break;
            case 'bestiary':
            	
                break;
            case 'shop':
            	
                break;
        }
    }
}