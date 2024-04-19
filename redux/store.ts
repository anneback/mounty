import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gameStateSlice } from './gameStateSlice';

const rootReducer = combineReducers({ gameState: gameStateSlice.reducer });

export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
