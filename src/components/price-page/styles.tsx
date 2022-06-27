import styled, { css } from "styled-components";
import { rem } from "polished";
import { themes, typography, colors, misc } from "../../styles/design-tokens";

const { bold } = typography;
const { green, red } = colors;
const { pricingGridGap, footerHeight } = misc;

export const CoinGrid = styled.div<{ items: number }>`
  background-color: ${({ theme }) => themes[theme].globalBackground};
  min-height: calc(100vh - ${footerHeight});
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: ${({ theme }) => themes[theme].pricingGridGap};
  padding: ${({ theme }) => themes[theme].pricingGridGap} ${({ theme }) => themes[theme].pricingGridGap} 0 ${({ theme }) => themes[theme].pricingGridGap};

  ${(props) =>
    props.items === 2 &&
    css`
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
    `}

  ${(props) =>
    props.items === 3 &&
    css`
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
    `}

  ${(props) =>
    props.items === 4 &&
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    `}

  ${(props) =>
    props.items === 5 &&
    css`
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 1fr;
    `}

  ${(props) =>
    props.items === 6 &&
    css`
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
    `}

  ${(props) =>
    props.items === 7 &&
    css`
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    `}

  ${(props) =>
    props.items === 8 &&
    css`
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    `}
`;

export const CoinItem = styled.div`
  > div {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => themes[theme].coinItemBackground};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin-bottom: ${rem("10px")};
      color: ${({ theme }) => themes[theme].coinItemSymbol};
      line-height: 1;
      font-size: ${({ theme }) => themes[theme].symbolFontSize};
      font-weight: ${({ theme }) => themes[theme].symbolFontWeight};
    }
  }
`;

export const CoinValue = styled.div<{ perc: number }>`
    
  span {
    display: block;
    line-height: 1;
    &.price {
      margin-bottom: ${rem("5px")};
      font-size: ${({ theme }) => themes[theme].priceFontSize};
      font-weight: ${({ theme }) => themes[theme].priceFontWeight};
      color: ${({ theme }) => themes[theme].coinItemPriceColor};
    }

    &.percentage {
      margin-top: 10px;      
      font-size: ${({ theme }) => themes[theme].priceChangeFontSize};
      font-weight: ${({ theme }) => themes[theme].priceChangeFontWeight};
      color: ${(props) => (props.perc && props.perc > 0 ?  themes[props.theme].green : themes[props.theme].red)};
    }
  }
`;
