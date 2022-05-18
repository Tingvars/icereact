import React, {useState} from 'react';
import GaveUpShowAnswer from './GaveUpShowAnswer';
import { useSelector, useDispatch } from 'react-redux';
import { gameOver, nextPuzzle, checkAnswer, tryAgain, useUserAnswerBools } from '../gameSlice'

function MakeBox(props) {
    const answerBool = props.answerBool;
    const answerWord = props.answerWord;
    return <span className={answerBool ? "text-green-600" : "text-red-600"}>{ answerWord + " "}</span>
}

export default function PuzzleWrong() {
    let wrongAnswerList;
    const userAnswers = useSelector(state => state.game.userAnswers);
    const userAnswerBools = useUserAnswerBools();
    const [hasGivenUp, setHasGivenUp] = useState(false);
    const dispatch = useDispatch();

    function handleTryAgain() {
        dispatch(tryAgain())
    }
    
    if (typeof window !== 'undefined') {
        wrongAnswerList = [localStorage.getItem('wrongAnswerList')];}
    console.log("wrongAnswerList currently: " + wrongAnswerList);

    userAnswers.map((word, index) => ({
        word,
        correct: userAnswerBools[index]
          })).filter(word => word.correct === false).map(word => word.word).map(word => wrongAnswerList.push(word));

    localStorage.setItem("wrongAnswerList", wrongAnswerList);

    if (hasGivenUp) {
        return <GaveUpShowAnswer />
    } else {

    return ( 
        <div className = "text-center">
            <div className = "text-xl font-bold"> Not quite right </div>
            <h3>You wrote:</h3> 
            {userAnswers.map((userAnswer, index) => <MakeBox key={index} answerWord={userAnswer} userAnswer={userAnswerBools[index]}/>)}
            <div>
                {/* TODO Back To Puzzle button works, but entering new answers gets an error. */}
                < button className="btn mr-2" onClick={() => handleTryAgain()}> Back To Puzzle </button>  
                < button className="btn" onClick = {() => setHasGivenUp(true)}> Give Up </button>
            </div>
            
        </div>
    )
}
}
