import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';
import { Tooltip } from '../../utils/Tooltip.js';

export class EquipmentWindow extends Window { 
	constructor(component) {
		const title = "Equipamiento";
	    const width = 450;
	    const height = 500;

	    super(title, width, height); 
	    this.component = component;
	    this.tooltips = {};
	    this.render();
	}

	render = () => {
		this.playerImage = new Element(this.container, { className: 'equipment-player-image', image: this.component.main.player.body }).element;

		const slotNames = ['sombrero', 'arma', 'anillo1', 'capa', 'mascota', 'amuleto', 'escudo', 'anillo2', 'cinturon', 'botas', 
							'dofus1', 'dofus2', 'dofus3', 'dofus4', 'dofus5', 'dofus6'];
  		
  		this.slotContainerLeft = new Element(this.container, { className: 'equipment-slot-container equipment-slot-container-right' }).element;
  		this.slotContainerRight = new Element(this.container, { className: 'equipment-slot-container equipment-slot-container-left' }).element;
  		this.slotContainerBottom = new Element(this.container, { className: 'equipment-slot-container equipment-slot-container-bottom'}).element;

  		this.slot = [];
  		slotNames.forEach((name, i) => {
  			if (i < 5) this.slot[`${name}`] = new Element(this.slotContainerLeft, { className: `equipment-slot-empty equipment-slot-${name}` }).element;
  			else if (i < 10) this.slot[`${name}`] = new Element(this.slotContainerRight, { className: `equipment-slot-empty equipment-slot-${name}` }).element;
  			else this.slot[`${name}`] = new Element(this.slotContainerBottom, { className: `equipment-slot-empty equipment-slot-${name}` }).element;

  			this.slot[name].addEventListener('dblclick', () => { this.unequipItem(name); });
  		})
  	}

	open() {
	    super.open(); 
	    this.update();
  	}

  	update = () => {
  		const equipment = this.component.main.equipment.items;
  		Object.keys(equipment).forEach((item) => {
  			if (equipment[item] == null) {
  				this.slot[item].style.backgroundImage = ``;
  				this.slot[item].className = `equipment-slot-empty equipment-slot-${item}`;

  				// Si ya hay un tooltip para ese slot, lo eliminamos
                if (this.tooltips[item]) this.tooltips[item].hideTooltip();            
  			} else {
  				this.slot[item].style.backgroundImage = `url("${equipment[item].image}")`;
  				this.slot[item].className = `equipment-slot equipment-slot-${item}`;
  				// Si no existe un tooltip para este item, lo creamos
                if (!this.tooltips[item]) {
                    this.tooltips[item] = new Tooltip(this.slot[item], equipment[item], 'equipmentWindow');
                }
  			}

  		})
  	}

  	unequipItem = (sort) => {
  		const item = this.component.main.equipment.items[sort];
  		if (item == null) return;

  		this.component.main.inventory.obtainItem(item);
  		this.component.main.equipment.unequipItem(item);

	    
	    this.component.inventoryWindow.updateItems();
	    this.update();
  	}

}
