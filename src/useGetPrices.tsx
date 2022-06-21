import { useEffect, useState } from 'react';
import config from './config';
import useFetch from 'use-http';
import { PriceInfo } from './App';


export const useGetPrices = (currencies: string[], convertTo: string, refreshInterval: number) => {
  const [prices, setPrices] = useState<PriceInfo[]>([]);
  const { get, loading = false, error } = useFetch(
    'https://api.coingecko.com',
    {}, []);

  useEffect(() => {
    const currenciesReq = currencies.join(",");
    const vscurrenciesReq = currencies.map(() => convertTo).join(",");
    const url = `/api/v3/simple/price?vs_currencies=${vscurrenciesReq}&ids=${currenciesReq}&include_market_cap=true&include_24hr_change=true`;

    const retryFunc = () => {
      get(url)
        .then(getRet => {
          if(getRet) {         
            const res = Object.keys(getRet).map((key) => {
              const [coin] = config.coins.filter((coinItem) => coinItem.id === key);
              return {
                ...getRet[key],
                ...coin,
              };
            });
            res.sort((a, b) => a.symbol.localeCompare(b.symbol))
            //setTimeout(retryFunc, refreshInterval);  
            setPrices(res);
          }           
                                        
        });    
    };
    retryFunc();
    const timer = setTimeout(retryFunc, refreshInterval);    
    console.log("Rendering");
    return () => clearTimeout(timer);
  }, []);

  return { prices, loading, error };
};
