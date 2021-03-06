import React from 'react';
import '../Home/home.css';
import Header from '../Header';
import SellerInfo from '../SellerInfo';
import Table from './Table';

export default () => {
  return (
    <div className="App">
      <Header selected="client" />
      <div className="row">
        <div className="col s6">
          <SellerInfo />
        </div>
        <div className="col s6" />
      </div>

      <div className="row">
        <div className="col s12">
          <Table />
        </div>
      </div>
    </div>
  );
};
