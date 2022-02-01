import React from 'react';
import './App.css';
import isWordList from './GameWordListIs';

export default function GameSentenceIs() {

    return ( <
        div >

        <
        isWordList / >

        <
        div class = "isSentence" > <
        input type = "text"
        placeholder = "einn" /
        >
        <
        input type = "text"
        placeholder = "tveir" /
        > <
        input type = "text"
        placeholder = { isWordList[2] }
        / > < /
        div > < /
        div >
    )
}