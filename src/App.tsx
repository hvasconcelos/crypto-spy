import React, {useState} from 'react';
import './App.css';

import config from './config';

import PricePage from "./components/prices-page";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";

import styled from 'styled-components';

const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222;
  justify-content: space-between;
  height: 100%;
`;


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
      <Footer loading={loading} lastUpdate={updatedAt} />             
      </BaseLayout>     
    </div>
  );
}


export default App;
