import { createSlice } from '@reduxjs/toolkit'
import {getSentence} from './lib/library';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    hasClicked: false,
    hasClickedRight: false,
    hasAnswered: false,
    sentence: {},
    userAnswers: {},
    userAnswerBools: {},
    userAnswerIsCorrect: false,
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

      state.userAnswerBools = state.userAnswers.map((answer, index) => {
        if (answer === state.sentence.fields[index]) {
          return true;
        } else {
          return false;
        }
      })

      state.userAnswerIsCorrect = state.userAnswerBools.every(Boolean);

      state.hasAnswered = true;
    },
    tryAgain: state => {
      state.hasAnswered = false;
    },
    nextPuzzle: state => {
      console.log("starting nextPuzzle from gameslice");
      if (state.userAnswerIsCorrect) {
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
        state.userAnswers = sentence.fields.map(() => "");
        // gameSettings.questionCounter = questionCounter;
        
        // setSentence(getSentence({
        //     useAdjective: gameSettings.useAdj
        // }));

        state.sentence = getSentence({
          useAdjective: state.settings.useAdj
        })

        // TODO: Set game over if needed 

    }
    state.hasClickedRight = true;
    console.log("hasClickedRight is now " + state.hasClickedRight);
  },

  unClick: state => {
    state.hasClickedRight = false;
  }
}
})

// Action creators are generated for each case reducer function
export const { startGame, gameOver, checkAnswer, tryAgain, nextPuzzle, unClick } = gameSlice.actions

export default gameSlice.reducer