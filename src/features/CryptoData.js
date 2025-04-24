import { createSlice } from '@reduxjs/toolkit';

const initialCryptos = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 93759.48,
    change1h: 0.43,
    change24h: 0.93,
    change7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: 19.85
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 1802.46,
    change1h: 0.60,
    change24h: 3.21,
    change7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: 120.71
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    price: 1.00,
    change1h: 0.00,
    change24h: 0.00,
    change7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: 145.27
  },
  {
    id: 4,
    name: "XRP",
    symbol: "XRP",
    price: 2.22,
    change1h: 0.46,
    change24h: 0.54,
    change7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: 58.39
  },
  {
    id: 5,
    name: "BNB",
    symbol: "BNB",
    price: 606.65,
    change1h: 0.09,
    change24h: -1.20,
    change7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: 140.89
  }
];

const CryptoData = createSlice({
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

export const { updateCryptoData } = CryptoData.actions;

export default CryptoData.reducer;