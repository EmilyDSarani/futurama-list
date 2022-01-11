//will do the logic to grab the futurama api here

//fetch all characters
export const getCharacters = async () => {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
    const characters = await res.json();
    return characters;
}

//fetch character quotes
export const getCharacterSearch = async (id) => {
    const res = await fetch(`https://futuramaapi.herokuapp.com/api/v2/characters/${id}`);
    const character = await res.json();
    return character
}

export const getCharacterQuote = async () => {
    const res = await fetch(`https://futuramaapi.herokuapp.com/api/characters/${character.Name}`);
    const quotes = await res.json();
    return quotes
}