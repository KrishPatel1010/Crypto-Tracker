import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: true,
        price_change_percentage: '1h,24h,7d'
      }
    });

    return response.data.map((coin, index) => ({
      id: index + 1,
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      price: coin.current_price,
      change1h: coin.price_change_percentage_1h_in_currency || 0,
      change24h: coin.price_change_percentage_24h_in_currency || 0,
      change7d: coin.price_change_percentage_7d_in_currency || 0,
      marketCap: coin.market_cap,
      volume24h: coin.total_volume,
      circulatingSupply: coin.circulating_supply,
      image: coin.image,
      sparkline: coin.sparkline_in_7d?.price || []
    }));
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
}; 