import styled from "styled-components";

interface PricePageProps {
  perc?: number;
  change?: number;
}

export const CoinGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;

  > * {
    flex: 1 1 180px;
  }
`;

export const CoinItem = styled.div<PricePageProps>`
  width: 180px;
  height: 100px;
  border-right: 1px solid red;
  border-bottom: 1px solid blue;
  background-color: white;
  padding: 10px;
`;

export const CoinSymbol = styled.h2`
  font-size: 1rem;
  margin-bottom: 0px;
  font-weight: 700;
  color: #999;
`;

export const CoinPrice = styled.h3`
  margin-top: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  color: blue;
  margin-bottom: 5px;
`;

export const CoinChangeLabel = styled.span`
  font-weight: 600;
  color: yellow;
  margin-left: 5px;
  font-size: 0.9rem;
`;

export const CoinChange = styled.span<PricePageProps>`
  color: ${(props) => (props.perc && props.perc > 0 ? "green" : "red")};
  font-weight: 600;
  font-size: 0.9rem;
`;
