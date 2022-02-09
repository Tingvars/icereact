import './App.css';
import React, { useState } from 'react';
import GameSentence from './GameSentence';
import { getQuestion } from './GameWordListIs';

const ThisWord = "blah";
//I want to have the user's answers from GameSentence somehow and use them instead of "ThisWord"

function MakeBox() {
    return <> {ThisWord} </>
}

export default function PuzzleWrong() {
    const question = getQuestion();

    return ( 
        <div className = "isSentence" >
            < h2 > Not quite right < /h2 >
            <h3>You wrote:</h3>
            {question.headwords.map(() => <MakeBox />)}
            <div>
                < button > Back To Puzzle < /button>  
                < button > Give Up < /button>  
            </div>
        < /div >
    )

}