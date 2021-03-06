import React, { Component } from 'react';
import '../assets/css/header.css';
import { Link } from 'react-router';
import logo from '../assets/images/headerLogo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerTitle">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu">
          <ul>
            <li
              className={`${this.props.selected === 'home' ? 'selected' : ''}`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${this.props.selected === 'oracle'
                ? 'selected'
                : ''}`}
            >
              <Link to="/oracle">Oracle</Link>
            </li>
            <li
              className={`${this.props.selected === 'client'
                ? 'selected'
                : ''}`}
            >
              <Link to="/client">Client</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
