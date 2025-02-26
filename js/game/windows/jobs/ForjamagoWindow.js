import { Window } from '../../../utils/Window.js';
import { Element } from '../../../utils/Element.js';
import { Input } from '../../../utils/Input.js';
import { Selector } from '../../../utils/Selector.js';
import { Tooltip, removeTooltips } from '../../../utils/Tooltip.js';
import { resourceData } from '../../data/item/resourceData.js';
import { expJobData } from '../../data/class/expData.js';

export class ForjamagoWindow extends Window { 
	constructor(component) {
		const title = "Forjamago";
	    const width = 900;
	    const height = 638;
	    const x = 330; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;
	    this.tabSelected = 1;

	    this.inventoryData = {
	    	tabSelected: 0,
	    	slotsMin: 24,
	    	slotsNeed: 24,
	    	items: []
	    }

	    this.magData = {
	    	itemSelected: null,
	    	runeSelected: null
	    }

	    this.crusherData = {

	    }

	    this.tooltip;
	    this.render();
	}

	render = () => {
		this.scenes = [];

		this.renderCrusher();
		this.renderMag();
		this.renderTabs();
		this.renderInventory();
  	}

  	renderTabs = () => {
  		const tabNames = ['ROMPER OBJETOS', 'MAGUEAR OBJETOS']

  		this.tab = [];
  		this.tabContainer = new Element(this.container, { className: 'forjamago-tab-container stroke' }).element; 

  		tabNames.forEach((name, i) => {
  			this.tab[i] = new Element(this.tabContainer, { className: 'forjamago-tab', text: name}).element; 
  			this.tab[i].addEventListener('click', () => this.changeTab(i));	
  		})

  		this.updateTabs();
  	}

  	renderInventory = () => {
  		this.inventoryContainer = new Element(this.container, { className: 'forjamago-inventory-container' }).element; 

  		const inventoryTabNames = ['OBJETOS', 'RUNAS']

  		this.inventoryTab = [];
  		this.inventoryTabContainer = new Element(this.inventoryContainer, { className: 'forjamago-inventory-tab-container stroke' }).element; 

  		inventoryTabNames.forEach((name, i) => {
  			this.inventoryTab[i] = new Element(this.inventoryTabContainer, { className: 'forjamago-inventory-tab', text: name}).element; 
  			this.inventoryTab[i].addEventListener('click', () => this.changeTab(i, true));	
  		})

  		this.inventorySlotContainer = new Element(this.inventoryContainer, { className: 'forjamago-inventory-slot-container' }).element; 

  		this.inventorySlot = [];

  		this.updateTabs(true);
  	}

  	renderCrusher = () => {
  		this.scenes[0] = new Element(this.container, { className: 'forjamago-crusher-scene' }).element; 
  	}

  	renderMag = () => {
  		this.scenes[1] = new Element(this.container, { className: 'forjamago-mag-scene' }).element; 

  		this.historyContainer = new Element(this.scenes[1], { className: 'mag-history-container' }).element; 
  		this.workContainer = new Element(this.scenes[1], { className: 'mag-work-container' }).element;
  		this.itemContainer = new Element(this.workContainer, { className: 'mag-item-container' }).element;
  		this.runeContainer = new Element(this.workContainer, { className: 'mag-rune-container' }).element;
  		// HISTROTY
  		this.historyText = new Element(this.historyContainer, { className: 'mag-history-text' }).element;

  		// ITEM
  		this.itemSelectedSlot = new Element(this.itemContainer, { className: 'mag-item-selected-slot' }).element;
  		this.runeSelectedSlot = new Element(this.itemContainer, { className: 'mag-rune-selected-slot' }).element;	
  		this.fusionButton = new Element(this.itemContainer, { className: 'mag-fusion-button stroke', text: 'FUSIONAR' }).element;

  		// MAG
  		this.runeGuideContainer = new Element(this.runeContainer, { className: 'mag-rune-guide-container' }).element;
  		this.runeGuideLabel = [];
  		const guideLabels = ['Min.', 'Máx.', 'Efectos', 'Modifs.'];

  		guideLabels.forEach((label, i) => {
  			this.runeGuideLabel[i] = new Element(this.runeGuideContainer, { className: 'mag-rune-guide-label', text: label}).element; 
  		})

  		this.runeStatContainer = new Element(this.runeContainer, { className: 'mag-rune-stat-container' }).element;
  		this.runeStatRow = [];
  		this.runeStatRowMin = [];
  		this.runeStatRowMax = [];
  		this.runeStatRowEffect = [];
  		this.runeStatRowModif = [];
  		this.runeStatRowR1 = [];
  		this.runeStatRowR2 = [];
  		this.runeStatRowR3 = [];

  		for (let i = 0; i < 17; i++) {
  			this.runeStatRow[i] = new Element(this.runeStatContainer, { className: 'mag-rune-stat-row'}).element; 

  			this.runeStatRowMin[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-min'}).element; 
  			this.runeStatRowMax[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-max'}).element; 
  			this.runeStatRowEffect[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-effect'}).element; 
  			this.runeStatRowModif[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-modif'}).element; 
  			this.runeStatRowR1[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-r1'}).element; 
  			this.runeStatRowR2[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-r2'}).element; 
  			this.runeStatRowR3[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-r3'}).element; 
  		} 	
  	}

  	updateTabs = (inventory = false) => {
  		if (!inventory) {
  			this.tab.forEach((tab, i) => {
  				(i == this.tabSelected) ? tab.className = 'forjamago-tab-selected' : tab.className = 'forjamago-tab';
  				(i == this.tabSelected) ? this.scenes[i].style.display = 'flex' : this.scenes[i].style.display = 'none';
  			});
  		} else {
  			this.inventoryTab.forEach((tab, i) => {
  				(i == this.inventoryData.tabSelected) ? tab.className = 'forjamago-inventory-tab-selected' : tab.className = 'forjamago-inventory-tab';
  			});
  			this.updateInventoryItems();
  		}
  	}

  	changeTab = (n, inventory = false) => {
  		if (!inventory) {
  			this.tabSelected = n;
	  		this.updateTabs();
  		} else {
  			this.inventoryData.tabSelected = n;
	  		this.updateTabs(true);
  		}
  	}

  	destroyInventoryItems = () => {
  		if (this.inventorySlot && this.inventorySlot.length) {
	        this.inventorySlot.forEach(slot => {
	            if (slot.parentNode) {
	                slot.parentNode.removeChild(slot);
	            }
	        });
	        this.inventorySlot = [];
	    }
  	}

  	updateInventoryItems = () => {
  		this.destroyInventoryItems();
  		this.inventoryData.items = [];
  		const items = this.component.component.main.inventory.items;

  		if (this.inventoryData.tabSelected == 0) {
  			Object.values(items).forEach((item) => {
  				if (item.type == 'equipment') this.inventoryData.items.push(item)
  			})
  		} else {
  			Object.values(items).forEach((item) => {
  				if (item.type == 'resource' && item.sort == 'rune') this.inventoryData.items.push(item)
  			})
  		}
  		
  		// const arrayItems = Object.values(items);
  		
  		// this.filtredItems = this.passFilters(arrayItems);
  		
  		this.drawInventorySlots();

  		this.inventoryData.items.forEach((item, i) => {
  		 	this.drawInventoryItem(item, i);
  		})
  	}

  	drawInventorySlots = () => {
  		this.countInventorySlots();
  		for (let i = 0; i < this.inventoryData.slotsNeed; i++) this.inventorySlot[i] = new Element(this.inventorySlotContainer, { className: 'forjamago-inventory-slot-empty' }).element; 
  	}

	countInventorySlots = () => {
		this.inventoryData.slotsNeed = this.inventoryData.slotsMin;
  		if (this.inventoryData.items.length >= 24) this.inventoryData.slotsNeed = Math.ceil(this.inventoryData.items.length / 3) * 3;
	}

	drawInventoryItem = (item, pos) => {
  		this.inventorySlot[pos].className = 'forjamago-inventory-slot';
  		this.inventorySlot[pos].style.backgroundImage = `url("${item.image}")`;
  		if (item.type != 'equipment') this.inventorySlot[pos].innerHTML = `<span class="isq stroke">x${item.quantity}</span>`;

  		// Crear el tooltip al pasar el ratón por encima del slot
		this.tooltip = new Tooltip(this.inventorySlot[pos], item, 'forjamagoWindow', this);

  		// Agregar evento de doble clic para destruir equipamiento
    	this.inventorySlot[pos].addEventListener('click', () => {
	        if (item.type === 'equipment') this.selectItem(item);    
	        else this.selectRune();
    	});
  	}

  	open() {
	    super.open(); 
	    this.update();
  	}

  	update = () => {

  		this.updateInventoryItems();
  	}

  	selectItem = (item) => {
  		let inventory = this.component.component.main.inventory;
  		if (this.tabSelected == 1) {
  			if (this.magData.itemSelected != null) this.removeItem();
	  		this.magData.itemSelected = item;
	  		inventory.removeItem(item);
	  		this.itemSelectedSlot.style.backgroundImage = `url("${item.image}")`;
	  		this.updateInventoryItems();
	  		removeTooltips();
  		} else {

  		}
  	}

  	removeItem = () => {
  		let inventory = this.component.component.main.inventory;
  		inventory.obtainItem(this.magData.itemSelected);
  		this.magData.itemSelected = null;
  		this.itemSelectedSlot.style.backgroundImage = "";
  		this.updateInventoryItems();	
  	}

  	selectRune = (rune) => {
  		if (this.tabSelected == 1) {
  			if (this.magData.runeSelected != null) this.removeRune();
  			this.magData.runeSelected = rune;
  		}	
  	}

  	removeRune = () => {

  	}
}
