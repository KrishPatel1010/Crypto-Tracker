import { updateCryptoData } from '../features/CryptoData';

class MockWebSocket {
  constructor(dispatch) {
    this.dispatch = dispatch;
    this.intervalId = null;
  }

  connect() {
    this.intervalId = setInterval(() => {
      // Update each cryptocurrency with random changes
      for (let id = 1; id <= 5; id++) {
        // Generate a random price (use a realistic range based on crypto)
        let price;
        switch(id) {
          case 1: // Bitcoin
            price = 93759.48 + (Math.random() * 2000 - 1000);
            break;
          case 2: // Ethereum
            price = 1802.46 + (Math.random() * 40 - 20);
            break;
          case 3: // Tether
            price = 1.00 + (Math.random() * 0.01 - 0.005);
            break;
          case 4: // XRP
            price = 2.22 + (Math.random() * 0.1 - 0.05);
            break;
          case 5: // BNB
            price = 606.65 + (Math.random() * 10 - 5);
            break;
          default:
            price = 100 + (Math.random() * 10);
        }
        
        this.dispatch(updateCryptoData({
          id,
          price: parseFloat(price.toFixed(2)),
          change1h: parseFloat((Math.random() * 2 - 1).toFixed(2)),
          change24h: parseFloat((Math.random() * 4 - 2).toFixed(2)),
          change7d: parseFloat((Math.random() * 10 - 5).toFixed(2)),
          volume24h: Math.floor(Math.random() * 10000000000 + 1000000000)
        }));
      }
    }, 1500);
  }

  disconnect() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

export default MockWebSocket;