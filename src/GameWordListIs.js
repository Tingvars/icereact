import React from 'react';
import './App.css';

const wordNum = 3;

const isWordsBase = [
    { id: 1, isWord: "Ord1" },
    { id: 2, isWord: "Ord2" },
    { id: 3, isWord: "Ord3" },
    { id: 4, isWord: "Ord4" },
    { id: 5, isWord: "Ord5" }
];

export default function isWordList() {
    const isWordList = ["thora", "peter", "me"];

    //for (let i = 0; i < wordNum; i++) {
    //  isWordList.push(isWordsBase[i]);
    // }

    return isWordList;
}

//.map((isWord) => < li > { isWord } < /li>)