import React, { useState } from 'react';
import GameSentence from './GameSentence';
import StartNewGame from './StartNewGame';

export default function StartAgain(props) {
    let wrongAnswerList = localStorage.getItem('wrongAnswerList');
    let wrongAnswerArray = wrongAnswerList.split(",");
    let duplicatesRemoved = [...new Set(wrongAnswerArray)];
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
        <div className="text-center">
            <div className = "text-2xl font-bold">Game Over</div>
            <div> You got { gameSettings.rightAnswers }/{ gameSettings.gameTurns } right! </div>
            <div>Wrong words this session: {duplicatesRemoved}</div>
            <div>
                <button className="btn mr-2" onClick={() => StartSameGame()}> Play Again </button> 
                <button className="btn" onClick={() => ToGameSettings()}> Change Game Settings </button> 
            </div>
        </div>
    )

    }
