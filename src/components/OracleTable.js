import React, { Component } from 'react';
import '../assets/css/oracleTable.css';
import Header from './Header';
import SellerInfo from './SellerInfo';
import Form from './Form';
import OracleTableItem from './OracleTableItem';
import mockData from './mockData';

class OracleTable extends Component {
  render() {
    return (
      <div className="oracleTable">
        <div className="tableHeaderOracle">
          <div className="tableColumnFirstOracle">Contact Address/ID</div>
          <div className="tableColumnOracle">Creation Date</div>
          <div className="tableColumnOracle">End Date</div>
          <div className="tableColumnOracle">Seller</div>
          <div className="tableColumnOracle">Buyer</div>
          <div className="tableColumnOracle">Premium</div>
          <div className="tableColumnOracle">Status</div>
        </div>
        {mockData.map(data => (
          <OracleTableItem
            id={data.id}
            creationDate={data.creationDate}
            endDate={data.endDate}
            seller={data.seller}
            buyer={data.buyer}
            premium={data.premium}
            status={data.status}
          />
        ))}
      </div>
    );
  }
}

export default OracleTable;
