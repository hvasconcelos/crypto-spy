import { useEffect, useContext } from "react";
import { useGetPrices } from "../../hooks/useGetPrices";
import { BaseCurrency, PriceInfo } from "../../schema";
import SettingsContext from "../../settings";
import * as Styles from "./styles";
import { Spinner, Icon } from "@taikai/rocket-kit";

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

  const {
    prices = [],
    loading = false,
    error,
  } = useGetPrices(currencies, baseCurrency, refreshDelay);

  useEffect(() => {
    prices && !loading && onUpdate();
    onLoading(loading);
  }, [loading, prices]);

  if (loading) {
    return (
      <Styles.CoinGrid items={0} theme={theme}>
        <Styles.LoadingContainer>
          <div className="loading-message">
            Getting Prices&nbsp;&nbsp;
            <Spinner size={"1rem"} />
          </div>
        </Styles.LoadingContainer>
      </Styles.CoinGrid>
    );
  }

  if (error) {
    return (
      <Styles.CoinGrid items={0} theme={theme}>
        <Styles.LoadingContainer>          
          <p className="error-message">
            <Icon fill={"#EEE"} icon="warning" />
            &nbsp;&nbsp;Failed to Load Price Data
          </p>
          <p className="description-message">
            Please verify your Internet Connection.
          </p>
        </Styles.LoadingContainer>
      </Styles.CoinGrid>
    );
  }

  return (
    <Styles.CoinGrid items={prices.length} theme={theme}>
      {prices &&
        prices.map((price, index) => {
          const priceVal = !error ? getPrice(baseCurrency, price) : 0;
          const priceChange = !error ? getChange(baseCurrency, price) : 0;

          return (
            <Styles.CoinItem key={index} theme={theme}>
              <div>
                <h2>{price.symbol}</h2>
                <Styles.CoinValue
                  theme={theme}
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
