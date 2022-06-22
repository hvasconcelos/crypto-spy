import React from 'react';
import './App.css';
import Main from "./components/main";
import SettingsContext, {defaultSettings} from "./settings";

function App() {
  return (
    <div className="App" >
      <SettingsContext.Provider value={defaultSettings}>
        <Main/>
      </SettingsContext.Provider>
    </div>
  );
}


export default App;
