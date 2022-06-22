import React from "react";
import styled from "styled-components";
import {
    Select,
  GridContainer,
  GridCol,
  GridRow,
  TextField,
} from "@taikai/rocket-kit";


const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  width: 100%;
  div.grid-cont {
    width: 100%;
  }
  div.grid-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 20px 10px 10px 10px;
  }

  div.label-column {
    color: #999;
    font-weight: 700;
    width: 230px;
    text-align: left;
    font-size: 1.0rem;
  }
  div.value-column {
    font-weight: 500;
  } 
  select {
    color: #666;
    font-weight: 600;
    border-color: #666;
  }
  input {
      background: #444;
      border: 1px solid #666;
      color: #888;
      border-radius: 3px;
      font-weight: 600;
  }
`;

const Section = styled.div`
  padding: 20px;
  width: 100%;
  padding-top: 20px;  
`;

const SectionTitle = styled.div`
  width: 100%;
  font-size: 1rem;
  color: #999;
  font-weight: 700;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #555;
  margin-bottom: 10px;
`;

const SectionBody = styled.div``;

const SettingsComponent = () => {
  return (
    <SectionContainer>
      <Section>
        <SectionTitle>Settings</SectionTitle>
        <SectionBody>
          <GridContainer className="grid-cont">
            <GridRow className="grid-row" >
              <GridCol className="label-column">Currency:</GridCol>
              <GridCol className="value-column">
                <Select
                  name="Base Currency"
                  minimal={true}
                  onChange={() => {}}
                  options={[
                    {
                        name: "EURO",
                      value: "EURO",
                    },
                    {
                        name: "USD",
                      value: "USDOLLAR",
                    },
                  ]}
    
                />
              </GridCol>
            </GridRow>
            <GridRow className="grid-row" >
              <GridCol className="label-column">Theme:</GridCol>
              <GridCol className="value-column">
                <Select
                  name="Base Currency"
                  minimal={true}
                  onChange={() => {}}
                  options={[
                    {
                        name: "LIGHT",
                      value: "LIGHT",
                    },
                    {
                        name: "DARK",
                      value: "DARK",
                    },
                  ]}
    
                />
              </GridCol>
            </GridRow>
            <GridRow className="grid-row" >
              <GridCol className="label-column">Refresh Interval (sec):</GridCol>
              <GridCol className="value-column">
              <TextField
                max={30000}
                min={120000}
                minimal={true}
                error={""}
                name="awesome-number"
                placeholder="Refresh Interval"
                type="number"
                value={60000}
                defaultValue={60000}
                />
              </GridCol>
            </GridRow>
          </GridContainer>
        </SectionBody>
      </Section>
    </SectionContainer>
  );
};

export default SettingsComponent;
