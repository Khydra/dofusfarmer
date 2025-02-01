import { Window } from '../../utils/Window.js';

export class Inventory extends Window { 
	constructor() {
		const title = "Inventario";
	    const content = ""; 
	    const width = 600;
	    const height = 450;
	    const x = 380; 
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