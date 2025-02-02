export class Inventory {
	constructor(main, charData) {
		this.main = main;
		this.items = charData.inventory;
	}

	obtainItem = (item) => {
		if (this.items[item.key]) {
		    this.items[item.key].quantity += 1;
		} else {
		    this.items[item.key] = {
		      	...item, 
		      	quantity: 1          
		    };
		}
	}

	removeItem = (item) => {
		if (this.items[item.key].quantity > 1) {
		    // Si hay más de uno, resta 1 a la cantidad
		    this.items[item.key].quantity -= 1;
		} else {
		    // Si solo hay uno, elimina el objeto de la mochila
		    delete this.items[item.key];
		}
	}	
}