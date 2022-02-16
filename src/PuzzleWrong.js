import './App.css';
import React, { useState } from 'react';
import GameSentence from './GameSentence';
import { getQuestion } from './GameWordListIs';
import GameOver from './GameOver';

function MakeBox(props) {
    const answerBool = props.answerBool;
    const answerWord = props.answerWord;

    return <span className={answerBool ? "puzzleWrongWordRight" : "puzzleWrongWordWrong"}>{ answerWord + " "}</span>

}
export default function PuzzleWrong(props) {
    let gameSettings = props.gameSettings;
    const userAnswers = props.userAnswers;
    const answerBools = props.answerBools;
    const [hasClickedNext, setHasClickedNext] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const question = props.question;
    let questionCounter = gameSettings.questionCounter;
    let turnCounter = gameSettings.turnCounter;
    let gameTurns = gameSettings.gameTurns;

    function NextPuzzle() {
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
            < h2 > Not quite right < /h2 >
            <h3>You wrote:</h3>
            {userAnswers.map((userAnswer, index) => <MakeBox answerWord={userAnswer} answerBool={answerBools[index]}/>)}
            <div>
                < button onClick={() => props.tryAgain()}> Back To Puzzle < /button>  
                < button onClick = {() => NextPuzzle()} > Give Up < /button>
            </div>
        < /div >
    )
}