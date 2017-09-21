import React, { Component } from 'react';
import '../assets/css/home.css';
import Header from './Header';
import SellerInfo from './SellerInfo';
import ClientTable from './ClientTable';

class Client extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="columnContainerClient">
          <div className="column">
            <SellerInfo />
          </div>
          <div className="column" />
        </div>
        <ClientTable />
      </div>
    );
  }
}

export default Client;
