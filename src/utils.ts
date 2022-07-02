import { BaseCurrency, CoinId, PriceInfo } from "./schema";

export const currencyToSymbol = (currency: BaseCurrency) => {
  switch (currency) {
    case BaseCurrency.EURO:
      return "€";
    case BaseCurrency.USDOLLAR:
      return "$";
  }
};
export const getPrice = (currency: BaseCurrency, info: PriceInfo) => {
  switch (currency) {
    case BaseCurrency.EURO:
      return info.eur ?? 0;
    case BaseCurrency.USDOLLAR:
      return info.usd ?? 0;
    default:
      return 0;
  }
};
export const getChange = (currency: BaseCurrency, info: PriceInfo) => {
  switch (currency) {
    case BaseCurrency.EURO:
      return info.eur_24h_change ?? 0;
    case BaseCurrency.USDOLLAR:
      return info.usd_24h_change ?? 0;
    default:
      return 0;
  }
};


export const findPriceInfo = (prices: PriceInfo[], coinId: CoinId): PriceInfo | undefined  => {
  return prices && prices.find((price) => price.id === coinId);
} 


export const getSymbol = (coinId: CoinId): string => {
  switch(coinId) {
    case CoinId.BITCOIN:
      return "BTC";
    case CoinId.BEPRO:
      return "BEPRO";
    case CoinId.ETHEREUM:
      return "ETH";
    case CoinId.MOONBEAM:
      return "GLMR";
    case CoinId.TELOS:
      return "TELOS";
    case CoinId.POLKADOT:
      return "DOT";
    case CoinId.NEAR:
      return "NEAR";
    case CoinId.DOGECOIN:
      return "DOGE";
  };
};

export const getDecimals = (coinId: CoinId): number => {
    switch(coinId) {
      case CoinId.BITCOIN:
        return 0;
      case CoinId.BEPRO:
        return 6;
      case CoinId.ETHEREUM:
        return 0;
      case CoinId.MOONBEAM:
        return 4;
      case CoinId.TELOS:
        return 4;
      case CoinId.POLKADOT:
        return 2;
      case CoinId.NEAR:
        return 2;
      case CoinId.DOGECOIN:
        return 4;
    };
};