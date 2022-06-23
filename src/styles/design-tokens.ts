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
  backgroundShadow: '#151720'
};

export const misc = {
  linkTransitionDuration: '0.3s',
  pricingGridGap: rem("10px"),
  footerHeight: rem("28px"),
}

export const themes: { [index: string]: ThemeSettings } = {
  dark: {
    globalBackground: colors.background,
    coinItemBackground: colors.backgroundShadow,
    coinItemSymbol: colors.grey,
    coinItemPriceColor: colors.light,
    footerFontColor: colors.grey,
    footerLinkHoverColor: colors.light,
  },
  light: {
    globalBackground: colors.lightGrey,
    coinItemBackground: colors.light,
    coinItemSymbol: colors.mediumGrey,
    coinItemPriceColor: colors.normal,
    footerFontColor: colors.mediumGrey,
    footerLinkHoverColor: colors.orange,
  }
};