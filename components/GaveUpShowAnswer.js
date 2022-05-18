import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { nextPuzzle } from '../gameSlice'

export default function GaveUpShowAnswer() {
    const sentence = useSelector(state => state.game.sentence);
    const dispatch = useDispatch();

    function handleNextPuzzle() {
        dispatch(nextPuzzle());
    }

    return ( 
        <div className = "text-center" >
            <div className = "text-xl font-bold"> { sentence.english } </div>   
            <div className = "text-lg">Should be:<br></br> { sentence.fields.join(" ") } </div>   
            <button className="btn" onClick = {handleNextPuzzle} > Next Puzzle </button>  
        </div>
    )
}