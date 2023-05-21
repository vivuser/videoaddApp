import { useContext, useState } from 'react';
import './Playbutton.css';
import ThemeContext from '../Context/ThemeContext';

function Playbutton({message, children, onPlay, onPause}){

    const theme = useContext(ThemeContext)

    const [playing, setPlaying] =useState(false);
    function handleClick(e){
        console.log(e);
        // e.stopPropogation()
        if (playing) onPause()
        else onPlay();

        setPlaying(!playing);
    }

    return (
        <button className={theme} onClick={handleClick}>{children} : {playing?'⏸️':'⏯️'}</button>
    )
}

export default Playbutton;