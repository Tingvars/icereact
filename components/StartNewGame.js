import React, { useState, useEffect } from 'react';
import GameSentence from './GameSentence';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counterSlice'
import { startGame } from '../gameSlice'

// In an another file

// export const hasClicked = useSelector(state => state.game.hasClicked);

// import { hasClicked } from "./selectors"

export default function StartNewGame() {
    const [turnCount, setTurnCount] = useState(1);
    const [useAdjectives, setUseAdjectives] = useState(false);

    const count = useSelector(state => state.counter.value)
    const hasClicked = useSelector(state => state.game.hasClicked)
    const gameSettings = useSelector(state => state.game.settings)
  
    const dispatch = useDispatch()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('wrongAnswerList') === null)  {
            localStorage.setItem("wrongAnswerList", "");
          }
        }
             if (typeof window !== 'undefined') {
                 if (localStorage.getItem('numPuzzlesToday') === null)  {
                 localStorage.setItem("numPuzzlesToday", 0);
               }
             }
    }, [])
            
    function handleStart() {
        if (isNaN(turnCount)) {
            alert("Invalid turn count!");
        } else {
            dispatch(startGame({turnCount, useAdjectives}));
        }
    }

    if (hasClicked) {
        return <div>
            < GameSentence />
        </div>
    }

    return ( 
        <div className="text-center">
            <div className = "text-xl font-bold"> Welcome to the game! </div>
            <div className="text-lg">You'll enter some settings on this page and then click Start.</div>
            <div>Tick this box to select adjectives:</div>
            <input type="checkbox" name="adjectives" onChange={() => {
                if (useAdjectives) {
                    setUseAdjectives(false);
                } else {
                    setUseAdjectives(true);
                }
          }}
            ></input>
            <div>Please enter the number of turns you want to play:</div>
            <input
          type="number"
          value={turnCount}
          onChange={(event) => {
            setTurnCount(parseInt(event.target.value));
          }}
        />  
            <div>
                < button className="btn" onClick={handleStart}> Start < /button>  
            </div>

            <div>
      </div>
        </div>
    )

}