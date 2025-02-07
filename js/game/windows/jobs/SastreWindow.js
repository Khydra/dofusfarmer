import { Window } from '../../../utils/Window.js';
import { Element } from '../../../utils/Element.js';
import { sastreRecipeData } from '../../data/item/recipeData.js';

export class SastreWindow extends Window { 
	constructor(component) {
		const title = "Sastre";
	    const width = 600;
	    const height = 450;
	    const x = 530; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;
	    this.render();
	}

	render = () => {
		this.recipeContainer = new Element(this.container, { className: 'job-recipe-container' }).element; 
  		this.recipeSlot = [];
  		this.recipeSlotImage = [];
  		this.recipeSlotName = [];
  		this.recipeSlotIngredients = [];
  		this.recipeCraft = [];
  	}

  	update = () => {
  		this.recipeSlot = [];
  		
  		Object.keys(sastreRecipeData).forEach((key, i) => {
  			this.recipeSlot[i] = new Element(this.recipeContainer, { className: 'job-recipe-slot' }).element; 
  			console.log(sastreRecipeData[key])
  		})
  	}

  	open() {
	    super.open(); 
	    this.update();
  	}
}