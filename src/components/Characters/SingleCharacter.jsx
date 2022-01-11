//this will literally just render how the detail page is going to look
import React from 'react'
import styles from './Character.css'

export default function SingleCharacter({ character }) {
    const{Name, PicUrl, Species, Status } = character

    console.log(character)
    return (
        <div className={styles.character}>
            <img src={PicUrl} alt={Name} />
            <h1 className={styles.content}>Name: {Name}</h1>
            <h2>Species: {Species}</h2>
            <h3>Status: {Status}</h3>
        <div className={styles.bg}></div>
        <div className={styles.bg2}></div>
        <div className={styles.bg3}></div>
        
        </div>
        
    )
}
