import './App.css';
import React from 'react';
import GameSentence from './GameSentence';

export default function PuzzleSolvedCorrectly(props) {
    const {nextPuzzle, question, gameSettings, hasClickedNext} = props;

    if (hasClickedNext) {
        return <div>
            < GameSentence gameSettings={gameSettings}/>
        </div>
    }
    
    return ( 
        <div className = "isSentence" >
            <h2> { question.english } </h2>   
            <h2> { question.fields.join(" ") } </h2>   
            <h2> Great job! </h2>
            <button onClick = {() => nextPuzzle(true)} > Next Puzzle </button>  
        </div>
    )
}