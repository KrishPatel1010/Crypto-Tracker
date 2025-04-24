// features/crypto/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialCryptos = [
  // Add the crypto data here
];

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: initialCryptos
  },
  reducers: {
    updateCryptoData: (state, action) => {
      const { id, price, change1h, change24h, change7d, volume24h } = action.payload;
      const asset = state.assets.find(a => a.id === id);
      if (asset) {
        asset.price = price;
        asset.change1h = change1h;
        asset.change24h = change24h;
        asset.change7d = change7d;
        asset.volume24h = volume24h;
      }
    }
  }
});

export const { updateCryptoData } = cryptoSlice.actions;

// Selectors
export const selectAllCryptos = state => state.crypto.assets;

export default cryptoSlice.reducer;