import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from './assets/img/logo.png';
import main from './assets/img/main-nav/main.png';
import menu from './assets/img/main-nav/menu.png';
import commerce from './assets/img/main-nav/commerce.png';
import health from './assets/img/main-nav/health.png';
import finance from './assets/img/main-nav/finance.png';
import wine from './assets/img/main-nav/wine.png';
import pharma from './assets/img/main-nav/pharma.png';
import transport from './assets/img/main-nav/transport.png';
import accessory from './assets/img/main-nav/accessory.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavMenu: false,
    }
  }

  toggleResNav = async () => {
    const { showNavMenu } = this.state;
    this.setState({
      showNavMenu: !showNavMenu,
    });
  }

  logout = async (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <Wrapper showNavMenu={this.state.showNavMenu}>
        <div className="toggle-button" tabIndex="0" role="button" onClick={this.toggleResNav} onKeyPress={null}>
          <img className="navbar-item-img" src={menu} alt="navbarmenu" />
        </div>

        <div className="navbar-items-container">
          <NavLink exact to="/" className="inactive" activeClassName="active">
            <div className="navbar-item" tabIndex="0" role="button" onClick={this.toggleResNav} onKeyPress={null}>
              <img className="navbar-item-img" src={main} alt="item1" />
              <p>Principal</p>
            </div>
          </NavLink>
          <NavLink exact to="/commerce" className="inactive" activeClassName="active">
            <div className="navbar-item" tabIndex="0" role="button" onClick={this.toggleResNav} onKeyPress={null}>
              <img className="navbar-item-img" src={commerce} alt="item1" />
              <p>Comercio</p>
            </div>
          </NavLink>
          <NavLink exact to="/health" className="inactive" activeClassName="active">
            <div className="navbar-item" tabIndex="0" role="button" onClick={this.toggleResNav} onKeyPress={null}>
              <img className="navbar-item-img" src={health} alt="item1" />
              <p>Salud</p>
            </div>
          </NavLink>
          <NavLink exact to="/finance" className="inactive" activeClassName="active">
            <div className="navbar-item" tabIndex="0" role="button" onClick={this.toggleResNav} onKeyPress={null}>
              <img className="navbar-item-img" src={finance} alt="item1" />
              <p>Finanzas</p>
            </div>
          </NavLink>
          <NavLink exact to="/wine" className="inactive" activeClassName="active">
            <div className="navbar-item" tabIndex="0" role="button" onClick={this.toggleResNav} onKeyPress={null}>
              <img className="navbar-item-img" src={wine} alt="item1" />
              <p>Vinos</p>
            </div>
          </NavLink>
          <NavLink exact to="/pharma" className="inactive" activeClassName="active">
            <div className="navbar-item" tabIndex="0" role="button" onClick={this.toggleResNav} onKeyPress={null}>
              <img className="navbar-item-img" src={pharma} alt="item1" />
              <p>Farmaceúticos</p>
            </div>
          </NavLink>
          <NavLink exact to="/transport" className="inactive" activeClassName="active">
            <div className="navbar-item" tabIndex="0" role="button" onClick={this.toggleResNav} onKeyPress={null}>
              <img className="navbar-item-img" src={transport} alt="item1" />
              <p>Transporte</p>
            </div>
          </NavLink>
          <NavLink exact to="/accessory" className="inactive" activeClassName="active">
            <div className="navbar-item" tabIndex="0" role="button" onClick={this.toggleResNav} onKeyPress={null}>
              <img className="navbar-item-img" src={accessory} alt="item1" />
              <p>Accesorios</p>
            </div>
          </NavLink>
        </div>
        <NavbarUserOpc>
          <div className="logo-container">

            <img src={Logo} alt="Logo" />
          </div>
        </NavbarUserOpc>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #313A43;
  display: flex;
  flex-direction: row;
  height: 75px;
  width: calc(100%);
  position: relative;
  z-index: 1700;
  .toggle-button {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 75px;
    top: 0;
    left: 0px;
    outline: none;
    :hover {
      background-color: #28292F;
      cursor: pointer;
    }
  }
  .navbar-logo-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 75px;
  }
  .navbar-logo {
    height: 75px;
    width: 75px;
  }
  .navbar-items-container {
    display: flex;
    flex-direction: row;
  }
  .navbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100px;
    text-decoration: none;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: 12px;
    outline: none;
    transition: 0.5s;
    p {
      color: white;
      margin: 0;
    }
    :hover {
      background-color: #28292F;
      cursor: pointer;
    }
  }
  .navbar-item-img {
    height: 30px;
    width: 30px;
  }
  .special-item {
    position: absolute;
    height: 50px;
    width: 50px;
    bottom: -25px;
    left: calc(50% - 25px);
  }
  .special-item-img {
    height: 50px;
    width: 50px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
    z-index: 1700;
    border-radius: 25px;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    margin-left: -100px;
    background-color: #f9f9f9;
    min-width: 250px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    &__icon {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
  }
  .dropdown-content div {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
  }
  .dropdown-content div:hover { background-color: #E3E3E3; cursor: pointer }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown:hover{cursor:pointer;}

  .inactive {
    text-decoration: none;
  }
  .active {
    background-color: #28292F;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    .navbar-logo-container { display: none }
    .toggle-button { display: flex }
    .navbar-items-container {
      display: ${(props) => (props.showNavMenu ? 'flex' : 'none')};
      position: absolute;
      top: 75px;
      flex-direction: column;
      width: 100%;
    }
    .navbar-item {
      width: 100%;
      background-color: #313A43;
      height: 80px;
      border-top: 1px solid #9C9DA1;
    }
    .special-item {
      display: ${(props) => (props.showNavMenu ? 'none' : 'flex')};
      height: 40px;
      width: 40px;
      bottom: -20px;
      left: calc(50% - 20px);
    }
    .special-item-img {
      height: 40px;
      width: 40px;
    }
    .dropdown {
      border-radius: 20px;
    }
  }
`

const NavbarUserOpc = styled.div`
  margin-left: auto;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(4. 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas: "info-wid info-wid info-wid dropdown-wid"
                       "user-wid user-wid user-wid dropdown-wid";
  height: 100%;
  width: auto;

  .logo-container {
    img {
        width: 225px;
        height: 75px;
    }
  }

  .info-wid, .user-wid, .dropdown-wid {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
  }
  .info-wid {
    grid-area: info-wid;
    align-items: flex-end;
    justify-content: flex-end;
    p {
      color: #459EDB;
      margin: 0;
      font-size: 15px;
    }
  }
  .user-wid {
    grid-area: user-wid;
    align-items: flex-end;
    justify-content: flex-start;
    p {
      color: #F2F2F2;
      margin: 0;
      font-size: 15px;
    }
  }
  .dropdown-wid {
    grid-area: dropdown-wid;
    align-items: center;
    justify-content: center;
    p {
      color: #F2F2F2;
    }
  }
  .dropbtn {
    height: 30px;
    width: 30px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
    z-index: 1700;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    &__icon {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
  }
  .dropdown-content div {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
  }
  .dropdown-content div:hover {background-color: #E3E3E3; cursor: pointer}
  .dropdown:hover .dropdown-content {
    display: block;
  }
  p {
    color: #9C9DA1;
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 0px;
    .info-wid {
      p {
        font-size: 12px;
      }
    }
    .user-wid {
      p {
        font-size: 12px;
      }
    }
    .dropbtn {
      height: 20px;
      width: 20px;
    }
  }
`

export { Navbar };
