import { equipmentData } from './equipmentData.js';
import { resourceData } from './resourceData.js';

export var joyeroRecipeData = {};
export var zapateroRecipeData = {};
export var sastreRecipeData = {};
export var herreroRecipeData = {};
export var fabricanteRecipeData = {};
export var lenadorRecipeData = {}
export var mineroRecipeData = {}
export var alquimistaRecipeData = {}
export var campesinoRecipeData = {}

Object.values(equipmentData).forEach((item) => {
	switch(item.sort) {
		case 'anillo':
		case 'amuleto':
			joyeroRecipeData[item.key] = item;
			break;
		case 'botas':
		case 'cinturon':
			zapateroRecipeData[item.key] = item;
			break;
		case 'sombrero':
		case 'capa':
			sastreRecipeData[item.key] = item;
			break;
		case 'arma':
			herreroRecipeData[item.key] = item;
			break;
		case 'escudo':
		case 'trofeo':
			fabricanteRecipeData[item.key] = item;
	}
})

Object.values(resourceData).forEach((resource) => {
	if (!resource.recipe) return;

	switch(resource.sort) {
		case 'aleacion':
			mineroRecipeData[resource.key] = resource;
			break;
		case 'tabla':
		case 'concentrado':
			lenadorRecipeData[resource.key] = resource;
			break;
		case 'pocion':
		case 'tinte':
		case 'preparacion':
			alquimistaRecipeData[resource.key] = resource;
			break;
		case 'pan':
		case 'aceite':
			campesinoRecipeData[resource.key] = resource;
			break;
	}
})

function sortEquipmentByLevel(equipmentData) {
    return Object.fromEntries(
        Object.entries(equipmentData)
            .sort(([, a], [, b]) => a.level - b.level)
    );
}

joyeroRecipeData = sortEquipmentByLevel(joyeroRecipeData);
zapateroRecipeData = sortEquipmentByLevel(zapateroRecipeData);
sastreRecipeData = sortEquipmentByLevel(sastreRecipeData);
herreroRecipeData = sortEquipmentByLevel(herreroRecipeData);
fabricanteRecipeData = sortEquipmentByLevel(fabricanteRecipeData);
mineroRecipeData = sortEquipmentByLevel(mineroRecipeData);
alquimistaRecipeData = sortEquipmentByLevel(alquimistaRecipeData);
lenadorRecipeData = sortEquipmentByLevel(lenadorRecipeData);
campesinoRecipeData = sortEquipmentByLevel(campesinoRecipeData);
/*
export const joyeroRecipeData = {
	//lvl 1-10
	el_masano: {
		item: equipmentData['el_masano'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	el_smesmo: {
		item: equipmentData['el_smesmo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_del_audaz: {
		item: equipmentData['anillo_del_audaz'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	koyar_clavito: {
		item: equipmentData['koyar_clavito'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	pequeno_anillo_del_afortunado: {
		item: equipmentData['pequeno_anillo_del_afortunado'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	pequeno_anillo_magico: {
		item: equipmentData['pequeno_anillo_magico'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_rexiko: {
		item: equipmentData['anillo_rexiko'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_forcesco: {
		item: equipmentData['anillo_forcesco'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_agilesco: {
		item: equipmentData['anillo_agilesco'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_vitalesco: {
		item: equipmentData['anillo_vitalesco'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	colgante_del_buho_enclenque: {
		item: equipmentData['colgante_del_buho_enclenque'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	camafeoso: {
		item: equipmentData['camafeoso'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_aventurero: {
		item: equipmentData['anillo_de_aventurero'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_aventurero: {
		item: equipmentData['amuleto_de_aventurero'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	la_lagrima_de_jalato: {
		item: equipmentData['la_lagrima_de_jalato'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	ganti_real: {
		item: equipmentData['ganti_real'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_pio_rosa: {
		item: equipmentData['anillo_de_pio_rosa'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_sram: {
		item: equipmentData['amuleto_de_sram'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_pio_verde: {
		item: equipmentData['amuleto_de_pio_verde'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	animamuleto: {
		item: equipmentData['animamuleto'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_milubo: {
		item: equipmentData['amuleto_de_milubo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_satisfaccion: {
		item: equipmentData['anillo_de_satisfaccion'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_pio_violeta: {
		item: equipmentData['anillo_de_pio_violeta'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_del_buho: {
		item: equipmentData['amuleto_del_buho'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_del_oso: {
		item: equipmentData['amuleto_del_oso'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_pio_rosa: {
		item: equipmentData['amuleto_de_pio_rosa'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_sabiduria: {
		item: equipmentData['anillo_de_sabiduria'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_del_arco_iris: {
		item: equipmentData['amuleto_del_arco_iris'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_suerte: {
		item: equipmentData['anillo_de_suerte'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	araknoton: {
		item: equipmentData['araknoton'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_kroketa: {
		item: equipmentData['amuleto_de_kroketa'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_agilidad: {
		item: equipmentData['anillo_de_agilidad'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_pio_azul: {
		item: equipmentData['anillo_de_pio_azul'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_pio_violeta: {
		item: equipmentData['amuleto_de_pio_violeta'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},

	anillo_fortalecedor: {
		item: equipmentData['anillo_fortalecedor'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_nomen_tengu: {
		item: equipmentData['anillo_nomen_tengu'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_geisha: {
		item: equipmentData['anillo_de_geisha'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_kuakua_negro: {
		item: equipmentData['anillo_de_kuakua_negro'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_pio_rojo: {
		item: equipmentData['anillo_de_pio_rojo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_tetrista: {
		item: equipmentData['anillo_tetrista'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_tetrista: {
		item: equipmentData['amuleto_tetrista'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuletong: {
		item: equipmentData['amuletong'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_pio_azul: {
		item: equipmentData['amuleto_de_pio_azul'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	collar_de_khan_karkasa: {
		item: equipmentData['collar_de_khan_karkasa'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	pamuleto: {
		item: equipmentData['pamuleto'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_peazo_beyota: {
		item: equipmentData['amuleto_de_peazo_beyota'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_del_invasor_del_espacio: {
		item: equipmentData['anillo_del_invasor_del_espacio'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_kuakua_amarillo: {
		item: equipmentData['anillo_de_kuakua_amarillo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_lolita: {
		item: equipmentData['anillo_de_lolita'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_sincha: {
		item: equipmentData['amuleto_sincha'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_ninja_blanco: {
		item: equipmentData['amuleto_de_ninja_blanco'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_ninja_negro: {
		item: equipmentData['amuleto_de_ninja_negro'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	collar_de_lilota: {
		item: equipmentData['collar_de_lilota'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},

	//lvl 11-20
	amuleto_de_pio_rojo: {
		item: equipmentData['amuleto_de_pio_rojo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_las_rocosas: {
		item: equipmentData['anillo_de_las_rocosas'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	jabun_suave: {
		item: equipmentData['jabun_suave'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_pio_amarillo: {
		item: equipmentData['anillo_de_pio_amarillo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	alianza_de_champi_champ: {
		item: equipmentData['alianza_de_champi_champ'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},

	anillo_de_valor: {
		item: equipmentData['anillo_de_valor'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_pio_amarillo: {
		item: equipmentData['amuleto_de_pio_amarillo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	el_destino_dorado: {
		item: equipmentData['el_destino_dorado'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	mitones_apolillados_de_campesino: {
		item: equipmentData['mitones_apolillados_de_campesino'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_pio_verde: {
		item: equipmentData['anillo_de_pio_verde'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	brazalete_de_chadalid: {
		item: equipmentData['brazalete_de_chadalid'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_blada: {
		item: equipmentData['amuleto_blada'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},

	anillo_de_champi_champ: {
		item: equipmentData['anillo_de_champi_champ'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	la_cadena_nhoro_kebriya: {
		item: equipmentData['la_cadena_nhoro_kebriya'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},

	anillo_mental: {
		item: equipmentData['anillo_mental'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},

	herida_de_sacrogrito: {
		item: equipmentData['herida_de_sacrogrito'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	el_anillador: {
		item: equipmentData['el_anillador'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	la_lucecita: {
		item: equipmentData['la_lucecita'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_campestre: {
		item: equipmentData['anillo_campestre'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_los_campos: {
		item: equipmentData['amuleto_de_los_campos'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},

	amuleto_de_bandido: {
		item: equipmentData['amuleto_de_bandido'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_hortilla: {
		item: equipmentData['amuleto_hortilla'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	el_etirujo: {
		item: equipmentData['el_etirujo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_bandido: {
		item: equipmentData['anillo_de_bandido'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_vizna: {
		item: equipmentData['anillo_vizna'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},

	anillo_novato: {
		item: equipmentData['anillo_novato'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_chafer: {
		item: equipmentData['amuleto_de_chafer'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},

	amuleto_campesino: {
		item: equipmentData['amuleto_campesino'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_de_boz_layt_yer: {
		item: equipmentData['anillo_de_boz_layt_yer'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_de_jalato: {
		item: equipmentData['amuleto_de_jalato'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	suerte_de_zurcarak: {
		item: equipmentData['suerte_de_zurcarak'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	anillo_ralladuro: {
		item: equipmentData['anillo_ralladuro'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	amuleto_del_hombre_oso: {
		item: equipmentData['amuleto_del_hombre_oso'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	alianza_del_hombre_oso: {
		item: equipmentData['alianza_del_hombre_oso'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
}

export const aasastreRecipeData = {
	//lvl 1-10
	el_flud: {
		item: equipmentData['el_flud'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	la_capa_slok: {
		item: equipmentData['la_capa_slok'],
		recipe: {
			trigo: 2, 
			cenizas_eternas: 2
		},
	},
	panuelo_komuntot: {
		item: equipmentData['panuelo_komuntot'],
		recipe: {
			madera_de_fresno: 3, 
			lana_celeste: 3
		},
	},
	panuelo_de_vitalidad: {
		item: equipmentData['panuelo_de_vitalidad'],
		recipe: {
			agua_potable: 3, 
			fuego_interno: 3
		},
	},
	panuelo_pandawushuka: {
		item: equipmentData['panuelo_pandawushuka'],
		recipe: {
			petalo_diafano: 3, 
			piel_de_goota: 3
		},
	},
	capa_azulada: {
		item: equipmentData['capa_azulada'],
		recipe: {
			pluma_quimerica: 3, 
			volva_de_amenita: 3
		},
	},
	sombrero_de_pio_amarillo: {
		item: equipmentData['sombrero_de_pio_amarillo'],
		recipe: {
			pluma_de_pio_amarillo: 3, 
			reliquia_de_incarnam: 3
		},
	},
	capa_de_pio_azul: {
		item: equipmentData['capa_de_pio_azul'],
		recipe: {
			pluma_de_pio_azul: 3, 
			cola_de_miauflan: 3
		},
	},
	cofia_ntasma: {
		item: equipmentData['cofia_ntasma'],
		recipe: {
			petalo_diafano: 4, 
			fuego_interno: 2
		},
	},
	capa_sique: {
		item: equipmentData['capa_sique'],
		recipe: {
			pluma_quimerica: 4, 
			baba_de_jalato: 2
		},
	},
	capa_de_aventurero: {
		item: equipmentData['capa_de_aventurero'],
		recipe: {
			ferrita: 1, 
			fuego_interno: 3
		},
	},
	capa_de_pio_rojo: {
		item: equipmentData['capa_de_pio_rojo'],
		recipe: {
			pluma_de_pio_rojo: 3, 
			petalo_diafano: 3
		},
	},
	sombrero_de_pio_verde: {
		item: equipmentData['sombrero_de_pio_verde'],
		recipe: {
			baba_de_jalato: 3,
			pluma_de_pio_verde: 3, 
		},
	},
	ushanka_guau: {
		item: equipmentData['ushanka_guau'],
		recipe: {
			piel_de_goota: 3, 
			volva_de_amenita: 3
		},
	},
	sombrero_de_pio_rosa: {
		item: equipmentData['sombrero_de_pio_rosa'],
		recipe: {
			pluma_de_pio_rosa: 3, 
			cola_de_miauflan: 3
		},
	},
	capa_de_pio_amarillo: {
		item: equipmentData['capa_de_pio_amarillo'],
		recipe: {
			pluma_de_pio_amarillo: 3, 
			cola_de_miauflan: 3
		},
	},
	sombrero_de_aventurero: {
		item: equipmentData['sombrero_de_aventurero'],
		recipe: {
			ferrita: 2, 
			reliquia_de_incarnam: 3
		},
	},
	sombrero_de_pio_violeta: {
		item: equipmentData['sombrero_de_pio_violeta'],
		recipe: {
			pluma_de_pio_violeta: 3, 
			hueso_de_chafer: 3
		},
	},
	capa_de_pio_verde: {
		item: equipmentData['capa_de_pio_verde'],
		recipe: {
			hueso_de_chafer: 3,
			pluma_de_pio_verde: 3, 
		},
	},
	sombrero_de_peazo_beyota: {
		item: equipmentData['sombrero_de_peazo_beyota'],
		recipe: {
			pelos_de_arakna_enferma: 5, 
			bellota_de_peazo_beyota: 1
		},
	},
	araknosombrero: {
		item: equipmentData['araknosombrero'],
		recipe: {
			pata_de_arakna: 3, 
			fuego_interno: 3
		},
	},
	//lvl 11-20
	sombrero_de_pio_azul: {
		item: equipmentData['sombrero_de_pio_azul'],
		recipe: {
			pluma_de_pio_azul: 3, 
			petalo_diafano: 3
		},
	},
	capa_de_pio_rosa: {
		item: equipmentData['capa_de_pio_rosa'],
		recipe: {
			cenizas_eternas: 3, 
			pluma_de_pio_rosa: 3
		},
	},
	capa_pandawushuka: {
		item: equipmentData['capa_pandawushuka'],
		recipe: {
			espina_de_champi_champ: 3,
			hoja_de_girasol_salvaje: 1,
		},
	},
	capa_de_champi_champ: {
		item: equipmentData['capa_de_champi_champ'],
		recipe: {
			espina_de_champi_champ: 3,
			cola_de_miauflan: 3
		},
	},
	casco_de_chadalid: {
		item: equipmentData['casco_de_chadalid'],
		recipe: {
			craneo_de_chadalid: 4, 
			pluma_quimerica: 3
		},
	},
	capa_de_chadalid: {
		item: equipmentData['capa_de_chadalid'],
		recipe: {
			craneo_de_chadalid: 4, 
			reliquia_de_incarnam: 3
		},
	},
	sombrero_de_pio_rojo: {
		item: equipmentData['sombrero_de_pio_rojo'],
		recipe: {
			pluma_de_pio_rojo: 3, 
			reliquia_de_incarnam: 3
		},
	},
	capa_de_pio_violeta: {
		item: equipmentData['capa_de_pio_violeta'],
		recipe: {
			baba_de_jalato: 3, 
			pluma_de_pio_violeta: 3
		},
	},
	champisombrero: {
		item: equipmentData['champisombrero'],
		recipe: {
			espina_de_champi_champ: 3,
			pluma_quimerica: 3
		},
	},
	capucha_de_los_campos: {
		item: equipmentData['capucha_de_los_campos'],
		recipe: {
			lengua_de_espanterrador: 4,
			baba_de_rosa_demoniaca: 1
		},
	},
	sombrero_campestre: {
		item: equipmentData['sombrero_campestre'],
		recipe: {
			flor_del_diente_de_leon_diabolico: 4,
			hierba_loca: 1
		},
	},
	capa_elini: {
		item: equipmentData['capa_elini'],
		recipe: {
			pluma_de_pio_amarillo: 3,
			fluido_glacial: 1,
		},
	},
	capa_uleto: {
		item: equipmentData['capa_uleto'],
		recipe: {
			bronceador: 3,
			baba_de_rosa_demoniaca: 1
		},
	},
	capa_sulacorp: {
		item: equipmentData['capa_sulacorp'],
		recipe: {
			espina_de_champi_champ: 3,
			tabla_de_aglomerado: 2,
		},
	},
	capa_de_rojez: {
		item: equipmentData['capa_de_rojez'],
		recipe: {
			pluma_de_pio_amarillo: 3,
			alogdon_ancestral: 1
		},
	},
	capa_bilidad: {
		item: equipmentData['capa_bilidad'],
		recipe: {
			petalo_de_rosa_demoniaca: 3,
			baba_de_rosa_demoniaca: 1
		},
	},
	korko_klako: {
		item: equipmentData['korko_klako'],
		recipe: {
			semilla_de_girasol: 1,
			concentrado_de_matorral: 1
		},
	},
	bolso_de_campesino: {
		item: equipmentData['bolso_de_campesino'],
		recipe: {
			hierba_loca: 1,
			petalo_magico_de_girasol_hambriento: 1
		},
	},
	capa_oscura: {
		item: equipmentData['capa_oscura'],
		recipe: {
			colmillos_de_ratas: 3,
			alogdon_ancestral: 1
		},
	},
	bob_de_campesino: {
		item: equipmentData['bob_de_campesino'],
		recipe: {
			lengua_de_espanterrador: 4,
			petalo_magico_de_girasol_hambriento: 1
		},
	},
	sombrero_de_jalato: {
		item: equipmentData['sombrero_de_jalato'],
		recipe: {
			cuerno_de_jalatin: 4,
			lana_de_jefe_de_guerra_jalato: 1
		},
	},
	capa_jalosa: {
		item: equipmentData['capa_jalosa'],
		recipe: {
			sangre_de_jalato: 1,
			cuerno_de_jalatin: 4,
		},
	},
	sombrero_del_hombre_oso: {
		item: equipmentData['sombrero_del_hombre_oso'],
		recipe: {
			colmillo_de_jabali: 4,
			pelos_de_darit: 1
		},
	},
	capa_del_hombre_oso: {
		item: equipmentData['capa_del_hombre_oso'],
		recipe: {
			pincho_de_prespic: 4,
			tejido_de_jabali: 1,
		},
	},
	sombrero_invisible: {
		item: equipmentData['sombrero_invisible'],
		recipe: {
			piel_de_mob_laesponja: 3,
			reliquia_de_incarnam: 1
		},
	},
	capa_invisible: {
		item: equipmentData['capa_invisible'],
		recipe: {
			petalo_magico_de_girasol_hambriento: 3,
			reliquia_de_incarnam: 1
		},
	},
	casco: {
		item: equipmentData['casco'],
		recipe: {
			alogdon_ancestral: 1,
			madera_carcomida: 1
		},
	},
	alas_de_madera: {
		item: equipmentData['alas_de_madera'],
		recipe: {
			concentrado_de_matorral: 2,
			hilo_de_seda: 1
		},
	},
	sombrero_de_paletoso: {
		item: equipmentData['sombrero_de_paletoso'],
		recipe: {
			flor_del_diente_de_leon_diabolico: 3,
			colmillos_de_ratas: 3
		},
	},
}

export const zapateroRecipeData = {
	//lvl 1-10
	las_okupas: {
		item: equipmentData['las_okupas'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	kamaturon: {
		item: equipmentData['kamaturon'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	kamancletas: {
		item: equipmentData['kamancletas'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_fuerza: {
		item: equipmentData['botas_de_fuerza'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_suerte: {
		item: equipmentData['cinturon_de_suerte'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	la_spamita: {
		item: equipmentData['la_spamita'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	fecarak: {
		item: equipmentData['fecarak'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	sandalias_tofuescas: {
		item: equipmentData['sandalias_tofuescas'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_del_gato_con_gotas: {
		item: equipmentData['botas_del_gato_con_gotas'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_jalato: {
		item: equipmentData['botas_de_jalato'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	einekenoso: {
		item: equipmentData['einekenoso'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_suerte: {
		item: equipmentData['botas_de_suerte'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	sandalias_de_inteligencia: {
		item: equipmentData['sandalias_de_inteligencia'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_agilescas: {
		item: equipmentData['botas_agilescas'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_aventurero: {
		item: equipmentData['cinturon_de_aventurero'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_kluh: {
		item: equipmentData['botas_de_kluh'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_aventurero: {
		item: equipmentData['botas_de_aventurero'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},	
	cinturon_de_cangwejo: {
		item: equipmentData['cinturon_de_cangwejo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_forcesco: {
		item: equipmentData['cinturon_forcesco'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_agilesco: {
		item: equipmentData['cinturon_agilesco'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_pio_rojo: {
		item: equipmentData['cinturon_de_pio_rojo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	sandalias_de_pio_violeta: {
		item: equipmentData['sandalias_de_pio_violeta'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_nexus: {
		item: equipmentData['botas_de_nexus'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_pio_amarillo: {
		item: equipmentData['cinturon_de_pio_amarillo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	sandalias_de_pio_azul: {
		item: equipmentData['sandalias_de_pio_azul'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_pio_verde: {
		item: equipmentData['cinturon_de_pio_verde'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	sandalias_de_pio_rojo: {
		item: equipmentData['sandalias_de_pio_rojo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_vitalesco: {
		item: equipmentData['cinturon_vitalesco'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	calzoncillo_de_capitan_chafer: {
		item: equipmentData['calzoncillo_de_capitan_chafer'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_pio_rosa: {
		item: equipmentData['cinturon_de_pio_rosa'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	sandalias_de_pio_amarillo: {
		item: equipmentData['sandalias_de_pio_amarillo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	pacbotas: {
		item: equipmentData['pacbotas'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_del_invasor_del_espacio: {
		item: equipmentData['cinturon_del_invasor_del_espacio'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturong: {
		item: equipmentData['cinturong'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_dragun_rosa: {
		item: equipmentData['botas_de_dragun_rosa'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	delantal_de_criada: {
		item: equipmentData['delantal_de_criada'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_samurai: {
		item: equipmentData['cinturon_de_samurai'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_peazo_beyota: {
		item: equipmentData['botas_de_peazo_beyota'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},	
	botas_aladas: {
		item: equipmentData['botas_aladas'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	calzoncillo_de_khan_karkasa: {
		item: equipmentData['calzoncillo_de_khan_karkasa'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_no: {
		item: equipmentData['botas_no'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_bragado: {
		item: equipmentData['cinturon_bragado'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_kawaii: {
		item: equipmentData['cinturon_kawaii'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	makinturon: {
		item: equipmentData['makinturon'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	//lvl 11-20
	araknocinto: {
		item: equipmentData['araknocinto'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_pio_violeta: {
		item: equipmentData['cinturon_de_pio_violeta'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	sandalias_de_pio_verde: {
		item: equipmentData['sandalias_de_pio_verde'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	poderosas_botas_de_klim: {
		item: equipmentData['poderosas_botas_de_klim'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_satisfaccion: {
		item: equipmentData['botas_de_satisfaccion'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_pio_azul: {
		item: equipmentData['cinturon_de_pio_azul'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	sandalias_de_pio_rosa: {
		item: equipmentData['sandalias_de_pio_rosa'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_florido: {
		item: equipmentData['cinturon_florido'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_bolsillo: {
		item: equipmentData['cinturon_de_bolsillo'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_campestres: {
		item: equipmentData['botas_campestres'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_bandido: {
		item: equipmentData['cinturon_de_bandido'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_potencia: {
		item: equipmentData['botas_de_potencia'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_seguridad: {
		item: equipmentData['cinturon_de_seguridad'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_campesinas: {
		item: equipmentData['botas_campesinas'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_del_hombre_oso: {
		item: equipmentData['cinturon_del_hombre_oso'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_del_hombre_oso: {
		item: equipmentData['botas_del_hombre_oso'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_jalato: {
		item: equipmentData['cinturon_de_jalato'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	jalabotas: {
		item: equipmentData['jalabotas'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cintobermuda_de_campesino: {
		item: equipmentData['cintobermuda_de_campesino'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	cinturon_de_karnaval: {
		item: equipmentData['cinturon_de_karnaval'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
	botas_de_karnaval: {
		item: equipmentData['botas_de_karnaval'],
		recipe: {
			ortiga: 2, 
			lana_celeste: 2,
		},
	},
}
*/