import { useContext, createContext, useState } from "react";


const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
    const [characters, setCharacters] = useState([])

    return <CharacterContext.Provider value={{characters, setCharacters}}>{children}</CharacterContext.Provider>
}

const useCharacter = () =>{
    const context = useContext(CharacterContext)

    if(context === undefined){
        throw new Error('useCharacter needs to be defined in the CharacterContext Provider')
    }
    return context
}
export {CharacterProvider, useCharacter}