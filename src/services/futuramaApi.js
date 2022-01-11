//will do the logic to grab the futurama api here

//fetch all characters
export const getCharacters = async () => {
    const res = await fetch( 'futuramaapi.herokuapp.com/api/v2/characters')
    const characters = await res.json();
    return characters;
}

//fetch character quotes
export const getCharacterQuotes = async () => {
    const res = await fetch('futuramaapi.herokuapp.com/api/characters/<character name>/<count>')
    const quotes = await res.json();
    return quotes
}