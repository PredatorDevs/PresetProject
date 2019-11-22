import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

class PublicityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { information, setDataToShow } = this.props;
    return (
      <Card>
        <div className="title">
          <p>{information.nombre}</p>
        </div>
        <div className="main-image">
          <img src={information.portada} alt="companyimage" />
        </div>
        <div className="information">
          <p className="description">{information.descrip}</p>
        </div>
        <div className="action">
          <button type="button" onClick={() => setDataToShow(information)}>Más información</button>
        </div>
      </Card>
    )
  }
}

PublicityCard.propTypes = {
  information: PropTypes.instanceOf(Object).isRequired,
  setDataToShow: PropTypes.func.isRequired,
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100%;
    background-color: #313A43;
    .title {
        color: #FFF;
        font-size: 15px;
        font-weight: bolder;
        padding: 10px;
        p {
            margin: 0px;
        }
    }
    .main-image {
        display: flex;
        margin: 0px 5px 10px 5px;
        justify-content: center;
        align-items: center;
        img {
            height: 105px;
            width: 230px;
        }
    }
    .information {
        display: flex;
        margin-bottom: 20px;
        text-align: left;
        justify-content: flex-start;
        align-items: flex-start;
        .description {
            font-size: 14px;
            margin: 0px 10px;
        }
        p {
            margin: 0px;
        }
    }
    .action {
        margin-top: auto;
        padding: 10px;
        button {
            background-color: #F2A4A6;
            outline: none;
            border: none;
            font-weight: bolder;
            margin: 0px;
            height: 40px;
            width: calc(100% - 10px);
            transition: 0.5s;
            :hover {
                background-color: #FFF;
                cursor: pointer;
            }
        }
    }    
`

export default PublicityCard;
