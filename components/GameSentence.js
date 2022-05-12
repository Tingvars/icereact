import React, { useState } from 'react';
import PuzzleSolvedCorrectly from './PuzzleSolvedCorrectly';
import PuzzleWrong from './PuzzleWrong';
import GameOver from './GameOver';
import {getSentence} from '../lib/library';
import { useSelector, useDispatch } from 'react-redux'
import { gameOver, nextPuzzle, checkAnswer, tryAgain } from '../gameSlice'

function AnswerInput(props) {
    const [userInput, setUserInput] = useState(props.userAnswer);

    function handleInput(ev) {
        const input = ev.target.value;
        setUserInput(input);
        props.updateAnswer(input);
    }

    return <input className="text-center my-1 mx-1 rounded pl-1" type="text" value={userInput} onChange={handleInput} placeholder={props.headword} />
}

export default function GameSentence() {
    const gameSettings = useSelector(state => state.game.settings);
    const isGameOver = useSelector(state => state.game.isGameOver);
    const hasAnswered = useSelector(state => state.game.hasAnswered);
    let {questionCounter, turnCounter, gameTurns} = gameSettings;
    
    const sentence = useSelector(state => state.game.sentence);
    //const [isGameOver, setIsGameOver] = useState(false);
    //const [_, setHasAnswered] = useState(false);

    const dispatch = useDispatch();
    
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

        // TODO: send the user's answers as a payload?
        dispatch(checkAnswer({userAnswers}));
    }

    function handleTryAgain() {
        dispatch(tryAgain())
    }

    function handleNextPuzzle(isCorrect) {
        dispatch(nextPuzzle({isCorrect}));
    }

    let allCorrect = answerBools.length && answerBools.every(answer => answer);

    // useSelector(state => state.game.currentQuestion.isCorrect)

    if (isGameOver) {
        return < GameOver gameSettings={gameSettings}/>
    }

    if (hasAnswered) {
        if (allCorrect) {
            return < PuzzleSolvedCorrectly question={sentence} nextPuzzle={handleNextPuzzle} />
            
        } else {
            return < PuzzleWrong question={sentence} userAnswers={userAnswers} answerBools={answerBools} tryAgain={handleTryAgain} nextPuzzle={handleNextPuzzle} />
        }
    }

    return <div>
        <div className="text-center">
            <div className="text-2xl font-bold py-3">{sentence.english}</div>
            {sentence.headwords.map((word, index) => <AnswerInput key={index} className="mx-2" userAnswer={userAnswers[index]} headword={word} updateAnswer={answer => updateAnswer(index, answer)} />)}
            <div>
                <button className="btn" onClick={handleCheck}>Check</button>
            </div>
            {hasAnswered && <pre>{allCorrect ? "correct" : "not correct"}</pre>}
        </div>
    </div>
}