import { useContext, useState } from "react";

import SettingsContext from "../../settings";
import {
  Select,
  GridContainer,
  GridCol,
  GridRow,
  Button,
} from "@taikai/rocket-kit";
import { BaseCurrency, Settings, Theme } from "../../schema";
import { SettingsFile } from "../../utils/settings-helper";
import * as Styles from "./styles";

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
    <Styles.SectionContainer theme={theme}>
      <Styles.Section>
        <Styles.SectionTitle theme={theme}>Settings</Styles.SectionTitle>
        <Styles.SectionBody>
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
                  value={settings.refreshInterval}
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
        </Styles.SectionBody>

      </Styles.Section>
      <Styles.SectionFooter theme={theme}>
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
        </Styles.SectionFooter>
    </Styles.SectionContainer>
  );
};

export default SettingsComponent;
