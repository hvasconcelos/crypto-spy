import { useEffect, useContext } from "react";
import { useGetPrices } from "../../hooks/useGetPrices";
import { BaseCurrency, PriceInfo } from "../../schema";
import SettingsContext from "../../settings";
import * as Styles from "./styles";

interface PricePageProps {
  currencies: string[];
  baseCurrency: BaseCurrency;
  refreshDelay: number;
  onUpdate: () => void;
  onLoading: (isLoading: boolean) => void;
}

const currencyToSymbol = (currency: BaseCurrency) => {
  switch (currency) {
    case BaseCurrency.EURO:
      return "€";
    case BaseCurrency.USDOLLAR:
      return "$";
  }
};

const getPrice = (currency: BaseCurrency, info: PriceInfo) => {
  switch (currency) {
    case BaseCurrency.EURO:
      return info.eur ?? 0;
    case BaseCurrency.USDOLLAR:
      return info.usd ?? 0;
    default:
      return 0;
  }
};

const getChange = (currency: BaseCurrency, info: PriceInfo) => {
  switch (currency) {
    case BaseCurrency.EURO:
      return info.eur_24h_change ?? 0;
    case BaseCurrency.USDOLLAR:
      return info.usd_24h_change ?? 0;
    default:
      return 0;
  }
};

const PricePage = (props: PricePageProps) => {
  const { theme } = useContext(SettingsContext);
  const { currencies, onUpdate, baseCurrency, refreshDelay, onLoading } = props;

  const { prices = [], loading = false } = useGetPrices(
    currencies,
    baseCurrency,
    refreshDelay
  );

  useEffect(() => {
    prices && !loading && onUpdate();
    onLoading(loading);
  }, [loading, prices]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Styles.CoinGrid items={prices.length}>
      {prices &&
        prices.map((price, index) => {
          const priceVal = getPrice(baseCurrency, price);
          const priceChange = getChange(baseCurrency, price);

          return (
            <Styles.CoinItem key={index} theme={theme}>
              <div>
                <h2>{price.symbol}</h2>
                <Styles.CoinValue
                  perc={Number.parseInt(priceChange.toFixed(2))}
                >
                  <span className="price">
                    {priceVal.toFixed(price.decimals)}{" "}
                    {currencyToSymbol(baseCurrency)}
                  </span>
                  <span className="percentage">{priceChange.toFixed(2)}%</span>
                </Styles.CoinValue>
              </div>
            </Styles.CoinItem>
          );
        })}
    </Styles.CoinGrid>
  );
};

export default PricePage;
