import { enemyData } from './enemyData.js';

export const ubicationData = {
	incarnam: {
		key: 'incarnam',
		name: 'Incarnam',
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
				type: 'travel',
				condition: {
					level: 10,
					description: `Necesitas alcancar el nivel 10 para ir a Astrub.`
				},
				newUbication: ['astrub', 'moveIncarnam']
			},
		},
		
	},
	astrub: {
		key: 'astrub',
		name: 'Ciudad de Astrub',
		spot: {
			zaap: {
				key: 'zaap',
				name: 'Zaap',
				image: './assets/images/ubication/astrub/zaap.png',
				type: 'zaap'
			},
			skirmish: {
				key: 'skirmish',
				name: 'Escaramuza',
				image: './assets/images/ubication/astrub/skirmish.png',
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
				image: './assets/images/ubication/astrub/gathering.png',
				type: 'gathering',
				materials: [
					null
				],
			},
			milicia: {
				key: 'milicia',
				name: 'Milícia',
				image: './assets/images/ubication/astrub/milicia.png',
				type: 'npc',
			},
			kerubim: {
				key: 'kerubim',
				name: 'Casa de Kerubim',
				image: './assets/images/ubication/astrub/kerubim.png',
				type: 'npc',
			},
			moveIncarnam: {
				key: 'moveIncarnam',
				name: 'Ir a Incarnam',
				image: './assets/images/ubication/astrub/moveIncarnam.png',
				type: 'travel',
				newUbication: ['incarnam', 'moveAstrub']
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