import { createGlobalStyle } from "styled-components";
import { rem } from "polished";
import { colors, typography, themes} from "./design-tokens";

const { regular, black, defaultSize, defaultLineHeight } = typography;
const { normal, background } = colors;

interface GlobalStylesProps {
  whiteColor?: boolean;
  theme: string;
}

export const GlobalStyle = createGlobalStyle<GlobalStylesProps>`
  html {
    box-sizing: border-box;
    font-size: ${defaultSize};
    scroll-behavior: smooth;
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: inherit;

  }
  #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => themes[theme].font};
    font-size: ${rem("16px")};
    font-weight: ${regular};
    color: ${normal};
    line-height: ${defaultLineHeight};
    -webkit-font-smoothing: antialiased;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => themes.grey.globalBackground};
  }

  h2 {
    margin: 0;
    font-size: ${rem("20px")};
    font-weight: ${black};
  }
`;
