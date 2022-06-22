import { createContext } from "react";
import {Settings, Theme, BaseCurrency} from "./schema";

export const defaultSettings: Settings = {
    baseCurrency: BaseCurrency.EURO,
    theme: Theme.DARK,
    refreshInterval: 60000
};

export default createContext(defaultSettings);