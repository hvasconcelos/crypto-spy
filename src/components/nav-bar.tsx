import React from "react";
import styled from "styled-components";
import { Button } from "@taikai/rocket-kit";

const NavBar = styled.div`
  text-align: right;
  width: 100%;
  background-color: #444;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #444;
`;

interface FooterProps {
  onChangePage: (page: string) => void;
}

const NavBarComponent = (props: FooterProps) => {
  const { onChangePage } = props;
  return (
    <NavBar>
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
