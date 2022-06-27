import { useContext, useState } from "react";
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
import { themes , colors } from "../styles/design-tokens";




const SectionContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => themes.grey.globalBackground};
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  font-size: 1.0rem;
  width: 100%;
  color: #888;
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
    color: #BBB;
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

const Section = styled.div`
  padding: 20px;
  width: 100%;
  padding-top: 20px;
`;

const SectionTitle = styled.div`
  width: 100%;
  font-size: 1rem;
  text-transform: uppercase;
  color: #FFF;
  font-weight: 600;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => themes.grey.globalSepColor};
  margin-bottom: 10px;
  padding-left: 10px;
`;

const SectionBody = styled.div``;

const SectionFooter = styled.div`
  margin-top: 20px;
  border-top: 1px solid ${({ theme }) => themes.grey.globalSepColor};
  padding-top: 20px;
  button.pref-button {
    background-color: #555;
    border: 1px solid #666;
    border-radius: 4px;
    margin-right: 10px;
  }
`;

interface SettingsComponentsProps {
  onChangePage: (page: string) => void;
}

const SettingsComponent = (props: SettingsComponentsProps) => {
  const { onChangePage} = props;
  const curSettings = useContext(SettingsContext);
  const {theme } = curSettings;
  const [settings, setSettings] = useState<Settings>(curSettings);
  const settingsFile = new SettingsFile<Settings>("settings.json");
  return (
    <SectionContainer theme={theme}>
      <Section>
        <SectionTitle theme={theme}>Settings</SectionTitle>
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
                      baseCurrency: value.target.value as BaseCurrency,
                    });
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
                      theme: value.target.value as Theme,
                    });
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
                    {
                      name: "TAIKAI",
                      value: "taikai",
                    },
                    {
                      name: "GREY",
                      value: "grey",
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
                      refreshInterval: parseInt(value.target.value),
                    });
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
        <SectionFooter theme={theme}>
          <Button
            ariaLabel="Dummie Button"
            className="pref-button"
            color="green"
            action={() => {
              settingsFile.save(settings).then(() => {
              });
              curSettings.updateSettingsFunc(settings);
              onChangePage("PRICES");
            }}
            iconPosition="left"
            querySelector=".button"
            value="Save"
            variant="solid"
          />
          <Button
            ariaLabel="Dummie Button"
            className="pref-button"
            color="green"
            action={() => {
              onChangePage("PRICES");
            }}
            iconPosition="left"
            querySelector=".button"
            value="Cancel"
            variant="solid"
          />
        </SectionFooter>
      </Section>
    </SectionContainer>
  );
};

export default SettingsComponent;
