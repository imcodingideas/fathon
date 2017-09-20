import React, { Component } from 'react';
import '../assets/css/home.css';
import Header from './Header'
import SellerInfo from './SellerInfo'

class Oracle extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="column">
          <SellerInfo />
        </div>
        <div className="column">

        </div>
      </div>
    );
  }
}

export default Oracle;
