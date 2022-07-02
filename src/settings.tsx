import { createContext } from "react";
import { CoinId, CoinIdList, Settings, Theme, BaseCurrency } from "./schema";

export const defaultCoins: CoinIdList = [
  CoinId.BITCOIN,
  CoinId.BEPRO,
  CoinId.ETHEREUM,
  CoinId.MOONBEAM,
  CoinId.TELOS,
  CoinId.POLKADOT,
  CoinId.NEAR,
  CoinId.DOGECOIN,
];

export const defaultSettings: Settings = {
  baseCurrency: BaseCurrency.USDOLLAR,
  theme: Theme.DARK,
  refreshInterval: 60000,
  coins: defaultCoins,
};

interface SettingsContext extends Settings {
  updateSettingsFunc: (settings: Settings) => void;
}

export default createContext<SettingsContext>({
  ...defaultSettings,
  updateSettingsFunc: () => {},
});
