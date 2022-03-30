import './App.css';
import React from 'react';

export default function PuzzleSolvedCorrectly(props) {
    const {nextPuzzle, question} = props;
    
    return ( 
        <div className = "text-center" >
            <div className = "text-xl font-bold"> { question.english } </div>   
            <div className = "text-lg"> { question.fields.join(" ") } </div>   
            <div className = "text-lg"> Great job! </div>
            <button className="btn" onClick = {() => nextPuzzle(true)} > Next Puzzle </button>  
        </div>
    )
}