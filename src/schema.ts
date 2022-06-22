export enum BaseCurrency {
  EURO = "eur",
  USDOLLAR = "usd",
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
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
  coinItemBackground: string;
}
