import { Window } from '../../../utils/Window.js';
import { Element } from '../../../utils/Element.js';
import { Input } from '../../../utils/Input.js';
import { Selector } from '../../../utils/Selector.js';

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
	    this.recipesShown;
	    this.component = component;
	    this.filter = {
	    	sort: 'todo',
	    	level: [1, 10]
	    }
	    this.render();
	}

	render = () => {
		this.settingsContainer = new Element(this.container, { className: 'job-settings-container' }).element;  

    	new Selector(this.settingsContainer, "Mostrar", ["Todo", "Sombrero", "Capa"], 'job-recipe-type', (value) => {
    		let sortValues =  ["todo", "sombrero", "capa"]
    		this.filter.sort = sortValues[value];
    		this.update();
    	});
    	new Selector(this.settingsContainer, "Nivel", 
    		["1 - 10", "11 - 20", "21 - 30", "31 - 40", "41 - 50", "51 - 60", "61 - 70", "71 - 80", "81 - 90", "91 - 100", "101 - 110", 
    		 "111 - 120", "121 - 130", "131 - 140", "141 - 150", "151 - 160", "161 - 170", "171 - 180", "181 - 190", "191 - 200"], 
    		'job-recipe-level', (value) => {
    		this.filter.level = [value*10 + 1, (value+1)*10];
    		this.update();
    	});
    	
		this.recipeContainer = new Element(this.container, { className: 'job-recipe-container' }).element; 
  		this.recipeSlot = [];
  		this.recipeSlotImage = [];
  		this.recipeSlotName = [];
  		this.recipeSlotLevel = [];
  		this.recipeSlotIngredientContainer = [];
  	}

  	update = () => {
  		this.clearRecipes();
  		this.drawRecipes();
  	}

  	drawRecipes = () => {
  		this.recipesShown = this.filterRecipes();
  		this.recipeSlot = [];
  		console.log(this.recipesShown)
  		Object.keys(this.recipesShown).forEach((key, i) => {
  			this.recipeSlot[i] = new Element(this.recipeContainer, { className: 'job-recipe-slot' }).element; 
  			this.recipeSlotImage[i] = new Element(this.recipeSlot[i], { className: 'job-recipe-slot-image', image: sastreRecipeData[key].item.image }).element; 
			this.recipeSlotName[i] = new Element(this.recipeSlot[i], { className: 'job-recipe-slot-name', text: sastreRecipeData[key].item.name}).element; 
			this.recipeSlotLevel[i] = new Element(this.recipeSlot[i], { className: 'job-recipe-slot-level', text: `Nivel ${sastreRecipeData[key].item.level}`}).element; 
			this.recipeSlotIngredientContainer[i] = new Element(this.recipeSlot[i], { className: 'job-recipe-slot-ingredient-container'}).element; 
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

  	clearRecipes = () => {
	  // Verifica si hay recetas creadas
		if (this.recipeSlot && this.recipeSlot.length > 0) {
		    // Recorre cada slot de receta y elimina el elemento del DOM
		    this.recipeSlot.forEach((slot) => {
		      	if (slot.parentNode) {
		        	slot.parentNode.removeChild(slot);
		      	}
		    });

		    // Limpia los arrays para evitar referencias residuales
		    this.recipeSlot = [];
		    this.recipeSlotImage = [];
		    this.recipeSlotName = [];
		    this.recipeSlotLevel = [];
		    this.recipeSlotIngredientContainer = [];
		}
	}

  	filterRecipes = () => {
  		let recipes = this.filterByLevel(sastreRecipeData, this.filter.level[0], this.filter.level[1]);

  		if (this.filter.sort != 'todo') recipes = this.filterSort(recipes, this.filter.sort);

  		return recipes;
  	}

  	filterSort = (recipes, sort) => {
	  	return Object.fromEntries(
	    	Object.entries(recipes).filter(([key, value]) => value.item.sort === sort)
	  	);
	};

	filterByLevel = (recipes, minLevel, maxLevel) => {
	  	return Object.fromEntries(
	    	Object.entries(recipes).filter(([key, value]) => {
		      	const level = value.item.level;
		      	return level >= minLevel && level <= maxLevel;
	    	})
	  	);
	};

}