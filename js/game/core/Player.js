export class Player {
	constructor(main, charData) {
		this.main = main;

		this.name = charData.name;
		this.portrait = charData.portrait;
		this.body = charData.body;
		this.class = charData.class;
		this.level = charData.level;
		this.vit = charData.vit;
		this.dps = charData.dps;
		this.dpc = charData.dpc;
		this.pa = charData.pa;
		this.pm = charData.pm;

		this.stats = charData.stats;
		this.spells = charData.spells;
		this.bag = charData.bag;

	}
}
