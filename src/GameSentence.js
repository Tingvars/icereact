import React, { useState } from 'react';
import './App.css';
import {getQuestion} from './GameWordListIs';
import PuzzleSolvedCorrectly from './PuzzleSolvedCorrectly';

function print(obj) {
    return JSON.stringify(obj, null, 2)
}

function AnswerInput(props) {
    const [userInput, setUserInput] = useState("");

    function handleInput(ev) {
        const input = ev.target.value;
        setUserInput(input);
        
        props.updateAnswer(input);
    }

    return <input type="text" value={userInput} onChange={handleInput} placeholder={props.headword} />
}

export default function GameSentence({correctsolveToDisplaySection}) {
    const question = getQuestion();

    const [hasAnswered, setHasAnswered] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerBools, setAnswerBools] = useState([]);

    function updateAnswer(index, input) {
        userAnswers[index] = input
        setUserAnswers(userAnswers)
    }

    function handleCheck() {
        const answerBools = question.fields.map((field, index) => field === userAnswers[index])
        
        setAnswerBools(answerBools);
        setHasAnswered(true);
        //the user's answers, and which answers were right or wrong, get passed on somehow.
        //"displayId" in DisplaySection gets changed somehow.
        //we're probably also passing on the turnCounter.
    }

    let allCorrect = answerBools.length && answerBools.every(answer => answer);

    return <div>
        <div className="isSentence">
            <h2>{question.english}</h2>
            {question.headwords.map((word, index) => <AnswerInput headword={word} updateAnswer={answer => updateAnswer(index, answer)} />)}
            <div>
                <button onClick={handleCheck}>Check</button>
            </div>

            {hasAnswered && <pre>{allCorrect ? "correct" : "not correct"}</pre>}
            <pre>{print(userAnswers)}</pre>
            <pre>{print(answerBools)}</pre>
        </div>
    </div>
}