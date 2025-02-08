import { Element } from '../utils/Element.js';
import { Input } from '../utils/Input.js';
import { classData } from '../game/data/classData.js';
import { createData } from '../file/save.js';

export class CharacterCreation {
	constructor(data) {
		this.data = data;
		this.genderSelected = 'male';
		this.classSelected = classData['yopuka'];
		this.render();
	}

	render = () => {
		this.container = new Element(document.body, { className: 'new-character-container' }).element;

		this.leftSection = new Element(this.container, { className: 'new-character-left-section' }).element;
		this.midSection = new Element(this.container, { className: 'new-character-mid-section' }).element;
		this.rightSection = new Element(this.container, { className: 'new-character-right-section' }).element;

		// LEFT SECTION
		this.genderContainer = new Element(this.leftSection, { className: 'new-character-gender-container' }).element;
		this.genderMale = new Element(this.genderContainer, { className: 'new-character-gender-selected', text: 'M' }).element;
		this.genderFemale = new Element(this.genderContainer, { className: 'new-character-gender', text: 'F' }).element;

		this.genderMale.addEventListener('click', () => this.swapGender('male'));
		this.genderFemale.addEventListener('click', () => this.swapGender('female'));

		this.classContainer = new Element(this.leftSection, { className: 'new-character-class-container' }).element;
		this.classTitle = new Element(this.classContainer, { className: 'new-character-class-title', text: 'Clase' }).element;

		Object.keys(classData).forEach((c) => {
			let char = classData[c];
			this[`classPortrait${char.name}`] = new Element(this.classContainer, { className: 'new-character-class-portrait', image: char.image.portrait[this.genderSelected] }).element;
			this[`classPortrait${char.name}`].addEventListener('click', () => this.classSelect(char));
		});

		this.cancelButton = new Element(this.leftSection, { className: 'new-character-cancel-button', text: 'VOLVER' }).element;
		this.cancelButton.addEventListener('click', () => this.destroy())

		// MID SECTION
		this.epithetName = new Element(this.midSection, { className: 'new-character-class-epithet' }).element;
		this.className = new Element(this.midSection, { className: 'new-character-class-name' }).element;
		this.classImage = new Element(this.midSection, { className: 'new-character-class-image' }).element;
		this.playerName = new Input(this.midSection, { className: 'new-character-player-name', maxlength: 12, onlyLetters: true }).element;

		// RIGHT SECTION
		this.spellContainer = new Element(this.rightSection, { className: 'new-character-spell-container' }).element;
		this.createButton = new Element(this.rightSection, { className: 'new-character-create-button', text: 'CREAR' }).element;
		this.createButton.addEventListener('click', () => this.createCharacter())

		this.classSelect(classData['yopuka']); 
		this.update();
	}

	update = () => {
		this.epithetName.innerHTML = this.classSelected.epithet.toUpperCase();
		this.className.innerHTML = this.classSelected.name.toUpperCase();
		this.classImage.style.backgroundImage = `url("${this.classSelected.image.body[this.genderSelected]}")`;
	};

	classSelect = (char) => {
		this[`classPortrait${this.classSelected.name}`].className = 'new-character-class-portrait';
		this[`classPortrait${char.name}`].className = 'new-character-class-portrait-selected';

		this.classSelected = char;
		this.update();
	};

	swapGender = (gender) => {
		this.genderSelected = gender;
		if (gender === 'male') {
			this.genderMale.className = 'new-character-gender-selected';
			this.genderFemale.className = 'new-character-gender';
		} else if (gender === 'female') {
			this.genderMale.className = 'new-character-gender';
			this.genderFemale.className = 'new-character-gender-selected';
		}

		Object.keys(classData).forEach((c) => {
			let char = classData[c];
			this[`classPortrait${char.name}`].style.backgroundImage = `url("${char.image.portrait[this.genderSelected]}")`
		})
		this.update();
	};

	createCharacter = () => {
		if (this.playerName.value.trim() === "") {
			console.log('el campo nombre no puede estar vacio')
			return;
		}

		const character = {
			name: this.playerName.value,
			portrait: this.classSelected.image.portrait[this.genderSelected],
			body: this.classSelected.image.body[this.genderSelected],
			class: this.classSelected,
			level: 1,
			availablePoints: 0,
			exp: [0, 110],
			vit: [60, 60],
			pa: [6, 6],
			pm: [3, 3],
			stats: {
				dps: { base: 1, bonus: 0},
				dpc: { base: 1, bonus: 0},
				pa: { base: 6, bonus: 0},
				pm: { base: 3, bonus: 0},
				paReg: { base: 0, bonus: 0},
				pmReg: { base: 0, bonus: 0},
				vit: { base: 60, bonus: 0},
				pot: { base: 0, bonus: 0},
				str: { base: 120, scroll: 0, bonus: 0 },
				int: { base: 0, scroll: 0, bonus: 0 },
				cha: { base: 0, scroll: 0, bonus: 0 },
				agi: { base: 0, scroll: 0, bonus: 0 },
				strDmg: { base: 0, bonus: 0},
				intDmg: { base: 0, bonus: 0},
				chaDmg: { base: 0, bonus: 0},
				agiDmg: { base: 0, bonus: 0},
				dmg: { base: 0, bonus: 0},
				crt: { base: 0, bonus: 0},
				crtDmg: { base: 0, bonus: 0},
				wis: { base: 0, bonus: 0},
				cur: { base: 0, bonus: 0},
				al: { base: 0, bonus: 0},
				pp: { base: 100, bonus: 0},
				invo: { base: 0, bonus: 0},
			}, 
			kamas: 0,
			spells: {},
			jobs: {
				lenador: { level: 1, exp: [0, 20] },
				minero: { level: 1, exp: [0, 20] },
				alquimista: { level: 1, exp: [0, 20] },
				campesino: { level: 1, exp: [0, 20] },
				joyero: { level: 1, exp: [0, 20] },
				sastre: { level: 1, exp: [0, 20] },
				zapatero: { level: 1, exp: [0, 20] },
				herrero: { level: 1, exp: [0, 20] },
				escultor: { level: 1, exp: [0, 20] },
				fabricante: { level: 1, exp: [0, 20] },
				forjamago: { level: 1, exp: [0, 20] },
			},
			inventory: {},
			equipment: {
				sombrero: null, 
				arma: null, 
				anillo1: null, 
				capa: null, 
				mascota: null,
				amuleto: null, 
				escudo: null, 
				anillo2: null, 
				cinturon: null, 
				botas: null, 
				dofus1: null, 
				dofus2: null, 
				dofus3: null, 
				dofus4: null, 
				dofus5: null, 
				dofus6: null
			}
		}

		createData(character);
		location.reload(true);
	}

	destroy = () => {
		// Remove all event listeners
		this.genderMale.removeEventListener('click', () => this.swapGender('male'));
		this.genderFemale.removeEventListener('click', () => this.swapGender('female'));
		Object.keys(classData).forEach((c) => {
			let char = classData[c];
			this[`classPortrait${char.name}`].removeEventListener('click', () => this.classSelect(char));
		});

		// Remove all DOM elements
		if (this.container && this.container.parentNode) {
			this.container.parentNode.removeChild(this.container);
		}

		// Clear references to avoid memory leaks
		this.container = null;
		this.leftSection = null;
		this.midSection = null;
		this.rightSection = null;
		this.genderContainer = null;
		this.genderMale = null;
		this.genderFemale = null;
		this.classContainer = null;
		this.classTitle = null;
		this.cancelButton = null;
		this.epithetName = null;
		this.className = null;
		this.classImage = null;
		this.playerName = null;
		this.spellContainer = null;
		this.createButton = null;
	};
}