import './App.css';
import React, { useState } from 'react';
import GameSentence from './GameSentence';
import { getQuestion } from './GameWordListIs';

let turnCounter = 0;

function nextPuzzle() {
    turnCounter = turnCounter + 1;
    return turnCounter;
    //turnCounter gets passed on somehow and then picked up next time we go to PuzzleSolvedCorrectly. 
    //"displayId" in DisplaySection gets changed somehow.
}

export default function PuzzleSolvedCorrectly(props) {
    //in the following, I am trying to pass data on.
    const [passingData, setData] = useState("");

    const correctsolveToDisplaySection = () => {
        setData("this is passed from Puzzle Solved Correctly, yay");
    }

    //then here I am doing the display bit of this screen.
    const question = props.question;

    return ( 
        <div className = "isSentence" >
        < h2 > { question.english } < /h2>   
        < h2 > { question.fields.map((field) => "" + " " + field) } < /h2 >   
        < h2 > Great job! < /h2 >
        < button onClick = {() => correctsolveToDisplaySection() } > Next Puzzle < /button>  
        < /div >
    )

}