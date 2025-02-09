import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';
import { Input } from '../../utils/Input.js';

export class CraftWindow extends Window { 
	constructor(component) {
		const title = "Creación";
	    const width = 300;
	    const height = 325;
	    const x = 530; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;
	    this.amount = 1;

	    this.render();
	}

	render = () => {
		this.ingredientContainer = new Element(this.container, { className: 'craft-ingredient-container' }).element;
		this.ingredientWraper = new Element(this.ingredientContainer, { className: 'craft-ingredient-wraper' }).element;
		this.ingredientSlot = [];
		for (let i = 0; i < 8; i++) this.ingredientSlot[i] = new Element(this.ingredientWraper, { className: 'craft-ingredient-slot-empty' }).element;
		
  		this.itemContainer = new Element(this.container, { className: 'craft-item-container' }).element;
  		this.itemImage = new Element(this.itemContainer, { className: 'craft-item-image' }).element;
  		this.itemName = new Element(this.itemContainer, { className: 'craft-item-name stroke' }).element;

  		this.buttonMin = new Element(this.itemContainer, { className: 'craft-button-min stroke', text: 'MIN' }).element;
  		this.buttonLess = new Element(this.itemContainer, { className: 'craft-button-less stroke', text: '-' }).element;
  		this.inputAmount = new Input(this.itemContainer, { className: 'craft-item-amount' }).element;
  		this.buttonMore = new Element(this.itemContainer, { className: 'craft-button-more stroke', text: '+' }).element;
  		this.buttonMax = new Element(this.itemContainer, { className: 'craft-button-max stroke', text: 'MAX' }).element;

  		this.buttonCraft = new Element(this.itemContainer, { className: 'craft-button stroke', text: 'FUSIONAR' }).element;
  	}

  	update = (recipe) => {

  		this.itemName.innerText = 'Chcilla de chager'
  		this.inputAmount.value = this.amount;
  	}

  	open(recipe) {
	    super.open(); 
	    this.update(recipe);

  	}

  	changeAmount = () => {
  		this.amount = this.inputAmount.value;
  	}

}