import { expData, expJobData } from '../data/class/expData.js';

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
		this.spellPoints = charData.spellPoints;
		this.ubication = charData.ubication;

		this.vit = charData.vit;
		this.pa = charData.pa;
		this.pm = charData.pm;

		this.kamas = charData.kamas;
		this.stats = charData.stats;
		this.spells = charData.spells;

		this.jobs = charData.jobs;
		this.inventory = charData.inventory;
		this.equipment = charData.equipment;
		this.zaaps = charData.zaaps;
		this.savedZaap = charData.savedZaap;
		this.toolbar = charData.toolbar;
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
		this.main.notification.display(`Subes a nivel ${this.level}`);	
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

	gainExpJob = (value, job) => {
		let expNeeded = this.jobs[job].exp[1] - this.jobs[job].exp[0];

		if (value >= expNeeded) {
	        let extraExp = value - expNeeded; 
	        this.levelUpJob(extraExp, job);            
	    } else {
	    	this.jobs[job].exp[0] += value;  
	    	this.main.menu.jobsWindow.update(); 
	    }
	}

	levelUpJob = (exp, job) => {
		this.jobs[job].level++;
		this.jobs[job].exp = [0, expJobData[this.jobs[job].level + 1]];

		switch (job) {
        	case 'lenador':
            	
                break;
        	case 'minero':
        		
            	break;    
            case 'alquimista':

                break;
            case 'campesino':
            	
                break;    
            case 'joyero':
            	
                break;
            case 'sastre':
            	this.main.menu.jobsWindow.sastreWindow.update();
            	break;
            case 'zapatero':
            	
            	break;
            case 'herrero':
            	
                break;
            case 'escultor':

                break;
            case 'fabricante':

                break;
            case 'forjamago':

                break;
        }

        this.main.notification.display(`Tu oficio ${job} pasa a nivel ${this.jobs[job].level}`);	
		if (exp != undefined) this.gainExpJob(exp, job);
	}

	getData = () => {
		return {
			name: this.name,
			portrait: this.portrait,
			body: this.body,
			class: this.class,
			level: this.level,
			exp: this.exp,
			availablePoints: this.availablePoints,
			spellPoints: this.spellPoints,
			ubication: this.ubication,
			vit: this.vit,
			pa: this.pa,
			pm: this.pm,
			kamas: this.kamas,
			stats: this.stats,
			spells: this.spells,
			jobs: this.jobs,
			zaaps: this.zaaps,
			savedZaap: this.savedZaap,
			toolbar: this.toolbar,
			inventory: this.main.inventory.items,
			equipment: this.main.equipment.items, 
		}
	}

}

