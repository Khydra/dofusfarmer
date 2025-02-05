export const generateItemStats = (item) => {
	const newItem = JSON.parse(JSON.stringify(item));

	let data = JSON.parse(window.localStorage.getItem("data"));;

 	newItem.key = `${newItem.key}_${data.itemId}`;

	Object.keys(newItem.stats).forEach(stat => {
		let min = newItem.stats[stat][0];
		let max = newItem.stats[stat][0];
		if (newItem.stats[stat].length > 1) max = newItem.stats[stat][1];
		newItem.stats[stat] = Math.floor(Math.random() * (max - min + 1)) + min;

	})

	data.itemId++;
	window.localStorage.setItem("data", JSON.stringify({ ...data, itemId: data.itemId }));
	return newItem;
}

export const destoyEquipment = (item) => {

}