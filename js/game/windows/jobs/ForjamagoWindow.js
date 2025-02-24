import { Window } from '../../../utils/Window.js';
import { Element } from '../../../utils/Element.js';
import { Input } from '../../../utils/Input.js';
import { Selector } from '../../../utils/Selector.js';
import { Tooltip } from '../../../utils/Tooltip.js';
import { resourceData } from '../../data/item/resourceData.js';
import { expJobData } from '../../data/class/expData.js';

export class ForjamagoWindow extends Window { 
	constructor(component) {
		const title = "Forjamago";
	    const width = 850;
	    const height = 485;
	    const x = 530; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;

	    this.tooltip;
	    this.render();
	}

	render = () => {
		this.settingsContainer = new Element(this.container, { className: 'job-settings-container' }).element;  

  	}

  	update = () => {

  	}

  	open() {
	    super.open(); 
	    this.update();
  	}

}