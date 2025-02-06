export const loadData = () => {
	const data = window.localStorage.getItem("data");
	if (!data) {
        let newData = {
            character: {},
            bank: {},
            itemId: 0
        };
        window.localStorage.setItem("data", JSON.stringify(newData));
        return newData;
    }
    console.log(JSON.parse(data))
	return JSON.parse(data); 
}

export const saveData = (character, bank) => {
    console.log('saveData');
    const data = JSON.parse(window.localStorage.getItem("data"));

    data.character[character.name] = character;
    data.bank = bank;
    console.log(data);

    // data.bank = currentData.character;
    window.localStorage.setItem("data", JSON.stringify(data));
}

export const createData = (character) => {
    const data = JSON.parse(window.localStorage.getItem("data"));

    data.character[character.name] = character;
    window.localStorage.setItem("data", JSON.stringify(data));

}

