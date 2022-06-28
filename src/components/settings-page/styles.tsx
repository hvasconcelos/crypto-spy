import styled from "styled-components";
import { themes , colors } from "../../styles/design-tokens";

export const SectionContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => themes.grey.globalBackground};
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  font-size: 1.0rem;
  width: 100%;
  justify-content: space-between;
  color: #888;
  div.grid-cont {
    width: 100%;
  }
  div.grid-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 10px 10px 10px 20px;
  }

  div.label-column {
    color: #DDD;
    width: 230px;
    text-align: left;
    font-size: 0.9rem;   
  }
  div.value-column {
    font-weight: 300;
  }
  select {
    color: #BBB;
    font-weight: 300;
    border-color: ${({ theme }) => themes.grey.globalSepColor};
    &:hover {
        border-color:  #DDD;   
    }
  }
  input {
    background: ${({ theme }) => themes.grey.globalBackground};
    border: 1px solid ${({ theme }) => themes.grey.globalSepColor};
    color: ${({ theme }) => themes.grey.globalSepColor};
    border-radius: 3px;
   
  }
  .pref-button {
    display: inline;
  }
`;

export const Section = styled.div`

  width: 100%;
  padding-top: 20px;
`;

export const SectionTitle = styled.div`
  width: 100%;
  padding: 0px 20px 20px 20px;
  font-size: 1rem;
  text-transform: uppercase;
  color: #777;
  font-weight: 600;
  text-align: left;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => themes.grey.globalSepColor};
  margin-bottom: 10px;

`;

export const SectionBody = styled.div`
  padding: 10px;
`;

export const SectionFooter = styled.div`
  border-top: 1px solid ${({ theme }) => themes.grey.globalSepColor};
  width: 100%;
  padding: 15px 15px;
  text-align: right;

  button.pref-button {
    background-color: #444;
    border: 1px solid ${({ theme }) => themes.grey.globalSepColor};
    border-radius: 4px;
    margin-left: 10px;
    &:hover {
        background-color: #333;
       
    }
  }
`;
