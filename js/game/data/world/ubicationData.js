import { enemyData } from './enemyData.js';

export const ubicationData = {
	incarnam: {
		key: 'incarnam',
		name: 'Incarnam',
		//background: './assets/images/ubication/incarnam/background.png',
		spot: {
			tutorial: {
				key: 'tutorial',
				name: 'Tutorial',
				image: './assets/images/ubication/incarnam/tutorial.png',
				type: 'npc'
			},
			zaap: {
				key: 'zaap',
				name: 'Zaap',
				image: './assets/images/ubication/incarnam/zaap.png',
				type: 'zaap'
			},
			tabern: {
				key: 'tabern',
				name: 'Taberna de Incarnam',
				image: './assets/images/ubication/incarnam/tabern.png',
				type: 'npc'
			},
			skirmish: {
				key: 'skirmish',
				name: 'Escaramuza',
				image: './assets/images/ubication/incarnam/skirmish.png',
				type: 'skirmish',
				enemies: [
					enemyData['miaucrobata'],
					enemyData['ronroteston'],
					enemyData['tigrelindre']
				],
			},
			gathering: {
				key: 'gathering',
				name: 'Recolección',
				image: './assets/images/ubication/incarnam/gathering.png',
				type: 'gathering',
				materials: [
					null
				],
			},
			dungeonChadalid: {
				key: 'dungeonChadalid',
				name: 'Cripta de Chadalid',
				image: './assets/images/ubication/incarnam/dungeonChadalid.png',
				type: 'dungeon'
			},
			moveAstrub: {
				key: 'moveAstrub',
				name: 'Ir a Astrub',
				image: './assets/images/ubication/incarnam/moveAstrub.png',
				type: 'travel'
			},
		},
		
	},
	astrub: {
		key: 'astrub',
		name: 'Ciudad de Astrub',
		//background: './assets/images/background/astrub.png',
		spot: {
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