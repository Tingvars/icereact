import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GameSentence from './GameSentence';
import { gameOver, nextPuzzle } from '../gameSlice'

export default function PuzzleSolvedCorrectly() {
    const sentence = useSelector(state => state.game.sentence);
    const hasClickedRight = useSelector(state => state.game.hasClickedRight);
    const dispatch = useDispatch();
    console.log(hasClickedRight);

    function handleNextPuzzle() {
        if (!hasClickedRight) {
            dispatch(nextPuzzle());
        }
    }

    if (hasClickedRight) {
        console.log("returning gamesentence");
        //for some reason this is just looping? But not returning GameSentence?
        return <div>
            < GameSentence />
        </div>
    }
    
    return ( 
        <div className = "text-center" >
            <div className = "text-xl font-bold"> { sentence.english } </div>   
            <div className = "text-lg"> { sentence.fields.join(" ") } </div>   
            <div className = "text-lg"> Great job! </div>
            <button className="btn" onClick = {handleNextPuzzle} > Next Puzzle </button>  
        </div>
    )
}