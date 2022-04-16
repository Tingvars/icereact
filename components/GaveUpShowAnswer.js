import React from 'react';

export default function GaveUpShowAnswer(props) {
    const {wrongAnswerList, nextPuzzle, question} = props;
    console.log(wrongAnswerList);

    return ( 
        <div className = "text-center" >
            <div className = "text-xl font-bold"> { question.english } </div>   
            <div className = "text-lg">Should be:<br></br> { question.fields.join(" ") } </div>   
            <button className="btn" onClick = {() => nextPuzzle(false)} > Next Puzzle </button>  
        </div>
    )
}