import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PercentChange from './PercentageChange';

const CryptoTable = () => {
  const cryptos = useSelector(state => state.crypto.assets);
  
  // Format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };
  
  // Format currency
  const formatPrice = (num) => {
    if (num >= 1000) {
      return '$' + formatNumber(num.toFixed(2));
    }
    return '$' + num.toFixed(2);
  };
  
  // Format market cap and volume
  const formatLargeNumber = (num) => {
    return '$' + formatNumber(Math.round(num));
  };

  return (
    <TableContainer>
      <StyledTable>
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
                <CryptoNameCell>
                  <LogoCircle symbol={crypto.symbol}>
                    {crypto.symbol.charAt(0)}
                  </LogoCircle>
                  <CryptoName>{crypto.name}</CryptoName>
                  <CryptoSymbol>{crypto.symbol}</CryptoSymbol>
                </CryptoNameCell>
              </td>
              <td>{formatPrice(crypto.price)}</td>
              <td><PercentChange value={crypto.change1h} /></td>
              <td><PercentChange value={crypto.change24h} /></td>
              <td><PercentChange value={crypto.change7d} /></td>
              <td>{formatLargeNumber(crypto.marketCap)}</td>
              <td>{formatLargeNumber(crypto.volume24h)}</td>
              <td>{formatNumber(crypto.circulatingSupply)} {crypto.symbol}</td>
              <td>
                <ChartPlaceholder isPositive={crypto.change7d >= 0} />
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

// Styled components
const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }
  
  th {
    font-weight: 600;
    background-color: #f8f9fa;
    color: #666;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
  
  @media (max-width: 1100px) {
    th:nth-child(7), td:nth-child(7),
    th:nth-child(8), td:nth-child(8),
    th:nth-child(9), td:nth-child(9) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    th:nth-child(4), td:nth-child(4),
    th:nth-child(5), td:nth-child(5),
    th:nth-child(10), td:nth-child(10) {
      display: none;
    }
  }
`;

const CryptoNameCell = styled.div`
  display: flex;
  align-items: center;
`;

const LogoCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => {
    // Different colors for different cryptocurrencies
    const colors = {
      BTC: '#F7931A',
      ETH: '#627EEA',
      USDT: '#26A17B',
      XRP: '#23292F',
      BNB: '#F3BA2F'
    };
    return colors[props.symbol] || '#CCCCCC';
  }};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  margin-right: 8px;
`;

const CryptoName = styled.span`
  font-weight: 500;
  margin-right: 5px;
`;

const CryptoSymbol = styled.span`
  color: #6c757d;
`;

const ChartPlaceholder = styled.div`
  width: 120px;
  height: 40px;
  background: ${props => props.isPositive ? 
    'linear-gradient(to top right, #e6f7ef, #16c784)' : 
    'linear-gradient(to top right, #fbeaec, #ea3943)'};
  border-radius: 4px;
`;

export default CryptoTable;