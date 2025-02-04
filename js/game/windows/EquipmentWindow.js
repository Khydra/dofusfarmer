import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';

export class EquipmentWindow extends Window { 
	constructor(component) {
		const title = "Equipamiento";
	    const width = 450;
	    const height = 500;
	    const x = 50; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;
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
  			console.log(equipment[item])
  			if (equipment[item] == null) {
  				this.slot[item].style.backgroundImage = ``;
  				this.slot[item].className = `equipment-slot-empty equipment-slot-${item}`;
  			} else {
  				this.slot[item].style.backgroundImage = `url("${equipment[item].image}")`;
  				this.slot[item].className = `equipment-slot equipment-slot-${item}`;
  			}
  			/*
  			switch (equipment[item]?.sort) {
  				case undefined: 
  					this.slot[item].style.backgroundImage = ``;
  					this.slot[item].className = `equipment-slot-empty equipment-slot-${item}`;
  					break;
  				// case 'anillo':
  				// 	for (let i = 1; i <= 2; i++) {
  				// 		//console.log(equipment[item])
	            //     	this.slot[`anillo${i}`].style.backgroundImage = `url("${equipment[item].image}")`;
  				//  		this.slot[`anillo${i}`].className = `equipment-slot equipment-slot-anillo${i}`;
	            // 	}
  				// 	break;
  				// case 'dofus':
  				// 	for (let i = 1; i <= 6; i++) {
	            //     	this.slot[`dofus${i}`].style.backgroundImage = `url("${equipment[item].image}")`;
  				//  		this.slot[`dofus${i}`].className = `equipment-slot equipment-slot-dofus${i}`;
	            // 	}
  				// 	break;
  				default: 
  					this.slot[item].style.backgroundImage = `url("${equipment[item].image}")`;
  				 	this.slot[item].className = `equipment-slot equipment-slot-${item}`;
  					break;
  			}
  			*/
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
