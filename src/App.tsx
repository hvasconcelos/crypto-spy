import React from 'react';
import './App.css';
import styled from 'styled-components';
import config from './config';
import { useGetPrices } from './useGetPrices';

const CoinGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #222;

  >* {
    flex: 1 1 180px;
  }
`;

interface CoinItemProps {
  change: number;
}

const CoinItem = styled.div<CoinItemProps>`
  width: 180px;
  height: 100px;
  border-right: 1px solid #444;
  border-bottom: 1px solid #444;
  background-color: #333;
  padding: 10px;
`;

const CoinSymbol = styled.h2`
  font-size: 1.0rem;
  margin-bottom: 0px;
  font-weight: 700;
  color: #999;
`;

const CoinPrice = styled.h3`
  margin-top: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #DDD;
  margin-bottom: 5px;
`;


const CoinChangeLabel = styled.span`
  font-weight: 600;
  color: #666;
  margin-left: 5px;
  font-size: 0.9rem;
`;


interface CoinChangeProps {
  perc: number;
}

const CoinChange = styled.span<CoinChangeProps>`
  color: ${(props: CoinChangeProps)=> props.perc > 0 ? "green": "red"};
  font-weight: 600;
  font-size: 0.9rem;
`;

const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222;
  justify-content: space-between;
  height: 100%;
`;
const Footer = styled.div`
  height: 25px;
  border-top: 1px solid #555;
  background-color: #333;
  text-align: right;
  padding: 0px 10px;
  color: #777;
  font-size: 0.9rem;
`;

const LastUpdate = styled.span`
position: relative;
float: left;
font-weight: 400;
`;

export interface PriceInfo {
  id: string,
  symbol: string,
  number: 0,
  eur: number,
  eur_24h_change: number,
  decimals: number
}

function App() {
  const currenciesConfig = config.coins.map((cur) => cur.id);
  const {prices = []} = useGetPrices(currenciesConfig, "eur", 60000);
  return (
    <div className="App" >
      <BaseLayout>
      <CoinGrid>            
        {prices && prices.map((price) => (
          <CoinItem change={Number.parseInt(price.eur_24h_change.toFixed(2))}>
          <CoinSymbol>{price.symbol}</CoinSymbol>
          <CoinPrice>{price.eur.toFixed(price.decimals)} €</CoinPrice>                    
          <CoinChange perc={Number.parseInt(price.eur_24h_change.toFixed(2))}>{price.eur_24h_change.toFixed(2)}%</CoinChange>    
          <CoinChangeLabel>24h</CoinChangeLabel>
          </CoinItem> 
        ))}       
      </CoinGrid> 
      <Footer><LastUpdate>Updated at {new Date().toLocaleString()}</LastUpdate><LastUpdate/>Crypto Dash 2022</Footer>
      </BaseLayout>     
    </div>
  );
}


export default App;
