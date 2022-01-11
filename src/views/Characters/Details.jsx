//will bring in the component that will handle the specific character detail
//will pass down a prop from state
//probably will implement a useEffect here
import { useEffect, useState } from "react"
import {Link, useParams} from 'react-router-dom'
import SingleCharacter from "../../components/Characters/SingleCharacter"
import { getCharacterSearch } from "../../services/futuramaApi"

export default function Details() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState(null)


    useEffect(() => {
        const loadCharacter = async() => {
            const res = await getCharacterSearch(id);
            setCharacter(res);
            setLoading(false);
        };
        loadCharacter();
    }, [id]);

    //<SingleCharacter character={character}/>

    return (
        <>
            <div>
             {loading ? (
                 <img src='https://i.gifer.com/2vDa.gif' alt="bender dancing"/>
             ) : (
                <SingleCharacter characters={character}/>
             ) 
            }   
            </div>
        </>
    )
}
