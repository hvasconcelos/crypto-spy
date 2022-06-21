import styled, { css } from "styled-components";
import { rem } from "polished";
import { colors, typography } from "../../styles/design-tokens";

const { bold } = typography;
const { light, grey, green, red, background, backgroundShadow } = colors;

export const CoinGrid = styled.div<{ items: number }>`
  /* border: 2px solid red; */
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: ${rem("10px")};
  padding: ${rem("10px")};

  > div {
    /* border: 1px solid red; */
  }

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
  /* border: 1px solid blue; */

  > div {
    width: 100%;
    height: 100%;
    background-color: ${backgroundShadow};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    /* flex: 1; */
    /* height: 100%; */

    h2 {
      margin-bottom: ${rem("10px")};
      color: ${grey};
      line-height: 1;
    }
  }
`;

export const CoinValue = styled.div<{ perc: number }>`
  span {
    display: block;
    line-height: 1;

    &.price {
      margin-bottom: ${rem("5px")};
      font-weight: ${bold};
      color: ${light};
    }

    &.percentage {
      font-size: ${rem("12px")};
      color: ${(props) => (props.perc && props.perc > 0 ? green : red)};
    }
  }
`;
