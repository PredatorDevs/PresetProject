/* eslint-disable import/no-cycle */

import React, { Component } from 'react';
import styled from 'styled-components';

import { Tabs, Tab } from '../../../tabs/index';
import { Content } from './content';

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
    const {
      currentTab,
    } = this.state;
    const { data } = this.props;
    console.log(data)
    return (
      <Wrapper>
        <div className="container">
          <div className="container__title-wrapper">
            <p className="container__title-wrapper__label">
                Compañía
            </p>
            <p className="container__title-wrapper__title">
              {data}
            </p>
          </div>
          <div className="container__tabs">
            {this.getTabs()}
          </div>
          <div className="container__body">
            <Content
              currentTab={currentTab}
              data={data}
            />
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: 400px;
  width: 800px;
  .container {
    &__title-wrapper {
      padding: 10px 20px;
      p {
        margin: 0;
        padding: 0;
      }
      &__label {
        font-size: 12px;
        color: rgba(0,0,0,0.7);
        padding-bottom: 20px;
      }
    }
    &__body {
      margin-top: 10px;
      padding: 10px 20px;
      max-height: 600px;
      overflow-y: scroll;
    }
  }
`;

CompanyContent.propTypes = {
//   data: PropTypes.instanceOf(Object).isRequired,
};
