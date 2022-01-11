//will get a list of characters
//will pass it down to a component that will render how the list will look
//use effect will probs set the characters
import { useEffect, useState} from 'react';
import AllCharacters from '../../components/Characters/AllCharacters';
import { getCharacters } from '../../services/futuramaApi';

export default function List() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    //this use effect is saying- get all the characters and set them to the res. once they are loaded, set loading back to false.
    useEffect(() => {
        const loadCharacters = async() => {
            const res = await getCharacters();
            setCharacters(res);
            setLoading(false);
        };
        loadCharacters();
    }, []);

    return (
        <div>
            {loading && <AllCharacters characters={characters}/>}
        </div>
    )
}
