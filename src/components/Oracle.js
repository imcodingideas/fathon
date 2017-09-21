import React, { Component } from 'react';
import '../assets/css/home.css';
import Header from './Header';
import SellerInfo from './SellerInfo';
import OracleTable from './OracleTable';
import Search from './Search';

class Oracle extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <div className="columnContainerOracle">
            <div className="columnOracle">
              <SellerInfo />
            </div>
            <div className="columnOracle">
              <Search />
            </div>
          </div>
        </div>
        <OracleTable />
      </div>
    );
  }
}

export default Oracle;
