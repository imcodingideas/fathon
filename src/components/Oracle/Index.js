import React, { Component } from 'react';
//import '../assets/css/home.css'
import Header from '../Header';
import SellerInfo from '../SellerInfo';
import Table from './Table';
import Search from '../Search';

class Oracle extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header selected="oracle" />
          <div className="row">
            <div className="col s6">
              <SellerInfo />
            </div>
            <div className="col s6">
              <Search />
            </div>
          </div>
        </div>
        <div className="row">
          <Table />
        </div>
      </div>
    );
  }
}

export default Oracle;