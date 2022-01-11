//Will figure out the list magic here
//probably will need a link to the character detail page
import { Link } from 'react-router-dom'

export default function AllCharacters({ characters }) {
    return (
        <ul aria-label="characters">
            {characters.map((character, i) =>(
                <li key={character.Name + i}>
                    <Link to={`/characters/${character.id}`}>
                            <img src={character.PicUrl}
                                alt={character.Name} />
                            <h1>{character.Name}</h1>
                    </Link>        
                        
                </li>
            ))}
        </ul>
    )
}
