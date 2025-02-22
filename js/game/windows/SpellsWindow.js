import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';

export class SpellsWindow extends Window { 
	constructor(component) {
		const title = "Hechizos";
	    const width = 600;
	    const height = 500;
	    const x = 530; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;

	    this.render();
	}

	render = () => {
		this.spellList = this.component.main.player.spells;

		this.listNameLabel = new Element(this.container, { className: 'spells-list-name-label', text: 'Hechizo' }).element; 
		this.listLevelLabel = new Element(this.container, { className: 'spells-list-level-label', text: 'Nivel' }).element;

		this.listContainer = new Element(this.container, { className: 'spells-list-container stroke' }).element; 
		this.spellContainer = [];
		this.spellImage = []
		this.spellName = []
		this.spellLevel = []

		Object.keys(this.spellList).forEach((key) => {
			this.spellContainer[key] = new Element(this.listContainer, { className: 'spells-spell-container' }).element; 
			this.spellImage[key] = new Element(this.spellContainer[key], { className: 'spells-spell-image', image: this.spellList[key].image }).element; 
			this.spellName[key] = new Element(this.spellContainer[key], { className: 'spells-spell-name', text: this.spellList[key].name }).element; 
			this.spellLevel[key] = new Element(this.spellContainer[key], { className: 'spells-spell-level', text: this.spellList[key].level }).element;
		})

		this.availablePoints = new Element(this.container, { className: 'spells-available-points' }).element;

		this.infoContainer = new Element(this.container, { className: 'spells-info-container' }).element; 

		this.update();
  	}

  	update = () => {
  		this.availablePoints.innerText = `Puntos disponibles: ${this.component.main.player.spellPoints}`;
  	}

  	open() {
	    super.open(); 
	    this.update();
  	}
}