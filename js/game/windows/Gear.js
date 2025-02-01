import { Window } from '../../utils/Window.js';

export class Gear extends Window { 
	constructor() {
		const title = "Equipamiento";
	    const content = ""; 
	    const width = 300;
	    const height = 450;
	    const x = 50; 
	    const y = 80; 

	    super(title, content, width, height, x, y); 
	}

	open() {
	    super.open(); 
	    this.render();
  	}

  	render = () => {
  		console.log('yea')
  	}





}