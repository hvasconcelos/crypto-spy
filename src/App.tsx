import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import config from './config';
import { useGetPrices } from './useGetPrices';
import {Button, Spinner, Icon} from "@taikai/rocket-kit";
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
  background-color: #444;
  text-align: right;
  padding: 1px 10px;
  color: #999;
  font-size: 0.9rem;
  font-weight: 500;
`;

const LastUpdate = styled.span`
position: relative;
float: left;
font-weight: 400;
margin-left: 5px;
`;

const Header = styled.div`
  text-align: right;
  width: 100%;
  background-color: #444;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #444;
`;

export const IconStyle = styled.div`
  svg {
    width: 1.0rem;
    height: 1.0rem;
    margin-right: 5px;
   
  }
  display: inline;
  position: relative;
  top: 3px;
`;
const PricePower = styled.span`
font-weight: 600;
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
  const [page, setPage] = useState("PRICES");
  const {prices = [], loading= false} = useGetPrices(currenciesConfig, "eur", 60000);
  return (
    <div className="App" >
      <BaseLayout>
      <Header>
      <Button
          ariaLabel="Dummie Button"
          className="button"
          color="grey"
          circle={false}
          icon="stream"
          iconPosition="left"
          querySelector=".button"
          value="Dashboard"
          variant="text"
          action={()=> {
            setPage("PRICES");
          }}
        />
        <Button
          ariaLabel="Dummie Button"
          className="button"
          color="grey"
          circle={false}
          icon="tune"
          iconPosition="left"
          querySelector=".button"
          value="Settings"
          variant="text"
          action={()=> {
            setPage("SETTINGS");
          }}
        />
       
      </Header>
      {page === "PRICES" && (
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
      )}

      <Footer>
        {loading && <Spinner fill="#939393" size="5px"/>}
        {!loading && <LastUpdate><IconStyle><Icon fill="#888" icon="info" /></IconStyle>{new Date().toLocaleString()}</LastUpdate>}
        <PricePower>Powered by TAIKAI <IconStyle><Icon fill="#888" icon="taikai-mark" /></IconStyle> </PricePower>
      </Footer>
      </BaseLayout>     
    </div>
  );
}


export default App;
