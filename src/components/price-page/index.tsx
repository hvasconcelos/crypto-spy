import { useEffect } from "react";
import { useGetPrices } from "../../useGetPrices";
import * as Styles from "./styles";

interface PricePageProps {
  perc?: number;
  change?: number;
  currencies: string[];
  baseCurrency: string;
  refreshDelay: number;
  onUpdate: () => void;
  onLoading: (isLoading: boolean) => void;
}

const PricePage = (props: PricePageProps) => {
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
    <Styles.CoinGrid>
      {prices &&
        prices.map((price, index) => (
          <Styles.CoinItem
            key={index}
            change={Number.parseInt(price.eur_24h_change.toFixed(2))}
          >
            <Styles.CoinSymbol>{price.symbol}</Styles.CoinSymbol>
            <Styles.CoinPrice>
              {price.eur.toFixed(price.decimals)} €
            </Styles.CoinPrice>
            <Styles.CoinChange
              perc={Number.parseInt(price.eur_24h_change.toFixed(2))}
            >
              {price.eur_24h_change.toFixed(2)}%
            </Styles.CoinChange>
            <Styles.CoinChangeLabel>24h</Styles.CoinChangeLabel>
          </Styles.CoinItem>
        ))}
    </Styles.CoinGrid>
  );
};

export default PricePage;
