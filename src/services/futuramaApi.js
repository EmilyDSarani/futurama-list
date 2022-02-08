//will do the logic to grab the futurama api here

//fetch all characters
export const getCharacters = async () => {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
    const characters = await res.json();
    return characters;
}

//fetch character quotes
export const getCharacterSearch = async (name) => {
    const res = await fetch(`https://futuramaapi.herokuapp.com/api/v2/characters?search=${name}`);
    const character = await res.json();
    return character[0]
}

export const getCharacterQuote = async () => {
    const res = await fetch(`https://futuramaapi.herokuapp.com/api/characters/${character.Name}`);
    const quotes = await res.json();
    return quotes
}