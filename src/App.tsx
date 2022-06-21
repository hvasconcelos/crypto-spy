import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import config from './config';
import {Button, Spinner, Icon} from "@taikai/rocket-kit";
import PricePage from "./components/prices-page";


const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222;
  justify-content: space-between;
  height: 100%;
`;
const Footer = styled.div`
  height: 25px;
  border-top: 1px solid #555;
  background-color: #444;
  text-align: right;
  padding: 1px 10px;
  color: #999;
  font-size: 0.9rem;
  font-weight: 500;
`;

const LastUpdate = styled.span`
position: relative;
float: left;
font-weight: 400;
margin-left: 5px;
`;

const NavBar = styled.div`
  text-align: right;
  width: 100%;
  background-color: #444;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #444;
`;

export const IconStyle = styled.div`
  svg {
    width: 1.0rem;
    height: 1.0rem;
    margin-right: 5px;
   
  }
  display: inline;
  position: relative;
  top: 3px;
`;
const PricePower = styled.span`
    font-weight: 600;
`;


function App() {
 
  const [page, setPage] = useState("PRICES");
  const [updatedAt, setUpdatedAt] = useState<Date>(new Date());
  const [loading, setLoading] = useState(false);
  const currenciesConfig = config.coins.map((cur) => cur.id);
  return (
    <div className="App" >
      <BaseLayout>
      <NavBar>
      <Button
          ariaLabel="Dummie Button"
          className="button"
          color="grey"
          circle={false}
          icon="stream"
          iconPosition="left"
          querySelector=".button"
          value="Dashboard"
          variant="text"
          action={()=> {
            setPage("PRICES");
          }}
        />
        <Button
          ariaLabel="Dummie Button"
          className="button"
          color="grey"
          circle={false}
          icon="tune"
          iconPosition="left"
          querySelector=".button"
          value="Settings"
          variant="text"
          action={()=> {
            setPage("SETTINGS");
          }}
        />
       
      </NavBar>
      {page === "PRICES" && (
        <PricePage 
          currencies={currenciesConfig}
          baseCurrency="eur"
          refreshDelay={60000}
          onUpdate={()=> setUpdatedAt(new Date())}
          onLoading={(isLoading)=>setLoading(isLoading)}
        />
      )}
      <Footer>
        {!loading &&<LastUpdate>
          <IconStyle>
            <Icon fill="#888" icon="info" />
            </IconStyle>
            {updatedAt.toLocaleString()}
        </LastUpdate>
        }
        { loading && <Spinner fill="#939393" size="5px"/>}
        <PricePower>Powered by TAIKAI Labs&nbsp;<IconStyle><Icon fill="#888" icon="taikai-mark" /></IconStyle> </PricePower>
      </Footer>
      </BaseLayout>     
    </div>
  );
}


export default App;
