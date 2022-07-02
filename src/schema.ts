export enum BaseCurrency {
  EURO = "eur",
  USDOLLAR = "usd",
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
  TAIKAI = "taikai",
  GREY = "grey"
}

export enum CoinId {
  BITCOIN = "bitcoin",
  BEPRO = "bepro-network",
  ETHEREUM = "ethereum",
  MOONBEAM = "moonbeam",
  TELOS = "telos",
  POLKADOT = "polkadot",
  NEAR = "near",
  DOGECOIN = "dogecoin"
}


export type CoinIdList = [
  CoinId, CoinId, CoinId,CoinId,
  CoinId, CoinId, CoinId,CoinId,
];

export interface Settings {
  baseCurrency: BaseCurrency;
  theme: Theme;
  refreshInterval: number;
  coins: CoinIdList;
}

export interface PriceInfo {
  id: string;
  symbol: string;
  number: 0;
  eur: number;
  eur_24h_change: number;
  usd: number;
  usd_24h_change: number;
  decimals: number;
}

export interface ThemeSettings {
  globalBackground: string;
  globalSepColor: string;
  coinItemBackground: string;
  coinItemSymbol: string;
  coinItemPriceColor: string;
  footerFontColor: string;
  footerLinkHoverColor: string;
  red: string;
  green: string;
  pricingGridGap: string;
  font: string;
  symbolFontSize: string;
  symbolFontWeight:string;
  priceFontSize: string;
  priceFontWeight: string;
  priceChangeFontSize: string;
  priceChangeFontWeight: string;
  footerBackground: string;
  
}
