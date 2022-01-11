//Will figure out the list magic here
//probably will need a link to the character detail page
import { Link } from 'react-router-dom'
import styles from './Character.css'

export default function AllCharacters({ characters }) {
    return (
        <ul aria-label="characters" className={styles.biglist}>
            {characters.map((character, i) =>(
                <li className={styles.list} key={character.Name + i}>
                    <Link to={`/characters/${character.Name}`}>
                            <img src={character.PicUrl}
                                alt={character.Name} />
                            <button><h1>{character.Name}</h1></button>
                    </Link>        
                        
                </li>
            ))}
        <div className={styles.bg}></div>
        <div className={styles.bg2}></div>
        <div className={styles.bg3}></div>
        <div className={styles.content}> </div>
        </ul>
    )
}
