import { setData } from './setData.js'; 

export const equipmentData = {
	el_flud: {
		id: 0,
		key: 'el_flud',
		name: 'El Flud',
		image: './assets/images/items/equipment/s000-0.webp',
		level: 1,
		stats: {
			agi: [4, 6],
			wis: [3, 4]
		},
		type: 'equipment',
		sort: 'sombrero',
		set: setData['set_del_bun'],
	},
	la_capa_slok: {
		id: 1,
		key: 'la_capa_slok',
		name: 'La Capa Slok',
		image: './assets/images/items/equipment/s000-1.webp',
		level: 1,
		stats: {
			str: [4, 6],
			wis: [3, 4]
		},
		type: 'equipment',
		sort: 'capa',
		set: setData['set_del_bun'],
	},
	las_okupas: {
		id: 2,
		key: 'las_okupas',
		name: 'Las Okupas',
		image: './assets/images/items/equipment/s000-2.webp',
		level: 1,
		stats: {
			int: [4, 6],
			cha: [4, 6]
		},
		type: 'equipment',
		sort: 'botas',
		set: setData['set_del_bun'],
	},
	la_spamita: {
		id: 3,
		key: 'la_spamita',
		name: 'La Spamita',
		image: './assets/images/items/equipment/s000-3.webp',
		level: 1,
		stats: {
			vit: [7, 10],
			int: [4, 6]
		},
		type: 'equipment',
		sort: 'cinturon',
		set: setData['set_del_bun'],
	},
	el_masano: {
		id: 4,
		key: 'el_masano',
		name: 'El Masano',
		image: './assets/images/items/equipment/s000-4.webp',
		level: 1,
		stats: {
			str: [4, 6],
			agi: [4, 6]
		},
		type: 'equipment',
		sort: 'anillo',
		set: setData['set_del_bun'],
	},
	el_smesmo: {
		id: 5,
		key: 'el_smesmo',
		name: "El S'Mesmo",
		image: './assets/images/items/equipment/s000-5.webp',
		level: 1,
		stats: {
			vit: [7, 10],
			cha: [4, 6]
		},
		type: 'equipment',
		sort: 'amuleto',
		set: setData['set_del_bun'],
	},
	el_halt_efkuat: {
		id: 6,
		key: 'el_halt_efkuat',
		name: 'El Halt Efkuat',
		image: './assets/images/items/equipment/s000-6.webp',
		level: 1,
		stats: {
			vit: [11, 15],
		},
		type: 'equipment',
		sort: 'escudo',
		set: setData['set_del_bun'],
	},
	bunihima: {
		id: 7,
		key: 'bunihima',
		name: 'Bunihima',
		image: './assets/images/items/equipment/s000-7.webp',
		level: 1,
		stats: {
			dpc: [1],
			dmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		set: setData['set_del_bun'],
	},
	cofia_ntasma: {
		id: 8,
		key: 'cofia_ntasma',
		name: "Cofia N'Tasma",
		image: './assets/images/items/equipment/s001-0.webp',
		level: 8,
		stats: {
			vit: [11, 15],
			wis: [5, 7]
		},
		type: 'equipment',
		sort: 'sombrero',
		set: setData['set_de_las_almas'],
	},
	capa_sique: {
		id: 9,
		key: 'capa_sique',
		name: 'Capa sique',
		image: './assets/images/items/equipment/s001-1.webp',
		level: 8,
		stats: {
			vit: [11, 15],
			pot: [7, 10]
		},
		type: 'equipment',
		sort: 'capa',
		set: setData['set_de_las_almas'],
	},
	animamuleto: {
		id: 10,
		key: 'animamuleto',
		name: 'Ánimamuleto',
		image: './assets/images/items/equipment/s001-2.webp',
		level: 8,
		stats: {
			crt: [-5],
			al: [1]
		},
		type: 'equipment',
		sort: 'amuleto',
		set: setData['set_de_las_almas'],
	},
	sombrero_de_aventurero: {
		id: 11,
		key: 'sombrero_de_aventurero',
		name: 'Sombrero de aventurero',
		image: './assets/images/items/equipment/s002-0.webp',
		level: 9,
		stats: {
			str: [5],
			int: [5],
			cha: [5],
			agi: [5],
		},
		type: 'equipment',
		sort: 'sombrero',
		set: setData['set_de_aventurero'],
	},
	capa_de_aventurero: {
		id: 12,
		key: 'capa_de_aventurero',
		name: 'Capa de aventurero',
		image: './assets/images/items/equipment/s002-1.webp',
		level: 8,
		stats: {
			str: [5],
			int: [5],
			cha: [5],
			agi: [5],
		},
		type: 'equipment',
		sort: 'capa',
		set: setData['set_de_aventurero'],
	},
	botas_de_aventurero: {
		id: 13,
		key: 'botas_de_aventurero',
		name: 'Botas de aventurero',
		image: './assets/images/items/equipment/s002-2.webp',
		level: 7,
		stats: {
			str: [5],
			int: [5],
			cha: [5],
			agi: [5],
		},
		type: 'equipment',
		sort: 'botas',
		set: setData['set_de_aventurero'],
	},
	cinturon_de_aventurero: {
		id: 14,
		key: 'cinturon_de_aventurero',
		name: 'Cinturón de aventurero',
		image: './assets/images/items/equipment/s002-3.webp',
		level: 6,
		stats: {
			str: [5],
			int: [5],
			cha: [5],
			agi: [5],
		},
		type: 'equipment',
		sort: 'cinturon',
		set: setData['set_de_aventurero'],
	},
	anillo_de_aventurero: {
		id: 15,
		key: 'anillo_de_aventurero',
		name: 'Anillo de aventurero',
		image: './assets/images/items/equipment/s002-4.webp',
		level: 4,
		stats: {
			str: [2],
			int: [2],
			cha: [2],
			agi: [2],
		},
		type: 'equipment',
		sort: 'anillo',
		set: setData['set_de_aventurero'],
	},
	amuleto_de_aventurero: {
		id: 16,
		key: 'amuleto_de_aventurero',
		name: "Amuleto de aventurero",
		image: './assets/images/items/equipment/s002-5.webp',
		level: 5,
		stats: {
			str: [5],
			int: [5],
			cha: [5],
			agi: [5],
		},
		type: 'equipment',
		sort: 'amuleto',
		set: setData['set_de_aventurero'],
	},
}
