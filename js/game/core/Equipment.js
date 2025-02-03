export class Equipment {
	constructor(main, charData) {
		this.main = main;
		this.items = charData.equipment;
	}

	equipItem = (item) => {
		this.items[item.sort] = item;

	}

	unequipItem = (item) => {
		this.items[item.sort] = null;
	}	
}