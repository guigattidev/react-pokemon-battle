import { createSlice } from "@reduxjs/toolkit";

export const battleSlice = createSlice({
  name: "battle",
  initialState: {
    playerHP: 200,
    playerFaint: "",
    enemyHP: 200,
    enemyFaint: "",
    textMessageOne: " ",
    textMessageTwo: "",
    gameOver: false,
  },

  reducers: {
    playAgain: (state) => {
      state.playerHP = 200;
      state.playerFaint = false;
      state.enemyHP = 200;
      state.enemyFaint = false;
      state.textMessageOne = "";
      state.textMessageTwo = "";
      state.gameOver = false;
    },
    updateMessageOne: (state, action) => {
      state.playerFaint = action.payload.playerFaint;
      state.enemyFaint = action.payload.enemyFaint;
      state.textMessageOne = action.payload.textMessageOne;
    },
    attackEnemy: (state, action) => {
      state.enemyHP = action.payload.enemyHP;
      state.textMessageOne = action.payload.textMessageOne;
    },
    attackPlayer: (state, action) => {
      state.playerHP = action.payload.playerHP;
      state.textMessageOne = action.payload.textMessageOne;
    },
    gameMessage: (state, action) => {
      state.textMessageOne = action.payload.textMessageOne;
    },
    winGame: (state, action) => {
      state.playerFaint = true;
      state.textMessageOne = action.payload.textMessageOne;
      state.textMessageTwo = action.payload.textMessageTwo;
    },
    loseGame: (state, action) => {
      state.enemyFaint = true;
      state.textMessageOne = action.payload.textMessageOne;
      state.textMessageTwo = action.payload.textMessageTwo;
    },
    gameOver: (state) => {
      state.gameOver = true;
    },
  },
});

export const {
  playAgain,
  updateMessageOne,
  attackEnemy,
  attackPlayer,
  gameMessage,
  winGame,
  loseGame,
  gameOver,
} = battleSlice.actions;

export const selectBattle = (state) => state.battle;

export default battleSlice.reducer;
