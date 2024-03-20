import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import cardReducer from './slices/cards/cardslice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cardReducer);

export const store = configureStore({
  reducer: {
    cards: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
  })
});

export const persistor = persistStore(store);