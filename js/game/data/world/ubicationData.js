import { enemyData } from './enemyData.js';
import { npcData } from './npcData.js';
import { resourceData } from '../item/resourceData.js';

export const ubicationData = {
	incarnam: {
		key: 'incarnam',
		name: 'Incarnam',
		spot: {
			tutorial: {
				key: 'tutorial',
				name: 'Tutorial',
				image: './assets/images/ubication/incarnam/tutorial.png',
				type: 'event'
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
				type: 'social',
				npc: [
					npcData['hadaRisitas'],
					npcData['nokenOkuto'],
				],
			},
			skirmish: {
				key: 'skirmish',
				name: 'Escaramuza',
				image: './assets/images/ubication/incarnam/skirmish.png',
				type: 'skirmish',
				zone: {
					0: {
						name: 'Monstruos de Incarnam',
						enemies: [
							enemyData['miaucrobata'],
							enemyData['ronroteston'],
							enemyData['tigrelindre']
						],
						background: './assets/images/ubication/incarnam/skirmish.png',
					},
					1: {
						name: 'Monstruos del Cementerio',
						enemies: [
							enemyData['miaucrobata'],
							enemyData['ronroteston'],
							enemyData['tigrelindre']
						],
						background: './assets/images/ubication/incarnam/skirmish.png',
					},
				},
			},
			gathering: {
				key: 'gathering',
				name: 'Recolección',
				image: './assets/images/ubication/incarnam/gathering.png',
				type: 'gathering',
				materials: {
					madera: [resourceData['madera_de_fresno']],
					mineral: [resourceData['hierro']],
					cereal: [resourceData['trigo']],
					planta: [resourceData['ortiga']],
				},
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
				// condition: {
				// 	level: 10,
				// 	description: `Necesitas alcancar el nivel 10 para ir a Astrub.`
				// },
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
				zone: {
					0: {
						name: 'Monstruos de Astrub',
						enemies: [
							enemyData['miaucrobata'],
							enemyData['ronroteston'],
							enemyData['tigrelindre']
						],
					},
					1: {
						name: 'Monstruos de las Alcantarillas',
						enemies: [
							enemyData['miaucrobata'],
							enemyData['ronroteston'],
							enemyData['tigrelindre']
						],
					}
				},
			},
			gathering: {
				key: 'gathering',
				name: 'Recolección',
				image: './assets/images/ubication/astrub/gathering.png',
				type: 'gathering',
				materials: {
					madera: [resourceData['madera_de_fresno']],
					mineral: [resourceData['hierro']],
					cereal: [resourceData['trigo']],
					planta: [resourceData['ortiga']],
				},
			},
			milicia: {
				key: 'milicia',
				name: 'Milícia',
				image: './assets/images/ubication/astrub/milicia.png',
				type: 'social',
				npc: [
					npcData['consejeraArchi'],
					npcData['guardian'],
				],
			},
			kerubim: {
				key: 'kerubim',
				name: 'Casa de Kerubim',
				image: './assets/images/ubication/astrub/kerubim.png',
				type: 'social',
				npc: [
					npcData['kerubimCrepin'],
				],
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