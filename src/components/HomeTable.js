import React, { Component } from 'react';
import '../assets/css/homeTable.css';
import Header from './Header';
import SellerInfo from './SellerInfo';
import Form from './Form';
import HomeTableItem from './HomeTableItem';
import mockData from './mockData';

class HomeTable extends Component {
  render() {
    return (
      <div className="homeTable">
        <div className="tableHeader">
          <div className="tableColumnFirst">Contact Address/ID</div>
          <div className="tableColumn">Creation Date</div>
          <div className="tableColumn">End Date</div>
          <div className="tableColumn">Seller</div>
          <div className="tableColumn">Buyer</div>
          <div className="tableColumn">Premium</div>
          <div className="tableColumn">Status</div>
        </div>
        {mockData.map(data => (
          <HomeTableItem
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

export default HomeTable;
