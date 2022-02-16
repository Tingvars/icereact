import './App.css';
import React from 'react';

function MakeBox(props) {
    const answerBool = props.answerBool;
    const answerWord = props.answerWord;

    return <span className={answerBool ? "puzzleWrongWordRight" : "puzzleWrongWordWrong"}>{ answerWord + " "}</span>

}
export default function PuzzleWrong(props) {
    const {nextPuzzle, userAnswers, answerBools} = props;

    return ( 
        <div className = "isSentence" >
            < h2 > Not quite right < /h2 >
            <h3>You wrote:</h3>
            {userAnswers.map((userAnswer, index) => <MakeBox answerWord={userAnswer} answerBool={answerBools[index]}/>)}
            <div>
                < button onClick={() => props.tryAgain()}> Back To Puzzle < /button>  
                < button onClick = {() => nextPuzzle(false)} > Give Up < /button>
            </div>
        < /div >
    )
}