import { setData } from './setData.js'; 

export const equipmentData = {
	//sets
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


	//no-sets
	kamaturon: {
		id: 10000,
		key: 'kamaturon',
		name: "Kamaturón",
		image: './assets/images/items/equipment/0000.webp',
		level: 1,
		stats: {
			pp: [5],
		},
		type: 'equipment',
		sort: 'cinturon',
		set: null,
	},
	kamancletas: {
		id: 10001,
		key: 'kamancletas',
		name: "Kamancletas",
		image: './assets/images/items/equipment/0001.webp',
		level: 1,
		stats: {
			pp: [4, 5],
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	anillo_del_audaz: {
		id: 10002,
		key: 'anillo_del_audaz',
		name: "Anillo del audaz",
		image: './assets/images/items/equipment/0002.webp',
		level: 1,
		stats: {
			pot: [3, 4],
		},
		type: 'equipment',
		sort: 'anillo',
		set: null,
	},
	escudo_de_lenador: {
		id: 10003,
		key: 'escudo_de_lenador',
		name: "Escudo de leñador",
		image: './assets/images/items/equipment/0003.webp',
		level: 1,
		stats: {
			vit: [5, 7],
		},
		type: 'equipment',
		sort: 'escudo',
		set: null,
	},
	botas_de_fuerza: {
		id: 10004,
		key: 'botas_de_fuerza',
		name: "Botas de fuerza",
		image: './assets/images/items/equipment/0004.webp',
		level: 1,
		stats: {
			str: [4, 6],
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	cinturon_de_suerte: {
		id: 10005,
		key: 'cinturon_de_suerte',
		name: "Cinturón de suerte",
		image: './assets/images/items/equipment/0005.webp',
		level: 1,
		stats: {
			cha: [4, 7],
		},
		type: 'equipment',
		sort: 'cinturon',
		set: null,
	},
	pequeno_anillo_del_afortunado: {
		id: 10006,
		key: 'pequeno_anillo_del_afortunado',
		name: "Pequeño anillo del afortunado",
		image: './assets/images/items/equipment/0006.webp',
		level: 1,
		stats: {
			cha: [5, 7],
		},
		type: 'equipment',
		sort: 'anillo',
		set: null,
	},
	pequeno_anillo_magico: {
		id: 10007,
		key: 'pequeno_anillo_magico',
		name: "Pequeño anillo mágico",
		image: './assets/images/items/equipment/0007.webp',
		level: 1,
		stats: {
			int: [4, 7],
		},
		type: 'equipment',
		sort: 'anillo',
		set: null,
	},
	anillo_rexiko: {
		id: 10008,
		key: 'anillo_rexiko',
		name: "Anillo Réxiko",
		image: './assets/images/items/equipment/0008.webp',
		level: 1,
		stats: {
			agi: [4, 5],
		},
		type: 'equipment',
		sort: 'anillo',
		set: null,
	},
	koyar_clavito: {
		id: 10009,
		key: 'koyar_clavito',
		name: "Koyar Clavito",
		image: './assets/images/items/equipment/0009.webp',
		level: 1,
		stats: {
			vit: [7, 10],
			strDmg: [1],
			intDmg: [1],
			chaDmg: [1],
			agiDmg: [1],
		},
		type: 'equipment',
		sort: 'amuleto',
		set: null,
	},
	anillo_forcesco: {
		id: 10010,
		key: 'anillo_forcesco',
		name: "Anillo forcesco",
		image: './assets/images/items/equipment/0010.webp',
		level: 2,
		stats: {
			str: [3, 5],
		},
		type: 'equipment',
		sort: 'anillo',
		set: null,
	},
	anillo_agilesco: {
		id: 10011,
		key: 'anillo_agilesco',
		name: "Anillo agilesco",
		image: './assets/images/items/equipment/0011.webp',
		level: 2,
		stats: {
			agi: [3, 5],
		},
		type: 'equipment',
		sort: 'anillo',
		set: null,
	},
	anillo_vitalesco: {
		id: 10012,
		key: 'anillo_vitalesco',
		name: "Anillo vitalesco",
		image: './assets/images/items/equipment/0012.webp',
		level: 2,
		stats: {
			vit: [7, 10],
		},
		type: 'equipment',
		sort: 'anillo',
		set: null,
	},
	fecarak: {
		id: 10013,
		key: 'fecarak',
		name: "Fecarák",
		image: './assets/images/items/equipment/0013.webp',
		level: 2,
		stats: {
			int: [4, 5],
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	sandalias_tofuescas: {
		id: 10014,
		key: 'sandalias_tofuescas',
		name: "Sandalias tofuescas",
		image: './assets/images/items/equipment/0014.webp',
		level: 3,
		stats: {
			cha: [4, 5],
			agi: [1], // 1 huida
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	colgante_del_buho_enclenque: {
		id: 10015,
		key: 'colgante_del_buho_enclenque',
		name: "Colgante del Búho Enclenque",
		image: './assets/images/items/equipment/0015.webp',
		level: 3,
		stats: {
			int: [7, 10],
			agi: [2, 3] // 2 a 3 huida
		},
		type: 'equipment',
		sort: 'amuleto',
		set: null,
	},
	panuelo_komuntot: {
		id: 10016,
		key: 'panuelo_komuntot',
		name: "Pañuelo Komuntot",
		image: './assets/images/items/equipment/0016.webp',
		level: 3,
		stats: {
			wis: [3, 5],
		},
		type: 'equipment',
		sort: 'sombrero',
		set: null,
	},
	panuelo_de_vitalidad: {
		id: 10017,
		key: 'panuelo_de_vitalidad',
		name: "Pañuelo de vitalidad",
		image: './assets/images/items/equipment/0017.webp',
		level: 3,
		stats: {
			vit: [11, 15],
		},
		type: 'equipment',
		sort: 'sombrero',
		set: null,
	},
	panuelo_pandawushuka: {
		id: 10018,
		key: 'panuelo_pandawushuka',
		name: "Pañuelo Pandawushuka",
		image: './assets/images/items/equipment/0018.webp',
		level: 4,
		stats: {
			crt: [1, 2], // 81 a 100 ini
			agi: [3, 4] // 3 a 4 huida
		},
		type: 'equipment',
		sort: 'sombrero',
		set: null,
	},
	camafeoso: {
		id: 10019,
		key: 'camafeoso',
		name: "Camafeoso",
		image: './assets/images/items/equipment/0019.webp',
		level: 4,
		stats: {
			vit: [7, 10],
		},
		type: 'equipment',
		sort: 'anillo',
		set: null,
	},
	botas_del_gato_con_gotas: {
		id: 10020,
		key: 'botas_del_gato_con_gotas',
		name: "Botas del Gato con Gotas",
		image: './assets/images/items/equipment/0020.webp',
		level: 4,
		stats: {
			cha: [5, 7],
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	botas_de_jalato: {
		id: 10021,
		key: 'botas_de_jalato',
		name: "Botas de Jalató",
		image: './assets/images/items/equipment/0021.webp',
		level: 4,
		stats: {
			agi: [5, 7],
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	la_lagrima_de_jalato: {
		id: 10022,
		key: 'la_lagrima_de_jalato',
		name: "La Lágrima de Jalató",
		image: './assets/images/items/equipment/0022.webp',
		level: 5,
		stats: {
			cha: [5, 7],
		},
		type: 'equipment',
		sort: 'amuleto',
		set: null,
	},
	einekenoso: {
		id: 10023,
		key: 'einekenoso',
		name: "Einekenoso",
		image: './assets/images/items/equipment/0023.webp',
		level: 5,
		stats: {
			cha: [5, 7],
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	escudo_del_girasol_salvaje: {
		id: 10024,
		key: 'escudo_del_girasol_salvaje',
		name: "Escudo del girasol salvaje",
		image: './assets/images/items/equipment/0024.webp',
		level: 5,
		stats: {
			crt: [2, 3],
		},
		type: 'equipment',
		sort: 'escudo',
		set: null,
	},
	ganti_real: {
		id: 10025,
		key: 'ganti_real',
		name: "Ganti Real",
		image: './assets/images/items/equipment/0025.webp',
		level: 6,
		stats: {
			str: [5, 7],
		},
		type: 'equipment',
		sort: 'anillo',
		set: null,
	},
	sandalias_de_inteligencia: {
		id: 10026,
		key: 'sandalias_de_inteligencia',
		name: "Sandalias de inteligencia",
		image: './assets/images/items/equipment/0026.webp',
		level: 6,
		stats: {
			int: [7, 10],
			intDmg: [1, 1],
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	botas_agilescas: {
		id: 10027,
		key: 'botas_agilescas',
		name: "Botas agilescas",
		image: './assets/images/items/equipment/0027.webp',
		level: 6,
		stats: {
			agi: [7, 10],
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},

	amuleto_de_sram: {
		id: 10028,
		key: 'amuleto_de_sram',
		name: "Amuleto de sram",
		image: './assets/images/items/equipment/0028.webp',
		level: 7,
		stats: {
			agi: [5, 7],
			agiDmg: [2],
		},
		type: 'equipment',
		sort: 'amuleto',
		set: null,
	},
	botas_de_kluh: {
		id: 10029,
		key: 'botas_de_kluh',
		name: "Botas de Kluh",
		image: './assets/images/items/equipment/0029.webp',
		level: 7,
		stats: {
			str: [7, 10],
			strDmg: [1],
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	botas_de_suerte: {
		id: 10030,
		key: 'botas_de_suerte',
		name: "Botas de suerte",
		image: './assets/images/items/equipment/0030.webp',
		level: 6,
		stats: {
			cha: [7, 10],
			chaDmg: [1],
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	capa_azulada: {
		id: 10031,
		key: 'capa_azulada',
		name: "Capa azulada",
		image: './assets/images/items/equipment/0031.webp',
		level: 7,
		stats: {
			vit: [6, 10],
			cha: [5, 7],
		},
		type: 'equipment',
		sort: 'capa',
		set: null,
	},
	cinturon_de_cangwejo: {
		id: 10032,
		key: 'cinturon_de_cangwejo',
		name: "Cinturón de kangwejo",
		image: './assets/images/items/equipment/0032.webp',
		level: 7,
		stats: {
			cha: [5, 7],
			chaDmg: [2]
		},
		type: 'equipment',
		sort: 'cinturon',
		set: null,
	},
	cinturon_forcesco {
		id: 10033,
		key: 'cinturon_forcesco',
		name: "Cinturón Forcesco",
		image: './assets/images/items/equipment/0033.webp',
		level: 7,
		stats: {
			str: [9, 12],
			strDmg: [1]
		},
		type: 'equipment',
		sort: 'cinturon',
		set: null,
	},
	cinturon_agilesco {
		id: 10034,
		key: 'cinturon_agilesco',
		name: "Cinturón Agilesco",
		image: './assets/images/items/equipment/0034.webp',
		level: 7,
		stats: {
			agi: [9, 12],
			agiDmg: [1]
		},
		type: 'equipment',
		sort: 'cinturon',
		set: null,
	},
	amuleto_del_buho {
		id: 10035,
		key: 'amuleto_del_buho',
		name: "Amuleto del búho",
		image: './assets/images/items/equipment/0035.webp',
		level: 8,
		stats: {
			int: [10, 13],
		},
		type: 'equipment',
		sort: 'amuleto',
		set: null,
	},
	amuleto_del_oso {
		id: 10036,
		key: 'amuleto_del_oso',
		name: "Amuleto del oso",
		image: './assets/images/items/equipment/0036.webp',
		level: 8,
		stats: {
			str: [10, 13],
		},
		type: 'equipment',
		sort: 'amuleto',
		set: null,
	},
	anillo_de_satisfaccion {
		id: 10037,
		key: 'anillo_de_satisfaccion',
		name: "Anillo de satisfacción",
		image: './assets/images/items/equipment/0037.webp',
		level: 8,
		stats: {
			pa: [1],
			str: [-200],
			int: [-200],
			cha: [-150],
			agi: [-150],
		},
		type: 'equipment',
		sort: 'anillo',
		set: null,
	},
	amuleto_de_milubo {
		id: 10038,
		key: 'amuleto_de_milubo',
		name: "Amuleto del milubo",
		image: './assets/images/items/equipment/0038.webp',
		level: 8,
		stats: {
			vit: [16, 20],
			cur: [3, 4]
		},
		type: 'equipment',
		sort: 'amuleto',
		set: null,
	},
	botas_de_nexus {
		id: 10039,
		key: 'botas_de_nexus',
		name: "Botas de Nexus",
		image: './assets/images/items/equipment/0039.webp',
		level: 8,
		stats: {
			vit: [16, 20],
			cur: [3, 4]
		},
		type: 'equipment',
		sort: 'botas',
		set: null,
	},
	cinturon_vitalesco {
		id: 10040,
		key: 'cinturon_vitalesco',
		name: "Cinturón vitalesco",
		image: './assets/images/items/equipment/0040.webp',
		level: 9,
		stats: {
			vit: [26, 35],
		},
		type: 'equipment',
		sort: 'cinturon',
		set: null,
	},
	amuleto_del_arco_iris {
		id: 10041,
		key: 'amuleto_del_arco_iris',
		name: "Amuleto del Arco Iris",
		image: './assets/images/items/equipment/0041.webp',
		level: 9,
		stats: {
			vit: [7, 10],
			cha: [7, 10]
		},
		type: 'equipment',
		sort: 'amuleto',
		set: null,
	},
	amuleto_de_kroketa {
		id: 10042,
		key: 'amuleto_de_kroketa',
		name: "Amuleto de Kroketa",
		image: './assets/images/items/equipment/0042.webp',
		level: 9,
		stats: {
			cha: [5, 7],
			crt: [2]
		},
		type: 'equipment',
		sort: 'amuleto',
		set: null,
	},
}
