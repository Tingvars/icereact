import React, { useState } from 'react';
import GameSentence from './GameSentence';
import StartNewGame from './StartNewGame';

export default function StartAgain(props) {
    let wrongAnswerList = localStorage.getItem('wrongAnswerList');
    let wrongAnswerArray = wrongAnswerList.split(",");
    let duplicatesRemoved = [...new Set(wrongAnswerArray)];
    if (typeof window !== 'undefined') {
    localStorage.setItem("wrongAnswerList", duplicatesRemoved);}
    let gameSettings = props.gameSettings;
    const [hasAddedRightAnswersToTotal, sethasAddedRightAnswersToTotal] = useState(false);
    const [hasClickedStartSameGame, setHasClickedStartSameGame] = useState(false);
    const [hasClickedToGameSettings, setHasClickedToGameSettings] = useState(false);

    if (typeof window !== 'undefined') {
        if (!hasAddedRightAnswersToTotal) {
        localStorage.setItem("numPuzzlesToday", parseInt([localStorage.getItem('numPuzzlesToday')]) + gameSettings.rightAnswers);
        sethasAddedRightAnswersToTotal(true);
        } 
    }

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
            <div>Wrong words entered today: {duplicatesRemoved}</div>
            <div>Total solved correctly today: {localStorage.getItem('numPuzzlesToday')}</div>
            <div>
                <button className="btn mr-2" onClick={() => StartSameGame()}> Play Again </button> 
                <button className="btn" onClick={() => ToGameSettings()}> Change Game Settings </button> 
            </div>
        </div>
    )

    }
