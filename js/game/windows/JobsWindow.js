import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';

export class JobsWindow extends Window { 
	constructor(component) {
		const title = "Oficios";
	    const width = 600;
	    const height = 450;
	    const x = 530; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;
	    this.render();
	}

	render = () => {
  		
  	}
}