import './App.css';
import React from 'react';

export default function PuzzleSolvedCorrectly(props) {
    const {nextPuzzle, question} = props;
    
    return ( 
        <div className = "isSentence" >
            <h2> { question.english } </h2>   
            <h2> { question.fields.join(" ") } </h2>   
            <h2> Great job! </h2>
            <button onClick = {() => nextPuzzle(true)} > Next Puzzle </button>  
        </div>
    )
}