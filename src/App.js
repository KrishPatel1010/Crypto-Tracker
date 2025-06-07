import React from 'react';
import styled from 'styled-components';
import CryptoTable from './components/CryptoTable';

function App() {
  return (
    <AppContainer>
      <Header>
        <Title>Cryptocurrency Market</Title>
        <Subtitle>Real-time price updates from CoinGecko</Subtitle>
      </Header>
      <CryptoTable />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  margin-bottom: 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
  color: #1e293b;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #64748b;
  margin: 0;
`;

export default App;