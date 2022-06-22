import React, { useEffect, useContext} from "react";
import styled from "styled-components";
import { useGetPrices } from "../hooks/useGetPrices";
import { Theme } from "../schema";
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
  baseCurrency: string;
  refreshDelay: number;
  onUpdate: ()=> void
  onLoading: (isLoading: boolean)=> void
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
        prices.map((price) => (
          <CoinItem theme={theme} change={Number.parseInt(price.eur_24h_change.toFixed(2))}>
            <CoinSymbol theme={theme}>{price.symbol}</CoinSymbol>
            <CoinPrice theme={theme}>{price.eur.toFixed(price.decimals)} €</CoinPrice>
            <CoinChange perc={Number.parseInt(price.eur_24h_change.toFixed(2))}>
              {price.eur_24h_change.toFixed(2)}%
            </CoinChange>
            <CoinChangeLabel>24h</CoinChangeLabel>
          </CoinItem>
        ))}
    </CoinGrid>
  );
};

export default PricePage;
