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
        <Header selected={'home'} />
        <div className="container">
          <div className="row">
            <div className="col s6">
              <SellerInfo />
            </div>
            <div className="col s6">
              <Form />
            </div>
          </div>
          <div className="row">
            <HomeTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
