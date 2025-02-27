import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';
import { Input } from '../../utils/Input.js';
import { resourceData} from '../data/item/resourceData.js';
import { generateItemStats } from '../manager/itemManager.js'
import { expJobData } from '../data/class/expData.js';

export class CraftWindow extends Window { 
	constructor(component) {
		const title = "Creación";
	    const width = 300;
	    const height = 325;

	    super(title, width, height); 
	    this.component = component;
	    this.recipe = undefined;
	    this.job = undefined;
	    this.amount = 1;
	    this.canCraft = false;

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
  		this.inputAmount = new Input(this.itemContainer, { className: 'craft-item-amount', maxlength: 4, onlyNumbers: true, minValue: 1, onInput: () => this.update() }).element;
  		this.buttonMore = new Element(this.itemContainer, { className: 'craft-button-more stroke', text: '+' }).element;
  		this.buttonMax = new Element(this.itemContainer, { className: 'craft-button-max stroke', text: 'MAX' }).element;

  		this.buttonMin.addEventListener('click', () => this.amountButtonHandler('min'));
  		this.buttonLess.addEventListener('click', () => this.amountButtonHandler('less'));
  		this.buttonMore.addEventListener('click', () => this.amountButtonHandler('more'));
  		this.buttonMax.addEventListener('click', () => this.amountButtonHandler('max'));

  		this.buttonCraft = new Element(this.itemContainer, { className: 'craft-button stroke', text: 'FUSIONAR' }).element;
  		this.buttonCraft.addEventListener('click', () => this.craft())
  	}

  	update = (recipe, job) => {
  		if (this.inputAmount.value === "") this.inputAmount.value = 1;
  		if (recipe) {
  			this.window.style.zIndex = ++Window.zIndexCounter;
  			this.job = job;
  			this.recipe = recipe;
  			this.inputAmount.value = 1;
  			this.itemName.innerText = this.recipe.name;
  			this.itemImage.style.backgroundImage = `url("${this.recipe.image}")`;
  			this.showRecipeIngredients();
  		}
  		
  		this.updateAmount();
  	}

  	open(recipe, job) {
	    super.open(); 
	    this.recipe = recipe;
	    this.job = job;
	    this.inputAmount.value = 1;
	    this.itemName.innerText = this.recipe.name;
  		this.itemImage.style.backgroundImage = `url("${this.recipe.image}")`;
  		this.showRecipeIngredients();
	    this.update();
  	}

  	updateAmount = () => {
  		this.amount = this.inputAmount.value;
  		this.showRecipeIngredientsAmount();
  	}

  	amountButtonHandler = (btn) => {
  		switch(btn) {
  			case 'min':
  				this.inputAmount.value = 1;
  				break;
  			case 'less':
  				if (this.amount > 1) this.inputAmount.value--;
  				break;
  			case 'more':
  				this.inputAmount.value++;
  				break;
  			case 'max':
  				let maxMin = [];
  				Object.keys(this.recipe.recipe).forEach(key => {
  					let max;
  					if (this.component.component.main.inventory.items[key] != undefined) {
  						max = Math.floor(this.component.component.main.inventory.items[key].quantity / this.recipe.recipe[key]);
  					} else max = 1;
  					maxMin.push(max);
  				})
  				this.inputAmount.value = Math.min(...maxMin);
  				break;
  		}
  		this.update();
  	}

  	showRecipeIngredients = () => {
  		this.ingredientSlot.forEach(slot => {
  			slot.style.backgroundImage = "";
  			slot.innerHTML = "";
  			slot.className = "craft-ingredient-slot-empty";
  		})

  		Object.keys(this.recipe.recipe).forEach((key, i) => {
  			this.ingredientSlot[i].style.backgroundImage = `url("${resourceData[key].image}")`;
  		})
  	}

  	showRecipeIngredientsAmount = () => {
  		this.canCraft = true;
  		Object.keys(this.recipe.recipe).forEach((key, i) => {
  			let quantity = this.recipe.recipe[key] * this.amount;
  			this.ingredientSlot[i].innerHTML = `<span class="isq stroke">x${quantity}</span>`;

  			if (this.component.component.main.inventory?.items[key]?.quantity >= quantity) {
  				this.ingredientSlot[i].className = "craft-ingredient-slot-pass";
  			}
  			else {
  				this.ingredientSlot[i].className = "craft-ingredient-slot-need";
  				this.canCraft = false;
  			}
  		})
  	}

  	craft = () => {
  		if (this.canCraft) {
  			// retirar recursos
  			Object.keys(this.recipe.recipe).forEach((key, i) => {
	  			let quantity = this.recipe.recipe[key] * this.amount;
	  			this.component.component.main.inventory.removeItem(this.component.component.main.inventory.items[key], quantity);	
	  		})


  			// crear objeto:
	  		if (this.recipe.type === 'equipment') {
	  			for (let i = 0; i < this.amount; i++) {
	  				this.component.component.main.inventory.obtainItem(generateItemStats(this.recipe, this.component.component.main.player.name));
	  			}		
	  		}

	  		// crear recurso
	  		if (this.recipe.type === 'resource') {
	  			this.component.component.main.inventory.obtainItem(this.recipe, Math.floor(this.amount))		
	  		}

	  		this.component.component.inventoryWindow.update();	
	  		this.gainExp();
	  		this.component.component.main.notification.display(`Has fabricado x${this.amount} ${this.recipe.name}`);	
  			this.close();
  		}
  	}

  	gainExp = () => {
  		let exp = Math.floor(expJobData[this.recipe.level + 1] * (1 - (0.05 * (this.component.component.main.player.jobs[this.job].level - this.recipe.level))));
  		if (this.recipe.type === 'resource') exp = Math.ceil(exp / 15);
  		if (exp <= 0) exp = 1;
  		exp *= this.amount;
  		console.log(exp)
  		//console.log(this.component.component.main.player.jobs[this.job])
  		this.component.component.main.player.gainExpJob(exp, this.job);
  	}
}