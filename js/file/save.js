export const loadData = () => {
	const data = window.localStorage.getItem("data");
	if (!data) {
        let newData = {
            profile: {},
            bank: {},
            itemId: 0
        };
        window.localStorage.setItem("data", JSON.stringify(newData));
        return newData;
    }
    console.log(JSON.parse(data))
	return JSON.parse(data); 
}

export const saveData = (character, enemy, bank) => {
    console.log('saveData');
    const data = JSON.parse(window.localStorage.getItem("data"));

    data.profile[character.name] = {
        character: character,
        enemy: enemy
    }
    data.bank = bank;
    console.log(data);

    // data.bank = currentData.character;
    window.localStorage.setItem("data", JSON.stringify(data));
}

export const createData = (character, enemy) => {
    const data = JSON.parse(window.localStorage.getItem("data"));

    data.profile[character.name] = {
        character: character,
        enemy: enemy
    }

    window.localStorage.setItem("data", JSON.stringify(data));

}

