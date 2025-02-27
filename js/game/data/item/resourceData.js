export const resourceData = {
	// MINERAL
	hierro: {
		key: 'hierro',
		name: 'Hierro',
		image: './assets/images/items/resources/00-0000.png',
		type: 'resource',
		sort: 'mineral',
		collect: {
			time: 11,
			amount: [2, 7],
			exp: 6,
			level: 1
		}
	},
	cobre: {
		key: 'cobre',
		name: 'Cobre',
		image: './assets/images/items/resources/00-0001.png',
		type: 'resource',
		sort: 'mineral',
		collect: {
			time: 10,
			amount: [4, 6],
			exp: 13,
			level: 10
		}
	},
	// MADERA
	madera_de_fresno: {
		key: 'madera_de_fresno',
		name: 'Madera de fresno',
		image: './assets/images/items/resources/01-0000.png',
		type: 'resource',
		sort: 'madera',
		collect: {
			time: 11,
			amount: [3, 7],
			exp: 6,
			level: 1
		}
	},
	madera_carcomida: {
		key: 'madera_carcomida',
		name: 'Madera carcomida',
		image: './assets/images/items/resources/01-0001.png',
		type: 'resource',
		sort: 'madera' 
	},
	madera_de_castano: {
		key: 'madera_de_castano',
		name: 'Madera de castaño',
		image: './assets/images/items/resources/01-0002.png',
		type: 'resource',
		sort: 'madera',
		collect: {
			time: 12,
			amount: [4, 6],
			exp: 18,
			level: 20
		}
	},
	// CEREAL
	trigo: {
		key: 'trigo',
		name: 'Trigo',
		image: './assets/images/items/resources/02-0000.png',
		type: 'resource',
		sort: 'cereal',
		collect: {
			time: 11,
			amount: [4, 8],
			exp: 6,
			level: 1
		}
	},
	cebada: {
		key: 'cebada',
		name: 'Cebada',
		image: './assets/images/items/resources/02-0001.png',
		type: 'resource',
		sort: 'cereal',
		collect: {
			time: 15,
			amount: [7, 11],
			exp: 21,
			level: 20
		}
	},
	trigo_de_oro: {
		key: 'trigo_de_oro',
		name: 'Trigo de oro',
		image: './assets/images/items/resources/02-0002.png',
		type: 'resource',
		sort: 'cereal',
	},
	cebada_azucarada: {
		key: 'cebada_azucarada',
		name: 'Cebada azucarada',
		image: './assets/images/items/resources/02-0003.png',
		type: 'resource',
		sort: 'cereal',
	},
	// PLANTA
	ortiga: {
		key: 'ortiga',
		name: 'Ortiga',
		image: './assets/images/items/resources/03-0000.png',
		type: 'resource',
		sort: 'planta',
		collect: {
			time: 11,
			amount: [2, 5],
			exp: 6,
			level: 1
		}
	},
	lengua_de_espanterrador: {
		key: 'lengua_de_espanterrador',
		name: 'Lenga de espanterror',
		image: './assets/images/items/resources/03-0001.png',
		type: 'resource',
		sort: 'planta' 
	},
	hierba_loca: {
		key: 'hierba_loca',
		name: 'Hierba loca',
		image: './assets/images/items/resources/03-0002.png',
		type: 'resource',
		sort: 'planta' 
	},
	hoja_de_rosa_oscura: {
		key: 'hoja_de_rosa_oscura',
		name: 'Hoja de rosa oscura',
		image: './assets/images/items/resources/03-0003.png',
		type: 'resource',
		sort: 'planta' 
	},
	hoja_de_girasol_salvaje: {
		key: 'hoja_de_girasol_salvaje',
		name: 'Hoja de girasol salvaje',
		image: './assets/images/items/resources/03-0004.png',
		type: 'resource',
		sort: 'planta' 
	},
	salvia: {
		key: 'salvia',
		name: 'Salvia',
		image: './assets/images/items/resources/03-0005.png',
		type: 'resource',
		sort: 'planta',
		collect: {
			time: 12,
			amount: [4, 6],
			exp: 18,
			level: 20
		}
	},
	// ALEACION
	ferrita: {
		key: 'ferrita',
		name: 'Ferrita',
		image: './assets/images/items/resources/04-0000.png',
		type: 'resource',
		sort: 'aleacion',
		level: 1,
		recipe: {
			hierro: 10,
		}
	},
	aluminita: {
		key: 'aluminita',
		name: 'Aluminita',
		image: './assets/images/items/resources/04-0001.png',
		type: 'resource',
		sort: 'aleacion',
		level: 20,
		recipe: {
			hierro: 10,
			cobre: 10
		}
	},
	agua_ferruginosa: {
		key: 'agua_ferruginosa',
		name: 'Agua ferruginosa',
		image: './assets/images/items/resources/04-0002.png',
		type: 'resource',
		sort: 'aleacion',
		level: 10,
		recipe: {
			hierro: 10,
			agua_potable: 10
		}
	},
	// TABLA
	tabla_de_aglomerado: {
		key: 'tabla_de_aglomerado',
		name: 'Tabla de aglomerado',
		image: './assets/images/items/resources/05-0000.png',
		type: 'resource',
		sort: 'tabla',
		level: 1,
		recipe: {
			madera_de_fresno: 10,
		}
	},
	tabla_de_contrachapado: {
		key: 'tabla_de_contrachapado',
		name: 'Tabla de contrachapado',
		image: './assets/images/items/resources/05-0001.png',
		type: 'resource',
		sort: 'tabla',
		level: 20,
		recipe: {
			madera_de_fresno: 10,
			madera_de_castano: 10,
		}
	},
	// RECURSO
	fuego_interno: {
		key: 'fuego_interno',
		name: 'Fuego interno',
		image: './assets/images/items/resources/06-0000.png',
		type: 'resource',
		sort: 'recurso' 
	},
	reliquia_de_incarnam: {
		key: 'reliquia_de_incarnam',
		name: 'Reliquia de Incarnam',
		image: './assets/images/items/resources/06-0001.png',
		type: 'resource',
		sort: 'recurso' 
	},
	bellota_de_peazo_beyota: {
		key: 'bellota_de_peazo_beyota',
		name: 'Bellota de Peazo Beyota',
		image: './assets/images/items/resources/06-0002.png',
		type: 'resource',
		sort: 'recurso' 
	},
	hilo_de_seda: {
		key: 'hilo_de_seda',
		name: 'Hilo de seda',
		image: './assets/images/items/resources/06-0003.png',
		type: 'resource',
		sort: 'resource' 
	},
	bronceador: {
		key: 'bronceador',
		name: 'Bronceador',
		image: './assets/images/items/resources/06-0004.png',
		type: 'resource',
		sort: 'resource' 
	},
	alogdon_ancestral: {
		key: 'alogdon_ancestral',
		name: 'Algdón ancestral',
		image: './assets/images/items/resources/06-0005.png',
		type: 'resource',
		sort: 'resource' 
	},
	caracola_marina: {
		key: 'caracola_marina',
		name: 'Caracola marina',
		image: './assets/images/items/resources/06-0006.png',
		type: 'resource',
		sort: 'resource' 
	},
	aletas_de_competicion: {
		key: 'aletas_de_competicion',
		name: 'Aletas de competición',
		image: './assets/images/items/resources/06-0007.png',
		type: 'resource',
		sort: 'resource' 
	},
	hilo_de_lino: {
		key: 'hilo_de_lino',
		name: 'Hilo de lino',
		image: './assets/images/items/resources/06-0008.png',
		type: 'resource',
		sort: 'resource' 
	},
	intestino_de_araknausea: {
		key: 'intestino_de_araknausea',
		name: 'Intestino de araknáusea',
		image: './assets/images/items/resources/06-0009.png',
		type: 'resource',
		sort: 'resource' 
	},
	mantillo: {
		key: 'mantillo',
		name: 'Mantillo',
		image: './assets/images/items/resources/06-0010.png',
		type: 'resource',
		sort: 'resource' 
	},
	cabellera_de_minilubo: {
		key: 'cabellera_de_minilubo',
		name: 'Cabellera de minilubo',
		image: './assets/images/items/resources/06-0011.png',
		type: 'resource',
		sort: 'resource' 
	},
	// PLUMA
	pluma_quimerica: {
		key: 'pluma_quimerica',
		name: 'Pluma quimérica',
		image: './assets/images/items/resources/07-0000.png',
		type: 'resource',
		sort: 'pluma' 
	},
	pluma_de_pio_violeta: {
		key: 'pluma_de_pio_violeta',
		name: 'Pluma de Pío Violeta',
		image: './assets/images/items/resources/07-0001.png',
		type: 'resource',
		sort: 'pluma' 
	},
	pluma_de_pio_amarillo: {
		key: 'pluma_de_pio_amarillo',
		name: 'Pluma de Pío Amarillo',
		image: './assets/images/items/resources/07-0002.png',
		type: 'resource',
		sort: 'pluma' 
	},
	pluma_de_pio_rosa: {
		key: 'pluma_de_pio_rsao',
		name: 'Pluma de Pío Rosa',
		image: './assets/images/items/resources/07-0003.png',
		type: 'resource',
		sort: 'pluma' 
	},
	pluma_de_pio_verde: {
		key: 'pluma_de_pio_verde',
		name: 'Pluma de Pío Verde',
		image: './assets/images/items/resources/07-0004.png',
		type: 'resource',
		sort: 'pluma' 
	},
	pluma_de_pio_rojo: {
		key: 'pluma_de_pio_rojo',
		name: 'Pluma de Pío Rojo',
		image: './assets/images/items/resources/07-0005.png',
		type: 'resource',
		sort: 'pluma' 
	},
	pluma_de_pio_azul: {
		key: 'pluma_de_pio_azul',
		name: 'Pluma de Pío Azul',
		image: './assets/images/items/resources/07-0006.png',
		type: 'resource',
		sort: 'pluma' 
	},
	// PIEL
	piel_de_goota: {
		key: 'piel_de_goota',
		name: 'Piel de goota',
		image: './assets/images/items/resources/08-0000.png',
		type: 'resource',
		sort: 'piel' 
	},		
	piel_de_mob_laesponja: {
		key: 'piel_de_mob_laesponja',
		name: 'Piel de Mob Laesponja',
		image: './assets/images/items/resources/08-0001.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_de_larva_verde: {
		key: 'piel_de_larva_verde',
		name: 'Piel de larva verde',
		image: './assets/images/items/resources/08-0002.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_de_larva_azul: {
		key: 'piel_de_larva_azul',
		name: 'Piel de larva azul',
		image: './assets/images/items/resources/08-0003.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_de_larva_naranja: {
		key: 'piel_de_larva_naranja',
		name: 'Piel de larva naranja',
		image: './assets/images/items/resources/08-0004.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_de_larva_amarilla: {
		key: 'piel_de_larva_amarilla',
		name: 'Piel de larva amarilla',
		image: './assets/images/items/resources/08-0005.png',
		type: 'resource',
		sort: 'piel' 
	},
	escama_pegajosa: {
		key: 'escama_pegajosa',
		name: 'Escama pegajosa',
		image: './assets/images/items/resources/08-0006.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_pachucha: {
		key: 'piel_pachucha',
		name: 'Piel pachucha',
		image: './assets/images/items/resources/08-0007.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_de_larva_zafiro: {
		key: 'piel_de_larva_zafiro',
		name: 'Piel de larva zafiro',
		image: './assets/images/items/resources/08-0008.png',
		type: 'resource',
		sort: 'piel' 
	},
	escama_de_cocodrail: {
		key: 'escama_de_cocodrail',
		name: 'Escama de cocodrail',
		image: './assets/images/items/resources/08-0009.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_de_raul_mops: {
		key: 'piel_de_raul_mops',
		name: 'Piel de Raúl Mops',
		image: './assets/images/items/resources/08-0010.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_de_larva_esmeralda: {
		key: 'piel_de_larva_esmeralda',
		name: 'Piel de larva esmeralda',
		image: './assets/images/items/resources/08-0011.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_de_larva_rubi: {
		key: 'piel_de_larva_rubi',
		name: 'Piel de larva rubí',
		image: './assets/images/items/resources/08-0012.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_de_shin_larva: {
		key: 'piel_de_shin_larva',
		name: 'Piel de Shin Larva',
		image: './assets/images/items/resources/08-0013.png',
		type: 'resource',
		sort: 'piel' 
	},
	piel_de_bworka: {
		key: 'piel_de_bworka',
		name: 'Piel de Bworka',
		image: './assets/images/items/resources/08-0014.png',
		type: 'resource',
		sort: 'piel' 
	},
	// FLOR
	petalo_diafano: {
		key: 'petalo_diafano',
		name: 'Pétalo diáfano',
		image: './assets/images/items/resources/09-0000.png',
		type: 'resource',
		sort: 'flor' 
	},
	petalo_de_rosa_demoniaca: {
		key: 'petalo_de_rosa_demoniaca',
		name: 'Pétalo de rosa demoníaca',
		image: './assets/images/items/resources/09-0001.png',
		type: 'resource',
		sort: 'flor' 
	},
	flor_del_diente_de_leon_diabolico: {
		key: 'flor_del_diente_de_leon_diabolico',
		name: 'Flor de diente de león diabólico',
		image: './assets/images/items/resources/09-0002.png',
		type: 'resource',
		sort: 'flor' 
	},
	petalo_magico_de_girasol_hambriento: {
		key: 'petalo_magico_de_girasol_hambriento',
		name: 'Pétalo mágico de girasol hambriento',
		image: './assets/images/items/resources/09-0003.png',
		type: 'resource',
		sort: 'flor' 
	},
	petalo_de_girasol_salvaje: {
		key: 'petalo_de_girasol_salvaje',
		name: 'Pétalo de girasol salvaje',
		image: './assets/images/items/resources/09-0004.png',
		type: 'resource',
		sort: 'flor' 
	},
	petalo_de_rosa_oscura: {
		key: 'petalo_de_rosa_oscura',
		name: 'Pétalo de rosa oscura',
		image: './assets/images/items/resources/09-0005.png',
		type: 'resource',
		sort: 'flor' 
	},
	// LANA
	lana_celeste: {
		key: 'lana_celeste',
		name: 'Lana celeste',
		image: './assets/images/items/resources/10-0000.png',
		type: 'resource',
		sort: 'lana' 
	},
	lana_de_jefe_de_guerra_jalato: {
		key: 'lana_de_jefe_de_guerra_jalato',
		name: 'Lana de jefe de guerra jalató',
		image: './assets/images/items/resources/10-0001.png',
		type: 'resource',
		sort: 'lana' 
	},
	lana_de_jalato: {
		key: 'lana_de_jalato',
		name: 'Lana de jalató',
		image: './assets/images/items/resources/10-0002.png',
		type: 'resource',
		sort: 'lana' 
	},
	lana_de_jalatin_negro: {
		key: 'lana_de_jalatin_negro',
		name: 'Lana de jalatín negro',
		image: './assets/images/items/resources/10-0003.png',
		type: 'resource',
		sort: 'resoulanarce' 
	},
	// POLVO
	cenizas_eternas: {
		key: 'cenizas_eternas',
		name: 'Cenizas eternas',
		image: './assets/images/items/resources/11-0000.png',
		type: 'resource',
		sort: 'polvo' 
	},
	polvo_temporal: {
		key: 'polvo_temporal',
		name: 'Polvo temporal',
		image: './assets/images/items/resources/11-0001.png',
		type: 'resource',
		sort: 'polvo' 
	},
	// LIQUIDO
	agua_potable: {
		key: 'agua_potable',
		name: 'Agua potable',
		image: './assets/images/items/resources/12-0000.png',
		type: 'resource',
		sort: 'liquido' 
	},
	baba_de_jalato: {
		key: 'baba_de_jalato',
		name: 'Baba de jalató',
		image: './assets/images/items/resources/12-0001.png',
		type: 'resource',
		sort: 'liquido' 
	},
	sangre_de_jalato: {
		key: 'sangre_de_jalato',
		name: 'Sangre de jalató',
		image: './assets/images/items/resources/12-0002.png',
		type: 'resource',
		sort: 'liquido' 
	},
	fluido_glacial: {
		key: 'fluido_glacial',
		name: 'Fluido glacial',
		image: './assets/images/items/resources/12-0003.png',
		type: 'resource',
		sort: 'liquido' 
	},
	baba_de_rosa_demoniaca: {
		key: 'baba_de_rosa_demoniaca',
		name: 'Baba de rosa demoníaca',
		image: './assets/images/items/resources/12-0004.png',
		type: 'resource',
		sort: 'liquido' 
	},
	// HONGO
	volva_de_amenita: {
		key: 'volva_de_amenita',
		name: 'Volva de amenita',
		image: './assets/images/items/resources/13-0000.png',
		type: 'resource',
		sort: 'hongo' 
	},
	espina_de_champi_champ: {
		key: 'espina_de_champi_champ',
		name: 'Espina de champi champ',
		image: './assets/images/items/resources/13-0001.png',
		type: 'resource',
		sort: 'hongo' 
	},
	esporma_de_champi_champ: {
		key: 'esporma_de_champi_champ',
		name: 'Esporma de champi champ',
		image: './assets/images/items/resources/13-0002.png',
		type: 'resource',
		sort: 'hongo' 
	},
	champinon_luidchi: {
		key: 'champinon_luidchi',
		name: 'Champiñón Luidchi',
		image: './assets/images/items/resources/13-0003.png',
		type: 'resource',
		sort: 'hongo' 
	},
	laminilla_de_champo_azul: {
		key: 'laminilla_de_champo_azul',
		name: 'Laminilla de champo azul',
		image: './assets/images/items/resources/13-0004.png',
		type: 'resource',
		sort: 'hongo' 
	},
	laminilla_de_champo_marron: {
		key: 'laminilla_de_champo_marron',
		name: 'Laminilla de champo marrón',
		image: './assets/images/items/resources/13-0005.png',
		type: 'resource',
		sort: 'hongo' 
	},
	laminilla_de_champo_rojo: {
		key: 'laminilla_de_champo_rojo',
		name: 'Laminilla de champo rojo',
		image: './assets/images/items/resources/13-0006.png',
		type: 'resource',
		sort: 'hongo' 
	},
	laminilla_de_champo_verde: {
		key: 'laminilla_de_champo_verde',
		name: 'Laminilla de champo verde',
		image: './assets/images/items/resources/13-0007.png',
		type: 'resource',
		sort: 'hongo' 
	},
	seta: {
		key: 'seta',
		name: 'Seta',
		image: './assets/images/items/resources/13-0008.png',
		type: 'resource',
		sort: 'hongo' 
	},
	// COLA
	cola_de_miauflan: {
		key: 'cola_de_miauflan',
		name: 'Cola de miauflan',
		image: './assets/images/items/resources/14-0000.png',
		type: 'resource',
		sort: 'cola' 
	},
	// HUESO
	hueso_de_chafer: {
		key: 'hueso_de_chafer',
		name: 'Hueso de chafer',
		image: './assets/images/items/resources/15-0000.png',
		type: 'resource',
		sort: 'hueso' 
	},
	craneo_de_chadalid: {
		key: 'craneo_de_chadalid',
		name: 'Cráneo de Chadalid',
		image: './assets/images/items/resources/15-0001.png',
		type: 'resource',
		sort: 'hueso' 
	},
	colmillo_de_jabali: {
		key: 'colmillo_de_jabali',
		name: 'Colmillo de jabalí',
		image: './assets/images/items/resources/15-0002.png',
		type: 'resource',
		sort: 'hueso' 
	},
	pincho_de_prespic: {
		key: 'pincho_de_prespic',
		name: 'Pincho de prespic',
		image: './assets/images/items/resources/15-0003.png',
		type: 'resource',
		sort: 'hueso' 
	},
	cuerno_de_jalatin: {
		key: 'cuerno_de_jalatin',
		name: 'Cuerno de jalatín',
		image: './assets/images/items/resources/15-0004.png',
		type: 'resource',
		sort: 'hueso' 
	},
	colmillos_de_ratas: {
		key: 'colmillos_de_ratas',
		name: 'Colmillos de ratas',
		image: './assets/images/items/resources/15-0005.png',
		type: 'resource',
		sort: 'hueso' 
	},
	pico_de_tofu: {
		key: 'pico_de_tofu',
		name: 'Pico de tofu',
		image: './assets/images/items/resources/15-0006.png',
		type: 'resource',
		sort: 'hueso' 
	},
	// PATA
	pata_de_arakna: {
		key: 'pata_de_arakna',
		name: 'Pata de arakna',
		image: './assets/images/items/resources/16-0000.png',
		type: 'resource',
		sort: 'pata' 
	},
	pata_de_arakna_magica: {
		key: 'pata_de_arakna_magica',
		name: 'Pata de arakna mágica',
		image: './assets/images/items/resources/16-0001.png',
		type: 'resource',
		sort: 'pata' 
	},
	// PELOS
	pelos_de_arakna_enferma: {
		key: 'pelos_de_arakna_enferma',
		name: 'Pelos de arakna enferma',
		image: './assets/images/items/resources/17-0000.png',
		type: 'resource',
		sort: 'pelos' 
	},
	pelos_de_darit: {
		key: 'pelos_de_darit',
		name: 'Pelos de Darit',
		image: './assets/images/items/resources/17-0001.png',
		type: 'resource',
		sort: 'pelos' 
	},
	cejas_de_mosquito: {
		key: 'cejas_de_mosquito',
		name: 'Cejas de mosquito',
		image: './assets/images/items/resources/17-0002.png',
		type: 'resource',
		sort: 'pelos' 
	},
	pelo_de_minilubo: {
		key: 'pelo_de_minilubo',
		name: 'Pelo de minilubo',
		image: './assets/images/items/resources/17-0003.png',
		type: 'resource',
		sort: 'pelos' 
	},
	// CONCENTRADO
	concentrado_de_matorral: {
		key: 'concentrado_de_matorral',
		name: 'Concentrado de matorral',
		image: './assets/images/items/resources/18-0000.png',
		type: 'resource',
		sort: 'concentrado',
		level: 20,
		recipe: {
			tabla_de_contrachapado: 1,
			pocima_de_firma: 1
		}
	},
	// TEJIDO
	tejido_de_jabali: {
		key: 'tejido_de_jabali',
		name: 'Tejido de jabalí',
		image: './assets/images/items/resources/19-0000.png',
		type: 'resource',
		sort: 'teijo' 
	},
	toalla_de_playa: {
		key: 'toalla_de_playa',
		name: 'Toalla de playa',
		image: './assets/images/items/resources/19-0001.png',
		type: 'resource',
		sort: 'teijo' 
	},
	tejido_de_ardilloxido: {
		key: 'tejido_de_ardilloxido',
		name: 'Tejido de ardillóxido',
		image: './assets/images/items/resources/19-0002.png',
		type: 'resource',
		sort: 'teijo' 
	},
	tejido_de_misterioso: {
		key: 'tejido_de_misterioso',
		name: 'Tejido de misterioso',
		image: './assets/images/items/resources/19-0003.png',
		type: 'resource',
		sort: 'teijo' 
	},
	tejido_invisible: {
		key: 'tejido_invisible',
		name: 'Tejido invisible',
		image: './assets/images/items/resources/19-0004.png',
		type: 'resource',
		sort: 'teijo' 
	},
	tejido_oscuro: {
		key: 'tejido_oscuro',
		name: 'Tejido oscuro',
		image: './assets/images/items/resources/19-0005.png',
		type: 'resource',
		sort: 'teijo' 
	},
	// SEMILLA
	semilla_de_girasol: {
		key: 'semilla_de_girasol',
		name: 'Semilla de girasol',
		image: './assets/images/items/resources/20-0000.png',
		type: 'resource',
		sort: 'semilla' 
	},
	semillas_de_sesamo: {
		key: 'semillas_de_sesamo',
		name: 'Semillas de sésamo',
		image: './assets/images/items/resources/20-0001.png',
		type: 'resource',
		sort: 'semilla' 
	},
	semilla_de_adormidera: {
		key: 'semilla_de_adormidera',
		name: 'Semilla de adormidera',
		image: './assets/images/items/resources/20-0002.png',
		type: 'resource',
		sort: 'semilla' 
	},
	semillas_de_calawaza_maldita: {
		key: 'semillas_de_calawaza_maldita',
		name: 'Semillas de calawaza maldita',
		image: './assets/images/items/resources/20-0003.png',
		type: 'resource',
		sort: 'semilla' 
	},
	semilla_de_scorbuto: {
		key: 'semilla_de_scorbuto',
		name: 'Semillas de scorbuto',
		image: './assets/images/items/resources/20-0004.png',
		type: 'resource',
		sort: 'semilla' 
	},
	semilla_de_discordia: {
		key: 'semilla_de_discordia',
		name: 'Semillas de discordia',
		image: './assets/images/items/resources/20-0005.png',
		type: 'resource',
		sort: 'semilla' 
	},
	semilla_de_pandoja: {
		key: 'semilla_de_pandoja',
		name: 'Semillas de pandoja',
		image: './assets/images/items/resources/20-0006.png',
		type: 'resource',
		sort: 'semilla' 
	},
	avellana: {
		key: 'avellana',
		name: 'Avellana',
		image: './assets/images/items/resources/20-0007.png',
		type: 'resource',
		sort: 'semilla' 
	},
	// HUEVO
	huevo_quimerico: {
		key: 'huevo_quimerico',
		name: 'Huevo quimérico',
		image: './assets/images/items/resources/21-0000.png',
		type: 'resource',
		sort: 'huevo' 
	},
	// OJO
	ojo_de_arakmutada: {
		key: 'ojo_de_arakmutada',
		name: 'Ojo de arakmutada',
		image: './assets/images/items/resources/22-0000.png',
		type: 'resource',
		sort: 'ojo' 
	},
	// ALA
	ala_de_moskito: {
		key: 'ala_de_moskito',
		name: 'Ala de moskito',
		image: './assets/images/items/resources/23-0000.png',
		type: 'resource',
		sort: 'ala' 
	},
	// ACEITE
	aceite_de_sesamo: {
		key: 'aceite_de_sesamo',
		name: 'Aceite de sésamo',
		image: './assets/images/items/resources/24-0000.png',
		type: 'resource',
		sort: 'aceite',
		level: 1,
		recipe: {
			semillas_de_sesamo: 3
		}
	},
	// PREPARACION
	pocima_de_firma: {
		key: 'pocima_de_firma',
		name: 'Pócima de firma',
		image: './assets/images/items/resources/25-0000.png',
		type: 'resource',
		sort: 'preparacion',
		level: 30,
		recipe: {
			salvia: 10,
			ortiga: 20
		}
	},
	// TINTE
	tinte_magico_oscuro: {
		key: 'tinte_magico_oscuro',
		name: 'Tinte mágico oscuro',
		image: './assets/images/items/resources/26-0000.png',
		type: 'resource',
		sort: 'tinte',
		level: 10,
		recipe: {
			pata_de_arakna: 10,
			ala_de_moskito: 20
		}
	},
	// POCION
	pocima_de_mini_cuidados: {
		key: 'pocima_de_mini_cuidados',
		name: 'Pócima de mini cuidados',
		image: './assets/images/items/resources/27-0000.png',
		type: 'resource',
		sort: 'pocion',
		level: 1,
		recipe: {
			ortiga: 4,
		}
	},
	pocima_de_mini_cuidados_superior: {
		key: 'pocima_de_mini_cuidados_superior',
		name: 'Pócima de mini cuidados superior',
		image: './assets/images/items/resources/27-0001.png',
		type: 'resource',
		sort: 'pocion',
		level: 10,
		recipe: {
			salvia: 4,
			trigo: 1
		}
	},
	pocima_de_recuerdo: {
		key: 'pocima_de_recuerdo',
		name: 'Pócima de recuerdo',
		image: './assets/images/items/resources/27-0002.png',
		type: 'resource',
		sort: 'pocion',
		level: 10,
		recipe: {
			ortiga: 5,
			agua_potable: 1
		}
	},
	pocima_de_ciudad_brakmar: {
		key: 'pocima_de_ciudad_brakmar',
		name: 'Pócima de ciudad: Brakmar',
		image: './assets/images/items/resources/27-0003.png',
		type: 'resource',
		sort: 'pocion',
		level: 10,
		recipe: {
			salvia: 10,
			cobre: 5,
			agua_potable: 1
		}
	},
	pocima_de_ciudad_bonta: {
		key: 'pocima_de_ciudad_bonta',
		name: 'Pócima de ciudad: Bonta',
		image: './assets/images/items/resources/27-0004.png',
		type: 'resource',
		sort: 'pocion',
		level: 10,
		recipe: {
			salvia: 10,
			cebada: 5,
			agua_potable: 1
		}
	},
	// PAN
	pan_de_incarnam: {
		key: 'pan_de_incarnam',
		name: 'Pan de Incarnam',
		image: './assets/images/items/resources/28-0000.png',
		type: 'resource',
		sort: 'pan',
		level: 1,
		recipe: {
			trigo: 4,
		}
	},
	pan_de_oro: {
		key: 'pan_de_oro',
		name: 'Pan de oro',
		image: './assets/images/items/resources/28-0001.png',
		type: 'resource',
		sort: 'pan',
		level: 10,
		recipe: {
			trigo_de_oro: 1
		}
	},
	carasau: {
		key: 'carasau',
		name: 'Carasau',
		image: './assets/images/items/resources/28-0002.png',
		type: 'resource',
		sort: 'pan',
		level: 20,
		recipe: {
			cebada: 4,
			ortiga: 1
		}
	},
	// SAVIA
	savia_de_fresno: {
		key: 'savia_de_fresno',
		name: 'Savia de fresno',
		image: './assets/images/items/resources/29-0000.png',
		type: 'resource',
		sort: 'savia',
	},
	savia_de_castano: {
		key: 'savia_de_castano',
		name: 'Savia de castaño',
		image: './assets/images/items/resources/29-0001.png',
		type: 'resource',
		sort: 'savia',

	},
	// GOLOSINA
	tronquito_de_fresno: {
		key: 'tronquito_de_fresno',
		name: 'Tronquito de fresno',
		image: './assets/images/items/resources/30-0000.png',
		type: 'resource',
		sort: 'golosina',
		level: 10,
		recipe: {
			savia_de_fresno: 1
		}
	},
	baston_de_caramelo: {
		key: 'baston_de_caramelo',
		name: 'Bastón de caramelo',
		image: './assets/images/items/resources/30-0001.png',
		type: 'resource',
		sort: 'golosina',
		level: 20,
		recipe: {
			cebada_azucarada: 4,
			ortiga: 1
		}
	},
	tronquito_de_castano: {
		key: 'tronquito_de_castano',
		name: 'Tronquito de castaño',
		image: './assets/images/items/resources/30-0002.png',
		type: 'resource',
		sort: 'golosina',
		level: 20,
		recipe: {
			savia_de_castano: 1,
			cebada: 1
		}
	},

	//RUNAS
	runa_vi: {
		key: 'runa_vi',
		name: 'Runa Vi',
		image: './assets/images/items/resources/r0.png',
		type: 'resource',
		sort: 'rune',
		level: 20,
		value: {
			vit: 5,
			peso: 1,			
		},
		notation: 'vit1'
	},
	runa_bu_vi: {
		key: 'runa_bu_vi',
		name: 'Runa Bu Vi',
		image: './assets/images/items/resources/r1.png',
		type: 'resource',
		sort: 'rune',
		value: {
			vit: 15,
			peso: 3,			
		},
		notation: 'vit2'
	},
	runa_su_vi: {
		key: 'runa_su_vi',
		name: 'Runa Su Vi',
		image: './assets/images/items/resources/r2.png',
		type: 'resource',
		sort: 'rune',
		value: {
			vit: 50,
			peso: 10,			
		},
		notation: 'vit3'
	},
	runa_fu: {
		key: 'runa_fu',
		name: 'Runa Fu',
		image: './assets/images/items/resources/r3.png',
		type: 'resource',
		sort: 'rune',
		value: {
			str: 1,
			peso: 1,			
		},
		notation: 'str1'
	},
	runa_bu_fu: {
		key: 'runa_bu_fu',
		name: 'Runa Bu Fu',
		image: './assets/images/items/resources/r4.png',
		type: 'resource',
		sort: 'rune',
		value: {
			str: 3,
			peso: 3,			
		},
		notation: 'str2'
	},
	runa_su_fu: {
		key: 'runa_su_fu',
		name: 'Runa Su Fu',
		image: './assets/images/items/resources/r5.png',
		type: 'resource',
		sort: 'rune',
		value: {
			str: 10,
			peso: 10,			
		},
		notation: 'str3'
	},
	runa_inte: {
		key: 'runa_inte',
		name: 'Runa Inte',
		image: './assets/images/items/resources/r6.png',
		type: 'resource',
		sort: 'rune',
		value: {
			int: 1,
			peso: 1,			
		},
		notation: 'int1'
	},
	runa_bu_inte: {
		key: 'runa_bu_inte',
		name: 'Runa Bu Inte',
		image: './assets/images/items/resources/r7.png',
		type: 'resource',
		sort: 'rune',
		value: {
			int: 3,
			peso: 3,			
		},
		notation: 'int2'
	},
	runa_su_inte: {
		key: 'runa_su_inte',
		name: 'Runa Su Inte',
		image: './assets/images/items/resources/r8.png',
		type: 'resource',
		sort: 'rune',
		value: {
			int: 10,
			peso: 10,			
		},
		notation: 'int3'
	},
	runa_sue: {
		key: 'runa_sue',
		name: 'Runa Sue',
		image: './assets/images/items/resources/r9.png',
		type: 'resource',
		sort: 'rune',
		value: {
			cha: 1,
			peso: 1,			
		},
		notation: 'cha1'
	},
	runa_bu_sue: {
		key: 'runa_bu_sue',
		name: 'Runa Bu Sue',
		image: './assets/images/items/resources/r10.png',
		type: 'resource',
		sort: 'rune',
		value: {
			cha: 3,
			peso: 3,			
		},
		notation: 'cha2'
	},
	runa_su_sue: {
		key: 'runa_su_sue',
		name: 'Runa Su Sue',
		image: './assets/images/items/resources/r11.png',
		type: 'resource',
		sort: 'rune',
		value: {
			cha: 10,
			peso: 10,			
		},
		notation: 'cha3'
	},
	runa_agi: {
		key: 'runa_agi',
		name: 'Runa Agi',
		image: './assets/images/items/resources/r12.png',
		type: 'resource',
		sort: 'rune',
		value: {
			agi: 1,
			peso: 1,			
		},
		notation: 'agi1'
	},
	runa_bu_agi: {
		key: 'runa_bu_agi',
		name: 'Runa Bu Agi',
		image: './assets/images/items/resources/r13.png',
		type: 'resource',
		sort: 'rune',
		value: {
			agi: 3,
			peso: 3,			
		},
		notation: 'agi2'
	},
	runa_su_agi: {
		key: 'runa_su_agi',
		name: 'Runa Su Agi',
		image: './assets/images/items/resources/r14.png',
		type: 'resource',
		sort: 'rune',
		value: {
			agi: 10,
			peso: 10,			
		},
		notation: 'agi3'
	},
	runa_pa: {
		key: 'runa_pa',
		name: 'Runa Pa',
		image: './assets/images/items/resources/r15.png',
		type: 'resource',
		sort: 'rune',
		value: {
			pa: 1,
			peso: 100,			
		},
		notation: 'pa1'
	},
	runa_pm: {
		key: 'runa_pm',
		name: 'Runa Pm',
		image: './assets/images/items/resources/r16.png',
		type: 'resource',
		sort: 'rune',
		value: {
			pm: 1,
			peso: 90,			
		},
		notation: 'pm1'
	},
	runa_lu: {
		key: 'runa_lu',
		name: 'Runa Lu',
		image: './assets/images/items/resources/r17.png',
		type: 'resource',
		sort: 'rune',
		value: {
			al: 1,
			peso: 51,			
		},
		notation: 'al1'
	},
	runa_be: {
		key: 'runa_be',
		name: 'Runa Be',
		image: './assets/images/items/resources/r18.png',
		type: 'resource',
		sort: 'rune',
		value: {
			invo: 1,
			peso: 30,			
		},
		notation: 'invo1'
	},
	runa_prospe: {
		key: 'runa_prospe',
		name: 'Runa Prospe',
		image: './assets/images/items/resources/r19.png',
		type: 'resource',
		sort: 'rune',
		value: {
			pp: 1,
			peso: 3,			
		},
		notation: 'pp1'
	},
	runa_bu_prospe: {
		key: 'runa_bu_prospe',
		name: 'Runa Bu Prospe',
		image: './assets/images/items/resources/r20.png',
		type: 'resource',
		sort: 'rune',
		value: {
			pp: 3,
			peso: 9,			
		},
		notation: 'pp2'
	},
	runa_pot: {
		key: 'runa_pot',
		name: 'Runa Pot',
		image: './assets/images/items/resources/r21.png',
		type: 'resource',
		sort: 'rune',
		value: {
			pot: 1,
			peso: 2,			
		},
		notation: 'pot1'
	},
	runa_bu_pot: {
		key: 'runa_bu_pot',
		name: 'Runa Bu Pot',
		image: './assets/images/items/resources/r22.png',
		type: 'resource',
		sort: 'rune',
		value: {
			pot: 3,
			peso: 6,			
		},
		notation: 'pot2'
	},
	runa_su_pot: {
		key: 'runa_su_pot',
		name: 'Runa Su Pot',
		image: './assets/images/items/resources/r23.png',
		type: 'resource',
		sort: 'rune',
		value: {
			pot: 10,
			peso: 20,			
		},
		notation: 'pot3'
	},
	runa_cri: {
		key: 'runa_cri',
		name: 'Runa Cri',
		image: './assets/images/items/resources/r24.png',
		type: 'resource',
		sort: 'rune',
		value: {
			cri: 1,
			peso: 10,			
		},
		notation: 'crt1'
	},
	runa_da: {
		key: 'runa_da',
		name: 'Runa Da',
		image: './assets/images/items/resources/r25.png',
		type: 'resource',
		sort: 'rune',
		value: {
			dmg: 1,
			peso: 20,			
		},
		notation: 'dmg1'
	},
	runa_cu: {
		key: 'runa_cu',
		name: 'Runa Cu',
		image: './assets/images/items/resources/r26.png',
		type: 'resource',
		sort: 'rune',
		value: {
			cur: 1,
			peso: 10,			
		},
		notation: 'cur1'
	},
	runa_bu_cu: {
		key: 'runa_bu_cu',
		name: 'Runa Bu Cu',
		image: './assets/images/items/resources/r27.png',
		type: 'resource',
		sort: 'rune',
		value: {
			cur: 3,
			peso: 30,			
		},
		notation: 'cur2'
	},
	runa_da_tierra: {
		key: 'runa_da_tierra',
		name: 'Runa Da Tierra',
		image: './assets/images/items/resources/r28.png',
		type: 'resource',
		sort: 'rune',
		value: {
			strDmg: 1,
			peso: 5,			
		},
		notation: 'strDmg1'
	},
	runa_bu_da_tierra: {
		key: 'runa_bu_da_tierra',
		name: 'Runa Bu Da Tierra',
		image: './assets/images/items/resources/r29.png',
		type: 'resource',
		sort: 'rune',
		value: {
			strDmg: 3,
			peso: 15,			
		},
		notation: 'strDmg2'
	},
	runa_da_fuego: {
		key: 'runa_da_fuego',
		name: 'Runa Da Fuego',
		image: './assets/images/items/resources/r30.png',
		type: 'resource',
		sort: 'rune',
		value: {
			intDmg: 1,
			peso: 5,			
		},
		notation: 'intDmg1'
	},
	runa_bu_da_fuego: {
		key: 'runa_bu_da_fuego',
		name: 'Runa Bu Da Fuego',
		image: './assets/images/items/resources/r31.png',
		type: 'resource',
		sort: 'rune',
		value: {
			intDmg: 3,
			peso: 15,			
		},
		notation: 'intDmg2'
	},
	runa_da_agua: {
		key: 'runa_da_agua',
		name: 'Runa Da Agua',
		image: './assets/images/items/resources/r32.png',
		type: 'resource',
		sort: 'rune',
		value: {
			chaDmg: 1,
			peso: 5,			
		},
		notation: 'chaDmg1'
	},
	runa_bu_da_agua: {
		key: 'runa_bu_da_agua',
		name: 'Runa Bu Da Agua',
		image: './assets/images/items/resources/r33.png',
		type: 'resource',
		sort: 'rune',
		value: {
			chaDmg: 3,
			peso: 15,			
		},
		notation: 'chaDmg2'
	},
	runa_da_aire: {
		key: 'runa_da_aire',
		name: 'Runa Da Aire',
		image: './assets/images/items/resources/r34.png',
		type: 'resource',
		sort: 'rune',
		value: {
			agiDmg: 1,
			peso: 5,			
		},
		notation: 'agiDmg1'
	},
	runa_bu_da_aire: {
		key: 'runa_bu_da_aire',
		name: 'Runa Bu Da Aire',
		image: './assets/images/items/resources/r35.png',
		type: 'resource',
		sort: 'rune',
		value: {
			agiDmg: 3,
			peso: 15,			
		},
		notation: 'agiDmg2'
	},
	runa_da_cri: {
		key: 'runa_da_cri',
		name: 'Runa Da Cri',
		image: './assets/images/items/resources/r36.png',
		type: 'resource',
		sort: 'rune',
		value: {
			crtDmg: 1,
			peso: 5,			
		},
		notation: 'crtDmg1'
	},
	runa_bu_da_cri: {
		key: 'runa_bu_da_cri',
		name: 'Runa Bu Da Cri',
		image: './assets/images/items/resources/r37.png',
		type: 'resource',
		sort: 'rune',
		value: {
			crtDmg: 3,
			peso: 15,			
		},
		notation: 'crtDmg2'
	},
	runa_por_he: {
		key: 'runa_por_he',
		name: 'Runa Por He',
		image: './assets/images/items/resources/r38.png',
		type: 'resource',
		sort: 'rune',
		value: {
			speDmg: 1,
			peso: 10,			
		},
		notation: 'speDmg1'
	},
	runa_por_ar: {
		key: 'runa_por_ar',
		name: 'Runa Por Ar',
		image: './assets/images/items/resources/r39.png',
		type: 'resource',
		sort: 'rune',
		value: {
			wepDmg: 1,
			peso: 10,			
		},
		notation: 'wepDmg1'
	},
	runa_por_res: {
		key: 'runa_por_res',
		name: 'Runa Por Res',
		image: './assets/images/items/resources/r40.png',
		type: 'resource',
		sort: 'rune',
		value: {
			res: 1,
			peso: 10,			
		},
		notation: 'res1'
	},
	runa_por_reen: {
		key: 'runa_por_reen',
		name: 'Runa Por Reen',
		image: './assets/images/items/resources/r41.png',
		type: 'resource',
		sort: 'rune',
		value: {
			reDmg: 1,
			peso: 10,			
		},
		notation: 'reDmg1'
	},
	runa_sa: {
		key: 'runa_sa',
		name: 'Runa Sa',
		image: './assets/images/items/resources/r42.png',
		type: 'resource',
		sort: 'rune',
		value: {
			wis: 1,
			peso: 3,			
		},
		notation: 'wis1'
	},
	runa_bu_sa: {
		key: 'runa_bu_sa',
		name: 'Runa Bu Sa',
		image: './assets/images/items/resources/r43.png',
		type: 'resource',
		sort: 'rune',
		value: {
			wis: 3,
			peso: 9,			
		},
		notation: 'wis2'
	},
	runa_su_sa: {
		key: 'runa_su_sa',
		name: 'Runa Su Sa',
		image: './assets/images/items/resources/r44.png',
		type: 'resource',
		sort: 'rune',
		value: {
			wis: 10,
			peso: 30,			
		},
		notation: 'wis3'
	},
}







