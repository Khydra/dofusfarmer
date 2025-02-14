export class Enemy {
	constructor(main, enemyData) {
		this.main = main;

		this.name = enemyData.name;
		this.image = enemyData.image;
		this.drop = enemyData.drop;

		if (enemyData.isSet) {
			this.level = enemyData.level;
			this.vit = enemyData.vit;
			this.exp = enemyData.exp;
		} else this.setStats(enemyData);


		this.render();
	}

	render() {

	}

	update() {

	}	

	setStats(enemyData) {

		this.level = enemyData.level[Math.floor(Math.random() * enemyData.level.length)]
		this.vit = [enemyData.vit[this.level], enemyData.vit[this.level]];
		this.exp = enemyData.exp[this.level];
	}

	getData() {
		return {
			isSet: true,
			name: this.name,
			image: this.image,
			drop: this.drop,
			level: this.level,
			vit: this.vit,
			exp: this.exp,
		}
	}
}