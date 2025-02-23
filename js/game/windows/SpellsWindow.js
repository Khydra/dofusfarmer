import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';

export class SpellsWindow extends Window { 
	constructor(component) {
		const title = "Hechizos";
	    const width = 600;
	    const height = 500;
	    const x = 530; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;

	    this.spellSelected;
	    this.levelSelected;

	    this.render();
	}

	render = () => {
		this.spellList = this.component.main.player.spells;
		this.spellSelected = this.spellList[0];
	    this.levelSelected = this.spellList[0].level;

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
			this.spellContainer[key].addEventListener('click', () => { this.selectSpell(key) })
		})

		this.availablePoints = new Element(this.container, { className: 'spells-available-points' }).element;

		this.infoContainer = new Element(this.container, { className: 'spells-info-container' }).element; 

		this.infoLevelContainer = new Element(this.infoContainer, { className: 'spells-info-level-container' }).element; 
		this.infoLevel = [];

		for (let i = 1; i < 7; i++) {
			this.infoLevel[i] = new Element(this.infoLevelContainer, { className: 'spells-info-level stroke', text: i }).element; 
		}

		this.infoImage = new Element(this.infoContainer, { className: 'spells-info-image' }).element;
		this.infoName = new Element(this.infoContainer, { className: 'spells-info-name stroke' }).element;
		this.infoLevelAvailable = new Element(this.infoContainer, { className: 'spells-info-level-avialable stroke' }).element;

		this.infoDataContainer = new Element(this.infoContainer, { className: 'spells-info-data-container' }).element;
		this.infoDescription = new Element(this.infoDataContainer, { className: 'spells-info-description' }).element;
		this.infoData = new Element(this.infoDataContainer, { className: 'spells-info-data' }).element;
		this.infoDamage = new Element(this.infoDataContainer, { className: 'spells-info-damage' }).element;
		this.infoDamageCritical = new Element(this.infoDataContainer, { className: 'spells-info-damage-critical' }).element;

		this.update();
		this.drawSpell();

  	}

  	update = () => {
  		this.availablePoints.innerText = `Puntos disponibles: ${this.component.main.player.spellPoints}`;
  	}

  	drawSpell = () => {
  		this.infoImage.style.backgroundImage = `url("${this.spellSelected.image}")`;
		this.infoName.innerText = this.spellSelected.name;
		this.infoLevelAvailable.innerText = `Nivel necesario: ${this.spellSelected.learnedAt}`;

		this.infoDescription.innerText = this.spellSelected.description;

		this.drawSpellInfoData();
		this.drawSpellInfoDamage();

  		this.update();
  	}

  	drawSpellInfoData = () => {
  		this.infoData.innerHTML = "";	
  		if (this.spellSelected.costType == 'pa') this.infoData.innerHTML = `${this.spellSelected.cost[this.levelSelected]} PA`;
  		else this.infoData.innerHTML = `${this.spellSelected.cost[this.levelSelected]} PM`;
  		
  		this.infoData.innerHTML += `<br> Crítico: ${this.spellSelected.crt}%`;
  		if (this.spellSelected.use) this.infoData.innerHTML += `<br> Usos por turno: ${this.spellSelected.use[this.levelSelected]}`;
  		if (this.spellSelected.cooldown) this.infoData.innerHTML += `<br> Enfriamiento: ${this.spellSelected.cooldown[this.levelSelected]} turnos`;
  	}

  	drawSpellInfoDamage = () => {
  		this.infoDamage.innerHTML = "<span class='spells-info-dmg-label'>Daño: </span><br>";	
  		Object.keys(this.spellSelected.damage[this.levelSelected]).forEach((key) => {
  			this.infoDamage.innerHTML += `
  				<span class='${key} spells-info-dmg-value'>${this.spellSelected.damage[this.levelSelected][key][0]} a 
  				${this.spellSelected.damage[this.levelSelected][key][1]} ${text.stat[key]}</span>
  			`
  		})
  		this.infoDamage.innerHTML += `<br> <span class='neu spells-info-dmg-value'>${this.spellSelected.effectDescription[this.levelSelected]}</span>`;

  		this.infoDamageCritical.innerHTML = "<span class='spells-info-dmg-label'>Daño crítico: </span><br>";
  		Object.keys(this.spellSelected.damageCritical[this.levelSelected]).forEach((key) => {
  			this.infoDamageCritical.innerHTML += `
  				<span class='${key} spells-info-dmg-value'>${this.spellSelected.damageCritical[this.levelSelected][key][0]} a 
  				${this.spellSelected.damageCritical[this.levelSelected][key][1]} ${text.stat[key]}</span>
  			`
  		})	
  		this.infoDamageCritical.innerHTML += `<br> <span class='neu spells-info-dmg-value'>${this.spellSelected.effectCriticalDescription[this.levelSelected]}</span>`;
  	}

  	selectSpell = (pos) => {
  		this.spellSelected = this.spellList[pos];
	    this.levelSelected = this.spellList[pos].level;
  		this.drawSpell();
  	}

  	open() {
	    super.open(); 
	    this.update();
  	}
}