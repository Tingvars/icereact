import './App.css';
import React, { useState } from 'react';
import GameSentence from './GameSentence';
import { getQuestion } from './GameWordListIs';

function MakeBox(props) {
    const answerBool = props.answerBool;
    const answerWord = props.answerWord;
    
    if (answerBool === false) {
        return <> <span className="puzzleWrongWordWrong">{ answerWord}</span> </>
    } else {
        return <> <span className="puzzleWrongWordRight">{ answerWord}</span> </>
    }
}

export default function PuzzleWrong(props) {
    let gameSettings = props.gameSettings;
    const [hasClicked, setHasClicked] = useState(false);
    const userAnswers = props.userAnswers;
    const answerBools = props.answerBools;
    let questionCounter = gameSettings.questionCounter;

    function NextPuzzle() {
        if (questionCounter < 4) {
            questionCounter = questionCounter + 1;
        } else {
            questionCounter = 0;
        }
        setHasClicked(true);
        gameSettings.questionCounter = questionCounter;
    }

    if (hasClicked === true) {
        return <div>
            < GameSentence gameSettings={gameSettings}/>
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