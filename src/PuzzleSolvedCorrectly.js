import './App.css';
import React, { useState } from 'react';
import GameSentence from './GameSentence';
import GameOver from './GameOver';

export default function PuzzleSolvedCorrectly(props) {
    let gameSettings = props.gameSettings;
    const [hasClickedNext, setHasClickedNext] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const question = props.question;
    let questionCounter = gameSettings.questionCounter;
    let turnCounter = gameSettings.turnCounter;
    let gameTurns = gameSettings.gameTurns;

    function NextPuzzle() {
        gameSettings.rightAnswers = gameSettings.rightAnswers + 1;
        if (turnCounter < gameTurns) {
            turnCounter = turnCounter + 1;
            gameSettings.turnCounter = turnCounter;
            if (questionCounter < 4) {
                questionCounter = questionCounter + 1;
            } else {
                questionCounter = 0;
            }
            setHasClickedNext(true);
            gameSettings.questionCounter = questionCounter;
    } else {
        setIsGameOver(true);
      }      
}

    if (hasClickedNext === true) {
        return <div>
            < GameSentence gameSettings={gameSettings}/>
        </div>
    }
    
    if (isGameOver === true) {
        return <div>
            < GameOver  gameSettings={gameSettings}/>
        </div>
    }

    return ( 
        <div className = "isSentence" >
        < h2 > { question.english } < /h2>   
        < h2 > { question.fields.map((field) => "" + " " + field) } < /h2 >   
        < h2 > Great job! < /h2 >
        < button onClick = {() => NextPuzzle()} > Next Puzzle < /button>  
        < /div >
    )
}