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

	return JSON.parse(data); 
}

export const saveData = (character, bank) => {
    console.log('saveData');
    const data = JSON.parse(window.localStorage.getItem("data"));

    data.profile[character.name] = {
        character: character,
        //enemy: enemy
    }
    data.bank = bank;

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

