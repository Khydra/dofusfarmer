import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';

export class SpellsWindow extends Window { 
	constructor(component) {
		const title = "Hechizos";
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

  	update = () => {
  		
  	}

  	open() {
	    super.open(); 
	    this.update();
  	}
}