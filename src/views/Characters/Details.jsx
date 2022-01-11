//will bring in the component that will handle the specific character detail
//will pass down a prop from state
//probably will implement a useEffect here
import { useEffect, useState } from "react"
import {Link, useParams} from 'react-router-dom'
import SingleCharacter from "../../components/Characters/SingleCharacter"
import { getCharacterSearch } from "../../services/futuramaApi"
import Detail from './Detail.css'


export default function Details() {
    const { name } = useParams();
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState(null)


    useEffect(() => {
        const loadCharacter = async() => {
            const res = await getCharacterSearch(name);
            setCharacter(res);
            setLoading(false);
        };
        loadCharacter();
    }, [name]);

    //<SingleCharacter character={character}/>

    return (
        <>
            <div>
            <Link to="/characters"><button>Character List</button></Link>
             {loading ? (
                 <img src='https://i.gifer.com/2vDa.gif' alt="bender dancing"/>
             ) : (
                <SingleCharacter character={character}/>
             ) 
            }   
            </div>
        </>
    )
}
