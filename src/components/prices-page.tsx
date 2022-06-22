import React, { useEffect, useContext} from "react";
import styled from "styled-components";
import { useGetPrices } from "../hooks/useGetPrices";
import { BaseCurrency, PriceInfo, Theme } from "../schema";
import SettingsContext from "../settings";
import Themes from "../themes";

const CoinGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #222;

  > * {
    flex: 1 1 180px;
  }
`;


interface ThemeProps {
    theme: Theme;
  }

interface CoinItemProps extends ThemeProps {
  change: number;
}

const CoinItem = styled.div<CoinItemProps>`
  width: 180px;
  height: 100px;
  border-right: 1px solid ${({theme})=> Themes[theme].itemBackgroundBorder};
  border-bottom: 1px solid ${({theme})=> Themes[theme].itemBackgroundBorder};
  background-color: ${({theme})=> Themes[theme].itemBackgroundColor};
  padding: 10px;
`;

const CoinSymbol = styled.h2<ThemeProps>`
  font-size: 1rem;
  margin-bottom: 0px;
  font-weight: 700;
  color: ${({theme})=> Themes[theme].symbolColor};
`;

const CoinPrice = styled.h3<ThemeProps>`
  margin-top: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme})=> Themes[theme].priceColor};
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
  color: ${(props: CoinChangeProps) => (props.perc > 0 ? "green" : "red")};
  font-weight: 600;
  font-size: 0.9rem;
`;


interface PricePageProps {
  currencies: string[];
  baseCurrency: BaseCurrency;
  refreshDelay: number;
  onUpdate: ()=> void
  onLoading: (isLoading: boolean)=> void
}

const currencyToSymbol = (currency: BaseCurrency) => {
    switch(currency) {
        case BaseCurrency.EURO: 
            return "€"
        case BaseCurrency.USDOLLAR: 
            return "$"            
    }
}

const getPrice = (currency: BaseCurrency, info: PriceInfo) => {
    switch(currency) {
        case BaseCurrency.EURO: 
            return info.eur ?? 0;
        case BaseCurrency.USDOLLAR: 
            return info.usd ?? 0;     
        default:
            return 0;   
    }
}

const getChange= (currency: BaseCurrency, info: PriceInfo) => {
    switch(currency) {
        case BaseCurrency.EURO: 
            return info.eur_24h_change ?? 0;
        case BaseCurrency.USDOLLAR: 
            return info.usd_24h_change ?? 0;        
        default: 
            return 0;
    }
}


const PricePage = (props: PricePageProps) => {
  const { theme } = useContext(SettingsContext);
  const { currencies, onUpdate, baseCurrency, refreshDelay, onLoading} = props;
  const { prices = [], loading = false } = useGetPrices(
    currencies,
    baseCurrency,
    refreshDelay
  );
  useEffect(()=>{
    prices && !loading && onUpdate();
  },[prices])

  useEffect(()=>{
    onLoading(loading);
  },[loading])


  return (
    <CoinGrid>
      {prices &&
        prices.map((price) => {

            const priceVal = getPrice(baseCurrency, price);
            const priceChange = getChange(baseCurrency, price);
            return (
                <CoinItem theme={theme} change={Number.parseInt(priceVal.toFixed(2))}>
                <CoinSymbol theme={theme}>{price.symbol}</CoinSymbol>
                <CoinPrice theme={theme}>{priceVal.toFixed(price.decimals)} {currencyToSymbol(baseCurrency)}</CoinPrice>
                <CoinChange perc={Number.parseInt(priceChange.toFixed(2))}>
                  {priceChange.toFixed(2)}%
                </CoinChange>
                <CoinChangeLabel>24h</CoinChangeLabel>
              </CoinItem>
            );
        }
       
        )}
    </CoinGrid>
  );
};

export default PricePage;
