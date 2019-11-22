import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ReactNotification from 'react-notifications-component'
import './App.css';

import CategoryRoute from './helpers/categoryRoute';
import { Navbar } from './Navbar';
import LandPage from './pages/landpage/index';
import CategoryPage from './pages/categorypage/index';
import commerceCatCompData from './data/companies/commerce';
import healthCatCompData from './data/companies/health';
import financeCatCompData from './data/companies/finance';
import pharmaCatCompData from './data/companies/pharma';
import accesoriesCatCompData from './data/companies/accesories';
import transportCatCompData from './data/companies/transport';
import winesCatCompData from './data/companies/wines';
import pagesData from './data/pages/pagesData';

function getDataToPass(title) {
  let data;
  switch (title) {
    case 'Comercio': data = commerceCatCompData; break;
    case 'Salud': data = healthCatCompData; break;
    case 'Finanzas': data = financeCatCompData; break;
    case 'Vinos': data = winesCatCompData; break;
    case 'Farmacéuticos': data = pharmaCatCompData; break;
    case 'Transporte': data = transportCatCompData; break;
    case 'Accesorios': data = accesoriesCatCompData; break;
    default:
      break;
  }
  return data;
}

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
          {
            pagesData.map(
              (page) => (
                <CategoryRoute
                  key={page.id}
                  path={page.route}
                  component={CategoryPage}
                  pageInformation={page}
                  companiesData={getDataToPass(page.title)}
                />
              ),
            )
          }
        </Switch>
      </Wrapper>
      <ReactNotification />
    </div>
  );
}

const Wrapper = styled.div`
  background-image: linear-gradient(to bottom, #E54A4E 0%, #4C181A 100%);
  min-height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default App;
