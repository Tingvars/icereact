import './App.css';
import React, { useState } from 'react';
import GameSentence from './GameSentence';
import { getQuestion } from './GameWordListIs';

const ThisWord = "blah";
//I want to have the user's answers from GameSentence somehow and use them instead of "ThisWord"

function MakeBox() {
    return <> {ThisWord} </>
}

export default function PuzzleWrong(props) {
    const question = props.question;

    return ( 
        <div className = "isSentence" >
            < h2 > Not quite right < /h2 >
            <h3>You wrote:</h3>
            {question.headwords.map(() => <MakeBox />)}
            <div>
                < button onClick={() => props.tryAgain()}> Back To Puzzle < /button>  
                < button > Give Up < /button>  
            </div>
        < /div >
    )

}