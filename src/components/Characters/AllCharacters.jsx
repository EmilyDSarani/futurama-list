//Will figure out the list magic here
//probably will need a link to the character detail page
import React from 'react'

export default function AllCharacters({characters}) {
    return (
        <ul>
            {characters.map((character) =>(
                <li>
                    <Link to={`/characters/${character.name}/5`}>
                        <div>
                            <img src={character.image}
                                alt={character.name} />
                            <h1>{character.name}</h1>
                            <h2>{character.species}</h2>
                            <h3>{character.age}</h3>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
