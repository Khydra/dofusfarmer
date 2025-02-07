import { Window } from '../../../utils/Window.js';
import { Element } from '../../../utils/Element.js';
import { sastreRecipeData } from '../../data/item/recipeData.js';
import { resourceData } from '../../data/item/resourceData.js';

export class SastreWindow extends Window { 
	constructor(component) {
		const title = "Sastre";
	    const width = 800;
	    const height = 500;
	    const x = 530; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;
	    this.render();
	}

	render = () => {
		this.settingsContainer = new Element(this.container, { className: 'job-settings-container' }).element;  

		this.recipeContainer = new Element(this.container, { className: 'job-recipe-container' }).element; 
  		this.recipeSlot = [];
  		this.recipeSlotImage = [];
  		this.recipeSlotName = [];
  		this.recipeSlotLevel = [];
  		this.recipeSlotIngredientContainer = [];
  		//this.recipeSlotIngredients = [];
  		this.recipeSlotCraft = [];
  	}

  	update = () => {

  		this.drawRecipes();
  	}

  	drawRecipes = () => {
  		this.recipeSlot = [];

  		Object.keys(sastreRecipeData).forEach((key, i) => {
  			this.recipeSlot[i] = new Element(this.recipeContainer, { className: 'job-recipe-slot' }).element; 
  			this.recipeSlotImage[i] = new Element(this.recipeSlot[i], { className: 'job-recipe-slot-image', image: sastreRecipeData[key].item.image }).element; 
			this.recipeSlotName[i] = new Element(this.recipeSlot[i], { className: 'job-recipe-slot-name', text: sastreRecipeData[key].item.name}).element; 
			this.recipeSlotLevel[i] = new Element(this.recipeSlot[i], { className: 'job-recipe-slot-level', text: `Nivel ${sastreRecipeData[key].item.level}`}).element; 
			this.recipeSlotIngredientContainer[i] = new Element(this.recipeSlot[i], { className: 'job-recipe-slot-ingredient-container'}).element; 
			this.recipeSlotCraft[i] = new Element(this.recipeSlot[i], { className: 'job-recipe-slot-craft', text: `FABRICAR`}).element; 
  			this.drawIngredients(sastreRecipeData[key].recipe, this.recipeSlotIngredientContainer[i]);
  		})
  	}

  	drawIngredients = (recipe, ingredientContainer) => {
  		const ingredients = [];

  		
  		Object.keys(recipe).forEach((key, i) => {
  			ingredients[i] = new Element(ingredientContainer, { className: 'job-recipe-slot-ingredient', image: resourceData[key].image }).element; 
  			ingredients[i].innerHTML = `<span class="isq stroke">x${recipe[key]}</span>`;
  		})
  	}

  	open() {
	    super.open(); 
	    this.update();
  	}
}