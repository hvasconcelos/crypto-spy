export enum BaseCurrency {
  EURO = "eur",
  USDOLLAR = "usd",
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
  TAIKAI = "taikai",
  RETRO = "retro"
}

export interface Settings {
  baseCurrency: BaseCurrency;
  theme: Theme;
  refreshInterval: number;
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
}
