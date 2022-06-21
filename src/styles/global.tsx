import { createGlobalStyle } from "styled-components";
interface GlobalStylesProps {
  whiteColor?: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStylesProps>`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Noto Sans Mono', Verdana, Arial, Helvetica, monospace;
    /* background-color: ${(props) =>
      props.whiteColor ? "green" : "black"}; */
  }
`;
