import './App.css';
import React from 'react';
import GameSentence from './GameSentence';
import PuzzleSolvedCorrectly from './PuzzleSolvedCorrectly';
import PuzzleWrong from './PuzzleWrong';

let displayId = 2;
let displayBit;

export default function DisplaySection() {

    if (displayId === 0) {
        displayBit =  < PuzzleSolvedCorrectly />;
    } else if (displayId === 1) {
        displayBit = < GameSentence />;
    } else if (displayId === 2) {
        displayBit = < PuzzleWrong />;
    }

    return ( 
        <div > 
            { displayBit } 
        </div>
    )

}