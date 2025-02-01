import { Window } from '../../utils/Window.js';

export class Gear extends Window { 
	constructor(component) {
		const title = "Equipamiento";
	    const width = 300;
	    const height = 450;
	    const x = 50; 
	    const y = 80; 

	    super(title, width, height, x, y); 
	    this.component = component;
	}

	open() {
	    super.open(); 
	    this.render();
  	}

  	render = () => {
  		console.log('yea')
  	}





}