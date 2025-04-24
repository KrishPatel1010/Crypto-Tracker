import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css';
import PercentChange from './PercentageChange';

const CryptoTable = () => {
  const cryptos = useSelector(state => state.crypto.assets);

  const formatNumber = (num) => num.toLocaleString();
  const formatPrice = (num) => num >= 1000 ? '$' + formatNumber(num.toFixed(2)) : '$' + num.toFixed(2);
  const formatLargeNumber = (num) => '$' + formatNumber(Math.round(num));

  return (
    <div className="table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.id}</td>
              <td>
                <div className="crypto-name-cell">
                  <img
                    src={crypto.image}
                    alt={crypto.symbol}
                    width="24"
                    height="24"
                    className="crypto-logo"
                  />
                  <span className="crypto-name">{crypto.name}</span>
                  <span className="crypto-symbol">{crypto.symbol}</span>
                </div>
              </td>
              <td>{formatPrice(crypto.price)}</td>
              <td><PercentChange value={crypto.change1h} /></td>
              <td><PercentChange value={crypto.change24h} /></td>
              <td><PercentChange value={crypto.change7d} /></td>
              <td>{formatLargeNumber(crypto.marketCap)}</td>
              <td>{formatLargeNumber(crypto.volume24h)}</td>
              <td>{formatNumber(crypto.circulatingSupply)} {crypto.symbol}</td>
              <td>
              <img src={`/charts/chart${crypto.id}.png`} width={150} alt="7-day chart" className="chart-image"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
