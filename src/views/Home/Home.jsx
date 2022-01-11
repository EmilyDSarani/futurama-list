//Will jsut have some cute message and a Link or Button that takes user to the list page
import { Link } from 'react-router-dom'
import styles from './Home.css'

export default function Home() {
    return (
        <div className={styles.background}>
         <h1 className={styles.header}>The Futurama Character Selector</h1> 
         <h2 className={styles.headertwo}>Board our planet express ship to venture to leave planet </h2>
         <Link to="/characters"><img src="https://pngimg.com/uploads/futurama/futurama_PNG102.png" alt='futurerama spaceship' /></Link>  
        </div>
    )
}
