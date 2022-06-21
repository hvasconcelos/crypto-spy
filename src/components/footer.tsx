import React from "react";
import { Spinner, Icon } from "@taikai/rocket-kit";
import styled from "styled-components";

const PricePower = styled.span`
  font-weight: 600;
`;

const LastUpdate = styled.span`
  position: relative;
  float: left;
  font-weight: 400;
  margin-left: 5px;
`;

export const IconStyle = styled.div`
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 5px;
  }
  display: inline;
  position: relative;
  top: 3px;
`;

interface FooterProps {
  loading: boolean;
  lastUpdate: Date;
}

const FooterContainer = styled.div`
  height: 25px;
  border-top: 1px solid #555;
  background-color: #444;
  text-align: right;
  padding: 1px 10px;
  color: #999;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Footer = (props: FooterProps) => {
  const { loading, lastUpdate } = props;
  return (
    <FooterContainer>
      {!loading && (
        <LastUpdate>
          <IconStyle>
            <Icon fill="#888" icon="info" />
          </IconStyle>
          {lastUpdate.toLocaleString()}
        </LastUpdate>
      )}
      {loading && <Spinner fill="#939393" size="5px" />}
      <PricePower>
        Powered by TAIKAI Labs&nbsp;
        <IconStyle>
          <Icon fill="#888" icon="taikai-mark" />
        </IconStyle>{" "}
      </PricePower>
    </FooterContainer>
  );
};

export default Footer;
