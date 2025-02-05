import { expData } from '../data/expData.js';

export class Player {
	constructor(main, charData) {
		this.main = main;

		this.name = charData.name;
		this.portrait = charData.portrait;
		this.body = charData.body;
		this.class = charData.class;
		this.level = charData.level;
		this.exp = charData.exp;
		this.availablePoints = charData.availablePoints;

		this.vit = charData.vit;
		this.pa = charData.pa;
		this.pm = charData.pm;

		this.kamas = charData.kamas;
		this.stats = charData.stats;
		this.spells = charData.spells;

		console.log(this)
	}

	gainExp = (value) => {
		let expNeeded = this.exp[1] - this.exp[0];

		if (value >= expNeeded) {
	        let extraExp = value - expNeeded; 
	        this.levelUp(extraExp);            
	    } else {
	    	this.exp[0] += value;           
	    	this.main.status.update();
	    }
	}

	levelUp = (exp) => {
		this.level++;
		this.availablePoints += 5;
		this.stats.vit.base += 5;
		this.exp = [0, expData[this.level]];
		this.main.status.update();
		if (exp != undefined) this.gainExp(exp);
	}

	distributePoint = (stat) => {
		if (this.stats[stat].base < 100 && this.availablePoints >= 1) {
			this.availablePoints -= 1;
			this.stats[stat].base++;
		} else if (this.stats[stat].base < 200 && this.availablePoints >= 2) {
			this.availablePoints -= 2;
			this.stats[stat].base++;
		} else if (this.availablePoints >= 3) {
			this.availablePoints -= 3;
			this.stats[stat].base++;
		}
	}

	

}
