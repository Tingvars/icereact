import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getSentence } from "./lib/library";

//TODO show right/wrong in context rather than separate screen.
//finite state machines - read and use?
//find someone who can make a design

const CREATE_GAME = "CREATE_GAME";

const states = [
  CREATE_GAME,
  "ANSWERING_QUESTION",
  "ANSWERED_CORRECTLY",
  "ANSWERED_INCORRECTLY",
  "GAME_OVER",
];

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameRunning: false,
    hasAnswered: false,
    sentence: [],
    userAnswers: [],
    settings: {
      turnCounter: 1,
      questionCounter: 0,
      rightAnswers: 0,
      gameTurns: 0,
      useAdj: false,
    },
    isGameOver: false,
  },

  reducers: {
    startGame: (state, action) => {
      state.gameRunning = true;
      state.isGameOver = false;
      state.hasAnswered = false;
      state.settings.gameTurns = action.payload.turnCount;
      state.settings.useAdj = action.payload.useAdjectives;
      state.settings.rightAnswers = 0;

      state.sentence = getSentence({
        useAdj: state.settings.useAdj,
      });
    },
    resetGame: (state) => {
      state.settings.turnCounter = 1;
      state.settings.questionCounter = 0;
      state.settings.rightAnswers = 0;
      state.isGameOver = false;
      state.hasAnswered = false;
      state.gameRunning = false;

      state.state = "ANSWERING_QUESTION";
    },
    gameOver: (state) => {
      state.isGameOver = true;
    },
    checkAnswer: (state, action) => {
      state.userAnswers = action.payload.userAnswers;
      state.hasAnswered = true;
    },
    tryAgain: (state) => {
      state.hasAnswered = false;
    },
    nextPuzzle: (state) => {
      // https://redux-toolkit.js.org/api/createSelector
      if (selectUserAnswerIsCorrect(state)) {
        state.settings.rightAnswers += 1;
      }

      if (state.settings.turnCounter < state.settings.gameTurns) {
        state.settings.turnCounter += 1;

        state.hasAnswered = false;
        state.userAnswers = state.sentence.fields.map(() => "");
        // gameSettings.questionCounter = questionCounter;

        // setSentence(getSentence({
        //     useAdjective: gameSettings.useAdj
        // }));

        state.sentence = getSentence({
          useAdjective: state.settings.useAdj,
        });
      } else {
        state.isGameOver = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startGame,
  resetGame,
  gameOver,
  checkAnswer,
  tryAgain,
  nextPuzzle,
} = gameSlice.actions;

export function selectUserAnswerBools(state) {
  return state.userAnswers.map(
    (answer, index) => answer === state.sentence.fields[index]
  );
}

function useGameSelector(selector) {
  return useSelector((state) => selector(state.game));
}

export const selectUserAnswerIsCorrect = (state) =>
  selectUserAnswerBools(state).every(Boolean);

export const useAllCorrect = () => useGameSelector(selectUserAnswerIsCorrect);

export const useUserAnswerBools = () => useGameSelector(selectUserAnswerBools);

// function useUserAnswerBools() {
//   const useUserAnswerBools = useSelector(state => selectUserAnswerBools(state.game))
//   return useUserAnswerBools;
// }

export default gameSlice.reducer;
