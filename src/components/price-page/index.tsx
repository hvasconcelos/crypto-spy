import { useEffect } from "react";
import { useGetPrices } from "../../useGetPrices";
import * as Styles from "./styles";

interface PricePageProps {
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
    <Styles.CoinGrid items={prices.length}>
      {prices &&
        prices.map((price, index) => (
          <Styles.CoinItem key={index}>
            <div>
              <h2>{price.symbol}</h2>
              <Styles.CoinValue
                perc={Number.parseInt(price.eur_24h_change.toFixed(2))}
              >
                <span className="price">
                  {price.eur.toFixed(price.decimals)}€
                </span>
                <span className="percentage">
                  {price.eur_24h_change.toFixed(2)}%
                </span>
              </Styles.CoinValue>
            </div>
          </Styles.CoinItem>
        ))}
    </Styles.CoinGrid>
  );
};

export default PricePage;
