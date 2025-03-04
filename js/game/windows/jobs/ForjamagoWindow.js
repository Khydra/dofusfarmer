import { Window } from '../../../utils/Window.js';
import { Element } from '../../../utils/Element.js';
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

  		for (let i = 0; i < 14; i++) {
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
	    super.open(); 
	    this.updateInventoryItems();
  	}

  	close() {
	    super.close(); 
	    this.removeItem();
		this.removeRune();
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

  		}
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
				this.runeStatRowR1[i].innerHTML = `<span class="isq-mini stroke">x${r1.quantity}</span>`
			}
			if (r2 != null) {
				this.runeStatRowR2[i].style.backgroundImage = `url("${r2.image}")`;
				this.runeStatRowR2[i].innerHTML = `<span class="isq-mini stroke">x${r2.quantity}</span>`
			}
			if (r3 != null) {
				this.runeStatRowR3[i].style.backgroundImage = `url("${r3.image}")`;
				this.runeStatRowR3[i].innerHTML = `<span class="isq-mini stroke">x${r3.quantity}</span>`
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
					this.runeStatRowR1[i].innerHTML = `<span class="isq-mini stroke">x${r1.quantity}</span>`
				}
				if (r2 != null) {
					this.runeStatRowR2[i].style.backgroundImage = `url("${r2.image}")`;
					this.runeStatRowR2[i].innerHTML = `<span class="isq-mini stroke">x${r2.quantity}</span>`
				}
				if (r3 != null) {
					this.runeStatRowR3[i].style.backgroundImage = `url("${r3.image}")`;
					this.runeStatRowR3[i].innerHTML = `<span class="isq-mini stroke">x${r3.quantity}</span>`
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
  		})
  	}

  	// DIFICULTAR EL EXO PA / PM
  	// SI EL STAT PERDIODO ES EXO U OVER -> BAJAR PESO

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

  		// HACER QUE RUNAS TOCHAS FALLEN MAS EN ITEMS LVL BAJO
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

  		// HACER QUE RUNAS TOCHAS FALLEN MAS EN ITEMS LVL BAJO
  		let handicap = 0;
  		if (runeData[3] > 1) handicap = Math.ceil((((201 - this.magData.itemSelected.level) / 4) * runeData[3] * 1.5) / 5);
  		if (runeData[2] > 50) handicap += (200 + (runeData[2] * 2));
  		console.log(handicap)
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