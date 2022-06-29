import React, { useState, useEffect } from "react";
import GameSentence from "./GameSentence";
import StartNewGame from "./StartNewGame";
import { useSelector, useDispatch } from "react-redux";
import { resetGame, startGame } from "../gameSlice";
import { atom, useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { numPuzzlesTodayAtom, wrongAnswerListAtom } from "../lib/atoms";

//Fix localStorage stuff, use redux storage? https://www.npmjs.com/package/redux-storage or Jotai? https://jotai.org/docs/guides/persistence - Thora
//new slice, all setting and getting stuff should be in there as actions

//THora TODO fix this screen

export default function StartAgain() {
  const [wrongAnswerList, setWrongAnswerList] = useAtom(wrongAnswerListAtom);
  const userSettings = useSelector((state) => state.game.settings);

  const dispatch = useDispatch();

  const numPuzzlesToday = useAtomValue(numPuzzlesTodayAtom);

  function handleChangeGameSettings() {
    dispatch(resetGame());
  }

  function handleRestartGame() {
    const restartSettings = { ...userSettings };
    const turnCount = restartSettings.gameTurns;
    const useAdjectives = restartSettings.useAdj;
    dispatch(resetGame());
    dispatch(startGame({ turnCount, useAdjectives }));
  }

  return (
    <div className="text-center">
      <div className="text-2xl font-bold">Game Over</div>
      <div>
        {" "}
        You got {userSettings.rightAnswers}/{userSettings.gameTurns} right!{" "}
      </div>
      <div>Wrong words entered today: {wrongAnswerList}</div>
      <div>Total solved correctly today: {numPuzzlesToday}</div>
      <div>
        <button className="btn mr-2" onClick={handleRestartGame}>
          {" "}
          Play Again{" "}
        </button>
        <button className="btn" onClick={handleChangeGameSettings}>
          {" "}
          Change Game Settings{" "}
        </button>
      </div>
    </div>
  );
}
