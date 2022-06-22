import config from '../config';
import useFetch from 'use-http';

import useAPIPolling, { APIPollingOptions } from 'use-api-polling'
import {BaseCurrency, PriceInfo} from "../schema";

export const useGetPrices = (currencies: string[], convertTo: BaseCurrency, refreshInterval: number) => {
 
  const { get, loading = false, error } = useFetch(
    `https://api.coingecko.com`,
    {}, []);

  const currenciesReq = currencies.join(",");
  const vscurrenciesReq = currencies.map(() => convertTo).join(","); 
  const url = `/api/v3/simple/price?vs_currencies=${vscurrenciesReq}&ids=${currenciesReq}&include_market_cap=true&include_24hr_change=true`;

  const fetchFunc = async () => {   
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
    delay: refreshInterval,
  }


  const prices = useAPIPolling(options);
  prices.sort((a, b) => a.symbol.localeCompare(b.symbol))
  return { prices, loading, error };
};
