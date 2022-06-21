import React, {useState} from 'react';
import './App.css';
import config from './config';
import PricePage from "./components/prices-page";
import SettingsPage from "./components/settings-page";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";
import {BaseLayout} from "./styles/global";


function App() {
 
  const [page, setPage] = useState("PRICES");
  const [updatedAt, setUpdatedAt] = useState<Date>(new Date());
  const [loading, setLoading] = useState(false);
  const currenciesConfig = config.coins.map((cur) => cur.id);
  return (
    <div className="App" >
      <BaseLayout>
      <NavBar onChangePage={(newPage)=> setPage(newPage)}/>
      {page === "PRICES" && (
        <PricePage 
          currencies={currenciesConfig}
          baseCurrency="eur"
          refreshDelay={60000}
          onUpdate={()=> setUpdatedAt(new Date())}
          onLoading={(isLoading)=>setLoading(isLoading)}
        />
      )}
      {page === "SETTINGS" && (
        <SettingsPage          
        />
      )}
      <Footer loading={loading} lastUpdate={updatedAt} />             
      </BaseLayout>     
    </div>
  );
}


export default App;
