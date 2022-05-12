import { createSlice } from '@reduxjs/toolkit'
import {getSentence} from './lib/library';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    hasClicked: false,
    hasAnswered: false,
    sentence: {},
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
      // action.payload.userAnswers

      // TODO: Compare the userAnswers with the sentence to figure out if correct
      // state.currentQuestion.isCorrect = true/false

      state.hasAnswered = true;
    },
    tryAgain: state => {
      state.hasAnswered = false;
    },
    nextPuzzle: (state, action) => {
      if (action.payload.isCorrect) {
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

        // setUserAnswers(defaultAnswers);
        // gameSettings.questionCounter = questionCounter;
        
        // setSentence(getSentence({
        //     useAdjective: gameSettings.useAdj
        // }));

        state.sentence = getSentence({
          useAdjective: state.settings.useAdj
        })

        // TODO: Set game over if needed 

    }
  }
}
})

// Action creators are generated for each case reducer function
export const { startGame, gameOver, checkAnswer, tryAgain, nextPuzzle } = gameSlice.actions

export default gameSlice.reducer