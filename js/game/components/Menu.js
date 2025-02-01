import { Element } from '../../utils/Element.js';
import { Gear } from '../windows/Gear.js';
import { Inventory } from '../windows/Inventory.js';

export class Menu {
	constructor(main, player) {
		this.main = main;
		this.player = player;

		this.gearWindow = new Gear(this);
		this.inventoryWindow = new Inventory(this);

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
            	(!this.gearWindow.isOpen) ? this.gearWindow.open() : this.gearWindow.close();
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