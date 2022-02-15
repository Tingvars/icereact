import './App.css';
import React, { useState } from 'react';
import GameSentence from './GameSentence';

export default function PuzzleSolvedCorrectly(props) {
    let gameSettings = props.gameSettings;
    const [hasClicked, setHasClicked] = useState(false);
    const question = props.question;
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
        < h2 > { question.english } < /h2>   
        < h2 > { question.fields.map((field) => "" + " " + field) } < /h2 >   
        < h2 > Great job! < /h2 >
        < button onClick = {() => NextPuzzle()} > Next Puzzle < /button>  
        < /div >
    )
}