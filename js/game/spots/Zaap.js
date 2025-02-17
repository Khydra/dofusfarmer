import { Element } from '../../utils/Element.js';

export class Zaap {
	constructor(game, player, spot) {
		this.game = game;
		this.player = player;
		this.spot = spot;
		this.zaapListShowed = false;

		this.render();
	}

	render = () => {
		this.zaapList = new Element(this.game.container, { className: 'zaap-list' }).element;

		this.buttonContainer = new Element(this.game.container, { className: 'zaap-button-container',  }).element;

		this.buttonView = new Element(this.buttonContainer, { className: 'zaap-button', text: `Mostrar Zaaps` }).element;
		this.buttonSave = new Element(this.buttonContainer, { className: 'zaap-button', text: `Guardar Zaap` }).element;

		this.buttonView.addEventListener('click', () => this.viewZaapList());
		this.update();
	}

	update = () => {

	}

	viewZaapList = () => {
		if (!this.zaapListShowed) {
			this.zaapList.style.display = 'flex';
			this.buttonView.innerText = `Ocultar Zaaps`;
			this.zaapListShowed = true;
		} else {
			this.zaapList.style.display = 'none';
			this.buttonView.innerText = `Mostrar Zaaps`;
			this.zaapListShowed = false;
		}
	}

	memorizeZaap = () => {

	}

	saveZaap = () => {

	}

	travel = () => {

	}

	destroy = () => {
        if (this.zaapList) this.zaapList.remove();
        if (this.buttonContainer) this.buttonContainer.remove();
        if (this.buttonView) this.buttonView.remove();
        if (this.buttonSave) this.buttonSave.remove();
    }
}