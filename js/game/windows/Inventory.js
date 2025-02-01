import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';
import { Input } from '../../utils/Input.js';

export class Inventory extends Window { 
	constructor(component) {
		const title = "Inventario";
	    const width = 600;
	    const height = 450;
	    const x = 380; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;

	  	this.render();
	}

	render = () => {
  		this.searchBar = new Input(this.container, { className: 'inventory-search-bar', maxlength: 40, placeholder: 'Buscar' }).element; //input
  		this.filter = new Element(this.container, { className: 'inventory-filter' }).element; //dropdown
  		this.itemContainer = new Element(this.container, { className: 'inventory-item-container' }).element; 
  		this.kamas = new Element(this.container, { className: 'inventory-kamas' }).element; 
  	}

	open() {
	    super.open(); 
	    this.update();
  	}

  	update = () => {
  		const player = this.component.main.player;

  		this.kamas.innerText = `${player.kamas} Kamas`;
  	}



}