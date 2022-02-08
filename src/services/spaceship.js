import { useState } from 'react'
import Spaceship from '../assets/Spaceship.m4a'

export default function spaceship() {
const [spaceSound, setSpaceSound] = useState(false);

const handleSound =  (e) => {
const { spaceSound } = e.target
await setSpaceSound(Spaceship)


}

}
