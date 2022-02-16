import './App.css';
import React, { useState } from 'react';
import GameSentence from './GameSentence';
import StartNewGame from './StartNewGame';

export default function StartAgain(props) {
    let gameSettings = props.gameSettings;
    const [hasClickedStartSameGame, setHasClickedStartSameGame] = useState(false);
    const [hasClickedToGameSettings, setHasClickedToGameSettings] = useState(false);

    function StartSameGame() {
        setHasClickedStartSameGame(true);
    }
    
    function ToGameSettings() {
        setHasClickedToGameSettings(true);
    }

    if (hasClickedStartSameGame === true) {
        gameSettings.turnCounter = 1;
        gameSettings.questionCounter = 0;
        gameSettings.rightAnswers = 0;
        return <div>
            < GameSentence gameSettings={gameSettings}/>
        </div>
    }

    if (hasClickedToGameSettings === true) {
        return <div>
            < StartNewGame />
        </div>
    }

    return ( 
        <div className = "isSentence" >
            <h1>Game Over</h1>
            < h2 > You got { gameSettings.rightAnswers }/{ gameSettings.gameTurns } right! < /h2 >
            <div>
                < button onClick={() => StartSameGame()}> Play Again < /button> 
                < button onClick={() => ToGameSettings()}> Change Game Settings < /button> 
            </div>
        < /div >
    )

    }
