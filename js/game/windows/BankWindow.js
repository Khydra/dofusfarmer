import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';
import { Input } from '../../utils/Input.js';
import { Tooltip } from '../../utils/Tooltip.js';

export class BankWindow extends Window { 
	constructor(component) {
		const title = "Bankosaco";
	    const width = 600;
	    const height = 450;
	    const x = 530; 
	    const y = 120; 

	    super(title, width, height, x, y); 
	    this.component = component;
	    this.tabSelected = 0;
	    this.itemSearched = "";
	    this.tooltip;
	  	this.render();
	}

	render = () => {
  		this.searchBar = new Input(this.container, { className: 'inventory-search-bar', maxlength: 40, placeholder: 'Buscar', onInput: () => this.search() }).element;
  		this.filter = new Element(this.container, { className: 'inventory-filter' }).element; //dropdown

  		this.renderTabs();
  		this.renderButtons();

  		this.itemContainer = new Element(this.container, { className: 'inventory-item-container' }).element; 

  		this.slot = [];
  		for (let i = 0; i < 40; i++) this.slot[i] = new Element(this.itemContainer, { className: 'inventory-slot-empty' }).element; 
  	}

  	renderTabs = () => {
  		const tabNames = ['TODO', 'EQUIPAMIENTO', 'CONSUMIBLES', 'RECURSOS'];
  		this.tab = [];

  		this.tabContainer = new Element(this.container, { className: 'inventory-tab-container' }).element; 

  		tabNames.forEach((name, i) => {
  			this.tab[i] = new Element(this.tabContainer, { className: 'inventory-tab', text: name}).element; 
  			this.tab[i].addEventListener('click', () => this.changeTab(i))
  		})

  		this.updateTabs();
  	}

  	renderButtons = () => {
  		const buttonNames = ['ALMACENAR TODO', 'ALMACENAR VISIBLE', 'RETIRAR TODO', 'RETIRAR VISIBLE'];
  		this.button = [];

  		this.buttonContainer = new Element(this.container, { className: 'bank-button-container' }).element; 

  		buttonNames.forEach((name, i) => {
  			this.button[i] = new Element(this.buttonContainer, { className: 'bank-button', text: name}).element; 
  			this.button[i].addEventListener('click', () => this.handleButtonAction(i))
  		})
  	}

  	updateTabs = () => {
  		this.tab.forEach((tab, i) => {
  			(i == this.tabSelected) ? tab.className = 'inventory-tab-selected' : tab.className = 'inventory-tab';
  		});
  	}

  	changeTab = (n) => {
  		this.tabSelected = n;
  		this.updateTabs();
  		this.updateItems();
  	}

	open() {
	    super.open(); 
	    this.updateItems();
  	}

  	destroyItems = () => {
  		if (this.slot && this.slot.length) {
	        this.slot.forEach(slot => {
	            if (slot.parentNode) {
	                slot.parentNode.removeChild(slot);
	            }
	        });
	        this.slot = [];
	    }
  		for (let i = 0; i < 40; i++) this.slot[i] = new Element(this.itemContainer, { className: 'inventory-slot-empty' }).element; 
  	}

  	updateItems = () => {
  		this.destroyItems();

  		const items = this.component.main.bank.items;
  		const arrayItems = Object.values(items);
  		
  		var filtredItems = this.passFilters(arrayItems);

  		filtredItems.forEach((item, i) => {
  			this.drawItem(item, i);
  		})
  	}

  	passFilters = (items) => {
  		const tab = ['all', 'equipment', 'consumable', 'resource'];

  		var filterItems = items.filter(item => item.type === tab[this.tabSelected] || this.tabSelected == 0);

  		if (this.itemSearched.trim() != "") {
  			filterItems = filterItems.filter(item => 
		  		item.name.toLowerCase().includes(this.itemSearched.toLowerCase())
			);
  		}

  		return filterItems;
  	}

  	search = () => {
  		this.itemSearched = this.searchBar.value;
  		this.updateItems();
  	}

  	drawItem = (item, pos) => {
  		this.slot[pos].className = 'inventory-slot';
  		this.slot[pos].style.backgroundImage = `url("${item.image}")`;
  		if (item.type != 'equipment') this.slot[pos].innerHTML = `<span class="isq stroke">x${item.quantity}</span>`;

  		// Crear el tooltip al pasar el ratón por encima del slot
		this.tooltip = new Tooltip(this.slot[pos], item, 'bankWindow', this);
  	}

  	handleButtonAction = (i) => {
  		if (i == 0) this.storeAll();
  		if (i == 1) this.storeVisible();
  		if (i == 2) this.withdrawAll();
  		if (i == 3) this.withdrawVisible();
  	}

  	storeAll = () => {
		const items = this.component.main.inventory.items;
		Object.keys(items).forEach(key => {
			this.component.main.bank.obtainItem(items[key], items[key].quantity);
			this.component.main.inventory.removeAll(items[key]);
		})

		this.updateItems();
		this.component.inventoryWindow.update();
  	}

  	withdrawAll = () => {
		console.log('widraw')
  	}

  	storeVisible = () => {
		console.log('stopre vis')
  	}

  	withdrawVisible = () => {
  		console.log('widraw vis')	
  	}

}