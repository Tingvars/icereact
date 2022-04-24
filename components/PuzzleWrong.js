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
        wrongAnswerList = [localStorage.getItem('wrongAnswerList')];
      }
    

    //This makes an array of correct answers and bools from user answers, 
    //and picks out the correct answer if the bool is false
   const combinedWordBool = question.fields.concat(answerBools);
   combinedWordBool.forEach(word => {
   if (combinedWordBool.indexOf(word) < question.fields.length) {
        if (!combinedWordBool[(combinedWordBool.indexOf(word) + question.fields.length)]) {
            wrongAnswerList.push(word);
        }
    };
    });

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