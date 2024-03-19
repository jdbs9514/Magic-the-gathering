import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './slices/cards/cardslice';

export const store = configureStore({
  reducer: {
    cards: cardReducer
  }
});
