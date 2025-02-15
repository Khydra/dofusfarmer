import { enemyData } from './enemyData.js';

export const ubicationData = {
	incarnam: {
		key: 'incarnam',
		name: 'Incarnam',
		background: './assets/images/ubication/incarnam/background.png',
		option: {
			tutorial: {
				name: 'Tutorial',
				image: './assets/images/ubication/incarnam/tutorial.png',
				type: 'npc'
			},
			zaap: {
				name: 'Zaap',
				image: './assets/images/ubication/incarnam/zaap.png',
				type: 'zaap'
			},
			tabern: {
				name: 'Taberna de Incarnam',
				image: './assets/images/ubication/incarnam/tabern.png',
				type: 'npc'
			},
			battle: {
				name: 'Escaramuza',
				image: './assets/images/ubication/incarnam/battle.png',
				type: 'battle',
				enemies: [
					enemyData['miaucrobata'],
					enemyData['ronroteston'],
					enemyData['tigrelindre']
				],
			},
			gathering: {
				name: 'Recolección',
				image: './assets/images/ubication/incarnam/gathering.png',
				type: 'gathering',
				materials: [
					null
				],
			},
			dungeon: {
				name: 'Cripta de Chadalid',
				image: './assets/images/ubication/incarnam/dungeon.png',
				type: 'dungeon'
			},
			moveAstrub: {
				name: 'Ir a Astrub',
				image: './assets/images/ubication/incarnam/moveAstrub.png',
				type: 'travel'
			},
		},
		
	},
	astrub: {
		key: 'astrub',
		name: 'Ciudad de Astrub',
		background: './assets/images/background/astrub.png',
		option: {
			battle: {
				name: 'Combate',
				image: null
			},
			gathering: {
				name: 'Recolección',
				image: null
			},
			dungeon: {
				name: 'Mazmorra de Incarnam',
				image: null
			},
			moveIncarnam: {
				name: 'Ir a Incarnam',
				image: null
			},
		},
		enemies: [
			enemyData['miaucrobata'],
			enemyData['ronroteston'],
			enemyData['tigrelindre']
		],
		materials: [

		],
		dungeon: {

		}
	}
}