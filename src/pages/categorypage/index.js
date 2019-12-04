import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { Review } from '../../global/review/index';
import PublicityCard from '../../global/publicitycard/index';

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliceIndx: 0,
      openViewer: false,
      dataToShow: {},
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  toggleViewer = () => {
    const { openViewer } = this.state;
    this.setState({
      openViewer: !openViewer,
    })
  }

  setData = (data) => {
    this.setState({
      dataToShow: data,
    })
    this.toggleViewer();
  }

  render() {
    const { sliceIndx, openViewer, dataToShow } = this.state;
    const { companiesData, pageInformation } = this.props;
    if (companiesData === undefined) {
      return <div />
    }
    return (
      <Wrapper>
        <div className="general-information">
          <p className="gen-title">{pageInformation.title}</p>
          <p className="gen-descrip">{pageInformation.descrip}</p>
        </div>
        <div className="cards-section">
          {
            companiesData.slice((sliceIndx), (sliceIndx + (4 * 1))).map((company) => (
              <div className="card" key={company.id}>
                <PublicityCard
                  information={company}
                  setDataToShow={this.setData}
                />
              </div>
            ))
          }
        </div>
        <div className="cards-section">
          {
            companiesData.slice((sliceIndx + 4), (sliceIndx + (4 * 2))).map((company) => (
              <div className="card" key={company.id}>
                <PublicityCard
                  information={company}
                  setDataToShow={this.setData}
                />
              </div>
            ))
          }
        </div>
        <div className="cards-section">
          {
            companiesData.slice((sliceIndx + 8), (sliceIndx + (4 * 3))).map((company) => (
              <div className="card" key={company.id}>
                <PublicityCard
                  information={company}
                  setDataToShow={this.setData}
                />
              </div>
            ))
          }
        </div>
        <Review
          type="company"
          data={dataToShow}
          open={openViewer}
          handleClose={this.toggleViewer}
        />
      </Wrapper>
    );
  }
}

CategoryPage.propTypes = {
  companiesData: PropTypes.instanceOf(Array).isRequired,
  pageInformation: PropTypes.instanceOf(Object).isRequired,
}

CategoryPage.defaultProps = {
  // companiesData: [],
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 75px);
  width: 1200px;
  .general-information {
    .gen-title {
      border-bottom: 2px solid white;
      font-size: 30px;
      font-weight: bolder;
      padding-bottom: 10px;
    }
    .gen-descrip {
      font-size: 20px;
    }
  }
  .cards-section {
    display: grid;
    margin: 20px 10px;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, auto);
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 1024px;
    .cards-section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 768px;
    .cards-section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 414px;
    .cards-section {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media screen and (max-width: 411px) {
    max-width: 411px;
  }

  @media screen and (max-width: 375px) {
    max-width: 375px;  
  }

  @media screen and (max-width: 360px) {
    max-width: 360px;  
  }

  @media screen and (max-width: 320px) {
    max-width: 320px; 
  }
`

export default CategoryPage;
