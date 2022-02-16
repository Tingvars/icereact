import './App.css';
import React, { useState } from 'react';
import GameSentence from './GameSentence';

const gameSettings = {
     turnCounter: 1, questionCounter: 0, gameTurns: 0, rightAnswers: 0
    };

export default function StartNewGame() {
    const [hasClicked, setHasClicked] = useState(false);
    const [turnCount, setTurnCount] = useState(1);

function StartGame() {
setHasClicked(true);
}

    if (hasClicked === true) {
        gameSettings.gameTurns = turnCount;
        return <div>
            < GameSentence gameSettings={gameSettings}/>
        </div>
    }

    return ( 
        <div className = "isSentence" >
            < h2 > Welcome to the game! < /h2 >
            <h3>You'll enter some settings on this page and then click Start.</h3>
            <h4>Please select the number of turns you want to play:</h4>
            <input
          type="number"
          value={turnCount}
          onChange={(event) => {
            setTurnCount(event.target.value);
          }}
        />  
            <div>
                < button onClick={() => StartGame()}> Start < /button>  
            </div>
        < /div >
    )

}