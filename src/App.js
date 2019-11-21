import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ReactNotification from 'react-notifications-component'
import './App.css';

import { Navbar } from './Navbar'; // 192.168.0.12:3000

import LandPage from './components/landpage/index';
import CommercePage from './components/commercepage/index';
import HealthPage from './components/healthpage/index';
import FinancePage from './components/financepage/index';
import WinePage from './components/winepage/index';
import PharmaPage from './components/pharmapage/index';
import TransportPage from './components/transportpage/index';
import AccessoryPage from './components/accessorypage/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Switch>
          <Route
            exact
            path="/"
            component={LandPage}
          />
          <Route
            path="/commerce"
            component={CommercePage}
          />
          <Route
            path="/health"
            component={HealthPage}
          />
          <Route
            path="/finance"
            component={FinancePage}
          />
          <Route
            path="/wine"
            component={WinePage}
          />
          <Route
            path="/pharma"
            component={PharmaPage}
          />
          <Route
            path="/transport"
            component={TransportPage}
          />
          <Route
            path="/accessory"
            component={AccessoryPage}
          />
        </Switch>
      </Wrapper>
      <ReactNotification />
    </div>
  );
}

const Wrapper = styled.div`
background-image: linear-gradient(to bottom, #E54A4E 0%, #4C181A 100%);
  /* background-color: #E54A4E; */
  min-height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default App;
