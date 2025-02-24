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
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
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
		recipe: {
			trigo: 2, 
			cenizas_eternas: 2
		},
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
		recipe: {
			ortiga: 2, 
			petalo_diafano: 2
		},
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
		recipe: {
			trigo: 2, 
			piel_de_goota: 2
		},
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
		recipe: {
			ortiga: 2, 
			fuego_interno: 2
		},
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
		recipe: {
			trigo: 2, 
			pluma_quimerica: 2
		},
		set: setData['set_del_bun'],
	},
	el_halt_efkuat: {
		id: 6,
		key: 'el_halt_efkuat',
		name: 'El Halt Efkuat',
		image: './assets/images/items/equipment/s000-6.webp',
		level: 1,
		stats: {
			res: [1],
		},
		type: 'equipment',
		sort: 'escudo',
		recipe: {
			tabla_de_aglomerado: 1,
			trigo: 20
		},
		set: setData['set_del_bun'],
	},
	bunihima: {
		id: 7,
		key: 'bunihima',
		name: 'Bunihima',
		image: './assets/images/items/equipment/s000-7.webp',
		level: 1,
		power: {
			earth: [[14, 18]],
		},
		stats: {
			dmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			ferrita: 1,
			ortiga: 20
		},
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
		recipe: {
			petalo_diafano: 4, 
			fuego_interno: 2
		},
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
		recipe: {
			pluma_quimerica: 4, 
			baba_de_jalato: 2
		},
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
		recipe: {
			reliquia_de_incarnam: 4, 
			hueso_de_chafer: 2
		},
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
		recipe: {
			ferrita: 2, 
			reliquia_de_incarnam: 3
		},
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
		recipe: {
			ferrita: 1, 
			fuego_interno: 3
		},
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
		recipe: {
			tabla_de_aglomerado: 2, 
			reliquia_de_incarnam: 3
		},
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
		recipe: {
			cenizas_eternas: 3, 
			tabla_de_aglomerado: 2
		},
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
		recipe: {
			semilla_de_sesamo: 3, 
			tabla_de_aglomerado: 1
		},
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
		recipe: {
			polvo_temporal: 2, 
			tabla_de_aglomerado: 1
		},
		set: setData['set_de_aventurero'],
	},
	sombrero_de_peazo_beyota: {
		id: 17,
		key: 'sombrero_de_peazo_beyota',
		name: 'Sombrero de Peazo Beyota',
		image: './assets/images/items/equipment/s003-0.webp',
		level: 10,
		stats: {
			vit: [16, 20],
			agi: [5],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			pelos_de_arakna_enferma: 5, 
			bellota_de_peazo_beyota: 1
		},
		set: setData['set_de_peazo_beyota'],
	},
	amuleto_de_peazo_beyota: {
		id: 18,
		key: 'amuleto_de_peazo_beyota',
		name: "Amuleto de Peazo Beyota",
		image: './assets/images/items/equipment/s003-1.webp',
		level: 10,
		stats: {
			agi: [7, 10],
			agiDmg: [1, 2],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			baba_de_rosa_demoniaca: 2, 
			bellota_de_peazo_beyota: 1
		},
		set: setData['set_de_peazo_beyota'],
	},
	botas_de_peazo_beyota: {
		id: 19,
		key: 'botas_de_peazo_beyota',
		name: 'Botas de Peazo Beyota',
		image: './assets/images/items/equipment/s003-2.webp',
		level: 10,
		stats: {
			agi: [5],
			agiDmg: [1, 2],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			cejas_de_mosquito: 3, 
			bellota_de_peazo_beyota: 1
		},
		set: setData['set_de_peazo_beyota'],
	},
	pamuleto: {
		id: 20,
		key: 'pamuleto',
		name: "Pamuleto",
		image: './assets/images/items/equipment/s004-0.webp',
		level: 10,
		stats: {
			wis: [4, 5],
			pot: [7, 10],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			pluma_quimerica: 4, 
			hierro: 1
		},
		set: setData['set_pacmano'],
	},
	pacbotas: {
		id: 21,
		key: 'pacbotas',
		name: 'Pacbotas',
		image: './assets/images/items/equipment/s004-1.webp',
		level: 10,
		stats: {
			invo: [1],
			pot: [7, 10],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			hueso_de_chafer: 3, 
			ortiga: 3
		},
		set: setData['set_pacmano'],
	},
	amuleto_tetrista: {
		id: 22,
		key: 'amuleto_tetrista',
		name: "Amuleto tetrista",
		image: './assets/images/items/equipment/s005-0.webp',
		level: 10,
		stats: {
			al: [1],
			str: [-15],
			int: [-15],
			cha: [-15],
			agi: [-15],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			volva_de_amenita: 4, 
			hierro: 1
		},
		set: setData['set_tetrista'],
	},
	anillo_tetrista: {
		id: 23,
		key: 'anillo_tetrista',
		name: 'Anillo tetrista',
		image: './assets/images/items/equipment/s005-1.webp',
		level: 10,
		stats: {
			invo: [1],
			str: [-5],
			int: [-5],
			cha: [-5],
			agi: [-5],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			cola_de_miauflan: 3, 
			volva_de_amenita: 3
		},
		set: setData['set_tetrista'],
	},
	anillo_del_invasor_del_espacio: {
		id: 24,
		key: 'anillo_del_invasor_del_espacio',
		name: "Anillo del invasor del espacio",
		image: './assets/images/items/equipment/s006-0.webp',
		level: 10,
		stats: {
			int: [6, 10],
			cur: [2, 3],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			lana_celeste: 4, 
			hierro: 1
		},
		set: setData['set_del_invasor_del_espacio'],
	},
	cinturon_del_invasor_del_espacio: {
		id: 25,
		key: 'cinturon_del_invasor_del_espacio',
		name: 'Cinturón del invasor del espacio',
		image: './assets/images/items/equipment/s006-1.webp',
		level: 10,
		stats: {
			vit: [11, 15],
			crt: [1, 2],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			hueso_de_chafer: 3, 
			fuego_interno: 3
		},
		set: setData['set_del_invasor_del_espacio'],
	},
	cinturong: {
		id: 26,
		key: 'cinturong',
		name: 'Cinturong',
		image: './assets/images/items/equipment/s007-0.webp',
		level: 10,
		stats: {
			vit: [11, 15],
			dmg: [1, 2],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			hueso_de_chafer: 3, 
			hierro: 1
		},
		set: setData['set_ponguno'],
	},
	amuletong: {
		id: 27,
		key: 'amuletong',
		name: 'Amuletong',
		image: './assets/images/items/equipment/s007-1.webp',
		level: 10,
		stats: {
			wis: [-15],
			invo: [1],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			cola_de_miauflan: 4, 
			reliquia_de_incarnam: 3
		},
		set: setData['set_ponguno'],
	},
	collar_de_khan_karkasa: {
		id: 28,
		key: 'collar_de_khan_karkasa',
		name: 'Collar de Khan Karkasa',
		image: './assets/images/items/equipment/s008-0.webp',
		level: 10,
		stats: {
			vit: [6, 10],
			str: [11, 20],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			polvo_temporal: 4, 
			hierro: 1
		},
		set: setData['set_de_khan_karkasa'],
	},
	calzoncillo_de_khan_karkasa: {
		id: 29,
		key: 'calzoncillo_de_khan_karkasa',
		name: 'Calzoncillo de Khan Karkasa',
		image: './assets/images/items/equipment/s008-1.webp',
		level: 10,
		stats: {
			vit: [6, 10],
			strDmg: [3, 4],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			volva_de_amenita: 3, 
			hierro: 1
		},
		set: setData['set_de_khan_karkasa'],
	},
	araknosombrero: {
		id: 30,
		key: 'araknosombrero',
		name: 'Araknosombrero',
		image: './assets/images/items/equipment/s009-0.webp',
		level: 10,
		stats: {
			agi: [7, 10],
			crt: [2],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			pata_de_arakna: 3, 
			fuego_interno: 3
		},
		set: setData['set_arakna'],
	},
	araknocinto: {
		id: 31,
		key: 'araknocinto',
		name: 'Araknocinto',
		image: './assets/images/items/equipment/s009-1.webp',
		level: 11,
		stats: {
			vit: [16, 20],
			agi: [7, 10],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			pata_de_arakna: 3, 
			petalo_diafano: 3
		},
		set: setData['set_arakna'],
	},
	araknoton: {
		id: 32,
		key: 'araknoton',
		name: 'Araknotón',
		image: './assets/images/items/equipment/s009-2.webp',
		level: 9,
		stats: {
			vit: [11, 15],
			agiDmg: [3],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pata_de_arakna: 3, 
			baba_de_jalato: 3
		},
		set: setData['set_arakna'],
	},
	la_cortadora_de_arakna: {
		id: 33,
		key: 'la_cortadora_de_arakna',
		name: 'La cortadora de arakna',
		image: './assets/images/items/equipment/s009-3.webp',
		level: 11,
		power: {
			air: [[7, 11]],
		},
		stats: {
			vit: [11, 15],
			agi: [9, 12]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			huevo_quimerico: 4, 
			ferrita: 2
		},
		set: setData['set_arakna'],
	},
	amuleto_de_pio_rojo: {
		id: 34,
		key: 'amuleto_de_pio_rojo',
		name: 'Amuleto de pío rojo',
		image: './assets/images/items/equipment/s010-0.webp',
		level: 11,
		stats: {
			int: [16, 20],
			crt: [2, 3],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			pluma_de_pio_rojo: 3, 
			cola_de_miauflan: 3
		},
		set: setData['set_de_pio_rojo'],
	},
	anillo_de_pio_rojo: {
		id: 35,
		key: 'anillo_de_pio_rojo',
		name: 'Anillo de pío rojo',
		image: './assets/images/items/equipment/s010-1.webp',
		level: 10,
		stats: {
			vit: [16, 20],
			int: [16, 20],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pluma_de_pio_rojo: 3, 
			hueso_de_chafer: 3
		},
		set: setData['set_de_pio_rojo'],
	},
	sandalias_de_pio_rojo: {
		id: 36,
		key: 'sandalias_de_pio_rojo',
		name: 'Sandalias de pío rojo',
		image: './assets/images/items/equipment/s010-2.webp',
		level: 9,
		stats: {
			int: [16, 20],
			intDmg: [1],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			pluma_de_pio_rojo: 3, 
			baba_de_jalato: 3
		},
		set: setData['set_de_pio_rojo'],
	},
	capa_de_pio_rojo: {
		id: 37,
		key: 'capa_de_pio_rojo',
		name: 'Capa de pío rojo',
		image: './assets/images/items/equipment/s010-3.webp',
		level: 8,
		stats: {
			vit: [16, 20],
			invo: [1],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			pluma_de_pio_rojo: 3, 
			petalo_diafano: 3
		},
		set: setData['set_de_pio_rojo'],
	},
	cinturon_de_pio_rojo: {
		id: 38,
		key: 'cinturon_de_pio_rojo',
		name: 'Cinturón de pío rojo',
		image: './assets/images/items/equipment/s010-4.webp',
		level: 7,
		stats: {
			vit: [16, 20],
			intDmg: [1],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			pluma_de_pio_rojo: 3, 
			cenizas_eternas: 3
		},
		set: setData['set_de_pio_rojo'],
	},
	sombrero_de_pio_rojo: {
		id: 39,
		key: 'sombrero_de_pio_rojo',
		name: 'Sombrero de pío rojo',
		image: './assets/images/items/equipment/s010-5.webp',
		level: 12,
		stats: {
			wis: [7, 10],
			intDmg: [1],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			pluma_de_pio_rojo: 3, 
			reliquia_de_incarnam: 3
		},
		set: setData['set_de_pio_rojo'],
	},
	amuleto_de_pio_violeta: {
		id: 40,
		key: 'amuleto_de_pio_violeta',
		name: 'Amuleto de pío violeta',
		image: './assets/images/items/equipment/s011-0.webp',
		level: 9,
		stats: {
			vit: [16, 20],
			pot: [7, 10],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			pluma_de_pio_violeta: 3, 
			reliquia_de_incarnam: 3
		},
		set: setData['set_de_pio_violeta'],
	},
	anillo_de_pio_violeta: {
		id: 41,
		key: 'anillo_de_pio_violeta',
		name: 'Anillo de pío violeta',
		image: './assets/images/items/equipment/s011-1.webp',
		level: 8,
		stats: {
			pot: [7, 10],
			dmg: [1]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pluma_de_pio_violeta: 3, 
			petalo_diafano: 3
		},
		set: setData['set_de_pio_violeta'],
	},
	sandalias_de_pio_violeta: {
		id: 42,
		key: 'sandalias_de_pio_violeta',
		name: 'Sandalias de pío violeta',
		image: './assets/images/items/equipment/s011-2.webp',
		level: 7,
		stats: {
			vit: [16, 20],
			invo: [1],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			pluma_de_pio_violeta: 3, 
			cola_de_miauflan: 3
		},
		set: setData['set_de_pio_violeta'],
	},
	capa_de_pio_violeta: {
		id: 43,
		key: 'capa_de_pio_violeta',
		name: 'Capa de pío violeta',
		image: './assets/images/items/equipment/s011-3.webp',
		level: 12,
		stats: {
			vit: [16, 20],
			dmg: [1]
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			pluma_de_pio_violeta: 3,
			baba_de_jalato: 3
		},
		set: setData['set_de_pio_violeta'],
	},
	cinturon_de_pio_violeta: {
		id: 44,
		key: 'cinturon_de_pio_violeta',
		name: 'Cinturón de pío violeta',
		image: './assets/images/items/equipment/s011-4.webp',
		level: 11,
		stats: {
			wis: [7, 10],
			dmg: [1]
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			pluma_de_pio_violeta: 3, 
			cenizas_eternas: 3
		},
		set: setData['set_de_pio_violeta'],
	},
	sombrero_de_pio_violeta: {
		id: 45,
		key: 'sombrero_de_pio_violeta',
		name: 'Sombrero de pío violeta',
		image: './assets/images/items/equipment/s011-5.webp',
		level: 10,
		stats: {
			pot: [7, 10],
			crt: [2, 3],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			pluma_de_pio_violeta: 3, 
			hueso_de_chafer: 3
		},
		set: setData['set_de_pio_violeta'],
	},
	amuleto_de_pio_azul: {
		id: 46,
		key: 'amuleto_de_pio_azul',
		name: 'Amuleto de pío azul',
		image: './assets/images/items/equipment/s012-0.webp',
		level: 10,
		stats: {
			vit: [16, 20],
			cha: [16, 20],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			pluma_de_pio_azul: 3, 
			baba_de_jalato: 3
		},
		set: setData['set_de_pio_azul'],
	},
	anillo_de_pio_azul: {
		id: 47,
		key: 'anillo_de_pio_azul',
		name: 'Anillo de pío azul',
		image: './assets/images/items/equipment/s012-1.webp',
		level: 9,
		stats: {
			cha: [16, 20],
			chaDmg: [1],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pluma_de_pio_azul: 3, 
			hueso_de_chafer: 3
		},
		set: setData['set_de_pio_azul'],
	},
	sandalias_de_pio_azul: {
		id: 48,
		key: 'sandalias_de_pio_azul',
		name: 'Sandalias de pío azul',
		image: './assets/images/items/equipment/s012-2.webp',
		level: 8,
		stats: {
			vit: [16, 20],
			invo: [1],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			pluma_de_pio_azul: 3, 
			reliquia_de_incarnam: 3
		},
		set: setData['set_de_pio_azul'],
	},
	capa_de_pio_azul: {
		id: 49,
		key: 'capa_de_pio_azul',
		name: 'Capa de pío azul',
		image: './assets/images/items/equipment/s012-3.webp',
		level: 7,
		stats: {
			vit: [16, 20],
			chaDmg: [1],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			pluma_de_pio_azul: 3, 
			cola_de_miauflan: 3
		},
		set: setData['set_de_pio_azul'],
	},
	cinturon_de_pio_azul: {
		id: 50,
		key: 'cinturon_de_pio_azul',
		name: 'Cinturón de pío azul',
		image: './assets/images/items/equipment/s012-4.webp',
		level: 12,
		stats: {
			wis: [7, 10],
			chaDmg: [1],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			pluma_de_pio_azul: 3, 
			cenizas_eternas: 3
		},
		set: setData['set_de_pio_azul'],
	},
	sombrero_de_pio_azul: {
		id: 51,
		key: 'sombrero_de_pio_azul',
		name: 'Sombrero de pío azul',
		image: './assets/images/items/equipment/s012-5.webp',
		level: 11,
		stats: {
			cha: [16, 20],
			crt: [2, 3],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			pluma_de_pio_azul: 3, 
			petalo_diafano: 3
		},
		set: setData['set_de_pio_azul'],
	},
	amuleto_de_pio_rosa: {
		id: 52,
		key: 'amuleto_de_pio_rosa',
		name: 'Amuleto de pío rosa',
		image: './assets/images/items/equipment/s013-0.webp',
		level: 8,
		stats: {
			vit: [16, 20],
			dmg: [1]
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			pluma_de_pio_rosa: 3,
			petalo_diafano: 3
		},
		set: setData['set_de_pio_rosa'],
	},
	anillo_de_pio_rosa: {
		id: 53,
		key: 'anillo_de_pio_rosa',
		name: 'Anillo de pío rosa',
		image: './assets/images/items/equipment/s013-1.webp',
		level: 7,
		stats: {
			cur: [1, 3],
			dmg: [1]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pluma_de_pio_rosa: 3,
			reliquia_de_incarnam: 3
		},
		set: setData['set_de_pio_rosa'],
	},
	sandalias_de_pio_rosa: {
		id: 54,
		key: 'sandalias_de_pio_rosa',
		name: 'Sandalias de pío rosa',
		image: './assets/images/items/equipment/s013-2.webp',
		level: 12,
		stats: {
			vit: [16, 20],
			invo: [1],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			pluma_de_pio_rosa: 3,
			baba_de_jalato: 3
		},
		set: setData['set_de_pio_rosa'],
	},
	capa_de_pio_rosa: {
		id: 55,
		key: 'capa_de_pio_rosa',
		name: 'Capa de pío rosa',
		image: './assets/images/items/equipment/s013-3.webp',
		level: 11,
		stats: {
			vit: [21, 30],
			cur: [4, 5],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			pluma_de_pio_rosa: 3,
			cenizas_eternas: 3
		},
		set: setData['set_de_pio_rosa'],
	},
	cinturon_de_pio_rosa: {
		id: 56,
		key: 'cinturon_de_pio_rosa',
		name: 'Cinturón de pío rosa',
		image: './assets/images/items/equipment/s013-4.webp',
		level: 10,
		stats: {
			wis: [7, 10],
			cur: [1],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			pluma_de_pio_rosa: 3,
			hueso_de_chafer: 3
		},
		set: setData['set_de_pio_rosa'],
	},
	sombrero_de_pio_rosa: {
		id: 57,
		key: 'sombrero_de_pio_rosa',
		name: 'Sombrero de pío rosa',
		image: './assets/images/items/equipment/s013-5.webp',
		level: 9,
		stats: {
			crt: [2, 3],
			cur: [1],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			pluma_de_pio_rosa: 3, 
			cola_de_miauflan: 3
		},
		set: setData['set_de_pio_rosa'],
	},
	amuleto_de_pio_verde: {
		id: 58,
		key: 'amuleto_de_pio_verde',
		name: 'Amuleto de pío verde',
		image: './assets/images/items/equipment/s014-0.webp',
		level: 7,
		stats: {
			vit: [16, 20],
			agiDmg: [1],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			pluma_de_pio_verde: 3,
			petalo_diafano: 3
		},
		set: setData['set_de_pio_verde'],
	},
	anillo_de_pio_verde: {
		id: 59,
		key: 'anillo_de_pio_verde',
		name: 'Anillo de pío verde',
		image: './assets/images/items/equipment/s014-1.webp',
		level: 12,
		stats: {
			wis: [7, 10],
			agiDmg: [1],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pluma_de_pio_verde: 3,
			cenizas_eternas: 3
		},
		set: setData['set_de_pio_verde'],
	},
	sandalias_de_pio_verde: {
		id: 60,
		key: 'sandalias_de_pio_verde',
		name: 'Sandalias de pío verde',
		image: './assets/images/items/equipment/s014-2.webp',
		level: 11,
		stats: {
			agi: [16, 20],
			crt: [2, 3],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			pluma_de_pio_verde: 3,
			cola_de_miauflan: 3
		},
		set: setData['set_de_pio_verde'],
	},
	capa_de_pio_verde: {
		id: 61,
		key: 'capa_de_pio_verde',
		name: 'Capa de pío verde',
		image: './assets/images/items/equipment/s014-3.webp',
		level: 10,
		stats: {
			vit: [16, 20],
			agi: [16, 20],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			pluma_de_pio_verde: 3, 
			hueso_de_chafer: 3,
		},
		set: setData['set_de_pio_verde'],
	},
	cinturon_de_pio_verde: {
		id: 62,
		key: 'cinturon_de_pio_verde',
		name: 'Cinturón de pío verde',
		image: './assets/images/items/equipment/s014-4.webp',
		level: 9,
		stats: {
			agi: [16, 20],
			agiDmg: [1],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			pluma_de_pio_verde: 3,
			reliquia_de_incarnam: 3,
		},
		set: setData['set_de_pio_verde'],
	},
	sombrero_de_pio_verde: {
		id: 63,
		key: 'sombrero_de_pio_verde',
		name: 'Sombrero de pío verde',
		image: './assets/images/items/equipment/s014-5.webp',
		level: 8,
		stats: {
			vit: [16, 20],
			invo: [1],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			pluma_de_pio_verde: 3, 
			baba_de_jalato: 3,
		},
		set: setData['set_de_pio_verde'],
	},
	amuleto_de_pio_amarillo: {
		id: 64,
		key: 'amuleto_de_pio_amarillo',
		name: 'Amuleto de pío amarillo',
		image: './assets/images/items/equipment/s015-0.webp',
		level: 12,
		stats: {
			wis: [7, 10],
			strDmg: [1],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			pluma_de_pio_amarillo: 3,
			baba_de_jalato: 3,
		},
		set: setData['set_de_pio_amarillo'],
	},
	anillo_de_pio_amarillo: {
		id: 65,
		key: 'anillo_de_pio_amarillo',
		name: 'Anillo de pío amarillo',
		image: './assets/images/items/equipment/s015-1.webp',
		level: 11,
		stats: {
			str: [16, 20],
			crt: [2, 3],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pluma_de_pio_amarillo: 3,
			hueso_de_chafer: 3,
		},
		set: setData['set_de_pio_amarillo'],
	},
	sandalias_de_pio_amarillo: {
		id: 66,
		key: 'sandalias_de_pio_amarillo',
		name: 'Sandalias de pío amarillo',
		image: './assets/images/items/equipment/s015-2.webp',
		level: 10,
		stats: {
			vit: [16, 20],
			str: [16, 20],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			pluma_de_pio_amarillo: 3,
			petalo_diafano: 3,
		},
		set: setData['set_de_pio_amarillo'],
	},
	capa_de_pio_amarillo: {
		id: 67,
		key: 'capa_de_pio_amarillo',
		name: 'Capa de pío amarillo',
		image: './assets/images/items/equipment/s015-3.webp',
		level: 9,
		stats: {
			str: [16, 20],
			strDmg: [1],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			pluma_de_pio_amarillo: 3, 
			cola_de_miauflan: 3
		},
		set: setData['set_de_pio_amarillo'],
	},
	cinturon_de_pio_amarillo: {
		id: 68,
		key: 'cinturon_de_pio_amarillo',
		name: 'Cinturón de pío amarillo',
		image: './assets/images/items/equipment/s015-4.webp',
		level: 8,
		stats: {
			vit: [16, 20],
			invo: [1],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			pluma_de_pio_amarillo: 3,
			cenizas_eternas: 3,
		},
		set: setData['set_de_pio_amarillo'],
	},
	sombrero_de_pio_amarillo: {
		id: 69,
		key: 'sombrero_de_pio_amarillo',
		name: 'Sombrero de pío amarillo',
		image: './assets/images/items/equipment/s015-5.webp',
		level: 7,
		stats: {
			vit: [16, 20],
			strDmg: [1],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			pluma_de_pio_amarillo: 3,
			reliquia_de_incarnam: 3,
		},
		set: setData['set_de_pio_amarillo'],
	},
	casco_de_chadalid: {
		id: 70,
		key: 'casco_de_chadalid',
		name: 'Casco de Chadalid',
		image: './assets/images/items/equipment/s016-0.webp',
		level: 12,
		stats: {
			str: [11, 15],
			strDmg: [2],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			craneo_de_chadalid: 4, 
			pluma_quimerica: 3
		},
		set: setData['set_de_chadalid'],
	},
	capa_de_chadalid: {
		id: 71,
		key: 'capa_de_chadalid',
		name: 'Capa de Chadalid',
		image: './assets/images/items/equipment/s016-1.webp',
		level: 12,
		stats: {
			str: [7, 10],
			vha: [7, 10],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			craneo_de_chadalid: 4, 
			reliquia_de_incarnam: 3
		},
		set: setData['set_de_chadalid'],
	},
	brazalete_de_chadalid: {
		id: 72,
		key: 'brazalete_de_chadalid',
		name: 'Brazalete de Chadalid',
		image: './assets/images/items/equipment/s016-2.webp',
		level: 12,
		stats: {
			cha: [11, 15],
			chaDmg: [2],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			craneo_de_chadalid: 4, 
			volva_de_amenita: 3
		},
		set: setData['set_de_chadalid'],
	},
	anillo_de_champi_champ: {
		id: 73,
		key: 'anillo_de_champi_champ',
		name: 'Anillo de champi champ',
		image: './assets/images/items/equipment/s017-0.webp',
		level: 13,
		stats: {
			vit: [16, 20],
			reDmg: [1, 2],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			espina_de_champi_champ: 3,
			baba_de_jalato: 3
		},
		set: setData['set_de_champi_champ'],
	},
	alianza_de_champi_champ: {
		id: 74,
		key: 'alianza_de_champi_champ',
		name: 'Alianza de champi champ',
		image: './assets/images/items/equipment/s017-1.webp',
		level: 11,
		stats: {
			vit: [16, 20],
			reDmg: [1, 2],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			espina_de_champi_champ: 3,
			petalo_diafano: 3
		},
		set: setData['set_de_champi_champ'],
	},
	champisombrero: {
		id: 75,
		key: 'champisombrero',
		name: 'Champisombrero',
		image: './assets/images/items/equipment/s017-2.webp',
		level: 12,
		stats: {
			vit: [21, 30],
			reDmg: [1, 2],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			espina_de_champi_champ: 3,
			pluma_quimerica: 3
		},
		set: setData['set_de_champi_champ'],
	},
	capa_de_champi_champ: {
		id: 76,
		key: 'capa_de_champi_champ',
		name: 'Capa de champi champ',
		image: './assets/images/items/equipment/s017-3.webp',
		level: 11,
		stats: {
			vit: [21, 30],
			reDmg: [1, 2],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			espina_de_champi_champ: 3,
			cola_de_miauflan: 3
		},
		set: setData['set_de_champi_champ'],
	},
	amuleto_de_los_campos: {
		id: 77,
		key: 'amuleto_de_los_campos',
		name: 'Amuleto de los campos',
		image: './assets/images/items/equipment/s018-0.webp',
		level: 15,
		stats: {
			invo: [1],
			str: [11, 15],
			agi: [11, 15],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			petalo_de_girasol_salvaje: 4,
			alogdon_ancestral: 1
		},
		set: setData['set_campestre'],
	},
	anillo_campestre: {
		id: 78,
		key: 'anillo_campestre',
		name: 'Anillo campestre',
		image: './assets/images/items/equipment/s018-1.webp',
		level: 15,
		stats: {
			vit: [16, 20],
			agi: [16, 20],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			petalo_de_rosa_demoniaca: 4,
			mantillo: 1
		},
		set: setData['set_campestre'],
	},
	la_plantamaza_de_los_campos: {
		id: 79,
		key: 'la_plantamaza_de_los_campos',
		name: 'La plantamaza de los campos',
		image: './assets/images/items/equipment/s018-2.webp',
		level: 15,
		power: {
			earth: [[6, 10]],
		},
		stats: {
			vit: [21, 25],
			str: [7, 10],
			strDmg: [2]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			semilla_de_girasol: 1,
			hoja_de_girasol_salvaje: 1
		},
		set: setData['set_campestre'],
	},
	botas_campestres: {
		id: 80,
		key: 'botas_campestres',
		name: 'Botas campestres',
		image: './assets/images/items/equipment/s018-3.webp',
		level: 14,
		stats: {
			vit: [21, 30],
			pot: [9, 12],
			crt: [1, 2],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			petalo_de_rosa_oscura: 4,
			hierba_loca: 1
		},
		set: setData['set_campestre'],
	},
	capucha_de_los_campos: {
		id: 81,
		key: 'capucha_de_los_campos',
		name: 'Capucha de los campos',
		image: './assets/images/items/equipment/s018-4.webp',
		level: 13,
		stats: {
			str: [16, 20],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			lengua_de_espanterrador: 4,
			baba_de_rosa_demoniaca: 1
		},
		set: setData['set_campestre'],
	},
	cinturon_florido: {
		id: 82,
		key: 'cinturon_florido',
		name: 'Cinturón florido',
		image: './assets/images/items/equipment/s018-5.webp',
		level: 13,
		stats: {
			str: [16, 20],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			flor_del_diente_de_leon_diabolico: 4,
			hoja_de_rosa_oscura: 1
		},
		set: setData['set_campestre'],
	},
	sombrero_campestre: {
		id: 83,
		key: 'sombrero_campestre',
		name: 'Sombrero campestre',
		image: './assets/images/items/equipment/s018-6.webp',
		level: 14,
		stats: {
			vit: [16, 20],
			pot: [11, 15],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			flor_del_diente_de_leon_diabolico: 4,
			hierba_loca: 1
		},
		set: setData['set_campestre'],
	},
	amuleto_de_bandido: {
		id: 84,
		key: 'amuleto_de_bandido',
		name: 'Amuleto de bandido',
		image: './assets/images/items/equipment/s019-0.webp',
		level: 16,
		stats: {
			vit: [7, 10],
			crt: [2],
			strDmg: [1],
			intDmg: [1],
			chaDmg: [1],
			agiDmg: [1],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			semilla_de_girasol: 1,
			concentrado_de_matorral: 1
		},
		set: setData['set_de_bandido'],
	},
	dagas_de_bandido: {
		id: 85,
		key: 'dagas_de_bandido',
		name: 'Dagas de bandido',
		image: './assets/images/items/equipment/s019-1.webp',
		level: 12,
		power: {
			air: [[3, 5]],
		},
		stats: {
			vit: [16, 20],
			pot: [7, 10],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			petalo_de_girasol_salvaje: 3,
			ferrita: 2
		},
		set: setData['set_de_bandido'],
	},
	cinturon_de_bandido: {
		id: 86,
		key: 'cinturon_de_bandido',
		name: 'Cinturón de bandido',
		image: './assets/images/items/equipment/s019-2.webp',
		level: 15,
		stats: {
			vit: [7, 10],
			crt: [2],
			strDmg: [1],
			intDmg: [1],
			chaDmg: [1],
			agiDmg: [1],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			piel_de_larva_amarilla: 4,
			piel_de_arakna_enferma: 1
		},
		set: setData['set_de_bandido'],
	},
	anillo_de_bandido: {
		id: 87,
		key: 'anillo_de_bandido',
		name: 'Anillo de bandido',
		image: './assets/images/items/equipment/s019-3.webp',
		level: 17,
		stats: {
			vit: [16, 20],
			crt: [2],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			piel_de_larva_verde: 4,
			fluido_glacial: 1,
		},
		set: setData['set_de_bandido'],
	},
	sombrero_de_jalato: {
		id: 88,
		key: 'sombrero_de_jalato',
		name: 'Sombrero de jalató',
		image: './assets/images/items/equipment/s020-0.webp',
		level: 20,
		stats: {
			str: [16, 20],
			int: [16, 20]
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			cuerno_de_jalatin: 4,
			lana_de_jefe_de_guerra_jalato: 1
		},
		set: setData['set_de_jalato'],
	},
	capa_jalosa: {
		id: 89,
		key: 'capa_jalosa',
		name: 'Capa jalosa',
		image: './assets/images/items/equipment/s020-1.webp',
		level: 20,
		stats: {
			vit: [41, 50],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			sangre_de_jalato: 1,
			cuerno_de_jalatin: 4,
		},
		set: setData['set_de_jalato'],
	},
	martillo_de_jalato: {
		id: 90,
		key: 'martillo_de_jalato',
		name: 'Martillo de jalató',
		image: './assets/images/items/equipment/s020-2.webp',
		level: 20,
		power: {
			earth: [[4, 8]],
			fire: [[4, 8]],
		},
		stats: {
			vit: [16, 20],
			invo: [1],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			lana_de_jalatin_negro: 4,
			lana_de_jefe_de_guerra_jalato: 1
		},
		set: setData['set_de_jalato'],
	},
	anillo_de_boz_layt_yer: {
		id: 91,
		key: 'anillo_de_boz_layt_yer',
		name: 'Anillo de Boz Layt Yer',
		image: './assets/images/items/equipment/s020-3.webp',
		level: 20,
		stats: {
			vit: [31, 40],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			cuerno_de_jalatin: 4,
			lana_de_jalatin_negro: 1
		},
		set: setData['set_de_jalato'],
	},
	jalabotas: {
		id: 92,
		key: 'jalabotas',
		name: 'Jalabotas',
		image: './assets/images/items/equipment/s020-4.webp',
		level: 20,
		stats: {
			vit: [16, 20],
			pot: [11, 15],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			lana_de_jalato: 4,
			cuerno_de_jalatin: 1
		},
		set: setData['set_de_jalato'],
	},
	amuleto_de_jalato: {
		id: 93,
		key: 'amuleto_de_jalato',
		name: 'Amuleto de jalató',
		image: './assets/images/items/equipment/s020-5.webp',
		level: 20,
		stats: {
			vit: [11, 15],
			str: [11, 15],
			int: [11, 15],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			lana_de_jalato: 4,
			sangre_de_jalato: 1
		},
		set: setData['set_de_jalato'],
	},
	cinturon_de_jalato: {
		id: 94,
		key: 'cinturon_de_jalato',
		name: 'Cinturón de jalató',
		image: './assets/images/items/equipment/s020-6.webp',
		level: 20,
		stats: {
			str: [11, 20],
			int: [11, 20],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			lana_de_jefe_de_guerra_jalato: 4,
			lana_de_jalatin_negro: 1
		},
		set: setData['set_de_jalato'],
	},
	escudo_de_jalato: {
		id: 95,
		key: 'escudo_de_jalato',
		name: 'Escudo de jalató',
		image: './assets/images/items/equipment/s020-7.webp',
		level: 20,
		stats: {
			vit: [16, 20],
			pot: [6, 10],
		},
		type: 'equipment',
		sort: 'escudo',
		recipe: {
			lana_de_jalato: 5,
			lana_de_jalatin_negro: 5
		},
		set: setData['set_de_jalato'],
	},
	sombrero_del_hombre_oso: {
		id: 96,
		key: 'sombrero_del_hombre_oso',
		name: 'Sombrero del hombre oso',
		image: './assets/images/items/equipment/s021-0.webp',
		level: 20,
		stats: {
			vit: [11, 15],
			int: [26, 30]
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			colmillo_de_jabali: 4,
			pelos_de_darit: 1
		},
		set: setData['set_del_hombre_oso'],
	},
	capa_del_hombre_oso: {
		id: 97,
		key: 'capa_del_hombre_oso',
		name: 'Capa del hombre oso',
		image: './assets/images/items/equipment/s021-1.webp',
		level: 20,
		stats: {
			int: [16, 20],
			crt: [1]
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			pincho_de_prespic: 4,
			tejido_de_jabali: 1,
		},
		set: setData['set_del_hombre_oso'],
	},
	botas_del_hombre_oso: {
		id: 98,
		key: 'botas_del_hombre_oso',
		name: 'Botas del hombre oso',
		image: './assets/images/items/equipment/s021-2.webp',
		level: 20,
		stats: {
			int: [7, 10],
			crt: [5]
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			pincho_de_prespic: 4,
			cabellera_de_minilubo: 1
		},
		set: setData['set_del_hombre_oso'],
	},
	alianza_del_hombre_oso: {
		id: 99,
		key: 'alianza_del_hombre_oso',
		name: 'Alianza del hombre oso',
		image: './assets/images/items/equipment/s021-3.webp',
		level: 20,
		stats: {
			vit: [16, 20],
			intDmg: [2],
			crt: [1]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pincho_de_prespic: 4,
			pelos_de_darit: 1
		},
		set: setData['set_del_hombre_oso'],
	},
	amuleto_del_hombre_oso: {
		id: 100,
		key: 'amuleto_del_hombre_oso',
		name: 'Amuleto del hombre oso',
		image: './assets/images/items/equipment/s021-4.webp',
		level: 20,
		stats: {
			wis: [5, 7],
			al: [1],
			res: [-3]
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			colmillo_de_jabali: 4,
			cabellera_de_minilubo: 1
		},
		set: setData['set_del_hombre_oso'],
	},
	cinturon_del_hombre_oso: {
		id: 101,
		key: 'cinturon_del_hombre_oso',
		name: 'Cinturón del hombre oso',
		image: './assets/images/items/equipment/s021-5.webp',
		level: 20,
		stats: {
			vit: [26, 30],
			int: [16, 20],
			cur: [1]
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			avellana: 4,
			tejido_de_ardilloxido: 1
		},
		set: setData['set_del_hombre_oso'],
	},
	baston_del_hombre_oso: {
		id: 102,
		key: 'baston_del_hombre_oso',
		name: 'Bastón del hombre oso',
		image: './assets/images/items/equipment/s021-6.webp',
		level: 20,
		power: {
			fire: [[8, 12]],
		},
		stats: {
			int: [5, 7],
			invo: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			avellana: 4,
			tejido_de_jabali: 1
		},
		set: setData['set_del_hombre_oso'],
	},
	amuleto_campesino: {
		id: 103,
		key: 'amuleto_campesino',
		name: 'Amuleto campesino',
		image: './assets/images/items/equipment/s022-0.webp',
		level: 20,
		stats: {
			vit: [11, 25],
			cha: [11, 15],
			chaDmg: [2],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			petalo_de_girasol_salvaje: 4,
			petalo_magico_de_girasol_hambriento: 1
		},
		set: setData['set_de_campesino'],
	},
	cintobermuda_de_campesino: {
		id: 104,
		key: 'cintobermuda_de_campesino',
		name: 'Cintobermuda de campesino',
		image: './assets/images/items/equipment/s022-1.webp',
		level: 20,
		stats: {
			vit: [16, 20],
			cha: [16, 20],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			petalo_de_rosa_demoniaca: 4,
			petalo_magico_de_girasol_hambriento: 1
		},
		set: setData['set_de_campesino'],
	},
	bob_de_campesino: {
		id: 105,
		key: 'bob_de_campesino',
		name: 'Bob de campesino',
		image: './assets/images/items/equipment/s022-2.webp',
		level: 19,
		stats: {
			vit: [26, 30],
			crt: [3],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			lengua_de_espanterrador: 4,
			petalo_magico_de_girasol_hambriento: 1
		},
		set: setData['set_de_campesino'],
	},
	mitones_apolillados_de_campesino: {
		id: 106,
		key: 'mitones_apolillados_de_campesino',
		name: 'Mitones apolillados de campesino',
		image: './assets/images/items/equipment/s022-3.webp',
		level: 12,
		stats: {
			vit: [-40],
			invo: [1],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			flor_del_diente_de_leon_diabolico: 4,
			petalo_magico_de_girasol_hambriento: 1
		},
		set: setData['set_de_campesino'],
	},
	guadana_gastada_de_campesino: {
		id: 107,
		key: 'guadana_gastada_de_campesino',
		name: 'Guadaña gastada de campesino',
		image: './assets/images/items/equipment/s022-4.webp',
		level: 17,
		power: {
			water: [[4, 5, true]],
		},
		stats: {
			vit: [16, 20],
			crt: [2, 3],
			chaDmg: [2],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			flor_del_diente_de_leon_diabolico: 5,
			petalo_magico_de_girasol_hambriento: 1
		},
		set: setData['set_de_campesino'],
	},
	botas_campesinas: {
		id: 108,
		key: 'botas_campesinas',
		name: 'Botas campesinas',
		image: './assets/images/items/equipment/s022-5.webp',
		level: 19,
		stats: {
			vit: [16, 20],
			cha: [7, 10],
			wis: [4, 5],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			alogdon_ancestral: 3,
			petalo_magico_de_girasol_hambriento: 1
		},
		set: setData['set_de_campesino'],
	},
	bolso_de_campesino: {
		id: 109,
		key: 'bolso_de_campesino',
		name: 'Bolso de campesino',
		image: './assets/images/items/equipment/s022-6.webp',
		level: 18,
		stats: {
			cha: [16, 20],
			chaDmg: [1, 2],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			hierba_loca: 1,
			petalo_magico_de_girasol_hambriento: 1
		},
		set: setData['set_de_campesino'],
	},
	capa_invisible: {
		id: 110,
		key: 'capa_invisible',
		name: 'Capa invisible',
		image: './assets/images/items/equipment/s023-0.webp',
		level: 20,
		stats: {
			vit: [26, 30],
			cha: [11, 15],
			crtDmg: [2]
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			petalo_magico_de_girasol_hambriento: 3,
			reliquia_de_incarnam: 1
		},
		set: setData['set_invisible'],
	},
	sombrero_invisible: {
		id: 111,
		key: 'sombrero_invisible',
		name: 'Sombrero invisible',
		image: './assets/images/items/equipment/s023-1.webp',
		level: 20,
		stats: {
			vit: [26, 30],
			cha: [11, 15],
			crt: [1, 5]
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			piel_de_mob_laesponja: 3,
			reliquia_de_incarnam: 1
		},
		set: setData['set_invisible'],
	},
	escudo_invisible: {
		id: 112,
		key: 'escudo_invisible',
		name: 'Escudo invisible',
		image: './assets/images/items/equipment/s023-2.webp',
		level: 20,
		stats: {
			vit: [31, 40],
		},
		type: 'equipment',
		sort: 'escudo',
		recipe: {
			craneo_de_chadalid: 5,
			reliquia_de_incarnam: 1
		},
		set: setData['set_invisible'],
	},
	botas_de_karnaval: {
		id: 113,
		key: 'botas_de_karnaval',
		name: 'Botas de karnaval',
		image: './assets/images/items/equipment/s024-0.webp',
		level: 20,
		stats: {
			vit: [11, 15],
			pot: [7, 10],
			strDmg: [2],
			intDmg: [2],
			chaDmg: [2],
			agiDmg: [2],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			piel_de_larva_naranja: 3,
			piel_de_larva_verde: 3
		},
		set: setData['set_karnavalesco'],
	},
	cinturon_de_karnaval: {
		id: 114,
		key: 'cinturon_de_karnaval',
		name: 'Cinturón de karnaval',
		image: './assets/images/items/equipment/s024-1.webp',
		level: 20,
		stats: {
			vit: [21, 30],
			invo: [1],
			res: [1],
			crtDmg: [-20],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			piel_de_larva_azul: 3,
			piel_de_larva_amarilla: 3
		},
		set: setData['set_karnavalesco'],
	},
	casco: {
		id: 115,
		key: 'casco',
		name: 'Casco',
		image: './assets/images/items/equipment/s025-0.webp',
		level: 20,
		stats: {
			vit: [26, 30],
			res: [1, 3]
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			alogdon_ancestral: 1,
			madera_carcomida: 1
		},
		set: setData['set_prototipo_de_piloto'],
	},
	alas_de_madera: {
		id: 116,
		key: 'alas_de_madera',
		name: 'Alas de madera',
		image: './assets/images/items/equipment/s025-1.webp',
		level: 20,
		stats: {
			vit: [31, 35],
			crt: [2],
			agi: [11, 15]
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			concentrado_de_matorral: 2,
			hilo_de_seda: 1
		},
		set: setData['set_prototipo_de_piloto'],
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
		recipe: {
			fuego_interno: 3,
			reliquia_de_incarnam: 3
		},
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
		recipe: {
			hueso_de_chafer: 2,
			petalo_diafano: 1
		},
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
		recipe: {
			trigo: 1,
			madera_de_fresno: 1,
			hierro: 1,
			ortiga: 1,
		},
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
		recipe: {
			tabla_de_aglomerado: 1,
			agua_ferruginosa: 1
		},
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
		recipe: {
			petalo_diafano: 3,
			cola_de_miauflan: 3
		},
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
		recipe: {
			ortiga: 3,
			fuego_interno: 3
		},
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
		recipe: {
			cenizas_eternas: 3,
			cola_de_miauflan: 3
		},
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
		recipe: {
			madera_de_fresno: 3,
			fuego_interno: 3
		},
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
		recipe: {
			pluma_quimerica: 3,
			piel_de_goota: 3
		},
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
		recipe: {
			polvo_temporal: 3,
			hierro: 1
		},
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
		recipe: {
			cola_de_miauflan: 3,
			piel_de_goota: 3
		},
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
		recipe: {
			cenizas_eternas: 3,
			piel_de_goota: 3
		},
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
		recipe: {
			madera_de_fresno: 3,
			cola_de_miauflan: 3
		},
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
		recipe: {
			pluma_quimerica: 3,
			petalo_diafano: 3
		},
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
			agi: [1], 
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			ortiga: 3,
			cola_de_miauflan: 3
		},
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
			agi: [2, 3],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			polvo_temporal: 3,
			petalo_diafano: 3
		},
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
		recipe: {
			madera_de_fresno: 3, 
			lana_celeste: 3
		},
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
		recipe: {
			agua_potable: 3, 
			fuego_interno: 3
		},
		set: null,
	},
	panuelo_pandawushuka: {
		id: 10018,
		key: 'panuelo_pandawushuka',
		name: "Pañuelo Pandawushuka",
		image: './assets/images/items/equipment/0018.webp',
		level: 4,
		stats: {
			crt: [1, 2], 
			agi: [3, 4] 
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			petalo_diafano: 3, 
			piel_de_goota: 3
		},
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
		recipe: {
			lana_celeste: 3,
			hierro: 1
		},
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
		recipe: {
			madera_de_fresno: 3,
			baba_de_jalato: 3
		},
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
		recipe: {
			pluma_quimerica: 3,
			cola_de_miauflan: 3
		},
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
		recipe: {
			baba_de_jalato: 3,
			fuego_interno: 3
		},
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
		recipe: {
			lana_celeste: 3,
			cola_de_miauflan: 3
		},
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
		recipe: {
			petalo_diafano: 2,
			tabla_de_aglomerado: 1
		},
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
		recipe: {
			baba_de_jalato: 3,
			hierro: 1
		},
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
		recipe: {
			cenizas_eternas: 3,
			pluma_quimerica: 3
		},
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
		recipe: {
			cenizas_eternas: 3,
			lana_celeste: 3
		},
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
		recipe: {
			polvo_temporal: 3,
			volva_de_amenita: 3
		},
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
		recipe: {
			piel_de_goota: 3,
			hierro: 1
		},
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
		recipe: {
			pluma_quimerica: 3,
			hierro: 1
		},
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
		recipe: {
			pluma_quimerica: 3, 
			volva_de_amenita: 3
		},
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
		recipe: {
			piel_de_goota: 3,
			hueso_de_chafer: 2
		},
		set: null,
	},
	cinturon_forcesco: {
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
		recipe: {
			madera_de_fresno: 3,
			cenizas_eternas: 3
		},
		set: null,
	},
	cinturon_agilesco: {
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
		recipe: {
			baba_de_jalato: 3,
			lana_celeste: 3
		},
		set: null,
	},
	amuleto_del_buho: {
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
		recipe: {
			baba_de_jalato: 3,
			reliquia_de_incarnam: 3
		},
		set: null,
	},
	amuleto_del_oso: {
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
		recipe: {
			cenizas_eternas: 3,
			reliquia_de_incarnam: 3
		},
		set: null,
	},
	anillo_de_satisfaccion: {
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
		recipe: {
			ortiga: 3,
			pluma_quimerica: 3
		},
		set: null,
	},
	amuleto_de_milubo: {
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
		recipe: {
			madera_de_fresno: 3,
			reliquia_de_incarnam: 3
		},
		set: null,
	},
	botas_de_nexus: {
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
		recipe: {
			pluma_quimerica: 3,
			reliquia_de_incarnam: 3
		},
		set: null,
	},
	cinturon_vitalesco: {
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
		recipe: {
			volva_de_amenita: 3,
			reliquia_de_incarnam: 3
		},
		set: null,
	},
	amuleto_del_arco_iris: {
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
		recipe: {
			volva_de_amenita: 3,
			hierro: 1
		},
		set: null,
	},
	amuleto_de_kroketa: {
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
		recipe: {
			hueso_de_chafer: 3,
			lana_celeste: 3
		},
		set: null,
	},
	calzoncillo_de_capitan_chafer: {
		id: 10043,
		key: 'calzoncillo_de_capitan_chafer',
		name: "Calzoncillo de Capitán Chafer",
		image: './assets/images/items/equipment/0043.webp',
		level: 9,
		stats: {
			vit: [-70],
			invo: [1]
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			ortiga: 3,
			reliquia_de_incarnam: 3
		},
		set: null,
	},
	anillo_de_sabiduria: {
		id: 10044,
		key: 'anillo_de_sabiduria',
		name: "Anillo de sabiduria",
		image: './assets/images/items/equipment/0044.webp',
		level: 9,
		stats: {
			wis: [7, 10]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			hueso_de_chafer: 3,
			piel_de_goota: 3
		},
		set: null,
	},
	anillo_de_suerte: {
		id: 10045,
		key: 'anillo_de_suerte',
		name: "Anillo de suerte",
		image: './assets/images/items/equipment/0045.webp',
		level: 9,
		stats: {
			cha: [7, 10]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			madera_de_fresno: 3,
			volva_de_amenita: 3
		},
		set: null,
	},
	anillo_de_agilidad: {
		id: 10046,
		key: 'anillo_de_agilidad',
		name: "Anillo de agilidad",
		image: './assets/images/items/equipment/0046.webp',
		level: 9,
		stats: {
			agi: [7, 10]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			reliquia_de_incarnam: 3,
			hierro: 1
		},
		set: null,
	},
	ushanka_guau: {
		id: 10047,
		key: 'ushanka_guau',
		name: "Ushanka Guau",
		image: './assets/images/items/equipment/0047.webp',
		level: 9,
		stats: {
			vit: [26, 30],
			crt: [2, 3],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			piel_de_goota: 3, 
			volva_de_amenita: 3
		},
		set: null,
	},
	anillo_fortalecedor: {
		id: 10048,
		key: 'anillo_fortalecedor',
		name: "Anillo fortalecedor",
		image: './assets/images/items/equipment/0048.webp',
		level: 9,
		stats: {
			str: [7, 10]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			madera_de_fresno: 3,
			hueso_de_chafer: 3
		},
		set: null,
	},
	botas_de_dragun_rosa: {
		id: 10049,
		key: 'botas_de_dragun_rosa',
		name: "Botas de dragún rosa",
		image: './assets/images/items/equipment/0049.webp',
		level: 10,
		stats: {
			vit: [21, 30],
			pot: [7, 10]
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			baba_de_jalato: 3,
			petalo_diafano: 3
		},
		set: null,
	},
	cinturon_bragado: {
		id: 10050,
		key: 'cinturon_bragado',
		name: "Cinturón bragado",
		image: './assets/images/items/equipment/0050.webp',
		level: 10,
		stats: {
			int: [11, 15],
			intDmg: [1, 2]
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			lana_celeste: 3,
			pluma_quimerica: 3
		},
		set: null,
	},
	anillo_nomen_tengu: {
		id: 10051,
		key: 'anillo_nomen_tengu',
		name: "Anillo nomen tengu",
		image: './assets/images/items/equipment/0051.webp',
		level: 10,
		stats: {
			agi: [7, 10],
			agiDmg: [1, 2]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			lana_celeste: 3,
			volva_de_amenita: 3
		},
		set: null,
	},
	amuleto_sincha: {
		id: 10052,
		key: 'amuleto_sincha',
		name: "Amuleto sincha",
		image: './assets/images/items/equipment/0052.webp',
		level: 10,
		stats: {
			vit: [11, 15],
			str: [6, 10],
			strDmg: [1, 2]
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			cenizas_eternas: 3,
			petalo_diafano: 3
		},
		set: null,
	},
	cinturon_kawaii: {
		id: 10053,
		key: 'cinturon_kawaii',
		name: "Cinturón kawaii",
		image: './assets/images/items/equipment/0053.webp',
		level: 10,
		stats: {
			vit: [11, 15],
			cha: [11, 15]
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			ortiga: 3,
			lana_celeste: 3
		},
		set: null,
	},
	anillo_de_geisha: {
		id: 10054,
		key: 'anillo_de_geisha',
		name: "Anillo de geisha",
		image: './assets/images/items/equipment/0054.webp',
		level: 10,
		stats: {
			vit: [6, 10],
			pot: [7, 10]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pluma_quimerica: 4,
			ortiga: 3
		},
		set: null,
	},
	anillo_de_kuakua_negro: {
		id: 10055,
		key: 'anillo_de_kuakua_negro',
		name: "Anillo de kuakuá negro",
		image: './assets/images/items/equipment/0055.webp',
		level: 10,
		stats: {
			vit: [7, 10],
			crt: [2]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			ortiga: 4,
			pluma_quimerica: 3
		},
		set: null,
	},
	anillo_de_kuakua_amarillo: {
		id: 10056,
		key: 'anillo_de_kuakua_amarillo',
		name: "Anillo de kuakuá amarillo",
		image: './assets/images/items/equipment/0056.webp',
		level: 10,
		stats: {
			vit: [11, 15],
			intDmg: [2, 3]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			hueso_de_chafer: 3,
			pluma_quimerica: 3
		},
		set: null,
	},
	amuleto_de_ninja_blanco: {
		id: 10057,
		key: 'amuleto_de_ninja_blanco',
		name: "Amuleto de ninja blanco",
		image: './assets/images/items/equipment/0057.webp',
		level: 10,
		stats: {
			vit: [6, 15],
			agi: [6, 10],
			crt: [1]
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			madera_de_fresno: 4,
			fuego_interno: 3
		},
		set: null,
	},
	amuleto_de_ninja_negro: {
		id: 10058,
		key: 'amuleto_de_ninja_negro',
		name: "Anillo de ninja negro",
		image: './assets/images/items/equipment/0058.webp',
		level: 10,
		stats: {
			int: [11, 15],
			crt: [1]
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			fuego_interno: 3,
			reliquia_de_incarnam: 3
		},
		set: null,
	},
	botas_aladas: {
		id: 10059,
		key: 'botas_aladas',
		name: "Botas aladas",
		image: './assets/images/items/equipment/0059.webp',
		level: 10,
		stats: {
			int: [6, 10],
			agi: [6, 10],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			fuego_interno: 4,
			madera_de_fresno: 3
		},
		set: null,
	},
	makinturon: {
		id: 10060,
		key: 'makinturon',
		name: "Makinturón",
		image: './assets/images/items/equipment/0060.webp',
		level: 10,
		stats: {
			str: [7, 10],
			cha: [7, 10],
			wis: [4, 5]
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			cola_de_miauflan: 3,
			piel_de_goota: 3
		},
		set: null,
	},
	delantal_de_criada: {
		id: 10061,
		key: 'delantal_de_criada',
		name: "Delantal de criada",
		image: './assets/images/items/equipment/0061.webp',
		level: 10,
		stats: {
			int: [11, 15],
			cur: [2, 3],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			madera_de_fresno: 3,
			lana_celeste: 3
		},
		set: null,
	},
	cinturon_de_samurai: {
		id: 10062,
		key: 'cinturon_de_samurai',
		name: "Cinturón de samurái",
		image: './assets/images/items/equipment/0062.webp',
		level: 10,
		stats: {
			crt: [2],
			agi: [2, 3], 
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			hueso_de_chafer: 3,
			reliquia_de_incarnam: 3
		},
		set: null,
	},
	botas_no: {
		id: 10063,
		key: 'botas_no',
		name: "Botas nö",
		image: './assets/images/items/equipment/0063.webp',
		level: 10,
		stats: {
			vit: [6, 15],
			agi: [3, 4], 
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			volva_de_amenita: 4,
			madera_de_fresno: 3
		},
		set: null,
	},
	anillo_de_lolita: {
		id: 10064,
		key: 'anillo_de_lolita',
		name: "Anillo de lolita",
		image: './assets/images/items/equipment/0064.webp',
		level: 10,
		stats: {
			vit: [11, 15],
			crt: [1],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			ortiga: 4,
			baba_de_jalato: 3
		},
		set: null,
	},
	collar_de_lilota: {
		id: 10065,
		key: 'collar_de_lilota',
		name: "Collar de Lilota",
		image: './assets/images/items/equipment/0065.webp',
		level: 10,
		stats: {
			vit: [6, 10],
			cha: [6, 10],
			chaDmg: [2, 3]
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			piel_de_goota: 4,
			fuego_interno: 3
		},
		set: null,
	},
	escudo_cometa: {
		id: 10066,
		key: 'escudo_cometa',
		name: "Escudo cometa",
		image: './assets/images/items/equipment/0066.webp',
		level: 10,
		stats: {
			agi: [11, 15], 
		},
		type: 'equipment',
		sort: 'escudo',
		recipe: {
			pelos_de_arakna_enferma: 4,
			tabla_de_aglomerado: 3
		},
		set: null,
	},
	anillo_de_las_rocosas: {
		id: 10067,
		key: 'anillo_de_las_rocosas',
		name: "Anillo de las rocosas",
		image: './assets/images/items/equipment/0067.webp',
		level: 11,
		stats: {
			vit: [16, 20], 
			agi: [7, 10], 
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pluma_de_pio_amarillo: 3,
			sangre_de_jalato: 1
		},
		set: null,
	},
	jabun_suave: {
		id: 10068,
		key: 'jabun_suave',
		name: "Jabún suave",
		image: './assets/images/items/equipment/0068.webp',
		level: 11,
		stats: {
			str: [14, 17], 
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			pluma_de_pio_amarillo: 3,
			tabla_de_aglomerado: 2
		},
		set: null,
	},
	capa_pandawushuka: {
		id: 10069,
		key: 'capa_pandawushuka',
		name: "Capa pandawushuka",
		image: './assets/images/items/equipment/0069.webp',
		level: 11,
		stats: {
			vit: [11, 15], 
			agi: [16, 25]
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			espina_de_champi_champ: 3,
			hoja_de_girasol_salvaje: 1,
		},
		set: null,
	},
	el_destino_dorado: {
		id: 10070,
		key: 'el_destino_dorado',
		name: "El Destino Dorado",
		image: './assets/images/items/equipment/0070.webp',
		level: 12,
		stats: {
			vit: [11, 15], 
			agi: [7, 10], 
			str: [7, 10]
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			espina_de_champi_champ: 3,
			ferrita: 2
		},
		set: null,
	},
	anillo_de_valor: {
		id: 10071,
		key: 'anillo_de_valor',
		name: "Anillo de valor",
		image: './assets/images/items/equipment/0071.webp',
		level: 12,
		stats: {
			str: [11, 15], 
			cha: [11, 15],
			res: [1, 2]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			piel_de_larva_verde: 3,
			ojo_de_arakmutada: 3
		},
		set: null,
	},
	poderosas_botas_de_klim: {
		id: 10072,
		key: 'poderosas_botas_de_klim',
		name: "Poderosas botas de Klim",
		image: './assets/images/items/equipment/0072.webp',
		level: 12,
		stats: {
			vit: [21, 25], 
			str: [-1, -10],
			agi: [21, 25],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			pluma_de_pio_amarillo: 3,
			ferrita: 2
		},
		set: null,
	},
	amuleto_blada: {
		id: 10073,
		key: 'amuleto_blada',
		name: "Amuleto Blada",
		image: './assets/images/items/equipment/0073.webp',
		level: 12,
		stats: {
			agi: [16, 20], 
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			semilla_de_adormidera: 3,
			piel_de_larva_amarilla: 3
		},
		set: null,
	},
	botas_de_satisfaccion: {
		id: 10074,
		key: 'botas_de_satisfaccion',
		name: "Botas de satisfacción",
		image: './assets/images/items/equipment/0074.webp',
		level: 12,
		stats: {
			str: [-21, -50], 
			int: [-21, -50], 
			cha: [-21, -50], 
			agi: [-21, -50], 
			pm: [1]
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			pluma_de_pio_rojo: 3,
			tabla_de_aglomerado: 2
		},
		set: null,
	},
	la_cadena_nhoro_kebriya: {
		id: 10075,
		key: 'la_cadena_nhoro_kebriya',
		name: "La cadena Nhoro Kebriya",
		image: './assets/images/items/equipment/0075.webp',
		level: 13,
		stats: {
			int: [7, 10], 
			intDmg: [2]
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			pico_de_tofu: 3,
			tabla_de_aglomerado: 2
		},
		set: null,
	},
	cinturon_de_bolsillo: {
		id: 10076,
		key: 'cinturon_de_bolsillo',
		name: "Cinturón de bolsillo",
		image: './assets/images/items/equipment/0076.webp',
		level: 13,
		stats: {
			str: [7, 10], 
			dmg: [1]
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			ala_de_moskito: 3,
			intestino_de_araknausea: 2
		},
		set: null,
	},
	capa_elini: {
		id: 10077,
		key: 'capa_elini',
		name: "Capa elini",
		image: './assets/images/items/equipment/0077.webp',
		level: 14,
		stats: {
			vit: [16, 20], 
			agi: [11, 15],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			pluma_de_pio_amarillo: 3,
			fluido_glacial: 1,
		},
		set: null,
	},
	capa_uleto: {
		id: 10078,
		key: 'capa_uleto',
		name: "Capa uleto",
		image: './assets/images/items/equipment/0078.webp',
		level: 14,
		stats: {
			vit: [21, 25], 
			pp: [10]
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			bronceador: 3,
			baba_de_rosa_demoniaca: 1
		},
		set: null,
	},
	capa_sulacorp: {
		id: 10079,
		key: 'capa_sulacorp',
		name: "Capa sulacorp",
		image: './assets/images/items/equipment/0079.webp',
		level: 14,
		stats: {
			str: [16, 25], 
			strDmg: [1],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			espina_de_champi_champ: 3,
			tabla_de_aglomerado: 2,
		},
		set: null,
	},
	anillo_mental: {
		id: 10080,
		key: 'anillo_mental',
		name: "Anillo mental",
		image: './assets/images/items/equipment/0080.webp',
		level: 14,
		stats: {
			int: [11, 15], 
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			ojo_de_arakmutada: 3,
			toalla_de_playa: 3
		},
		set: null,
	},
	herida_de_sacrogrito: {
		id: 10081,
		key: 'herida_de_sacrogrito',
		name: "Hérida de Sacrógrito",
		image: './assets/images/items/equipment/0081.webp',
		level: 15,
		stats: {
			vit: [16, 20], 
			str: [7, 10]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			ala_de_moskito: 3,
			caracola_marina: 3
		},
		set: null,
	},
	el_anillador: {
		id: 10082,
		key: 'el_anillador',
		name: "El anillador",
		image: './assets/images/items/equipment/0082.webp',
		level: 15,
		stats: {
			vit: [7, 10], 
			cha: [7, 10],
			chaDmg: [2, 3]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			piel_de_larva_verde: 3,
			concentrado_de_matorral: 1
		},
		set: null,
	},
	la_lucecita: {
		id: 10083,
		key: 'la_lucecita',
		name: "La lucecita",
		image: './assets/images/items/equipment/0083.webp',
		level: 15,
		stats: {
			int: [7, 10], 
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			pelos_de_arakna_enferma: 3,
			bronceador: 3
		},
		set: null,
	},
	escudo_tombariano: {
		id: 10084,
		key: 'escudo_tombariano',
		name: "Escudo tombariano",
		image: './assets/images/items/equipment/0084.webp',
		level: 15,
		stats: {
			str: [11, 30]
		},
		type: 'equipment',
		sort: 'escudo',
		recipe: {
			crin_de_miserata_strubiense: 2,
			tabla_de_aglomerado: 1
		},
		set: null,
	},
	el_blancoscudo: {
		id: 10085,
		key: 'el_blancoscudo',
		name: "El blancoscudo",
		image: './assets/images/items/equipment/0085.webp',
		level: 15,
		stats: {
			invo: [1]
		},
		type: 'equipment',
		sort: 'escudo',
		recipe: {
			esporma_de_champi_champ: 4,
			tabla_de_aglomerado: 1
		},
		set: null,
	},
	capa_de_rojez: {
		id: 10086,
		key: 'capa_de_rojez',
		name: "Capa de rojez",
		image: './assets/images/items/equipment/0086.webp',
		level: 16,
		stats: {
			vit: [21, 30],
			int: [8]
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			pluma_de_pio_amarillo: 3,
			alogdon_ancestral: 1
		},
		set: null,
	},
	botas_de_potencia: {
		id: 10087,
		key: 'botas_de_potencia',
		name: "Botas de potencia",
		image: './assets/images/items/equipment/0087.webp',
		level: 16,
		stats: {
			str: [16, 25],
			cha: [16, 25],
			pot: [4, 5],
		},
		type: 'equipment',
		sort: 'botas',
		recipe: {
			lengua_de_espanterrador: 3,
			pata_de_arakna_magica: 1
		},
		set: null,
	},
	el_etirujo: {
		id: 10088,
		key: 'el_etirujo',
		name: "El Etirujo",
		image: './assets/images/items/equipment/0088.webp',
		level: 17,
		stats: {
			vit: [21, 25],
			int: [11, 15],
			cur: [2, 4],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			piel_de_larva_naranja: 3,
			caracola_marina: 3
		},
		set: null,
	},
	anillo_vizna: {
		id: 10089,
		key: 'anillo_vizna',
		name: "Anllo Vizna",
		image: './assets/images/items/equipment/0089.webp',
		level: 17,
		stats: {
			vit: [16, 20],
			cha: [8, 11],
			chaDmg: [1],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			caracola_marina: 3,
			esporma_de_champi_champ: 1
		},
		set: null,
	},
	korko_klako: {
		id: 10090,
		key: 'korko_klako',
		name: "Korko Klako",
		image: './assets/images/items/equipment/0090.webp',
		level: 17,
		stats: {
			vit: [11, 15],
			invo: [1]
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			semilla_de_girasol: 1,
			concentrado_de_matorral: 1
		},
		set: null,
	},
	cinturon_de_seguridad: {
		id: 10091,
		key: 'cinturon_de_seguridad',
		name: "Cinturón de seguridad",
		image: './assets/images/items/equipment/0091.webp',
		level: 17,
		stats: {
			str: [16, 20],
		},
		type: 'equipment',
		sort: 'cinturon',
		recipe: {
			intestino_de_araknausea: 3,
			piel_de_larva_amarilla: 3
		},
		set: null,
	},
	capa_bilidad: {
		id: 10092,
		key: 'capa_bilidad',
		name: "Capa Bilidad",
		image: './assets/images/items/equipment/0092.webp',
		level: 17,
		stats: {
			vit: [26, 30],
			crt: [3],
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			petalo_de_rosa_demoniaca: 3,
			baba_de_rosa_demoniaca: 1
		},
		set: null,
	},
	amuleto_hortilla: {
		id: 10093,
		key: 'amuleto_hortilla',
		name: "Amuleto Hortilla",
		image: './assets/images/items/equipment/0093.webp',
		level: 17,
		stats: {
			vit: [6, 10],
			invo: [1],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			bronceador: 3,
			concentrado_de_matorral: 1
		},
		set: null,
	},
	capa_oscura: {
		id: 10094,
		key: 'capa_oscura',
		name: "Capa oscura",
		image: './assets/images/items/equipment/0094.webp',
		level: 18,
		stats: {
			vit: [21, 25],
			agi: [11, 15],	
		},
		type: 'equipment',
		sort: 'capa',
		recipe: {
			colmillos_de_ratas: 3,
			alogdon_ancestral: 1
		},
		set: null,
	},
	anillo_novato: {
		id: 10095,
		key: 'anillo_novato',
		name: "Anillo Novato",
		image: './assets/images/items/equipment/0095.webp',
		level: 18,
		stats: {
			vit: [16, 20],
			agi: [6, 10]
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			flor_del_diente_de_leon_diabolico: 3,
			pluma_de_pio_violeta: 3
		},
		set: null,
	},
	amuleto_de_chafer: {
		id: 10096,
		key: 'amuleto_de_chafer',
		name: "Amuleto de chafer",
		image: './assets/images/items/equipment/0096.webp',
		level: 19,
		stats: {
			str: [7, 10],
			cha: [7, 10],
			crt: [2],
		},
		type: 'equipment',
		sort: 'amuleto',
		recipe: {
			hueso_de_chafer: 10,
			concentrado_de_matorral: 1
		},
		set: null,
	},
	sombrero_de_paletoso: {
		id: 10097,
		key: 'sombrero_de_paletoso',
		name: "Sombrero de Paletoso",
		image: './assets/images/items/equipment/0097.webp',
		level: 20,
		stats: {
			pot: [16, 20],
			crt: [2],
		},
		type: 'equipment',
		sort: 'sombrero',
		recipe: {
			flor_del_diente_de_leon_diabolico: 3,
			colmillos_de_ratas: 3
		},
		set: null,
	},
	suerte_de_zurcarak: {
		id: 10098,
		key: 'suerte_de_zurcarak',
		name: "Suerte de Zurcarák",
		image: './assets/images/items/equipment/0098.webp',
		level: 20,
		stats: {
			int: [5, 7],
			cha: [5, 7],
			crt: [2],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			petalo_de_rosa_demoniaca: 3,
			hierba_loca: 1
		},
		set: null,
	},
	anillo_ralladuro: {
		id: 10099,
		key: 'anillo_ralladuro',
		name: "Anillo Ralladuro",
		image: './assets/images/items/equipment/0099.webp',
		level: 20,
		stats: {
			int: [7, 10],
			cha: [7, 10],
		},
		type: 'equipment',
		sort: 'anillo',
		recipe: {
			pluma_de_pio_violeta: 3,
			pluma_de_pio_amarillo: 3
		},
		set: null,
	},
	bio_varita: {
		id: 10100,
		key: 'bio_varita',
		name: "Bio varita",
		image: './assets/images/items/equipment/0100.webp',
		level: 1,
		power: {
			water: [[2, 6]],
		},
		stats: {
			cha: [3, 4]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			lana_celeste: 3,
			petalo_diafano: 3
		},
		set: null,
	},
	hacha_kemata: {
		id: 10101,
		key: 'hacha_kemata',
		name: "Hacha Kemata",
		image: './assets/images/items/equipment/0101.webp',
		level: 1,
		power: {
			earth: [[6, 10]],
		},
		stats: {
			str: [6, 10]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			madera_de_fresno: 3,
			hierro: 1
		},
		set: null,
	},
	machete_de_lenador: {
		id: 10102,
		key: 'machete_de_lenador',
		name: "Machete de leñador",
		image: './assets/images/items/equipment/0102.webp',
		level: 1,
		power: {
			earth: [[4, 9]],
		},
		stats: {
			vit: [7, 10]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			lana_celeste: 5,
			hierro: 1
		},
		set: null,
	},
	martillo_martel: {
		id: 10103,
		key: 'martillo_martel',
		name: "Martillo Martel",
		image: './assets/images/items/equipment/0103.webp',
		level: 1,
		power: {
			earth: [[4, 6]],
		},
		stats: {
			str: [4, 5],
			strDmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			madera_de_fresno: 3,
			petalo_diafano: 3
		},
		set: null,
	},
	talladora_de_mangos: {
		id: 10104,
		key: 'talladora_de_mangos',
		name: "Talladora de mangos",
		image: './assets/images/items/equipment/0104.webp',
		level: 2,
		power: {
			earth: [[1, 3]],
		},
		stats: {
			vit: [5, 7],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {	
			petalo_diafano: 3,
			hierro: 1
		},	
		set: null,
	},
	varita_de_maderucha: {
		id: 10105,
		key: 'varita_de_maderucha',
		name: "Varita de maderucha",
		image: './assets/images/items/equipment/0105.webp',
		level: 3,
		power: {
			fire: [[4, 8]],
		},
		stats: {
			int: [3, 5],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			cola_de_miauflan: 3,
			hierro: 1
		},
		set: null,
	},
	arco_nada: {
		id: 10106,
		key: 'arco_nada',
		name: "Arco nada",
		image: './assets/images/items/equipment/0106.webp',
		level: 5,
		power: {
			fire: [[3, 5]],
		},
		stats: {
			int: [7, 10],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			baba_de_jalato: 3,
			ortiga: 3
		},
		set: null,
	},
	hachita_ermundo: {
		id: 10107,
		key: 'hachita_ermundo',
		name: "Hachita Ermundo",
		image: './assets/images/items/equipment/0107.webp',
		level: 5,
		power: {
			earth: [[6, 10]],
		},
		stats: {
			vit: [5, 7],
			str: [5, 7],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			cenizas_eternas: 3,
			ferrita: 1
		},
		set: null,
	},
	martillo_de_maderucha: {
		id: 10108,
		key: 'martillo_de_maderucha',
		name: "Martillo de maderucha",
		image: './assets/images/items/equipment/0108.webp',
		level: 6,
		power: {
			fire: [[8, 10]],
		},
		stats: {
			vit: [7, 10],
			crt: [2]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			hueso_de_chafer: 3,
			hierro: 1
		},
		set: null,
	},
	mal_pico: {
		id: 10109,
		key: 'mal_pico',
		name: "Mal Pico",
		image: './assets/images/items/equipment/0109.webp',
		level: 6,
		power: {
			water: [[10, 13]],
		},
		stats: {
			pp: [10],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			madera_de_fresno: 10,
			hierro: 5
		},
		set: null,
	},
	pala_de_maderucha: {
		id: 10110,
		key: 'pala_de_maderucha',
		name: "Pala de maderucha",
		image: './assets/images/items/equipment/0110.webp',
		level: 6,
		power: {
			water: [[9, 11]],
		},
		stats: {
			cha: [7, 10],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			madera_de_fresno: 3,
			piel_de_goota: 3
		},
		set: null,
	},
	espada_de_maderucha: {
		id: 10111,
		key: 'espada_de_maderucha',
		name: "Espada de maderucha",
		image: './assets/images/items/equipment/0111.webp',
		level: 7,
		power: {
			earth: [[8, 10]],
		},
		stats: {
			str: [7, 10],
			strDmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			madera_de_fresno: 3,
			pluma_quimerica: 3
		},
		set: null,
	},
	arco_de_maderucha: {
		id: 10112,
		key: 'arco_de_maderucha',
		name: "Arco de maderucha",
		image: './assets/images/items/equipment/0112.webp',
		level: 7,
		power: {
			air: [[8, 10]],
		},
		stats: {
			vit: [16, 20],
			agi: [3, 8]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			ortiga: 3,
			piel_de_goota: 3
		},
		set: null,
	},
	dagas_de_maderucha: {
		id: 10113,
		key: 'dagas_de_maderucha',
		name: "Dagas de maderucha",
		image: './assets/images/items/equipment/0113.webp',
		level: 7,
		power: {
			earth: [[3, 4]],
		},
		stats: {
			agi: [7, 10],
			agiDmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			cola_de_miauflan: 3,
			reliquia_de_incarnam: 3
		},
		set: null,
	},
	baston_cojomudo: {
		id: 10114,
		key: 'baston_cojomudo',
		name: "Bastón cojomudo",
		image: './assets/images/items/equipment/0114.webp',
		level: 8,
		power: {
			air: [[2, 4]],
		},
		stats: {
			wis: [7, 10],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			cenizas_eternas: 3,
			hierro: 1
		},
		set: null,
	},
	devoradora_de_castanos: {
		id: 10115,
		key: 'devoradora_de_castanos',
		name: "Devoradora de castaños",
		image: './assets/images/items/equipment/0115.webp',
		level: 8,
		power: {
			earth: [[6, 10]],
		},
		stats: {
			agi: [7, 10],
			agiDmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			aceite_de_sesamo: 1,
			tabla_de_aglomerado: 1
		},
		set: null,
	},
	devoradora_de_fresnos: {
		id: 10116,
		key: 'devoradora_de_fresnos',
		name: "Devoradora de fresnos",
		image: './assets/images/items/equipment/0116.webp',
		level: 8,
		power: {
			water: [[6, 10]],
		},
		stats: {
			cha: [7, 10],
			crt: [2]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			hueso_de_chafer: 5,
			piel_de_goota: 5
		},
		set: null,
	},
	martillo_linkantrabioso: {
		id: 10117,
		key: 'martillo_linkantrabioso',
		name: "Martillo Linkantrabioso",
		image: './assets/images/items/equipment/0117.webp',
		level: 8,
		power: {
			water: [[5, 7]],
			air: [[5, 7]],
		},
		stats: {
			vit: [7, 10],
			pot: [7, 10],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			ferrita: 2,
			tabla_de_aglomerado: 2
		},
		set: null,
	},
	baston_de_maderucha: {
		id: 10118,
		key: 'baston_de_maderucha',
		name: "Bastón de maderucha",
		image: './assets/images/items/equipment/0118.webp',
		level: 9,
		power: {
			earth: [[7, 11]],
		},
		stats: {
			str: [7, 10],
			strDmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			cenizas_eternas: 3,
			hierro: 1
		},
		set: null,
	},
	varita_de_fuego_fatuo: {
		id: 10119,
		key: 'varita_de_fuego_fatuo',
		name: "Varita de fuego fatuo",
		image: './assets/images/items/equipment/0119.webp',
		level: 10,
		power: {
			fire: [[8, 12]],
		},
		stats: {
			int: [5, 7],
			crt: [2]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			fuego_interno: 3,
			volva_de_amenita: 3
		},
		set: null,
	},
	arco_silbante: {
		id: 10120,
		key: 'arco_silbante',
		name: "Arco silbante",
		image: './assets/images/items/equipment/0120.webp',
		level: 11,
		power: {
			earth: [[3, 5]],
		},
		stats: {
			pot: [7, 10],
			dmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			espina_de_champi_champ: 3,
			pluma_de_pio_azul: 3
		},
		set: null,
	},
	varita_de_hielo: {
		id: 10121,
		key: 'varita_de_hielo',
		name: "Varita de hielo",
		image: './assets/images/items/equipment/0121.webp',
		level: 11,
		power: {
			fire: [[14, 18]],
		},
		stats: {
			int: [9, 12],
			intDmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			ojo_de_arakmutada: 3,
			piel_de_larva_amarilla: 3
		},
		set: null,
	},
	limpiadoras: {
		id: 10122,
		key: 'limpiadoras',
		name: "Limpiadoras",
		image: './assets/images/items/equipment/0122.webp',
		level: 12,
		power: {
			earth: [[1, 3]],
		},
		stats: {
			vit: [11, 15],
			earth: [7, 10]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			pluma_de_pio_rosa: 3,
			baba_de_rosa_demoniaca: 1
		},
		set: null,
	},
	baston_de_jalatero: {
		id: 10123,
		key: 'baston_de_jalatero',
		name: "Bastón de jalatero",
		image: './assets/images/items/equipment/0123.webp',
		level: 12,
		power: {
			earth: [[6, 10]],
		},
		stats: {
			vit: [11, 15],
			earth: [5, 7],
			fire: [5, 7]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			pelos_de_arakna_enferma: 3,
			sangre_de_jalato: 1
		},
		set: null,
	},
	hacha_vorom: {
		id: 10124,
		key: 'hacha_vorom',
		name: "Hacha Vor'Om",
		image: './assets/images/items/equipment/0124.webp',
		level: 12,
		power: {
			air: [[10, 14]],
		},
		stats: {
			vit: [21, 25],
			agi: [7, 10]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			reliquia_de_incarnam: 5,
			ferrita: 1
		},
		set: null,
	},
	baston_hojudo: {
		id: 10125,
		key: 'baston_hojudo',
		name: "Bastón Hojudo",
		image: './assets/images/items/equipment/0125.webp',
		level: 12,
		power: {
			earth: [[13, 17]],
		},
		stats: {
			str: [11, 15],
			strDmg: [2]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			pelos_de_arakna_enferma: 3,
			madera_carcomida: 1
		},
		set: null,
	},
	dagas_de_hierrucho: {
		id: 10126,
		key: 'dagas_de_hierrucho',
		name: "Dagas de hierrucho",
		image: './assets/images/items/equipment/0126.webp',
		level: 13,
		power: {
			earth: [[5, 8]],
		},
		stats: {
			str: [7, 10],
			crt: [2],
			strDmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			pluma_de_pio_rosa: 3,
			baba_de_rosa_demoniaca: 1
		},
		set: null,
	},
	la_cola: {
		id: 10127,
		key: 'la_cola',
		name: "La Cola",
		image: './assets/images/items/equipment/0127.webp',
		level: 13,
		power: {
			earth: [[1, 25]],
		},
		stats: {
			vit: [21, 25],
			agi: [7, 10],
			agiDmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			petalo_de_girasol_salvaje: 3,
			escama_pegajosa: 1
		},
		set: null,
	},
	arco_holico: {
		id: 10128,
		key: 'arco_holico',
		name: "Arco Hólico",
		image: './assets/images/items/equipment/0128.webp',
		level: 13,
		power: {
			water: [[12, 14]],
		},
		stats: {
			vit: [16, 20],
			cha: [11, 15]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			piel_de_larva_amarilla: 3,
			baba_de_rosa_demoniaca: 1
		},
		set: null,
	},
	martillo_de_paliza: {
		id: 10129,
		key: 'martillo_de_paliza',
		name: "Martillo de paliza",
		image: './assets/images/items/equipment/0129.webp',
		level: 15,
		power: {
			str: [[14, 18]],
		},
		stats: {
			vit: [16, 20],
			int: [7, 10],
			pot: [5, 7]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			pluma_de_pio_verde: 3,
			cejas_de_mosquito: 1
		},
		set: null,
	},
	pala_de_los_campos: {
		id: 10130,
		key: 'pala_de_los_campos',
		name: "Pala de los Campos",
		image: './assets/images/items/equipment/0130.webp',
		level: 15,
		power: {
			fire: [[5, 9]],
		},
		stats: {
			vit: [21, 25],
			int: [11, 15]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			lengua_de_espanterrador: 3,
			tabla_de_aglomerado: 2
		},
		set: null,
	},
	hacha_alterfilo: {
		id: 10131,
		key: 'hacha_alterfilo',
		name: "Haca Al-Terófilo",
		image: './assets/images/items/equipment/0131.webp',
		level: 15,
		power: {
			earth: [[3, 7]],
		},
		stats: {
			str: [21, 25],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			semilla_de_girasol: 5,
			ferrita: 2
		},
		set: null,
	},
	maza_clavito: {
		id: 10132,
		key: 'maza_clavito',
		name: "Maza Clavito",
		image: './assets/images/items/equipment/0132.webp',
		level: 15,
		power: {
			fire: [[12, 16]],
		},
		stats: {
			strDmg: [2],
			intDmg: [2],
			chaDmg: [2],
			agiDmg: [2],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			bronceador: 3,
			ferrita: 2
		},
		set: null,
	},
	baston_espiritual: {
		id: 10133,
		key: 'baston_espiritual',
		name: "Bastón Espiritual",
		image: './assets/images/items/equipment/0133.webp',
		level: 16,
		power: {
			fire: [[7, 11]],
		},
		stats: {
			vit: [16, 20],
			int: [11, 15],
			crt: [1],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			pata_de_arakna: 3,
			pluma_de_pio_amarillo: 3
		},
		set: null,
	},
	cerberus: {
		id: 10134,
		key: 'cerberus',
		name: "Cerberus",
		image: './assets/images/items/equipment/0134.webp',
		level: 16,
		power: {
			earth: [[16, 20]],
		},
		stats: {
			agi: [16, 20],
			crt: [1, 2]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			flor_del_diente_de_leon_diabolico: 3,
			pluma_de_pio_rosa: 3
		},
		set: null,
	},
	hoja_de_gobletrotter: {
		id: 10135,
		key: 'hoja_de_gobletrotter',
		name: "Hoja de gobletrotter",
		image: './assets/images/items/equipment/0135.webp',
		level: 16,
		power: {
			earth: [[16, 20]],
		},
		stats: {
			str: [16, 20],
			crt: [1, 2]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			lengua_de_espanterrador: 4,
			piel_de_larva_naranja: 3
		},
		set: null,
	},
	espada_dha: {
		id: 10136,
		key: 'espada_dha',
		name: "Espada Dha",
		image: './assets/images/items/equipment/0136.webp',
		level: 17,
		power: {
			earth: [[6, 10]],
		},
		stats: {
			vit: [16, 20],
			str: [7, 10],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			pico_de_tofu: 3,
			pata_de_arakna_magica: 1
		},
		set: null,
	},
	dagas_de_croclage: {
		id: 10137,
		key: 'dagas_de_croclage',
		name: "Dagas de Croclage",
		image: './assets/images/items/equipment/0137.webp',
		level: 17,
		power: {
			air: [[2, 5]],
		},
		stats: {
			vit: [21, 25],
			agi: [16, 20],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			caracola_marina: 3,
			aluminita: 1
		},
		set: null,
	},
	pala_de_crapullo: {
		id: 10138,
		key: 'pala_de_crapullo',
		name: "Pala de Crapullo",
		image: './assets/images/items/equipment/0138.webp',
		level: 17,
		power: {
			water: [[6, 10]],
		},
		stats: {
			vit: [21, 30],
			cha: [9, 12]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			pico_de_tofu: 3,
			pluma_de_pio_rosa: 3
		},
		set: null,
	},
	cortadora_de_tejo: {
		id: 10139,
		key: 'cortadora_de_tejo',
		name: "Cortadora de Tejo",
		image: './assets/images/items/equipment/0139.webp',
		level: 17,
		power: {
			fire: [[11, 15]],
		},
		stats: {
			int: [21, 30],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			pincho_de_prespic: 4,
			concentrado_de_matorral: 1
		},
		set: null,
	},
	espada_sagrada: {
		id: 10140,
		key: 'espada_sagrada',
		name: "Espada sagrada",
		image: './assets/images/items/equipment/0140.webp',
		level: 17,
		power: {
			earth: [[14, 18]],
		},
		stats: {
			vit: [26, 30],
			crt: [3]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			hilo_de_seda: 1,
			aluminita: 1
		},
		set: null,
	},
	korta_kotas: {
		id: 10141,
		key: 'korta_kotas',
		name: "Korta-Kotas",
		image: './assets/images/items/equipment/0141.webp',
		level: 18,
		power: {
			air: [[11, 15]],
		},
		stats: {
			agi: [16, 25],
			crt: [2],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			petalo_de_girasol_salvaje: 3,
			pluma_de_pio_verde: 3
		},
		set: null,
	},
	martillo_picador: {
		id: 10142,
		key: 'martillo_picador',
		name: "Martillo picador",
		image: './assets/images/items/equipment/0142.webp',
		level: 18,
		power: {
			earth: [[6, 10]],
		},
		stats: {
			str: [16, 25],
			crt: [2]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			intestino_de_araknausea: 3,
			concentrado_de_matorral: 1
		},
		set: null,
	},
	martillo_de_marfil: {
		id: 10143,
		key: 'martillo_de_marfil',
		name: "Martillo de marfil",
		image: './assets/images/items/equipment/0143.webp',
		level: 19,
		power: {
			fire: [[10, 14]],
		},
		stats: {
			vit: [21, 30],
			intDmg: [2],
			crt: [2, 3],
			crtDmg: [2],
			res: [2]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			pluma_de_pio_rojo: 3,
			baba_de_rosa_demoniaca: 1
		},
		set: null,
	},
	pala_de_raspadura: {
		id: 10144,
		key: 'pala_de_raspadura',
		name: "Pala de raspadura",
		image: './assets/images/items/equipment/0144.webp',
		level: 19,
		power: {
			earth: [[11, 15]],
		},
		stats: {
			vit: [11, 15],
			cha: [11, 15],
			agi: [11, 15],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			aletas_de_competicion: 3,
			pata_de_arakna_magica: 1
		},
		set: null,
	},
	arco_desconcertante: {
		id: 10145,
		key: 'arco_desconcertante',
		name: "Arco desconcertante",
		image: './assets/images/items/equipment/0145.webp',
		level: 19,
		power: {
			water: [[5, 7]],
		},
		stats: {
			vit: [16, 20],
			cha: [11, 15],
			wis: [4, 5],
			pp: [2, 3],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			lengua_de_espanterrador: 3,
			bronceador: 3
		},
		set: null,
	},
	barba_gris: {
		id: 10146,
		key: 'barba_gris',
		name: "Barba Gris",
		image: './assets/images/items/equipment/0146.webp',
		level: 20,
		power: {
			earth: [[16, 20]],
		},
		stats: {
			vit: [16, 25],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			ala_de_moskito: 3,
			piel_pachucha: 1
		},
		set: null,
	},
	varita_de_liriel: {
		id: 10147,
		key: 'varita_de_liriel',
		name: "Varita de Liriel",
		image: './assets/images/items/equipment/0147.webp',
		level: 20,
		power: {
			air: [[16, 20]],
		},
		stats: {
			agi: [11, 15],
			crt: [2, 3],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			aletas_de_competicion: 3,
			concentrado_de_matorral: 2
		},
		set: null,
	},
	arco_de_bwork_arquero: {
		id: 10148,
		key: 'arco_de_bwork_arquero',
		name: "Arco de bwork arquero",
		image: './assets/images/items/equipment/0148.webp',
		level: 20,
		power: {
			earth: [[8, 12]],
		},
		stats: {
			str: [16, 20],
			strDmg: [1]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			piel_de_larva_verde: 3,
			aletas_de_competicion: 3
		},
		set: null,
	},
	baston_torron: {
		id: 10149,
		key: 'baston_torron',
		name: "Bastón Torrón",
		image: './assets/images/items/equipment/0149.webp',
		level: 20,
		power: {
			fire: [[12, 16]],
		},
		stats: {
			vit: [21, 25],
			int: [16, 20],
			intDmg: [2],
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			espina_de_champi_champ: 3,
			ojo_de_arakmutada: 3
		},
		set: null,
	},
	ergot_mina: {
		id: 10150,
		key: 'ergot_mina',
		name: "Ergot Mina",
		image: './assets/images/items/equipment/0150.webp',
		level: 20,
		power: {
			earth: [[6, 8, true]],
		},
		stats: {
			vit: [6, 10],
			cha: [16, 20],
			crt: [2]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			petalo_de_girasol_salvaje: 3,
			aluminita: 2
		},
		set: null,
	},
	espada_del_caballero_de_hielo: {
		id: 10151,
		key: 'espada_del_caballero_de_hielo',
		name: "Espada del Caballero de Hielo",
		image: './assets/images/items/equipment/0151.webp',
		level: 20,
		power: {
			fire: [[11, 15, true]],
		},
		stats: {
			vit: [16, 20],
			int: [11, 15],
			cur: [5]
		},
		type: 'equipment',
		sort: 'arma',
		recipe: {
			ala_de_moskito: 3,
			concentrado_de_matorral: 2
		},
		set: null,
	},
}
