import React, {useState} from 'react';
import GaveUpShowAnswer from './GaveUpShowAnswer';

function MakeBox(props) {
    const answerBool = props.answerBool;
    const answerWord = props.answerWord;
    return <span className={answerBool ? "text-green-600" : "text-red-600"}>{ answerWord + " "}</span>
}

export default function PuzzleWrong(props) {
    let wrongAnswerList;
    const {nextPuzzle, question, userAnswers, answerBools} = props;
    const [hasGivenUp, setHasGivenUp] = useState(false);
    if (typeof window !== 'undefined') {
        wrongAnswerList = [localStorage.getItem('wrongAnswerList')];}
    console.log("wrongAnswerList currently: " + wrongAnswerList);

    userAnswers.map((word, index) => ({
        word,
        correct: answerBools[index]
          })).filter(word => word.correct === false).map(word => word.word).map(word => wrongAnswerList.push(word));
                 //1. filtering out only false words  2. making the list only words not objects  3. adding words to wrongAnswerList
                 //preceding can be taken out once data is arriving as an object array

    localStorage.setItem("wrongAnswerList", wrongAnswerList);

    if (hasGivenUp) {
        return <GaveUpShowAnswer question={question} nextPuzzle={nextPuzzle} />
    } else {

    return ( 
        <div className = "text-center">
            <div className = "text-xl font-bold"> Not quite right </div>
            <h3>You wrote:</h3> 
            {userAnswers.map((userAnswer, index) => <MakeBox key={index} answerWord={userAnswer} answerBool={answerBools[index]}/>)}
            <div>
                < button className="btn mr-2" onClick={() => props.tryAgain()}> Back To Puzzle </button>  
                < button className="btn" onClick = {() => setHasGivenUp(true)}> Give Up </button>
            </div>
        </div>
    )
}
}
