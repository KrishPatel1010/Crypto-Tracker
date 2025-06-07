import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../features/CryptoData';
import './CryptoTable.css';
import PercentChange from './PercentageChange';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const { filteredAssets, filter } = useSelector(state => state.crypto);

  const formatNumber = (num) => num.toLocaleString();
  const formatPrice = (num) => num >= 1000 ? '$' + formatNumber(num.toFixed(2)) : '$' + num.toFixed(2);
  const formatLargeNumber = (num) => '$' + formatNumber(Math.round(num));

  return (
    <div className="table-container">
      <div className="filter-controls">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'gainers' ? 'active' : ''}`}
          onClick={() => dispatch(setFilter('gainers'))}
        >
          Top Gainers
        </button>
        <button
          className={`filter-btn ${filter === 'losers' ? 'active' : ''}`}
          onClick={() => dispatch(setFilter('losers'))}
        >
          Top Losers
        </button>
      </div>
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
          </tr>
        </thead>
        <tbody>
          {filteredAssets.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.id}</td>
              <td>
                <div className="crypto-name-cell">
                  <img
                    src={crypto.image}
                    alt={crypto.symbol}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
