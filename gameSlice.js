import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import {getSentence} from './lib/library';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    hasClicked: false,
    hasAnswered: false,
    sentence: [],
    userAnswers: [],
    settings: {
      turnCounter: 1,
      questionCounter: 0,
      rightAnswers: 0,

      // Settings
      gameTurns: 0,
      useAdj: false
    },
    // currentGame: {
    //   turnCounter: 1,
    //   questionCounter: 0,
    //   rightAnswers: 0,
    // },
    isGameOver: false,
  },
  
  reducers: {
    startGame: (state, action) => {
      state.hasClicked = true;
      state.settings.gameTurns = action.payload.turnCount;
      state.settings.useAdj = action.payload.useAdjectives;
      state.settings.rightAnswers = 0;

      state.sentence = getSentence({
        useAdjective: state.settings.useAdj
      })
    },
    gameOver: state => {
      state.isGameOver = true;
    },
    checkAnswer: (state, action) => {
      state.userAnswers = action.payload.userAnswers;
      state.hasAnswered = true;
    },
    tryAgain: state => {
      state.hasAnswered = false;
    },
    nextPuzzle: state => {
      // https://redux-toolkit.js.org/api/createSelector
      if (selectUserAnswerIsCorrect(state)) {
        state.settings.rightAnswers += 1;
      } 

      // -----

      if (state.settings.turnCounter < state.settings.gameTurns) {        
        state.settings.turnCounter += 1;

        // if (questionCounter < 4) {
        //     questionCounter = questionCounter + 1;
        // } else {
        //     questionCounter = 0;
        // }

        // setHasAnswered(false);
        state.hasAnswered = false;
        state.userAnswers = state.sentence.fields.map(() => "");
        // gameSettings.questionCounter = questionCounter;
        
        // setSentence(getSentence({
        //     useAdjective: gameSettings.useAdj
        // }));

        state.sentence = getSentence({
          useAdjective: state.settings.useAdj
        })

        // TODO: Set game over if needed 

    } else {
      state.isGameOver = true;
    }
  },
}
})

// Action creators are generated for each case reducer function
export const { startGame, gameOver, checkAnswer, tryAgain, nextPuzzle } = gameSlice.actions

function selectUserAnswerBools(state) {
  const userAnswerBools = state.userAnswers.map((answer, index) => {
    if (answer === state.sentence.fields[index]) {
      return true;
    } else {
      return false;
    }
  })

  return userAnswerBools;
}

function useGameSelector(selector) {
  return useSelector(state => selector(state.game))
}

export const selectUserAnswerIsCorrect = state => selectUserAnswerBools(state).every(Boolean);

export const useAllCorrect = () => useGameSelector(selectUserAnswerIsCorrect);

export const useUserAnswerBools = () => useGameSelector(selectUserAnswerBools);

// function useUserAnswerBools() {
//   const useUserAnswerBools = useSelector(state => selectUserAnswerBools(state.game))
//   return useUserAnswerBools; 
// }

export default gameSlice.reducer