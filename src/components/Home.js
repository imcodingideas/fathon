import React, { Component } from 'react';
import '../assets/css/home.css';
import Header from './Header';
import SellerInfo from './SellerInfo';
import Form from './Form';
import HomeTable from './HomeTable';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <div className="columnContainer">
            <div className="column">
              <SellerInfo />
            </div>
            <div className="column">
              <Form />
            </div>
          </div>
        </div>
        <HomeTable />
      </div>
    );
  }
}

export default Home;
