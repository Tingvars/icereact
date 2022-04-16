import React, { useState } from 'react';
import GameSentence from './GameSentence';

const gameSettings = {
     turnCounter: 1, questionCounter: 0, gameTurns: 0, rightAnswers: 0, wrongAnswerList: [], useAdj: false
    };

export default function StartNewGame() {
    const [hasClicked, setHasClicked] = useState(false);
    const [turnCount, setTurnCount] = useState(1);
    const [useAdjectives, setUseAdjectives] = useState(false);

function StartGame() {
    if (turnCount === "") {
        alert("Invalid turn count!");
    } else {
setHasClicked(true);
}
}

    if (hasClicked === true) {
        gameSettings.gameTurns = turnCount;
        gameSettings.useAdj = useAdjectives;
        return <div>
            < GameSentence gameSettings={gameSettings}/>
        </div>
    }

    return ( 
        <div className="text-center">
            <div className = "text-xl font-bold"> Welcome to the game! </div>
            <div className="text-lg">You'll enter some settings on this page and then click Start.</div>
            <div>Tick this box to select adjectives:</div>
            <input type="checkbox" name="adjectives" onChange={() => {
                if (useAdjectives) {
                    setUseAdjectives(false);
                } else {
                    setUseAdjectives(true);
                }
          }}
            ></input>
            <div>Please enter the number of turns you want to play:</div>
            <input
          type="number"
          value={turnCount}
          onChange={(event) => {
            setTurnCount(event.target.value);
          }}
        />  
            <div>
                < button className="btn" onClick={() => StartGame()}> Start < /button>  
            </div>
        </div>
    )

}