import React, {useState} from 'react';
import GaveUpShowAnswer from './GaveUpShowAnswer';

function MakeBox(props) {
    const answerBool = props.answerBool;
    const answerWord = props.answerWord;
    return <span className={answerBool ? "text-green-600" : "text-red-600"}>{ answerWord + " "}</span>
}

export default function PuzzleWrong(props) {
    const {nextPuzzle, question, userAnswers, answerBools, wrongAnswerList} = props;
    const [hasGivenUp, setHasGivenUp] = useState(false);
    const wrongAnsArray = [];

    //This makes an array of correct answers and bools from user answers, 
    //and picks out the correct answer if the bool is false
   const combinedWordBool = question.fields.concat(answerBools);
   combinedWordBool.forEach(word => {
   if (combinedWordBool.indexOf(word) < question.fields.length) {
        if (!combinedWordBool[(combinedWordBool.indexOf(word) + question.fields.length)]) {
            wrongAnsArray.push(word);
        }
    };
    });

    let duplicatesRemoved = [...new Set(wrongAnsArray)];
    wrongAnswerList.length = 0;
    wrongAnswerList.push(duplicatesRemoved);

    if (hasGivenUp) {
        return <GaveUpShowAnswer wrongAnswerList={wrongAnswerList[0]} question={question} nextPuzzle={nextPuzzle} />
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