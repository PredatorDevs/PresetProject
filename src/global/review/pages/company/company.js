/* eslint-disable import/no-cycle */

import React, { Component } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { Tabs, Tab } from '../../../tabs/index';

export class CompanyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
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
          <div className="element-info">
            <p className="title">
              Ubicación:
            </p>
            <p className="descrip">
              {'Sin definir'}
            </p>
          </div>
          <div className="element-info">
            <p className="title">
              Teléfono:
            </p>
            <p className="descrip">
              {'Sin definir'}
            </p>
          </div>
          <div className="element-info">
            <p className="title">
              Correo electrónico:
            </p>
            <p className="descrip">
              {'Sin definir'}
            </p>
          </div>
        </div>
        <div className="container2">
          {
            data.servicios.map(elm => (
              <div className="service-element" key={elm.id}>
                <p className="service-name">{elm.nombre}</p>
                <p className="service-price">{`$ ${elm.precio}`}</p>
              </div>
            ))
          }
        </div>
      </Wrapper>
    );
  }
}

CompanyContent.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
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
    /* align-items: center; */
    min-height: 100%;
    width: 50%;
    .element-info {
      margin: 10px 20px;
      .title {
        color: white;
        margin: 2px;
        font-weight: bolder;
        font-size: 18px;
      }
      .descrip {
        color: white;
        margin: 2px;
        font-style: italic;
        font-size: 14px;
      }
    }
  }
  .container2 {
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    min-height: 100%;
    width: 50%;
  }
  .service-element {
    display: flex;
    flex-direction: row;
    width: calc(100% - 40px);
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 20px 75px 0px rgba(188,194,217,1);
    color: #000;
    .service-name {
      width: 70%;
      color: #38498F;
      font-weight: bolder;
    }
    .service-price {
      width: 30%;
      color: #319834;
      font-weight: bolder;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 950px;
    .container1 {
      .element-info {
        .title {
        }
        .descrip {
        }
      }
    }
    .container2 {
    }
    .service-element {
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 740px;
    .container1 {
      .element-info {
        .title {
        }
        .descrip {
        }
      }
    }
    .container2 {
    }
    .service-element {
    }    
  }

  @media screen and (max-width: 414px) {
    max-width: 400px;
    flex-direction: column;
    .container1 {
      width: 100%;
      min-height: 300px;
      .element-info {
        .title {
        }
        .descrip {
        }
      }
    }
    .container2 {
      width: 100%;
    }
    .service-element {
    }    
  }

  @media screen and (max-width: 411px) {
    .container1 {
      .element-info {
        .title {
        }
        .descrip {
        }
      }
    }
    .container2 {
    }
    .service-element {
    }    
  }

  @media screen and (max-width: 375px) {
    max-width: 360px;
    .container1 {
      .element-info {
        .title {
        }
        .descrip {
        }
      }
    }
    .container2 {
    }
    .service-element {
    }    
  }

  @media screen and (max-width: 360px) {
    max-width: 340px;
    .container1 {
      .element-info {
        .title {
        }
        .descrip {
        }
      }
    }
    .container2 {
    }
    .service-element {
    }    
  }

  @media screen and (max-width: 320px) {
    max-width: 310px;
    .container1 {
      min-height: 200px;
      .element-info {
        margin: 5px 10px;
        .title {
          font-size: 13px;
        }
        .descrip {
          font-size: 11px;
        }
      }
    }
    .container2 {
    }
    .service-element {
    }    
  }
`;
