import { createContext } from "react";
import {Settings, Theme, BaseCurrency} from "./schema";

export const defaultSettings: Settings = {
    baseCurrency: BaseCurrency.USDOLLAR,
    theme: Theme.DARK,
    refreshInterval: 60000
    
};

interface SettingsContext extends Settings {
    updateSettingsFunc: (settings: Settings)=> void
};

export default createContext<SettingsContext>({
    ...defaultSettings,
    updateSettingsFunc: ()=> {}
});