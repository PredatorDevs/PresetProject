/* eslint-disable import/no-cycle */

import React, { Component } from 'react';
import styled from 'styled-components';

import { Tabs, Tab } from '../../../tabs/index';

export class CompanyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      packsDataToReview: {},
      openPacksReview: false,
      braceletsDataToReview: {},
      openBraceletsReview: false,
    }
  }

  onChangeTab = (value) => {
    this.setState({ currentTab: value });
  }

  getTabs = () => {
    const { currentTab } = this.state;
    return (
      <Tabs
        onChange={this.onChangeTab}
        currentValue={currentTab}
      >
        <Tab
          label="General"
        />
      </Tabs>
    )
  }

  render() {
    const { data } = this.props;
    console.log("THIS IS DATA", data);
    return (
      <Wrapper>
        <div className="container1">
          <div className="element-info">
            <p className="title">
              Nombre:
            </p>
            <p className="descrip">
              {data.nombre}
            </p>
          </div>
          <div className="element-info">
            <p className="title">
              Descripción:
            </p>
            <p className="descrip">
              {data.descrip}
            </p>
          </div>
          
        </div>
        <div className="container2">
          {
            data.servicios.map(elm =>
              <div className="service-element" key={elm.id}>
                <p className="service-name">{elm.nombre}</p>
                <p className="service-price">{`$ ${elm.precio}`}</p>
              </div>
            )
          }
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 400px;
  width: 800px;
  .container1 {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 50%;
  }
  .container2 {
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    min-height: 100%;
    width: 50%;
  }
  .element-info {
    width: calc(80% - 20px);
    margin: 10px;
    .title {
      width: 100%;
      color: white;
      margin: 2px;
      font-weight: bolder;
      font-size: 18px;
    }
    .descrip {
      width: 100%;
      color: white;
      margin: 2px;
      font-style: italic;
      font-size: 14px;
    }
  }
  .service-element {
    width: calc(100% - 40px);
    background: linear-gradient(45deg, rgba(255,255,255,1) 89%, rgba(56,73,143,1) 97%);
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 20px 75px 0px rgba(188,194,217,1);
    color: #E0A500;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .container1 {
      width: 50%;
      min-height: 300px;
    }
    .container2 {
      width: 50%;
      min-height: 500px;
    }
    .element-info {
      width: calc(80% - 40px);
      /* background-color: red; */
    }
  }
`;

CompanyContent.propTypes = {
//   data: PropTypes.instanceOf(Object).isRequired,
};
