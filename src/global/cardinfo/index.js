import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

class CardInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { image, title, descrip } = this.props;
    return (
      <Card>
        <div className="img-cont">
          <img src={image} alt="cardimage" />
        </div>
        <div className="title-cont">
          <p>{title}</p>
        </div>
        <div className="descrip-cont">
          <p>{descrip}</p>
        </div>
      </Card>
    )
  }
}

CardInfo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descrip: PropTypes.string.isRequired,
}

const Card = styled.div`
    background-color: #C1C4C7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 8px;
    border: 1px solid #313A43;
    border-radius: 5px;
    color: #313A43;
    transition: 1s;
    :hover {
        background-color: #ECEDED;
    }
    .img-cont {
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #313A43;
        border-radius: 55px;
        width: 110px;
        height: 110px;
        img {
            width: 70px;
            height: 70px;
        }
    }

    .title-cont {
        font-size: 20px;
        font-weight: bolder;
        p {
            margin: 3px;
        }
    }

    .descrip-cont {
        font-size: 15px;
        p {
            margin: 3px;
        }
    }
`

export default CardInfo;
