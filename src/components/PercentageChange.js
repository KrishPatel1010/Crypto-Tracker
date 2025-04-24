import React from 'react';
import styled from 'styled-components';

const PercentChange = ({ value }) => {
  const isPositive = value >= 0;
  
  return (
    <Container isPositive={isPositive}>
      {isPositive ? '▲' : '▼'} {Math.abs(value).toFixed(2)}%
    </Container>
  );
};

const Container = styled.span`
  color: ${props => props.isPositive ? '#16c784' : '#ea3943'};
  font-weight: 500;
`;

export default PercentChange;