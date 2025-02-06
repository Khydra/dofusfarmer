import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';
import { Input } from '../../utils/Input.js';
import { Tooltip } from '../../utils/Tooltip.js';

export class InventoryWindow extends Window { 
	constructor(component) {
		const title = "Inventario";
	    const width = 600;
	    const height = 450;
	    const x = 530; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;
	    this.tabSelected = 0;
	    this.itemSearched = "";
	    this.filtredItems = []
	    this.tooltip;
	  	this.render();
	}

	render = () => {
  		this.searchBar = new Input(this.container, { className: 'inventory-search-bar', maxlength: 40, placeholder: 'Buscar', onInput: () => this.search() }).element;
  		this.filter = new Element(this.container, { className: 'inventory-filter' }).element; //dropdown

  		this.renderTabs();

  		this.itemContainer = new Element(this.container, { className: 'inventory-item-container' }).element; 
  		this.kamas = new Element(this.container, { className: 'inventory-kamas' }).element; 

  		this.slot = [];
  		for (let i = 0; i < 40; i++) this.slot[i] = new Element(this.itemContainer, { className: 'inventory-slot-empty' }).element; 
  	}

  	renderTabs = () => {
  		const tabNames = ['TODO', 'EQUIPAMIENTO', 'CONSUMIBLES', 'RECURSOS'];
  		this.tab = [];

  		this.tabContainer = new Element(this.container, { className: 'inventory-tab-container' }).element; 

  		tabNames.forEach((name, i) => {
  			this.tab[i] = new Element(this.tabContainer, { className: 'inventory-tab', text: name}).element; 
  			this.tab[i].addEventListener('click', () => this.changeTab(i));

  		})

  		this.updateTabs();
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
	    this.update();
  	}

  	update = () => {
  		const player = this.component.main.player;
  		this.kamas.innerText = `${player.kamas} Kamas`;

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
  		for (let i = 0; i < 140; i++) this.slot[i] = new Element(this.itemContainer, { className: 'inventory-slot-empty' }).element; 
  	}

  	updateItems = () => {
  		this.destroyItems();

  		const items = this.component.main.inventory.items;
  		const arrayItems = Object.values(items);
  		
  		this.filtredItems = this.passFilters(arrayItems);
  		//console.log(filtredItems)

  		this.filtredItems.forEach((item, i) => {
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
		this.tooltip = new Tooltip(this.slot[pos], item, 'inventoryWindow', this);

  		// Agregar evento de doble clic para destruir equipamiento
    	this.slot[pos].addEventListener('dblclick', () => {
	        if (item.type === 'equipment') this.equipItem(item);
	        if (item.type === 'consumable') this.useItem(item);
    	});
  	}

  	equipItem = (item) => {
  		if (this.component.main.player.level < item.level) return;
  		
  		// si hay equipamiento, desequipar:
  		this.component.equipmentWindow.unequipItem(item.sort);

  		// equipar nuevo objeto:
  		this.component.main.inventory.removeItem(item);
  		this.component.main.equipment.equipItem(item);

	    // actualizar:
	    this.updateItems();
	    this.component.equipmentWindow.update();

	    // console.log(this.component.main.equipment.items)
  	}

  	useItem = (item) => {
  		console.log('use item')
  	}
}