import React, { useState } from 'react';
import './App.css';
import {getQuestion} from './GameWordListIs';
import PuzzleSolvedCorrectly from './PuzzleSolvedCorrectly';
import PuzzleWrong from './PuzzleWrong';
import GameOver from './GameOver';
import getSentences from './library';

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
    let needNewQuestion = true;
    let question;
    console.log("needNewQuestion is: " + needNewQuestion);

    if (needNewQuestion) {
    question = getSentences();
    console.log(question);
    needNewQuestion = false;
}
    const defaultAnswers = question.fields.map(() => "");

    const [isGameOver, setIsGameOver] = useState(false);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [userAnswers, setUserAnswers] = useState(defaultAnswers);
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
            setHasAnswered(false);
            setUserAnswers(defaultAnswers);
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
            return < PuzzleSolvedCorrectly question={question} nextPuzzle={nextPuzzle} />
            
        } else {
            return < PuzzleWrong userAnswers={userAnswers} answerBools={answerBools} tryAgain={tryAgain} nextPuzzle={nextPuzzle} />
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