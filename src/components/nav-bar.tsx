import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "@taikai/rocket-kit";
import { Theme } from "../schema";
import SettingsContext from "../settings";

const NavBar = styled.div<ThemeProps>`
  text-align: right;
  width: 100%;
  background-color: red;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid blue;
`;

interface ThemeProps {
  theme: Theme;
}

interface FooterProps {
  onChangePage: (page: string) => void;
}

const NavBarComponent = (props: FooterProps) => {
  const { theme } = useContext(SettingsContext);
  const { onChangePage } = props;
  return (
    <NavBar theme={theme}>
      <Button
        ariaLabel="Dummie Button"
        className="button"
        color="grey"
        circle={false}
        icon="stream"
        iconPosition="left"
        querySelector=".button"
        value="Dashboard"
        variant="text"
        action={() => {
          onChangePage("PRICES");
        }}
      />
      <Button
        ariaLabel="Dummie Button"
        className="button"
        color="grey"
        circle={false}
        icon="tune"
        iconPosition="left"
        querySelector=".button"
        value="Settings"
        variant="text"
        action={() => {
          onChangePage("SETTINGS");
        }}
      />
    </NavBar>
  );
};

export default NavBarComponent;
