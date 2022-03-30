import React, { useState } from 'react';
import {getQuestion} from './GameWordListIs';
import PuzzleSolvedCorrectly from './PuzzleSolvedCorrectly';
import PuzzleWrong from './PuzzleWrong';
import GameOver from './GameOver';
import {getSentence} from '../lib/library';

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

    return <input className="mx-1 rounded pl-1" type="text" value={userInput} onChange={handleInput} placeholder={props.headword} />
}

export default function GameSentence(props) {
    const {gameSettings} = props;
    let {questionCounter, turnCounter, gameTurns} = gameSettings;
    
    const [sentence, setSentence] = useState(getSentence(gameSettings));
    const [isGameOver, setIsGameOver] = useState(false);
    const [hasAnswered, setHasAnswered] = useState(false);
    
    const [answerBools, setAnswerBools] = useState([]);

    const defaultAnswers = sentence.fields.map(() => "");

    const [userAnswers, setUserAnswers] = useState(defaultAnswers);

    function updateAnswer(index, input) {
        userAnswers[index] = input
        setUserAnswers(userAnswers)
    }

    function handleCheck() {
        const answerBools = sentence.fields.map((field, index) => field === userAnswers[index])
        
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
            setSentence(getSentence({
                useAdjective: gameSettings.useAdj
            }));
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
            return < PuzzleSolvedCorrectly question={sentence} nextPuzzle={nextPuzzle} />
            
        } else {
            return < PuzzleWrong userAnswers={userAnswers} answerBools={answerBools} tryAgain={tryAgain} nextPuzzle={nextPuzzle} />
        }
    }

    return <div>
        <div className="text-center">
            <div className="text-2xl font-bold py-3">{sentence.english}</div>
            {sentence.headwords.map((word, index) => <AnswerInput className="mx-2" userAnswer={userAnswers[index]} headword={word} updateAnswer={answer => updateAnswer(index, answer)} />)}
            <div>
                <button className="btn" onClick={handleCheck}>Check</button>
            </div>
            {hasAnswered && <pre>{allCorrect ? "correct" : "not correct"}</pre>}
        </div>
    </div>
}