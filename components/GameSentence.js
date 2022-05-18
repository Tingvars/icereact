import React, { useState } from 'react';
import PuzzleSolvedCorrectly from './PuzzleSolvedCorrectly';
import PuzzleWrong from './PuzzleWrong';
import GameOver from './GameOver';
import {getSentence} from '../lib/library';
import { useSelector, useDispatch } from 'react-redux'
import { gameOver, nextPuzzle, checkAnswer, tryAgain, useAllCorrect } from '../gameSlice'

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
    const allCorrect = useAllCorrect();

    const sentence = useSelector(state => state.game.sentence);

    const dispatch = useDispatch();
    
    //const [answerBools, setAnswerBools] = useState([]);

    const defaultAnswers = sentence.fields.map(() => "");

    const [userAnswers, setUserAnswers] = useState(defaultAnswers);

    function updateAnswer(index, input) {
        const newAnswers = [...userAnswers]
        newAnswers[index] = input
        setUserAnswers(newAnswers)
    }

    function handleCheck() {
        dispatch(checkAnswer({userAnswers}));
    }

    function handleTryAgain() {
        dispatch(tryAgain())
    }

    if (isGameOver) {
        return < GameOver gameSettings={gameSettings}/>
    }

    if (hasAnswered) {
        if (allCorrect) {
            return < PuzzleSolvedCorrectly />
        } else {
            return < PuzzleWrong />
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