export const loadData = () => {
	const data = window.localStorage.getItem("data");

	if (!data) {
        let newData = {
            character: {},
            bank: {}
        };
        window.localStorage.setItem("data", JSON.stringify(newData));
        return newData;
    }

	return JSON.parse(data); 
}

export const saveData = () => {
   
}

export const createData = (character) => {
    const data = JSON.parse(window.localStorage.getItem("data"));

    data.character[character.name] = character;
    window.localStorage.setItem("data", JSON.stringify(data));

}