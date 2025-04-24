# Crypto Tracker
A cryptocurrency tracking application similar to CoinMarketCap that displays real-time cryptocurrency market data.

## Overview
Crypto Tracker provides users with up-to-date information on cryptocurrency prices, market caps, trading volumes, and other key metrics. Rather than using an external API, this project utilizes sample data that refreshes every 1.5 seconds to simulate real-time updates.

## Features
- Real-time cryptocurrency price tracking (simulated with 1.5 second refresh rate)
- Market capitalization visualization
- Price change indicators
- Trading volume statistics
- Responsive design for desktop and mobile viewing

## Technologies Used
- **React**: Front-end UI library
- **Redux**: State management
- **CSS/SCSS**: Styling
- **JavaScript/ES6+**: Programming language

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/KrishPatel1010/Crypto-Tracker.git
   ```
2. Navigate to the project directory:
   ```
   cd Crypto-Tracker
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`

## Usage
The application will automatically load and begin displaying the cryptocurrency data. The data refreshes every 1.5 seconds to simulate real-time updates.

You can:
- Sort cryptocurrencies by various metrics
- Search for specific cryptocurrencies
- View detailed information for each listed cryptocurrency

## Video Demonstration
A video demonstration of the application is available to showcase its functionality and features. The video provides a walkthrough of the application's interface and demonstrates how it handles real-time data updates.

https://github.com/KrishPatel1010/Crypto-Tracker/blob/main/public/Demo.mp4 <!-- Replace with actual link when available -->

## Project Structure
```
crypto-tracker/
├── public/
│   ├── logos/
│   │   ├── btc.png
│   │   ├── eth.png
│   │   ├── teth.png
│   │   ├── xrp.png
│   │   └── bnb.png
│   ├── charts/
│   │   ├── chart1.png
│   │   ├── chart2.png
│   │   ├── chart3.png
│   │   ├── chart4.png
│   │   └── chart5.png
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CryptoTable.js
│   │   ├── CryptoTable.css
│   │   └── PercentageChange.js
│   ├── features/
│   │       └── CryptoData.js
│   ├── services/
│   │   └── mockWebSocket.js
│   ├── App.js
│   ├── index.js
│   └── store.js
├── package.json
└── README.md
```

## Future Enhancements
- Implement real API integration with CoinMarketCap or similar service
- Add cryptocurrency comparison features
- Filters/sorting (top gainers, etc.)
- Implement user accounts and watchlists
- Add historical data charts
- Create mobile app version

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
Patel Krish - [krishpatel8463@gmail.com](mailto:krishpatel8463@gmail.com)

Project Link: [https://github.com/KrishPatel1010/Crypto-Tracker](https://github.com/KrishPatel1010/Crypto-Tracker)
