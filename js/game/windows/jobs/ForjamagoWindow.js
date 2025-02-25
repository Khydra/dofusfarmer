import { Window } from '../../../utils/Window.js';
import { Element } from '../../../utils/Element.js';
import { Input } from '../../../utils/Input.js';
import { Selector } from '../../../utils/Selector.js';
import { Tooltip } from '../../../utils/Tooltip.js';
import { resourceData } from '../../data/item/resourceData.js';
import { expJobData } from '../../data/class/expData.js';

export class ForjamagoWindow extends Window { 
	constructor(component) {
		const title = "Forjamago";
	    const width = 900;
	    const height = 600;
	    const x = 330; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;
	    this.tabSelected = 0;

	    this.magData = {
	    	itemSelected: null,
	    	tabSelected: 0
	    }

	    this.crusherData = {

	    }

	    this.tooltip;
	    this.render();
	}

	render = () => {

		this.renderTabs();
		this.renderCrusher();
		this.renderMag();
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

  	renderCrusher = () => {

  	}

  	renderMag = () => {
  		this.magScene = new Element(this.container, { className: 'forjamago-mag-scene' }).element; 

  		this.historyContainer = new Element(this.magScene, { className: 'mag-history-container' }).element; 
  		this.workContainer = new Element(this.magScene, { className: 'mag-work-container' }).element;
  		this.itemContainer = new Element(this.workContainer, { className: 'mag-item-container' }).element;
  		this.runeContainer = new Element(this.workContainer, { className: 'mag-rune-container' }).element;
  		this.inventoryContainer = new Element(this.magScene, { className: 'mag-inventory-container' }).element;

  		// HISTROTY

  		// ITEM

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

  		// INVENTORY
  		const inventoryTabNames = ['OBJETOS', 'RUNAS']

  		this.inventoryTab = [];
  		this.inventoryTabContainer = new Element(this.inventoryContainer, { className: 'mag-inventory-tab-container stroke' }).element; 

  		inventoryTabNames.forEach((name, i) => {
  			this.inventoryTab[i] = new Element(this.inventoryTabContainer, { className: 'mag-inventory-tab', text: name}).element; 
  			this.inventoryTab[i].addEventListener('click', () => this.changeTab(i, true));	
  		})

  		this.updateTabs(true);
  	}

  	updateTabs = (inventory = false) => {
  		if (!inventory) {
  			this.tab.forEach((tab, i) => {
  				(i == this.tabSelected) ? tab.className = 'forjamago-tab-selected' : tab.className = 'forjamago-tab';
  			});
  		} else {
  			this.inventoryTab.forEach((tab, i) => {
  				(i == this.magData.tabSelected) ? tab.className = 'mag-inventory-tab-selected' : tab.className = 'mag-inventory-tab';
  			});
  		}
  	}

  	changeTab = (n, inventory = false) => {
  		if (!inventory) {
  			this.tabSelected = n;
	  		this.updateTabs();
	  		//this.updateItems();
  		} else {
  			this.magData.tabSelected = n;
	  		this.updateTabs(true);
  		}
  		
  	}

  	open() {
	    super.open(); 
	    this.update();
  	}

  	update = () => {

  	}

  	selectItem = () => {

  	}

}