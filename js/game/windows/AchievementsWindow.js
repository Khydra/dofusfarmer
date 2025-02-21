import { Window } from '../../utils/Window.js';
import { Element } from '../../utils/Element.js';

export class AchievementsWindow extends Window { 
	constructor(component) {
		const title = "Logros";
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