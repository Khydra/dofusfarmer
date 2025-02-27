export class Inventory {
	constructor(main, player) {
		this.main = main;
		this.items = player.inventory;
	}

	obtainItem = (item, q = 1) => {
		if (this.items[item.key]) {
		    this.items[item.key].quantity += q;
		} else {
			// Crear un nuevo objeto con el ítem al inicio
		    this.items = {
		    	[item.key]: { ...item, quantity: q },
		    	...this.items
		    };
		    // this.items[item.key] = {
		    //   	...item, 
		    //   	quantity: q          
		    // };
		}
	}

	removeItem = (item, q = 1) => {
		if (this.items[item.key].quantity > q) {
		    // Si hay más de uno, resta 1 a la cantidad
		    this.items[item.key].quantity -= q;
		} else {
		    // Si solo hay uno, elimina el objeto de la mochila
		    delete this.items[item.key];
		}
	}	

	removeAll = (item) => {
		delete this.items[item.key];
	}

	findItemByNotation = (notation) => {
		return Object.values(this.items).find(item => item.value?.notation === notation) || null;
	}
}