import { Element } from '../../utils/Element.js';
import { Selector } from '../../utils/Selector.js';

export class Toolbar {
	constructor(main, player) {
		this.main = main;
		this.player = player;
		this.page = 0;

		this.render();
	}

	render = () => {
		this.container = new Element(this.main.centerContainer, { className: 'toolbar-container' }).element;


		this.slotContainer = new Element(this.container, { className: 'toolbar-slot-container' }).element;
		this.slot = [];
		for (let i = 0; i < 22; i++) {
			this.slot[i] = new Element(this.slotContainer, { className: 'toolbar-slot' }).element;
		}

		this.manageContainer = new Element(this.container, { className: 'toolbar-manage-container' }).element;

		new Selector(this.manageContainer, null, ["1", "2", "3", '4', '5'], 'toolbar-page-selector', (value) => {
    		this.update();
    	});

		this.buttonContainer = new Element(this.manageContainer, { className: 'toolbar-button-container' }).element;
		this.spellButton = new Element(this.buttonContainer, { className: 'toolbar-button' }).element;
		this.itemButton = new Element(this.buttonContainer, { className: 'toolbar-button' }).element;

		this.update();
	}

	update = () => {

	}
}