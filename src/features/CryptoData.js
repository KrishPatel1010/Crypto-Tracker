import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCryptoData } from '../services/cryptoService';

// Initial data to use instead of API calls
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
    circulatingSupply: 19.85,
    image: `${process.env.PUBLIC_URL}/logos/btc.png`
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
    circulatingSupply: 120.71,
    image: `${process.env.PUBLIC_URL}/logos/eth.png`
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
    circulatingSupply: 145.27,
    image: `${process.env.PUBLIC_URL}/logos/teth.png`
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
    circulatingSupply: 58.39,
    image: `${process.env.PUBLIC_URL}/logos/xrp.png`
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
    circulatingSupply: 140.89,
    image: `${process.env.PUBLIC_URL}/logos/bnb.png`
  }
];

// Comment out the API call for now
// export const fetchCryptoDataAsync = createAsyncThunk(
//   'crypto/fetchData',
//   async () => {
//     const response = await fetchCryptoData();
//     return response;
//   }
// );

const CryptoData = createSlice({
  name: 'crypto',
  initialState: {
    assets: initialCryptos,
    filteredAssets: initialCryptos,
    loading: false,
    error: null,
    filter: 'all'
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      switch (action.payload) {
        case 'gainers':
          state.filteredAssets = [...state.assets].sort((a, b) => b.change24h - a.change24h);
          break;
        case 'losers':
          state.filteredAssets = [...state.assets].sort((a, b) => a.change24h - b.change24h);
          break;
        default:
          state.filteredAssets = state.assets;
      }
    }
  }
  // Comment out the API-related reducers
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchCryptoDataAsync.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchCryptoDataAsync.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.assets = action.payload;
  //       state.filteredAssets = action.payload;
  //     })
  //     .addCase(fetchCryptoDataAsync.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // }
});

export const { setFilter } = CryptoData.actions;

export default CryptoData.reducer;