import { Window } from '../../../utils/Window.js';
import { Element } from '../../../utils/Element.js';
import { Blackscreen } from '../../../utils/Blackscreen.js';
import { Input } from '../../../utils/Input.js';
import { Selector } from '../../../utils/Selector.js';
import { Tooltip, removeTooltips } from '../../../utils/Tooltip.js';
import { resourceData } from '../../data/item/resourceData.js';
import { expJobData } from '../../data/class/expData.js';
import { text } from '../../../file/text.js';

export class ForjamagoWindow extends Window { 
	constructor(component) {
		const title = "Forjamago";
	    const width = 950;
	    const height = 638;

	    super(title, width, height); 
	    this.component = component;
	    this.tabSelected = 0;

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
	    	items: []
	    }

	    this.tooltip;
	    this.render();
	}

	render = () => {
		this.scenes = [];

		this.renderMag();
		this.renderCrusher();
		this.renderTabs();
		this.renderInventory();
  	}

  	renderTabs = () => {
  		const tabNames = ['MAGUEAR OBJETOS', 'ROMPER OBJETOS']

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
  		this.scenes[1] = new Element(this.container, { className: 'forjamago-crusher-scene' }).element; 

  		// ITEMS
  		this.crushItemContainer = new Element(this.scenes[1], { className: 'crush-item-container' }).element; 
  		this.crushItemButton = new Element(this.crushItemContainer, { className: 'crush-item-button stroke', text: 'ROMPER TODO' }).element; 
  		this.crushItemButton.addEventListener('click', () => {this.crushItems();})
  		this.crushItemSlotContainer = new Element(this.crushItemContainer, { className: 'crush-item-slot-container' }).element; 

  		this.crushItemSlot = [];
  		for (let i = 0; i < 20; i++) {
  			this.crushItemSlot[i] = new Element(this.crushItemSlotContainer, { className: 'forjamago-inventory-slot-empty' }).element; 
  		}

  		// RESULT
  		this.crushResultContainer = new Element(this.scenes[1], { className: 'crush-result-container' }).element;

  		this.crushGuideContainer = new Element(this.crushResultContainer, { className: 'crush-guide-container' }).element; 
  		this.crushGuideLabel = [];
  		const guideLabels = ['Objeto', 'Multiplicador', 'Runas'];
  		guideLabels.forEach((label, i) => {
  			this.crushGuideLabel[i] = new Element(this.crushGuideContainer, { className: 'crush-guide-label', text: label}).element; 
  		})

  		this.crushResultListContainer = new Element(this.crushResultContainer, { className: 'crush-result-list-container' }).element; 
  		
  		this.crushResultRow = [];
  		this.crushResultItem = [];
  		this.crushResultMultiplier = [];
  		this.crushResultRunesWrap = [];
  	}

  	renderMag = () => {
  		this.scenes[0] = new Element(this.container, { className: 'forjamago-mag-scene' }).element; 

  		this.historyContainer = new Element(this.scenes[0], { className: 'mag-history-container' }).element; 
  		this.workContainer = new Element(this.scenes[0], { className: 'mag-work-container' }).element;
  		this.itemContainer = new Element(this.workContainer, { className: 'mag-item-container' }).element;
  		this.runeContainer = new Element(this.workContainer, { className: 'mag-rune-container' }).element;
  		// HISTROTY
  		this.historyText = new Element(this.historyContainer, { className: 'mag-history-text' }).element;

  		// ITEM
  		this.itemSelectedSlot = new Element(this.itemContainer, { className: 'mag-item-selected-slot' }).element;
  		this.runeSelectedSlot = new Element(this.itemContainer, { className: 'mag-rune-selected-slot' }).element;	
  		this.fusionButton = new Element(this.itemContainer, { className: 'mag-fusion-button stroke', text: 'FUSIONAR' }).element;

  		this.itemSelectedSlot.addEventListener('click', () => { this.removeItem() });
  		this.runeSelectedSlot.addEventListener('click', () => { this.removeRune() });
  		this.fusionButton.addEventListener('click', () => { this.fusionRune() });

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
  		this.runeSRR1 = [];
  		this.runeSRR2 = [];
  		this.runeSRR3 = [];

  		for (let i = 0; i < 14; i++) {
  			this.runeStatRow[i] = new Element(this.runeStatContainer, { className: 'mag-rune-stat-row'}).element; 

  			this.runeStatRowMin[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-min'}).element; 
  			this.runeStatRowMax[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-max'}).element; 
  			this.runeStatRowEffect[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-effect'}).element; 
  			this.runeStatRowModif[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-modif'}).element; 
  			this.runeStatRowR1[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-r1'}).element; 
  			this.runeStatRowR2[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-r2'}).element; 
  			this.runeStatRowR3[i] = new Element(this.runeStatRow[i], { className: 'mag-rune-stat-r3'}).element; 
  			this.runeStatRowR1[i].addEventListener('click', () => { this.selectRuneR1(i) });
			this.runeStatRowR2[i].addEventListener('click', () => { this.selectRuneR2(i) });
			this.runeStatRowR3[i].addEventListener('click', () => { this.selectRuneR3(i) });
			this.runeSRR1[i] = null;
			this.runeSRR2[i] = null;
			this.runeSRR3[i] = null;
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
  			this.removeItem();
			this.removeRune();
			this.retireAllCrusherItems();
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
	        else this.selectRune(item);
    	});
  	}

  	open() {
	    super.open(true); 
	    this.updateInventoryItems();
  	}

  	close() {
	    super.close(true); 
	    this.removeItem();
		this.removeRune();
		this.retireAllCrusherItems();
		this.historyText.innerHTML = "";
  	}

  	selectItem = (item) => {
  		let inventory = this.component.component.main.inventory;
  		if (this.tabSelected == 0) {
  			if (this.magData.itemSelected != null) this.removeItem();
	  		this.magData.itemSelected = item;
	  		inventory.removeItem(item);
	  		this.itemSelectedSlot.style.backgroundImage = `url("${item.image}")`;
	  		this.historyText.innerHTML += `<span class="history-item">${item.name}</span> <br><br>`
	  		this.updateInventoryItems();
	  		this.showItemStats();
	  		removeTooltips();
  		} else {
  			if (this.crusherData.items.length == 20) return;
  			this.crusherData.items.push(item);
  			inventory.removeItem(item);
  			this.updateCrusherItems();
  			this.updateInventoryItems();
  			removeTooltips();
  		}
  	}

  	destroyCrusherItems = () => {
	    this.crushItemSlot.forEach(slot => {
	        if (slot.parentNode) {
	            slot.parentNode.removeChild(slot);
	        }
	    });
	    this.crushItemSlot = [];   
  	}

  	updateCrusherItems = () => {
  		this.destroyCrusherItems();
  		
  		for (let i = 0; i < 20; i++) {
  			this.crushItemSlot[i] = new Element(this.crushItemSlotContainer, { className: 'forjamago-inventory-slot-empty' }).element; 
  		}

  		this.crusherData.items.forEach((item, i) => {
  		 	this.drawCrusherItem(item, i);
  		})
  	}

	drawCrusherItem = (item, pos) => {
  		this.crushItemSlot[pos].className = 'forjamago-inventory-slot';
  		this.crushItemSlot[pos].style.backgroundImage = `url("${item.image}")`;

  		// Crear el tooltip al pasar el ratón por encima del slot
		this.tooltip = new Tooltip(this.crushItemSlot[pos], item, 'crusherWindow', this);

  		// Agregar evento de doble clic para destruir equipamiento
    	this.crushItemSlot[pos].addEventListener('click', () => {
	        this.retireCrusherItem(item);    
    	});
  	}

  	retireCrusherItem = (item) => {
  		let inventory = this.component.component.main.inventory;
  		this.crusherData.items.forEach((it, i) => {
  			if (it === item) {	
  				inventory.obtainItem(item);
  				this.crusherData.items.splice(i, 1);
  				this.updateInventoryItems();
  				this.updateCrusherItems();
  				removeTooltips();
  			}
  		})
  	}

  	retireAllCrusherItems = () => {
  		let inventory = this.component.component.main.inventory;
  		this.crusherData.items.forEach((item, i) => {
  			inventory.obtainItem(item);
  		})
  		this.crusherData.items = [];
  		this.updateInventoryItems();
  		this.updateCrusherItems();
  		removeTooltips();
  	}

  	crushItems = () => {
  		if (this.crusherData.items.length <= 0) return;

  		for (let i = 0; i < this.crushResultRow.length; i++) {
  			this.crushResultListContainer.removeChild(this.crushResultRow[i]);
  		}

  		this.crushResultRow = [];
  		this.crushResultItem = [];
  		this.crushResultMultiplier = [];
  		this.crushResultRunesWrap = [];

  		this.crusherData.items.forEach((item, i) => {	
  			this.crushResultRow[i] = new Element(this.crushResultListContainer, { className: 'crush-result-row'}).element; 
  			this.crushResultItem[i] = new Element(this.crushResultRow[i], { className: 'crush-result-row-item', image: item.image}).element; 
  			this.crushResultMultiplier[i] = new Element(this.crushResultRow[i], { className: 'crush-result-row-multiplier' }).element; 
  			this.crushResultRunesWrap[i] = new Element(this.crushResultRow[i], { className: 'crush-result-row-runes-wrap'}).element; 
  			let runeInfo = this.obtainRunes(item, i);
  			this.crushResultMultiplier[i].innerText = `${runeInfo[1]}%`;
  		})

  		this.crusherData.items = [];
  		this.updateCrusherItems();
  	}

  	obtainRunes = (item, row) => {
  		let inventory = this.component.component.main.inventory;
  		let multiplier = this.randomMultiplier();
  		let pesoEsperado = this.pesoMultiplierCalculator(item, multiplier);

  		const statList = [];
  		Object.keys(item.stats).forEach(key => {
  			if (item.stats[key] > 0) {
  				statList.push({stat: key, peso: pesoList[key]})
  			} 
  		})
  		let shuffledList = shuffleArray(statList);
  		
  		let runes = [];

  		shuffledList.forEach((stat, i) => {
  			if (pesoEsperado >= stat.peso) {
  				let max = Math.floor(pesoEsperado / stat.peso);
  				let runesQuantity = Math.floor(Math.random() * max);
  				if (i === shuffledList.length - 1) runesQuantity = max;
  				runes.push([stat.stat, runesQuantity]);
  				pesoEsperado -= (stat.peso*runesQuantity);
  			}	
  		})

  		let newRunes = this.runeTierCalculator(runes, item.level);
  		
  		newRunes.forEach((rune, i) => {
  			inventory.obtainItem(resourceData[rune[1]], rune[0]);
  			let runeImg = new Element(this.crushResultRunesWrap[row], { className: 'crush-result-row-rune', image: resourceData[rune[1]].image}).element; 
  			runeImg.innerHTML = `<span class="isq-mini stroke">x${rune[0]}</span>`;
  		})
  		this.updateInventoryItems();

  		return [runes, multiplier]
  	}

  	randomMultiplier = () => {
  		let multiplierBase = Math.floor(Math.random() * 100);
  		let multiplier;

  		if (multiplierBase < 30) multiplier = Math.floor(Math.random() * 80) + 20; // entre 20 y 100%
  		else if (multiplierBase < 90) multiplier = Math.floor(Math.random() * 250) + 50; // entre 50 y 300%
  		else if (multiplierBase < 95) multiplier = Math.floor(Math.random() * 500) + 200; // entre 200 y 700%
  		else if (multiplierBase < 97) multiplier = Math.floor(Math.random() * 300) + 700; // entre 700 y 1000%
  		else if (multiplierBase < 98) multiplier = Math.floor(Math.random() * 1500) + 1500; // entre 1500 y 3000%
  		else multiplier = Math.floor(Math.random() * 1000) + 3000; // entre 3000 y 4000%

  		return multiplier;
  	}

  	pesoMultiplierCalculator = (item, multiplier) => {
  		let peso = 0;

  		Object.keys(item.stats).forEach(key => {
  			if (item.stats[key] > 0) peso += item.stats[key] * pesoList[key];
  		})

  		return Math.floor((peso * multiplier) / 100);
  	}

  	runeTierCalculator = (runes, level) => {
  		let preRunes = [];
  		let loops = 2 + Math.floor(level / 40);

  		runes.forEach(rune => {
  			let tier1 = rune[1];
  			let tier2 = 0;
  			let tier3 = 0;
  			switch(rune[0]) {
	  			case 'vit': 
	  				for (let i = 0; i < loops; i++) {
	  					if (Math.floor(Math.random() * (level * 3)) > 130 && tier1 > 30) {
		  					tier3 += Math.floor((Math.random() * Math.floor(tier1 / 15)));
		  					tier1 -= tier3;
		  					if (tier1 < 0) tier1 = 0;
		  				}
		  				if (Math.floor(Math.random() * (level * 2)) > 40 && tier1 > 10) {
		  					tier2 += Math.floor((Math.random() * Math.floor(tier1 / 5)));
		  					tier1 -= tier2;
		  					if (tier1 < 0) tier1 = 0;
		  				}
	  				}
	  				break;
	  			case 'str': 
	  			case 'int':
	  			case 'cha':
	  			case 'agi':
	  			case 'wis':
	  			case 'pot': 
	  				for (let i = 0; i < loops; i++) {
		  				if (Math.floor(Math.random() * (level * 3)) > 130 && tier1 > 20) {
		  					tier3 += Math.floor((Math.random() * Math.floor(tier1 / 10)));
		  					tier1 -= tier3;
		  					if (tier1 < 0) tier1 = 0;
		  				}
		  				if (Math.floor(Math.random() * (level * 2)) > 40 && tier1 > 6) {
		  					tier2 += Math.floor((Math.random() * Math.floor(tier1 / 3)));
		  					tier1 -= tier2;
		  					if (tier1 < 0) tier1 = 0;
		  				}
		  			}
	  				break;
	  			case 'strDmg': 
	  			case 'intDmg':
	  			case 'chaDmg':
	  			case 'agiDmg':
	  			case 'crtDmg':	
	  				for (let i = 0; i < loops; i++) {
		  				if (Math.floor(Math.random() * (level * 2)) > 115 && tier1 > 6) {
		  					tier2 += Math.floor((Math.random() * Math.floor(tier1 / 3)));
		  					tier1 -= tier2;
		  					if (tier1 < 0) tier1 = 0;
		  				}
		  			}
	  				break;
	  			case 'pp': 
	  				for (let i = 0; i < loops; i++) {
		  				if (Math.floor(Math.random() * level) > 50 && tier1 > 6) {
		  					tier2 += Math.floor((Math.random() * Math.floor(tier1 / 3)));
		  					tier1 -= tier2;
		  					if (tier1 < 0) tier1 = 0;
		  				}
		  			}
	  				break
	  			case 'cur': 
	  				for (let i = 0; i < loops; i++) {
		  				if (Math.floor(Math.random() * level) > 70 && tier1 > 6) {
		  					tier2 += Math.floor((Math.random() * Math.floor(tier1 / 3)));
		  					tier1 -= tier2;
		  					if (tier1 < 0) tier1 = 0;
		  				}
		  			}
	  				break
	  		}
	  		preRunes.push([tier1, runeData[rune[0]][0]], [tier2, runeData[rune[0]][1]], [tier3, runeData[rune[0]][2]])
  		})

  		let newRunes = [];

  		preRunes.forEach(rune => {
  			if (rune[0] > 0 && rune[1] != undefined) newRunes.push(rune)
  		})
  		return newRunes;
  	}

  	selectRune = (rune) => {
  		if (this.tabSelected != 0) return;

  		//let inventory = this.component.component.main.inventory;
  		if (this.magData.runeSelected != null) this.removeRune();

  		this.magData.runeSelected = rune;
  		//inventory.removeAll(rune);
  		this.runeSelectedSlot.style.backgroundImage = `url("${rune.image}")`;
  		this.runeSelectedSlot.innerHTML = `<span class="isq stroke">x${rune.quantity}</span>`
  		this.updateInventoryItems();
  		removeTooltips();
  	}

  	selectRuneR1 = (i) => {
  		if (this.runeSRR1[i] == null) return
  		this.selectRune(this.runeSRR1[i]);
  		this.fusionRune();
  	} 

  	selectRuneR2 = (i) => {
  		if (this.runeSRR2[i] == null) return
  		this.selectRune(this.runeSRR2[i]);
  		this.fusionRune();
  	}

  	selectRuneR3 = (i) => {
  		if (this.runeSRR3[i] == null) return
  		this.selectRune(this.runeSRR3[i]);
  		this.fusionRune();
  	}

  	removeItem = () => {
  		if (this.magData.itemSelected == null) return;
  		this.historyText.innerHTML +=  `<br>`;
  		let inventory = this.component.component.main.inventory;
  		inventory.obtainItem(this.magData.itemSelected);
  		this.magData.itemSelected = null;
  		this.itemSelectedSlot.style.backgroundImage = "";
  		this.cleanItemStats();
  		this.updateInventoryItems();	
  	}

  	removeRune = () => {
  		if (this.magData.runeSelected == null) return;
  		this.magData.runeSelected = null;
  		this.runeSelectedSlot.style.backgroundImage = "";
  		this.runeSelectedSlot.innerHTML = "";
  		this.updateInventoryItems();	
  	}

  	fusionRune = () => {
  		if (this.magData.runeSelected != null && this.magData.itemSelected != null) {
  			this.tryRune(this.magData.runeSelected);
  			this.magData.runeSelected.quantity -= 1;
  			this.runeSelectedSlot.innerHTML = `<span class="isq stroke">x${this.magData.runeSelected.quantity}</span>`;
  			if (this.magData.runeSelected.quantity == 0) {
  				this.component.component.main.inventory.removeAll(this.magData.runeSelected);
  				this.removeRune();
  			}
  			this.updateInventoryItems();	
  			this.showItemStats();
  		}
  	}

  	showItemStats = () => {
  		let inventory = this.component.component.main.inventory;
  		this.cleanItemStats();
  		Object.keys(this.magData.itemSelected.base).forEach((key, i) => {
  			this.runeStatRowMin[i].innerHTML = this.magData.itemSelected.base[key][0];
			if (this.magData.itemSelected.base[key][1] != undefined) this.runeStatRowMax[i].innerHTML = this.magData.itemSelected.base[key][1];
			else this.runeStatRowMax[i].innerHTML = this.magData.itemSelected.base[key][0];
			
			if (this.magData.itemSelected.stats[key] > 0) 
				this.runeStatRowEffect[i].innerHTML = `<span class="stat-green">${this.magData.itemSelected.stats[key]} ${text.stat[key].toLowerCase()}</span>`;
			else if (this.magData.itemSelected.stats[key] < 0) 
				this.runeStatRowEffect[i].innerHTML = `<span class="stat-red">${this.magData.itemSelected.stats[key]} ${text.stat[key].toLowerCase()}</span>`;
			else if (this.magData.itemSelected.stats[key] === 0) 
				this.runeStatRowEffect[i].innerHTML = `<span class="stat-no">${this.magData.itemSelected.stats[key]} ${text.stat[key].toLowerCase()}</span>`;

			let r1 = inventory.findItemByNotation(`${key}1`);
			let r2 = inventory.findItemByNotation(`${key}2`);
			let r3 = inventory.findItemByNotation(`${key}3`);

			if (r1 != null) {
				this.runeStatRowR1[i].style.backgroundImage = `url("${r1.image}")`;
				this.runeStatRowR1[i].innerHTML = `<span class="isq-mini stroke">x${r1.quantity}</span>`;
				this.runeSRR1[i] = r1;
			}
			if (r2 != null) {
				this.runeStatRowR2[i].style.backgroundImage = `url("${r2.image}")`;
				this.runeStatRowR2[i].innerHTML = `<span class="isq-mini stroke">x${r2.quantity}</span>`;
				this.runeSRR2[i] = r2;
			}
			if (r3 != null) {
				this.runeStatRowR3[i].style.backgroundImage = `url("${r3.image}")`;
				this.runeStatRowR3[i].innerHTML = `<span class="isq-mini stroke">x${r3.quantity}</span>`;
				this.runeSRR3[i] = r3;
			}
  		})

  		// exos
  		Object.keys(this.magData.itemSelected.stats).forEach((key, i) => {
  			if (this.magData.itemSelected.base[key] == undefined) {
  				this.runeStatRowMin[i].innerHTML = "-";
  				this.runeStatRowMax[i].innerHTML = "-";
  				this.runeStatRowEffect[i].innerHTML = `<span class="stat-exo">${this.magData.itemSelected.stats[key]} ${text.stat[key].toLowerCase()}</span>`;

  				let r1 = inventory.findItemByNotation(`${key}1`);
				let r2 = inventory.findItemByNotation(`${key}2`);
				let r3 = inventory.findItemByNotation(`${key}3`);

				if (r1 != null) {
					this.runeStatRowR1[i].style.backgroundImage = `url("${r1.image}")`;
					this.runeStatRowR1[i].innerHTML = `<span class="isq-mini stroke">x${r1.quantity}</span>`;
					this.runeSRR1[i] = r1;
				}
				if (r2 != null) {
					this.runeStatRowR2[i].style.backgroundImage = `url("${r2.image}")`;
					this.runeStatRowR2[i].innerHTML = `<span class="isq-mini stroke">x${r2.quantity}</span>`;
					this.runeSRR2[i] = r2;
				}
				if (r3 != null) {
					this.runeStatRowR3[i].style.backgroundImage = `url("${r3.image}")`;
					this.runeStatRowR3[i].innerHTML = `<span class="isq-mini stroke">x${r3.quantity}</span>`;
					this.runeSRR3[i] = r3;
				}
  			}
  		})
  	}

  	cleanItemStats = () => {
  		this.runeStatRow.forEach((row, i) => {
  			this.runeStatRowMin[i].innerHTML = "";
  			this.runeStatRowMax[i].innerHTML = "";
  			this.runeStatRowEffect[i].innerHTML = "";
  			this.runeStatRowModif[i].innerHTML = "";
  			this.runeStatRowR1[i].innerHTML = "";
  			this.runeStatRowR2[i].innerHTML = "";
  			this.runeStatRowR3[i].innerHTML = "";
  			this.runeStatRowR1[i].style.backgroundImage = "";
  			this.runeStatRowR2[i].style.backgroundImage = "";
  			this.runeStatRowR3[i].style.backgroundImage = "";
  			this.runeSRR1[i] = null;
			this.runeSRR2[i] = null;
			this.runeSRR3[i] = null;
  		})
  	}

  	tryRune = (rune) => {
  		let runeData = []; //stat - value - peso - tier
  		Object.keys(rune.value).forEach((key, i) => {
  			if (i == 0) {
  				runeData.push(key)
  				runeData.push(rune.value[key])
  		 	} else if (i == 1) runeData.push(rune.value[key])
  		 	else if (i == 2) runeData.push(rune.value[key])
  		})

  		if (this.magData.itemSelected.base[runeData[0]] == undefined) { // EXO
  			//console.log("----------------- EXO");
  			this.exoFusion(runeData);
  		} else {
  			let maxItemStat; 
	  		if (this.magData.itemSelected.base[runeData[0]].length > 1) maxItemStat = this.magData.itemSelected.base[runeData[0]][1];
	  		else maxItemStat = this.magData.itemSelected.base[runeData[0]][0];
	  		
	  		if (this.magData.itemSelected.stats[runeData[0]] + runeData[1] > maxItemStat) { // OVER
				//console.log("----------------- OVER");
	  			this.overFusion(runeData);
	  		} else {
	  			//console.log("----------------- NORMAL"); // NORMAL
	  			this.normalFusion(runeData);
	  		}
  		}
  			
  		this.historyText.scrollTop = 1000000;
  		this.actualizarPeso();
  		this.magData.itemSelected.mage = this.component.component.main.player.name;
  		// console.log(`peso: ${this.magData.itemSelected.peso}`)
  		// console.log(`restos: ${this.magData.itemSelected.restos}`)
  	}

  	normalFusion = (runeData) => {
  		let nothing = Math.floor(Math.random() * 100);

  		if (nothing < (Math.floor(runeData[2] / 4)) + 5) { // LA RUNA FALLA:
  			this.historyText.innerHTML += `<span class="history-effect-fail">Fallo</span><br>`;
  			return;
  		}

  		let maxItemStat; 
  		if (this.magData.itemSelected.base[runeData[0]].length > 1) maxItemStat = this.magData.itemSelected.base[runeData[0]][1]
  		else maxItemStat = this.magData.itemSelected.base[runeData[0]][0]

  		// HACER QUE RUNAS TOCHAS FALLEN MAS EN ITEMS LVL BAJO
  		let handicap = 0;
  		if (runeData[3] > 1) handicap = Math.ceil((((201 - this.magData.itemSelected.level) / 4) * runeData[3]) / 5);

  		if ((this.magData.itemSelected.stats[runeData[0]] / maxItemStat) < 0.7) handicap = Math.floor(handicap / 2);
  		else if ((this.magData.itemSelected.stats[runeData[0]] / maxItemStat) < 0.4) handicap = Math.floor(handicap / 4);
  		// CON RESTOS:

  		// SIN RESTOS:
  		let cleanProb = 130 - (this.magData.itemSelected.stats[runeData[0]] / maxItemStat) * 92.5;
  		let tryClean = Math.floor(Math.random() * (100 + handicap + Math.floor(this.magData.itemSelected.peso[0] / 2)));
  		let trySucces = Math.floor(Math.random() * (90 + Math.floor(this.magData.itemSelected.peso[0] / 3)));

  		if (tryClean < cleanProb) { // LA RUNA ENTRA LIMPIA
  			this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  		this.historyText.innerHTML += `<span class="history-effect-clean">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
  			return;
  		} else if (trySucces < cleanProb) { // LA RUNA ENTRA PERO CAE ALGO
  			let valueEnter = Math.ceil(Math.random() * runeData[1]);
  			this.magData.itemSelected.stats[runeData[0]] += valueEnter;
	  		this.historyText.innerHTML += `<span class="history-effect-succes">${valueEnter} ${text.stat[runeData[0]]}</span><br>`;
	  		this.loseStats(runeData, true);
  			return;
  		} else { // LA RUNA NO ENTRA Y CAE ALGO
		  	this.loseStats(runeData);
			return;
  		}
		
  	}

  	overFusion = (runeData) => {
  		let nothing = Math.floor(Math.random() * 100);
  		if (nothing < 15 || runeData[2] > 50) { // LA RUNA FALLA:
  			this.historyText.innerHTML += `<span class="history-effect-fail">Fallo</span><br>`;
  			return;
  		}

  		// CAPEAR OVER
  		let overCap = this.checkOverCap(runeData);
  		if (overCap[0]) {
  			this.historyText.innerHTML += `<span class="history-effect-fail">Fallo (capacidad máxima ${overCap[1]})</span><br>`;
  			return;
  		}
  		
  		let handicap = 0;
  		if (runeData[3] > 1) handicap = Math.ceil((((201 - this.magData.itemSelected.level) / 4) * runeData[3]) / 6);

  		if (this.magData.itemSelected.restos > runeData[2]) { // SI HAY MAS RESTOS DE LO QUE PESA LA RUNA
  			let probs = Math.floor(Math.random() * (100 + handicap));
  			if (probs < 15) {
  				// Limpio (no consume restos pero si peso)
  				this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  			this.historyText.innerHTML += `<span class="history-effect-clean">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
	  			this.actualizarPeso();
  				return;	
  			} else if (probs < 75){
  				// Entrar normal consumiendo restos (consume restos y peso)
  				this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  			this.historyText.innerHTML += `<span class="history-effect-clean">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
	  			this.historyText.innerHTML += `<span class="history-effect-fail">- Restos</span><br>`;
  				this.magData.itemSelected.restos -= runeData[2];
  				this.actualizarPeso();	
  				return;
  			} else if (probs < 85) {
  				//Entre y tire (consume restos y peso)
  				this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  			this.historyText.innerHTML += `<span class="history-effect-succes">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
  				this.loseStats(runeData, true, runeData[2]);
  				this.magData.itemSelected.restos -= runeData[2];
  				this.actualizarPeso();
  				return;
  			} else if (probs < 95) {
  				// Fallar y puerde stats (consume restos)
  				let restosDown = Math.floor(Math.random() * runeData[2]);
  				if (this.magData.itemSelected.restos - restosDown < 0) restosDown = this.magData.itemSelected.restos;
  				this.loseStats(runeData, false, restosDown);
  				this.magData.itemSelected.restos -= restosDown;
  				return;
  			} else {
  				// Fallar (consume restos)
  				let restosDown = Math.floor(Math.random() * runeData[2]);
  				if (this.magData.itemSelected.restos - restosDown < 0) restosDown = this.magData.itemSelected.restos;
  				this.magData.itemSelected.restos -= Math.floor(Math.random() * restosDown);
  				this.historyText.innerHTML += `<span class="history-effect-fail">- Restos</span><br>`;
  				return;
  			} 
  		} else if (runeData[2] + this.magData.itemSelected.peso[0] > this.magData.itemSelected.peso[1]) { // SI HAY MAS PESO DE LO QUE PESA LA RUNA
			this.loseStats(runeData, false, runeData[2]);
			if (runeData[2] + this.magData.itemSelected.peso[0] <= this.magData.itemSelected.peso[1]) {
				let enterProbs = Math.floor(Math.random() * (105 + handicap));
				let midProbs = Math.floor(Math.random() * 100);
				if (enterProbs < this.magData.itemSelected.peso[1] && midProbs > 40) {
					this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  				this.historyText.innerHTML += `<span class="history-effect-succes">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
	  				this.actualizarPeso();
				}
			} 
			return;
		} else { // SI HAY MENOS PESO DE LO QUE PESA LA RUNA PERO NO HAY RESTOS
  			let cleanProb = 15 - handicap;
  			let tryClean = Math.floor(Math.random() * (100 + Math.floor(this.magData.itemSelected.peso[0]/2)));
  			let trySucces = Math.floor(Math.random() * 100);

  			if (cleanProb < 6) cleanProb = 6;

  			if (tryClean < cleanProb) { // LA RUNA ENTRA LIMPIA
  				//console.log('over limpio');
  				this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  			this.historyText.innerHTML += `<span class="history-effect-clean">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
	  			this.actualizarPeso();
  				return;
  			} else if (trySucces < cleanProb) { // LA RUNA ENTRA PERO CAE ALGO
  				//console.log('over sucio');
  				let valueEnter = Math.ceil(Math.random() * runeData[1]);
  				let pesoEnter = (runeData[2] / runeData[1]) * valueEnter; 
	  			this.magData.itemSelected.stats[runeData[0]] += valueEnter;
		  		this.historyText.innerHTML += `<span class="history-effect-succes">${valueEnter} ${text.stat[runeData[0]]}</span><br>`;
		  		this.actualizarPeso();
		  		this.loseStats(runeData, true);
  				return;
  			} else { // LA RUNA NO ENTRA Y CAE ALGO
  				//console.log('over fail');
  				this.loseStats(runeData);
  				return;
  			}	
		}
  	}

  	exoFusion = (runeData) => {
  		let nothing = Math.floor(Math.random() * 100);
  		if (nothing < Math.floor(runeData[2] / 4)) return 'nothing';

  		// CAPEAR OVER
  		let overCap = this.checkOverCap(runeData, true);
  		if (overCap[0]) {
  			this.historyText.innerHTML += `<span class="history-effect-fail">Fallo (capacidad máxima ${overCap[1]})</span><br>`;
  			return;
  		}

  		// HACER QUE RUNAS TOCHAS FALLEN MAS EN ITEMS LVL BAJO
  		let handicap = 0;
  		if (runeData[3] > 1) handicap = Math.ceil((((201 - this.magData.itemSelected.level) / 4) * runeData[3] * 1.5) / 5);
  		if (runeData[2] > 50) handicap += (200 + (runeData[2] * 2));

  		if (runeData[2] + this.magData.itemSelected.peso[0] > this.magData.itemSelected.peso[1]) { // SI HAY MAS PESO DE LO QUE PESA LA RUNA
			this.loseStats(runeData, false, runeData[2]);
			if (runeData[2] + this.magData.itemSelected.peso[0] <= this.magData.itemSelected.peso[1]) {
				let enterProbs = Math.floor(Math.random() * (105 + handicap));
				let midProbs = Math.floor(Math.random() * 100);
				if (enterProbs < 50 && midProbs > 50) {
					if (this.magData.itemSelected.stats[runeData[0]] == undefined) this.magData.itemSelected.stats[runeData[0]] = runeData[1];
	  				else this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  				this.historyText.innerHTML += `<span class="history-effect-succes">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
	  				this.actualizarPeso();
				}
			} 
			return;
		} else if (this.magData.itemSelected.restos >= runeData[2]) { // SI HAY MAS RESTOS DE LO QUE PESA LA RUNA
  			let probs = Math.floor(Math.random() * (100 + handicap));
  			if (probs < 10) {
  				//Limpio 1/10 (no consume restos pero si peso)
  				if (this.magData.itemSelected.stats[runeData[0]] == undefined) this.magData.itemSelected.stats[runeData[0]] = runeData[1];
	  			else this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  			this.historyText.innerHTML += `<span class="history-effect-exo">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
	  			this.actualizarPeso();
	  			return;
  			} else if (probs < 75) {
  				// Entrar normal consumiendo restos (consume restos y peso)
  				if (this.magData.itemSelected.stats[runeData[0]] == undefined) this.magData.itemSelected.stats[runeData[0]] = runeData[1];
	  			else this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  			this.historyText.innerHTML += `<span class="history-effect-exo">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
	  			this.historyText.innerHTML += `<span class="history-effect-fail">- Restos</span><br>`;
  				this.magData.itemSelected.restos -= runeData[2];
  				this.actualizarPeso();
  				return;
  			} else if (probs < 85) {
  				//Entre y tire (consume restos y peso)
  				if (this.magData.itemSelected.stats[runeData[0]] == undefined) this.magData.itemSelected.stats[runeData[0]] = runeData[1];
	  			else this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  			this.historyText.innerHTML += `<span class="history-effect-exo">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
  				this.loseStats(runeData, true, runeData[2]);
  				this.magData.itemSelected.restos -= runeData[2];
  				this.actualizarPeso();
  				return;
  			} else if (probs < 95) {
  				// Fallar y pierde stats (consume restos)
  				let restosDown = Math.floor(Math.random() * runeData[2]);
  				if (this.magData.itemSelected.restos - restosDown < 0) restosDown = this.magData.itemSelected.restos;
  				this.loseStats(runeData, false, restosDown);
  				this.magData.itemSelected.restos -= restosDown;
  				return;
  			} else {
  				// Fallar (consume restos)
  				let restosDown = Math.floor(Math.random() * runeData[2]);
  				if (this.magData.itemSelected.restos - restosDown < 0) restosDown = this.magData.itemSelected.restos;
  				this.magData.itemSelected.restos -= Math.floor(Math.random() * restosDown);
  				this.historyText.innerHTML += `<span class="history-effect-fail">- Restos</span><br>`;
  				return;
  			} 
  		} else { // SI HAY MENOS PESO DE LO QUE PESA LA RUNA PERO NO HAY RESTOS
  			let cleanProb = 15 - handicap;
  			let tryClean = Math.floor(Math.random() * (100 + Math.floor(this.magData.itemSelected.peso[0]/2)));
  			let trySucces = Math.floor(Math.random() * 100);

  			if (cleanProb < 2) cleanProb = 2;
  			
  			if (tryClean < cleanProb) { // LA RUNA ENTRA LIMPIA
  				if (this.magData.itemSelected.stats[runeData[0]] == undefined) this.magData.itemSelected.stats[runeData[0]] = runeData[1];
	  			else this.magData.itemSelected.stats[runeData[0]] += runeData[1];
	  			this.historyText.innerHTML += `<span class="history-effect-exo">${runeData[1]} ${text.stat[runeData[0]]}</span><br>`;
	  			this.actualizarPeso();
  				return;
  			} else if (trySucces < cleanProb) { // LA RUNA ENTRA PERO CAE ALGO
  				let valueEnter = Math.ceil(Math.random() * runeData[1]);
  				let pesoEnter = (runeData[2] / runeData[1]) * valueEnter; 
	  			if (this.magData.itemSelected.stats[runeData[0]] == undefined) this.magData.itemSelected.stats[runeData[0]] = valueEnter;
	  			else this.magData.itemSelected.stats[runeData[0]] += valueEnter;
		  		this.historyText.innerHTML += `<span class="history-effect-exo">${valueEnter} ${text.stat[runeData[0]]}</span><br>`;
		  		this.actualizarPeso();
		  		this.loseStats(runeData, true);
  				return;
  			} else { // LA RUNA NO ENTRA Y CAE ALGO
 
  				this.loseStats(runeData);
  				return;
  			}	
		}
  	}

  	checkOverCap = (runeData, isExo = false) => {
  		let maxStat;

  		if (!isExo) {
  			if (this.magData.itemSelected.base[runeData[0]][1] != undefined) maxStat = this.magData.itemSelected.base[runeData[0]][1];
			else maxStat = this.magData.itemSelected.base[runeData[0]][0];
  		} else maxStat = 0;
  		

  		let overCap = [false, null];
  		switch (runeData[0]) {
  			case 'vit': 
	  			overCap[1] = 505;	
	  			break;
	  		case 'str': case 'int': case 'cha': case 'agi': case 'pot':  
	  			overCap[1] = 101;
	  			break;
	  		case 'wis': case 'pp':
	  		 	if (maxStat < 30) overCap[1] = 33;
	  			else if (maxStat < 60) overCap[1] = 66;
	  			else overCap[1] = 99;
	  			break;
	  		case 'strDmg': case 'intDmg': case 'chaDmg': case 'agiDmg': case 'crtDmg':	
	  			if (maxStat < 20) overCap[1] = 20;
	  			else overCap[1] = maxStat + 20;
	  			break;
	  		case 'dmg': 
	  			overCap[1] = maxStat + 9;	
	  			break
	  		case 'cur': case 'crt': 
	  			overCap[1] = maxStat + 10;	
	  			break
	  		case 'invo':
	  			overCap[1] = 4;
	  			break;
	  		case 'pa': case 'pm': case 'al':
	  			overCap[1] = 1;	
	  			break;
	  		case 'speDmg': case 'wepDmg': case 'res': 
	  			overCap[1] = maxStat + 6
				break;
			case 'reDmg':
				overCap[1] = 5
				break;
  		}

  		if (this.magData.itemSelected.stats[runeData[0]] + runeData[1] > overCap[1]) overCap[0] = true;

  		return overCap;
  	}

  	loseStats = (runeData, parcial = false, restosPrev = 0) => {
  		let n = Math.floor(Math.random() * (70 + runeData[2] + this.magData.itemSelected.peso[0]));
  		const statList = [];
  		Object.keys(this.magData.itemSelected.stats).forEach(key => {
  			if (this.magData.itemSelected.stats[key] > 0) {
  				if (parcial && (runeData[0] == key)) {
  					//console.log(key)
  				} else {
  					statList.push({stat: key, value: this.magData.itemSelected.stats[key], peso: pesoList[key], pesoTotal: (pesoList[key] * this.magData.itemSelected.stats[key])})
  				}
  			} else if (this.magData.itemSelected.base[key][0] < 0) {
  				if (parcial && (runeData[0] == key)) {
  					//console.log(key)
  				} else {
  					statList.push({stat: key, value: this.magData.itemSelected.stats[key], peso: pesoList[key], pesoTotal: (pesoList[key] * this.magData.itemSelected.stats[key])})
  				}
  			}
  		})
  		let shuffledList = shuffleArray(statList);

  		let pesoLost = runeData[2];

  		let winRestosProb = Math.floor(Math.random() * 100);
  		let winRestos = false;

  		// small fall
  		if (n < 50) {
  			pesoLost += Math.floor(Math.random() * 3);
  			if (winRestosProb > 80) winRestos = true;
  		}
  		// medium fall
  		else if (n < 80) {
  			pesoLost += Math.floor(Math.random() * 10);
  			if (winRestosProb > 65) winRestos = true;
  		}
  		// big fall
  		else {
  			pesoLost += Math.floor(Math.random() * 50);
  			if (winRestosProb > 30) winRestos = true;
  		}

  		let isLost = false;
 		let totalPesoLost = 0;

  		shuffledList.forEach((stat) => {
  			let min, max, pesoPerdidoTeorico, statPerdido, pesoPerdidoReal;

  			if (pesoLost > stat.peso || !isLost) {
  				if (stat.value < 0) {
  					min = stat.peso;
	  				max = stat.pesoTotal * -1;
  					if (pesoLost < max) max = pesoLost;	
  					pesoPerdidoTeorico = Math.floor(Math.random() * (max - min + 1)) + min;

  					statPerdido = Math.ceil(pesoPerdidoTeorico / stat.peso);
  					if (stat.value - statPerdido < this.magData.itemSelected.base[stat.stat][0]) {
  						statPerdido = this.magData.itemSelected.base[stat.stat][0] - stat.value
  					}
	  				pesoPerdidoReal = statPerdido * stat.peso;
  				} else {
  					min = stat.peso;
	  				max = stat.pesoTotal;
	  				if (pesoLost < stat.pesoTotal) max = pesoLost;
	  				pesoPerdidoTeorico = Math.floor(Math.random() * (max - min + 1)) + min;
	 				
	  				statPerdido = Math.ceil(pesoPerdidoTeorico / stat.peso);
	  				if (statPerdido >= stat.value) statPerdido = stat.value;
	  				pesoPerdidoReal = statPerdido * stat.peso;

  				}

  				if (statPerdido > 0) {
  					this.magData.itemSelected.stats[stat.stat] -= statPerdido;
		  			if (this.magData.itemSelected.stats[stat.stat] == 0 && this.magData.itemSelected.base[stat.stat] == undefined) {
		  				delete this.magData.itemSelected.stats[stat.stat];
		  			}

		  			this.historyText.innerHTML += `<span class="history-effect-fail"> - ${statPerdido} ${text.stat[stat.stat]} </span><br>`;
		  			pesoLost -= pesoPerdidoReal;
		  			totalPesoLost += pesoPerdidoReal;
		  			isLost = true;	
  				}
  				
  			}	
  		})

  		if (totalPesoLost + this.magData.itemSelected.restos >= 101) {
  			totalPesoLost = 101 - this.magData.itemSelected.restos;
  		}

 		if (totalPesoLost + this.magData.itemSelected.peso[0] + this.magData.itemSelected.restos >= this.magData.itemSelected.peso[1]) {
 			totalPesoLost = this.magData.itemSelected.peso[1] - this.magData.itemSelected.peso[0] - this.magData.itemSelected.restos;
 		}

  		if (winRestos && isLost) {
  			this.magData.itemSelected.restos += totalPesoLost;
  			if (totalPesoLost > restosPrev) {
  				this.historyText.innerHTML += `<span class="history-effect-clean">+ Restos</span><br>`;
  			} else if (totalPesoLost < restosPrev) {
  				this.historyText.innerHTML += `<span class="history-effect-fail">- Restos</span><br>`;
  			}
  		}
  	}

  	actualizarPeso = () => {
	    let newPeso =  0; 
	    let max;
	    let over;

	    // OVERS
	    Object.keys(this.magData.itemSelected.base).forEach(key => {
	        if (this.magData.itemSelected.base[key][1] !== undefined) {
	            max = this.magData.itemSelected.base[key][1];
	        } else {
	            max = this.magData.itemSelected.base[key][0];
	        }

	        if (this.magData.itemSelected.stats[key] > max) {
	            over = this.magData.itemSelected.stats[key] - max;
	            if (pesoList[key] !== undefined) {
	                newPeso += (over * pesoList[key]);
	            } 
	        }
	    });

	    // EXOS
	    Object.keys(this.magData.itemSelected.stats).forEach(key => {
	        if (this.magData.itemSelected.base[key] === undefined) {
	          	newPeso += (this.magData.itemSelected.stats[key] * pesoList[key]);
	        } 

	    });

	    this.magData.itemSelected.peso[0] = newPeso;
	};
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
    return array;
}

const pesoList = {
	vit: 0.2,
	str: 1,
	int: 1,
	cha: 1,
	agi: 1,
	pa: 100,
	pm: 90,
	al: 51,
	invo: 30,
	pp: 3,
	pot: 2,
	dmg: 10,
	cur: 10,
	strDmg: 5,
	intDmg: 5,
	chaDmg: 5,
	agiDmg: 5,
	crtDmg: 5,
	crt: 10,
	wis: 3,
	speDmg: 15,
	wepDmg: 15,
	res: 15,
	reDmg: 15,
}

const runeData = {
	vit: ['runa_vi', 'runa_bu_vi', 'runa_su_vi'],
	str: ['runa_fu', 'runa_bu_fu', 'runa_su_fu'],
	int: ['runa_inte', 'runa_bu_inte', 'runa_su_inte'],
	cha: ['runa_sue', 'runa_bu_sue', 'runa_su_sue'],
	agi: ['runa_agi', 'runa_bu_agi', 'runa_su_agi'],
	pa: ['runa_pa'],
	pm: ['runa_pm'],
	al: ['runa_lu'],
	invo: ['runa_be'],
	pp: ['runa_prospe', 'runa_bu_prospe'],
	pot: ['runa_pot', 'runa_bu_pot'],
	dmg: ['runa_da'],
	cur: ['runa_cu', 'runa_bu_cu'],
	strDmg: ['runa_da_tierra', 'runa_da_tierra'],
	intDmg: ['runa_da_fuego', 'runa_da_fuego'],
	chaDmg: ['runa_da_agua', 'runa_da_agua'],
	agiDmg: ['runa_da_aire', 'runa_da_aire'],
	crtDmg: ['runa_da_cri', 'runa_da_cri'],
	crt: ['runa_cri'],
	wis: ['runa_sa', 'runa_bu_sa', 'runa_su_sa'],
	speDmg: ['runa_por_he'],
	wepDmg: ['runa_por_res'],
	res: ['runa_por_res'],
	reDmg: ['runa_por_reen'],
}