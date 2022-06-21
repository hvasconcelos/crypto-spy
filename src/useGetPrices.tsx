import config from './config';
import useFetch from 'use-http';

import useAPIPolling, { APIPollingOptions } from 'use-api-polling'


export interface PriceInfo {
  id: string;
  symbol: string;
  number: 0;
  eur: number;
  eur_24h_change: number;
  decimals: number;
}


export const useGetPrices = (currencies: string[], convertTo: string, refreshInterval: number) => {

  const { get, loading = false, error } = useFetch(
    `https://api.coingecko.com`,
    {}, []);

  const fetchFunc = async () => {
    const currenciesReq = currencies.join(",");
    const vscurrenciesReq = currencies.map(() => convertTo).join(","); 
    const url = `/api/v3/simple/price?vs_currencies=${vscurrenciesReq}&ids=${currenciesReq}&include_market_cap=true&include_24hr_change=true`;
    const data = await get(url);
    return Object.keys(data).map((key) => {
      const [coin] = config.coins.filter((coinItem) => coinItem.id === key);
      return {
        ...data[key],
        ...coin,
      };
    });
  }
  const options: APIPollingOptions<PriceInfo[]> = {
    fetchFunc,
    initialState: [],
    delay: refreshInterval
  }
  const prices = useAPIPolling(options);
  prices.sort((a, b) => a.symbol.localeCompare(b.symbol))
  return { prices, loading, error };

};
