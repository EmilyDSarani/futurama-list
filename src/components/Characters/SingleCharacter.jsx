//this will literally just render how the detail page is going to look
import React from 'react'

export default function SingleCharacter({ character }) {
    const{Name, PicURL, Species, Status } = character
    return (
        <div>
            <img src={PicURL} alt={Name}/>
            <h1>Name: {Name}</h1>
            <h2>Species: {Species}</h2>
            <h3>Status: {Status}</h3>
        </div>
    )
}
