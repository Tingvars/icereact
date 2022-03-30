import React from 'react';

function MakeBox(props) {
    const answerBool = props.answerBool;
    const answerWord = props.answerWord;

    return <span className={answerBool ? "text-green-600" : "text-red-600"}>{ answerWord + " "}</span>

}
export default function PuzzleWrong(props) {
    const {nextPuzzle, userAnswers, answerBools} = props;

    return ( 
        <div className = "text-center">
            <div className = "text-xl font-bold"> Not quite right </div>
            <h3>You wrote:</h3>
            {userAnswers.map((userAnswer, index) => <MakeBox key={index} answerWord={userAnswer} answerBool={answerBools[index]}/>)}
            <div>
                < button className="btn mr-2" onClick={() => props.tryAgain()}> Back To Puzzle < /button>  
                < button className="btn" onClick = {() => nextPuzzle(false)} > Give Up < /button>
            </div>
        < /div >
    )
}