import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './features/CryptoData';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer
  }
});