export class Equipment {
	constructor(main, charData) {
		this.main = main;
		this.items = charData.equipment;
	}

	equipItem = (item) => {
		switch(item.sort) {
			case 'anillo': 
                for (let i = 1; i <= 2; i++) {
                    let ringSlot = `anillo${i}`;
                    if (this.items[ringSlot] && this.items[ringSlot].id === item.id) {
                    	this.main.menu.equipmentWindow.unequipItem(`anillo${i}`);
                        this.items[ringSlot] = item; // Sustituye el anillo
                        return;
                    }
                }
                for (let i = 1; i <= 2; i++) {
                    let ringSlot = `anillo${i}`;
                    if (!this.items[ringSlot]) {
                        this.items[ringSlot] = item;
                        return;
                    }
                }
               	this.main.menu.equipmentWindow.unequipItem(`anillo2`); // Desequipa el segundo anillo si ambos están ocupados
                this.items[`anillo2`] = item;
                break;
            case 'dofus':
                for (let i = 1; i <= 6; i++) {
                    let dofusSlot = `dofus${i}`;
                    if (!this.items[dofusSlot]) {
                        this.items[dofusSlot] = item;
                        return;
                    }
                }
                this.main.menu.equipmentWindow.unequipItem(`dofus1`); // Desequipa el primer dofus si todos los espacios están ocupados
                this.items[`dofus1`] = item;
                break;
			default: 
				this.items[item.sort] = item;
		}
	}

	unequipItem = (item) => {
        Object.keys(this.items).forEach(key => {
            if (this.items[key] === item) {
                this.items[key] = null;
            }
        });
    }	
}
