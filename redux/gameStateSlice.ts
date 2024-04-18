import { DoorType, GameStateType } from '@/components/types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const doors: DoorType[] = [{ id: 0 }, { id: 1 }, { id: 2 }];

const initialGameState: GameStateType = {
  doors,
  winningDoor: Math.floor(Math.random() * 3),
  firstGuess: null,
  secondGuess: null,
  hasWon: false,
  allGuessed: false,
  revealedDoor: null,
  endGame: false,
};

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState: initialGameState,
  reducers: {
    reset: () => initialGameState,
    revealDoor: (state, action) => {
      state.revealedDoor = action.payload.id;
    },
    firstGuess: (state, action) => {
      state.firstGuess = action.payload.id;
    },
    secondGuess: (state, action) => {
      state.secondGuess = action.payload.id;
    },
    endGame: (state) => {
      state.endGame = true;
    },
  },
});

export const { reset, revealDoor, firstGuess, secondGuess, endGame } =
  gameStateSlice.actions;

export const getDoors = (state: RootState) => state.gameState.doors;
export const getFirstGuess = (state: RootState) => state.gameState.firstGuess;
export const getSecondGuess = (state: RootState) => state.gameState.secondGuess;
export const getRevealedDoor = (state: RootState) =>
  state.gameState.revealedDoor;
export const getWinningDoor = (state: RootState) => state.gameState.winningDoor;
export const getEndGame = (state: RootState) => state.gameState.endGame;
