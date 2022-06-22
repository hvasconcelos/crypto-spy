import { ThemeSettings } from "./schema";

const ThemeList: { [index: string]: ThemeSettings } = {
    dark: {
        backgroundColor: "#333",
        itemBackgroundColor: "#333",
        itemBackgroundBorder: "#222",
        priceColor: "#DDD",
        symbolColor: "#777",
        footerBackgroundColor: "#444",
        footerColor: "#888",
        footerBorderColor: "#333",
        navBarBackgroundColor: "#444",
        navBarBorderColor: "#444",
    },
    light: {
        navBarBackgroundColor: "#DDD",
        navBarBorderColor: "#EEE",
        backgroundColor: "#FFF",
        itemBackgroundColor: "#FFF",
        itemBackgroundBorder: "#EEE",
        priceColor: "#AAA",
        symbolColor: "#222",
        footerBorderColor: "#CCC",
        footerBackgroundColor: "#DDD",
        footerColor: "#777",
    }
};

export default ThemeList;