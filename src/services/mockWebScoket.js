// services/mockWebSocket.js
import { updateCryptoData } from '../features/crypto/cryptoSlice';

class MockWebSocket {
  constructor(dispatch, getState) {
    this.dispatch = dispatch;
    this.getState = getState;
    this.intervalId = null;
  }

  connect() {
    this.intervalId = setInterval(() => {
      const assets = this.getState().crypto.assets;
      
      assets.forEach(asset => {
        // Generate random price changes
        const priceChangePercent = (Math.random() * 0.006) - 0.003; // -0.3% to +0.3%
        const newPrice = asset.price * (1 + priceChangePercent);
        
        // Random changes for various metrics
        const newChange1h = asset.change1h + ((Math.random() * 0.2) - 0.1); // ±0.1%
        const newChange24h = asset.change24h + ((Math.random() * 0.2) - 0.1); // ±0.1%
        const newChange7d = asset.change7d + ((Math.random() * 0.2) - 0.1); // ±0.1%
        
        // Random volume change
        const volumeChangePercent = (Math.random() * 0.04) - 0.02; // -2% to +2%
        const newVolume = asset.volume24h * (1 + volumeChangePercent);
        
        this.dispatch(updateCryptoData({
          id: asset.id,
          price: parseFloat(newPrice.toFixed(2)),
          change1h: parseFloat(newChange1h.toFixed(2)),
          change24h: parseFloat(newChange24h.toFixed(2)),
          change7d: parseFloat(newChange7d.toFixed(2)),
          volume24h: Math.round(newVolume)
        }));
      });
    }, 1500); // Update every 1.5 seconds
  }

  disconnect() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

export default MockWebSocket;