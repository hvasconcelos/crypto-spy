import React, { useContext, useState } from "react";
import styled from "styled-components";
import SettingsContext from "../settings";
import {
  Select,
  GridContainer,
  GridCol,
  GridRow,
  TextField,
  Button,
} from "@taikai/rocket-kit";
import { BaseCurrency, Settings, Theme } from "../schema";
import { SettingsFile } from "../utils/settings-helper";


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
    font-size: 1rem;
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

const SectionFooter = styled.div`
  margin-top: 20px;
  border-top: 1px solid #666;
  padding-top: 20px;
  button.pref-button {
      background-color: #444;
      border: 1px solid #666;
      border-radius: 4px;
      color: #333;
  }
`;

const SettingsComponent = () => {
  const curSettings = useContext(SettingsContext);
  const [settings, setSettings] = useState<Settings>(curSettings);
  const settingsFile = new SettingsFile<Settings>("settings.json");
  return (
    <SectionContainer>
      <Section>
        <SectionTitle>Settings</SectionTitle>
        <SectionBody>
          <GridContainer className="grid-cont">
            <GridRow className="grid-row">
              <GridCol className="label-column">Currency:</GridCol>
              <GridCol className="value-column">
                <Select
                  name="Base Currency"
                  value={settings.baseCurrency}
                  minimal={true}
                  onChange={(value) => { 
                      setSettings({
                          ...settings,
                          baseCurrency: value.target.value as BaseCurrency
                      })
                  }}
                  options={[
                    {
                      name: "EURO",
                      value: "eur",
                    },
                    {
                      name: "USD",
                      value: "usd",
                    },
                  ]}
                  
                />
              </GridCol>
            </GridRow>
            <GridRow className="grid-row">
              <GridCol className="label-column">Theme:</GridCol>
              <GridCol className="value-column">
                <Select
                  name="Theme"
                  minimal={true}
                  value={settings.theme}
                  onChange={(value) => { 
                    setSettings({
                        ...settings,
                        theme: (value.target.value as Theme)
                    })
                }}
                  options={[
                    {
                      name: "LIGHT",
                      value: "light",
                    },
                    {
                      name: "DARK",
                      value: "dark",
                    },
                  ]}
                />
              </GridCol>
            </GridRow>
            <GridRow className="grid-row">
              <GridCol className="label-column">
                Refresh Interval (sec):
              </GridCol>
              <GridCol className="value-column">
              <Select
                  name="Theme"
                  minimal={true}
                  value={settings.theme}
                  onChange={(value) => { 
                    setSettings({
                        ...settings,
                        refreshInterval: parseInt(value.target.value)
                    })
                }}
                  options={[
                    {
                      name: "30s",
                      value: 30000,
                    },
                    {
                        name: "60s",
                        value: 60000,
                      },
                      {
                        name: "90s",
                        value: 90000,
                      },
                      {
                        name: "120s",
                        value: 120000,
                      },
                  ]}
                />
              </GridCol>
            </GridRow>
          </GridContainer>
        </SectionBody>
        <SectionFooter>
        <Button
            ariaLabel="Dummie Button"
            className="pref-button"
            color="green"

            action={()=> {                               
                settingsFile.save(settings).then(()=> {
                    console.log("saved settings");
                });       
                curSettings.updateSettingsFunc(settings);         
            }}
            iconPosition="left"
            querySelector=".button"
            value="Save"
            variant="solid"
            />
        </SectionFooter>
      </Section>
    </SectionContainer>
  );
};

export default SettingsComponent;
