import { setData } from './setData.js'; 

export const equipmentData = {
	el_flud: {
		key: 'el_flud',
		name: 'El Flud',
		image: './assets/images/items/equipment/0000-0.webp',
		level: 1,
		stats: {
			agi: [4, 5],
			wis: [3, 4]
		},
		price: 5,
		type: 'equipment',
		sort: 'sombrero',
		set: setData['set_del_bun'],

	},
}
