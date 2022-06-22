import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/main";
import SettingsContext, { defaultSettings } from "./settings";
import { GlobalStyle } from "./styles/global";
import { Settings } from "./schema";
import { SettingsFile } from "./utils/settings-helper";

function App() {
  const [settingsVal, setSettingsVal] = useState(defaultSettings);

  async function fetchSettings() {
    const settingsFile = new SettingsFile<Settings>("settings.json");
    const loadedSettings = await settingsFile.load(defaultSettings);
    setSettingsVal(loadedSettings);
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <ThemeProvider theme={{ mode: settingsVal.theme ?? "dark" }}>
      <GlobalStyle />
      <SettingsContext.Provider
        value={{
          ...settingsVal,
          updateSettingsFunc: (val) => {
            setSettingsVal(val);
          },
        }}
      >
        <Main />
      </SettingsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
