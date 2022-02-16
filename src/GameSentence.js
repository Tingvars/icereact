import React, { useState } from 'react';
import './App.css';
import {getQuestion} from './GameWordListIs';
import PuzzleSolvedCorrectly from './PuzzleSolvedCorrectly';
import PuzzleWrong from './PuzzleWrong';
import GameOver from './GameOver';

//function print(obj) {
//    return JSON.stringify(obj, null, 2)
//}

function AnswerInput(props) {
    const [userInput, setUserInput] = useState(props.userAnswer);

    function handleInput(ev) {
        const input = ev.target.value;
        setUserInput(input);
        props.updateAnswer(input);
    }

    return <input type="text" value={userInput} onChange={handleInput} placeholder={props.headword} />
}

export default function GameSentence(props) {
    const {gameSettings} = props;
    let {questionCounter, turnCounter, gameTurns} = gameSettings;

    const question = getQuestion(questionCounter);

    const [hasClickedNext, setHasClickedNext] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [userAnswers, setUserAnswers] = useState(question.fields.map(() => ""));
    const [answerBools, setAnswerBools] = useState([]);

    function updateAnswer(index, input) {
        userAnswers[index] = input
        setUserAnswers(userAnswers)
    }

    function handleCheck() {
        const answerBools = question.fields.map((field, index) => field === userAnswers[index])
        
        setAnswerBools(answerBools);
        setHasAnswered(true);
    }

    function tryAgain() {
        setHasAnswered(false);
    }

    function nextPuzzle(isCorrect) {
        if (isCorrect) {
            gameSettings.rightAnswers = gameSettings.rightAnswers + 1;
        }
        if (turnCounter < gameTurns) {
            turnCounter = turnCounter + 1;
            gameSettings.turnCounter = turnCounter;
            if (questionCounter < 4) {
                questionCounter = questionCounter + 1;
            } else {
                questionCounter = 0;
            }
            setHasClickedNext(true);
            gameSettings.questionCounter = questionCounter;
    } else {
        setIsGameOver(true);
      }      
}

    let allCorrect = answerBools.length && answerBools.every(answer => answer);

    if (isGameOver) {
        return < GameOver gameSettings={gameSettings}/>
    }

    if (hasAnswered) {
        if (allCorrect) {
            return < PuzzleSolvedCorrectly gameSettings={gameSettings} question={question} userAnswers={userAnswers} hasClickedNext={hasClickedNext} nextPuzzle={nextPuzzle} />
            
        } else {
            return < PuzzleWrong gameSettings={gameSettings} userAnswers={userAnswers} answerBools={answerBools} tryAgain={tryAgain} hasClickedNext={hasClickedNext} nextPuzzle={nextPuzzle} />
        }
    }

    return <div>
        <div className="isSentence">
            <h2>{question.english}</h2>
            {question.headwords.map((word, index) => <AnswerInput userAnswer={userAnswers[index]} headword={word} updateAnswer={answer => updateAnswer(index, answer)} />)}
            <div>
                <button onClick={handleCheck}>Check</button>
            </div>
            {hasAnswered && <pre>{allCorrect ? "correct" : "not correct"}</pre>}
        </div>
    </div>
}