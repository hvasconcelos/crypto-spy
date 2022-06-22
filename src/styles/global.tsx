import styled from 'styled-components';
import Themes from "../themes";
import { Theme } from "../schema";

interface ThemeProps {
  theme: Theme;
}

export const BaseLayout = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({theme})=> Themes[theme].backgroundColor};
  justify-content: space-between;
  height: 100%;
`;

