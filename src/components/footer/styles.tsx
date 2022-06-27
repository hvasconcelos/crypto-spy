import styled from "styled-components";
import { rem } from "polished";
import { colors, misc, themes } from "../../styles/design-tokens";

const { linkTransitionDuration, pricingGridGap, footerHeight } = misc;
const { light } = colors;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => themes[theme].footerBackground};
  height: ${footerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${pricingGridGap};
  font-size: ${rem("12px")};
  color: ${({ theme }) => themes[theme].footerFontColor};

  div {
    display: flex;
    align-items: center;

    .spinner {
      border-color: ${({ theme }) => themes[theme].footerFontColor};
      border-top-color: ${light};
    }

    svg {
      width: auto;
      fill: ${({ theme }) => themes[theme].footerFontColor};
    }

    &.info {
      button {
        margin-right: ${rem("10px")};
        border: 0;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        cursor: pointer;

        svg {
          margin-right: ${rem("2px")};
          width: auto;
          height: ${rem("16px")};
          transition-duration: ${linkTransitionDuration};
        }

        &:hover {
          color: ${({ theme }) => themes[theme].footerLinkHoverColor};

          svg {
            fill: ${({ theme }) => themes[theme].footerLinkHoverColor};
          }
        }
      }

      > svg {
        margin-right: ${rem("5px")};
        height: ${rem("14px")};
      }
    }

    &.copyright {
      svg {
        margin: ${rem("-2px")} ${rem("2px")} 0 ${rem("5px")};
        height: ${rem("18px")};
      }

      a {
        color: ${({ theme }) => themes[theme].footerFontColor};
        text-decoration: none;
        transition-duration: ${linkTransitionDuration};

        &:hover {
          color: ${({ theme }) => themes[theme].footerLinkHoverColor};
        }
      }
    }
  }
`;
