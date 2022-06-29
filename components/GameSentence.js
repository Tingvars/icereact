import React, { useState } from "react";
import PuzzleSolvedCorrectly from "./PuzzleSolvedCorrectly";
import PuzzleWrong from "./PuzzleWrong";
import GaveUpShowAnswer from "./GaveUpShowAnswer";
import GameOver from "./GameOver";
import { getSentence } from "../lib/library";
import { useSelector, useDispatch } from "react-redux";
import { atom, useAtom } from "jotai";
import {
  gameOver,
  nextPuzzle,
  checkAnswer,
  tryAgain,
  useAllCorrect,
  selectUserAnswerBools,
} from "../gameSlice";
import { numPuzzlesTodayAtom, wrongAnswerListAtom } from "../lib/atoms";

function AnswerInput(props) {
  const [userInput, setUserInput] = useState(props.userAnswer);

  function handleInput(ev) {
    const input = ev.target.value.toLowerCase();
    console.log(typeof input);

    setUserInput(input);
    props.updateAnswer(input);
  }

  return (
    <input
      className="text-center my-1 mx-1 rounded pl-1"
      type="text"
      value={userInput}
      onChange={handleInput}
      placeholder={props.headword}
    />
  );
}

export default function GameSentence() {
  const gameSettings = useSelector((state) => state.game.settings);
  const isGameOver = useSelector((state) => state.game.isGameOver);
  const hasAnswered = useSelector((state) => state.game.hasAnswered);
  const allCorrect = useAllCorrect();
  const [hasGivenUp, setHasGivenUp] = useState(false);

  const sentence = useSelector((state) => state.game.sentence);

  const dispatch = useDispatch();

  const [wrongAnswerList, setWrongAnswerList] = useAtom(wrongAnswerListAtom);

  //const [answerBools, setAnswerBools] = useState([]);

  const defaultAnswers = sentence.fields.map(() => "");

  const [userAnswers, setUserAnswers] = useState(defaultAnswers);

  function updateAnswer(index, input) {
    const newAnswers = [...userAnswers];
    newAnswers[index] = input;
    setUserAnswers(newAnswers);
  }

  function handleCheck() {
    dispatch(checkAnswer({ userAnswers }));

    const userAnswerBools = selectUserAnswerBools({
      userAnswers,
      sentence,
    });

    const wrongAnswers = userAnswers
      //TODO Thora - de-duplicate (use set stuff from GameOver)
      .map((word, index) => ({
        word,
        correct: userAnswerBools[index],
      }))
      .filter((word) => word.correct === false)
      .map((word) => word.word);

    setWrongAnswerList([...new Set([...wrongAnswerList, ...wrongAnswers])]);
  }

  function handleTryAgain() {
    dispatch(tryAgain());
  }

  if (isGameOver) {
    return <GameOver gameSettings={gameSettings} />;
  }

  if (hasGivenUp) {
    return <GaveUpShowAnswer />;
  }

  if (hasAnswered) {
    if (allCorrect) {
      return <PuzzleSolvedCorrectly />;
    }
  }

  // switch (gameState) {
  //   case ANSWER_QUESTION:
  //     return <GameSentence>
  // }

  return (
    <div>
      <div className="text-center">
        <div className="text-2xl font-bold py-3">{sentence.english}</div>
        {sentence.headwords.map((word, index) => (
          <AnswerInput
            key={index}
            className="mx-2"
            userAnswer={userAnswers[index]}
            headword={word}
            updateAnswer={(answer) => updateAnswer(index, answer)}
          />
        ))}
        <div>
          <button className="btn" onClick={handleCheck}>
            Check
          </button>
        </div>
        <div>
          {hasAnswered && (
            <button className="btn" onClick={() => setHasGivenUp(true)}>
              Give Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
