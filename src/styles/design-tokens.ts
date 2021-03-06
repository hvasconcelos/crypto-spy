import { ThemeSettings } from "../schema";
import { rem } from "polished";

export const typography = {
  defaultSize: '16px',
  defaultLineHeight: 1.5,
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const colors = {
  normal: '#000000',
  light: '#ffffff',
  lightGrey: '#EEEEEE',
  mediumGrey: '#bdbdbd',
  grey: '#424242',
  green: '#56cad7',
  orange: '#ff6a2c',
  red: '#ef5766',
  background: '#0d0f19',
  backgroundShadow: '#151720',
  taikaiPrimary: '#4329a6',
  taikaiSecondary: '#4250e4',
  taikaiOrange: "#ff6a2c"
};

export const misc = {
  linkTransitionDuration: '0.3s',
  pricingGridGap: rem("10px"),
  footerHeight: rem("28px"),
}

export const themes: { [index: string]: ThemeSettings } = {
  dark: {
    globalBackground: colors.background,
    globalSepColor: colors.background,
    footerBackground: colors.background,
    coinItemBackground: colors.backgroundShadow,
    coinItemSymbol: colors.grey,
    coinItemPriceColor: colors.light,
    footerFontColor: colors.grey,
    footerLinkHoverColor: colors.light,    
    green: '#56cad7',
    red: '#ef5766',
    pricingGridGap: rem("10px"),
    font: "\'Noto Sans Mono\', Verdana, Arial, Helvetica, monospace",
    symbolFontSize: rem("16px"),
    symbolFontWeight: typography.extraBold.toString(),
    priceFontSize: rem("18px"),
    priceFontWeight: typography.bold.toString(),
    priceChangeFontSize: rem("12px"),
    priceChangeFontWeight: typography.regular.toString(),
  },
  light: {
    globalBackground: colors.lightGrey,
    globalSepColor: colors.background,
    footerBackground: colors.lightGrey,
    coinItemBackground: colors.light,
    coinItemSymbol: colors.taikaiPrimary,
    coinItemPriceColor: "#333",
    footerFontColor: "#777",
    footerLinkHoverColor: colors.orange,
    green: '#56cad7',
    red: '#ef5766',
    pricingGridGap: rem("10px"),
    font: "'Noto Sans Mono', Verdana, Arial, Helvetica, monospace",
    symbolFontSize: rem("16px"),
    symbolFontWeight: typography.extraBold.toString(),
    priceFontSize: rem("16px"),
    priceFontWeight: typography.extraBold.toString(),
    priceChangeFontSize: rem("14px"),
    priceChangeFontWeight: typography.medium.toString(),
  },
  taikai: {
    globalBackground: "#05257c",
    globalSepColor: "#CCC",
    footerBackground: colors.taikaiOrange,
    coinItemBackground: colors.taikaiPrimary,
    coinItemSymbol: "#CCC",
    coinItemPriceColor: '#EEE',
    footerFontColor: '#FFF',
    footerLinkHoverColor: '#CCC',
    green: '#56cad7',
    red: '#ef5766',
    pricingGridGap: rem("1px"),
    font: "'Noto Sans Mono', Verdana, Arial, Helvetica, monospace",
    symbolFontSize: rem("16px"),
    symbolFontWeight: typography.extraBold.toString(),
    priceFontSize: rem("20px"),
    priceFontWeight: typography.bold.toString(),
    priceChangeFontSize: rem("14px"),
    priceChangeFontWeight: typography.regular.toString(),
  },
  grey: {
    globalBackground: "rgb(54,57,63)",
    globalSepColor: "#555",
    footerBackground: "rgb(54,57,63)",
    coinItemBackground: "rgb(46,49,54)",
    coinItemSymbol: "#888",
    coinItemPriceColor: '#DDD',
    footerFontColor: "#888",
    footerLinkHoverColor: "#EEE",
    green: 'green',
    red: 'red',
    pricingGridGap: rem("5px"),
    font: "'Noto Sans Mono',Verdana, Arial, Helvetica, monospace",
    symbolFontSize: rem("16px"),
    symbolFontWeight: typography.bold.toString(),
    priceFontSize: rem("16px"),
    priceFontWeight: typography.black.toString(),
    priceChangeFontSize: rem("14px"),
    priceChangeFontWeight: typography.regular.toString(),
  }
};