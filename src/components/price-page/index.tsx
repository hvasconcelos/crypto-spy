import { useEffect, useContext } from "react";
import { useGetPrices } from "../../hooks/useGetPrices";
import { BaseCurrency, CoinId, CoinIdList} from "../../schema";
import SettingsContext from "../../settings";
import * as Styles from "./styles";
import { Spinner, Icon } from "@taikai/rocket-kit";
import { getPrice, getChange, getSymbol, findPriceInfo, getDecimals, currencyToSymbol } from "../../utils";

interface PricePageProps {
  coins: CoinIdList
  baseCurrency: BaseCurrency;
  refreshDelay: number;
  onUpdate: () => void;
  onLoading: (isLoading: boolean) => void;
}

const PricePage = (props: PricePageProps) => {
  const { theme } = useContext(SettingsContext);
  const { coins, onUpdate, baseCurrency, refreshDelay, onLoading } = props;

  const {
    prices = [],
    loading = false,
    error,
  } = useGetPrices(coins, baseCurrency, refreshDelay);

  useEffect(() => {
    prices && !loading && onUpdate();
    onLoading(loading);
  }, [loading, prices]);

  /*if (loading) {
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
  }*/

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
    <Styles.CoinGrid items={coins.length} theme={theme}>
      { coins.map((currency, index) => {       
  
          const priceInfo = findPriceInfo(prices, currency);
          console.log(priceInfo);
          const priceVal = !error && priceInfo ? getPrice(baseCurrency, priceInfo) : 0;
          const priceChange = !error && priceInfo ? getChange(baseCurrency, priceInfo) : 0;

          return (
            <Styles.CoinItem key={index} theme={theme}>
              <div>
                <h2>{getSymbol(currency)}</h2>
                <Styles.CoinValue
                  theme={theme}
                  perc={Number.parseInt(priceChange.toFixed(2))}
                >
                  <span className="price">
                    {priceVal.toFixed(getDecimals(currency))}{" "}
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
