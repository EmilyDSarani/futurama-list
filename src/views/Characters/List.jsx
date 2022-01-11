//will get a list of characters
//will pass it down to a component that will render how the list will look
//use effect will probs set the characters
import { useEffect, useState} from 'react';
import AllCharacters from '../../components/Characters/AllCharacters';
import { getCharacters } from '../../services/futuramaApi';
import { useCharacter } from '../../context/CharacterContext';
import styles from './List.css'


export default function List() {
    const { characters, setCharacters } = useCharacter([])
    const [loading, setLoading] = useState(true);

    //this use effect is saying- get all the characters and set them to the res. once they are loaded, set loading back to false.

     //go through each character and return that character with an id added onto it
     //spreading the res
     //Zack taught me how to map it to create an id
    useEffect(() => {
        const loadCharacters = async() => {
            const res = await getCharacters();
            const response= res.map((item, i)=>({
                ...item, id:i
            }))
            setCharacters(response);
            setLoading(false);
        };
        loadCharacters();
    }, []);

    // useEffect(() => {
    //     setLoading(true);
    //     getCharacters()
    //     .then((res) => {
    //         setCharacters(res.characters);
    //     })
    //     .finally(() => setLoading(false))
    // }, [])

    return (
        <>
            <h1 className={styles.headerName}>Characters
                {loading && (<img src='https://i.gifer.com/2vDa.gif' alt="bender dancing"/>)}
            </h1>
            {!loading && <AllCharacters characters={characters}/>}
            {}

        </>
    )
}
