import { Element } from '../utils/Element.js';
import { CharacterCreation } from './CharacterCreation.js';
import { Main } from '../game/Main.js';

export class Init {
	constructor(data) {
		this.data = data;

		this.render();
	}

	render = () => {
		//this.title = new Element(document.body, { className: 'game-title', text: 'DOFUS FARMER' }).element;
		
		this.characterContainer = new Element(document.body, { className: 'init-character-container' }).element;
		this.character = [];
		this.characterName = [];
		this.characterBody = [];
		this.characterLevel = [];
		this.characterClass = [];
		this.characterClickHandlers = []; // Aseguramos que este array siempre esté inicializado
		this.newCharacterClickHandler = null; // Inicializar el manejador para el botón de nuevo personaje

		Object.keys(this.data.character).forEach((char, i) => {
			this.renderCharacter(this.data.character[char], i);
		})
		
		if (Object.keys(this.data.character).length < 3) {
			// Definimos el manejador para el botón de nuevo personaje
			this.newCharacterClickHandler = () => { 
				new CharacterCreation(this.data);
			};
			this.newCharacter = new Element(this.characterContainer, { className: 'init-new-character', text: '+' }).element;
			this.newCharacter.addEventListener('click', this.newCharacterClickHandler);
		}
	}

	renderCharacter = (char, i) => {
		this.character[i] = new Element(this.characterContainer, { className: 'init-character' }).element;
		this.characterName[i] = new Element(this.character[i], { className: 'init-character-name', text: char.name }).element;
		this.characterBody[i] = new Element(this.character[i], { className: 'init-character-body', image: char.body}).element;
		this.characterLevel[i] = new Element(this.character[i], { className: 'init-character-level', text: `Nivel ${char.level}` }).element;
		this.characterClass[i] = new Element(this.character[i], { className: 'init-character-class', text: char.class.name.toUpperCase() }).element;

		const clickHandler = () => { 
	        new Main(char);
	        this.destroy();
	    };

	    this.character[i].addEventListener('click', clickHandler);

	    // Almacena el handler para poder eliminarlo en destroy
	    this.characterClickHandlers[i] = clickHandler;
	}

	destroy = () => {
	    // Eliminar el event listener del botón para crear un nuevo personaje
	    if (this.newCharacter && this.newCharacterClickHandler) {
	        this.newCharacter.removeEventListener('click', this.newCharacterClickHandler);
	    }

	    // Verificar que 'this.character' tenga elementos antes de iterar
	    if (this.character && this.character.length > 0) {
	        this.character.forEach((charElement, i) => {
	            // Verificar que el elemento y el handler existan
	            if (charElement && this.characterClickHandlers[i]) {
	                charElement.removeEventListener('click', this.characterClickHandlers[i]);
	            }
	            if (charElement && charElement.parentNode) {
	                charElement.parentNode.removeChild(charElement);
	            }
	        });
	    }

	    // Eliminar los elementos generados para la interfaz
	    //if (this.title && this.title.parentNode) {
	    //    this.title.parentNode.removeChild(this.title);
	    //}
	    if (this.characterContainer && this.characterContainer.parentNode) {
	        this.characterContainer.parentNode.removeChild(this.characterContainer);
	    }

	    // Limpiar las referencias de los objetos
	    //this.title = null;
	    this.characterContainer = null;
	    this.character = [];
	    this.characterName = [];
	    this.characterBody = [];
	    this.characterLevel = [];
	    this.characterClass = [];
	    this.characterClickHandlers = []; // Limpiar los handlers
	    this.newCharacter = null;
	    this.newCharacterClickHandler = null; // Limpiar el manejador
	}
}
