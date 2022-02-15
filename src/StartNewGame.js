import './App.css';
import React, { useState } from 'react';
import GameSentence from './GameSentence';

const gameSettings = {
     turnCounter: 0, questionCounter: 0,
    };

export default function StartNewGame() {
    const [hasClicked, setHasClicked] = useState(false);

function StartGame() {
setHasClicked(true);
}

    if (hasClicked === true) {
        return <div>
            < GameSentence gameSettings={gameSettings}/>
        </div>
    }

    return ( 
        <div className = "isSentence" >
            < h2 > Welcome to the game! < /h2 >
            <h3>You'll enter some settings on this page and then click Start.</h3>
            <div>
                < button onClick={() => StartGame()}> Start < /button>  
            </div>
        < /div >
    )

}