import { useEffect, useState } from "react";
import SettingsContext, { defaultSettings } from "./settings";
import Main from "./components/main-layout";
import { GlobalStyle } from "./styles/global";
import { Settings } from "./schema";
import { SettingsFile } from "./utils/settings-helper";

function App() {
  const [settingsVal, setSettingsVal] = useState(defaultSettings);
  const {theme } = settingsVal;
  async function fetchSettings() {
    const settingsFile = new SettingsFile<Settings>("settings.json");
    const loadedSettings = await settingsFile.load(defaultSettings);
    setSettingsVal(loadedSettings);
  }

  useEffect(() => {
    fetchSettings();
  }, []);


  return (
    <>
      <GlobalStyle theme={theme} />
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
    </>
  );
}

export default App;
