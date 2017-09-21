import React, { Component } from 'react';
import '../assets/css/clientTable.css';
import Header from './Header';
import SellerInfo from './SellerInfo';
import Form from './Form';
import ClientTableItem from './ClientTableItem';
import mockData from './mockData';

class ClientTable extends Component {
  render() {
    return (
      <div className="clientTable">
        <div className="tableHeaderClient">
          <div className="tableColumnFirstClient">Contact Address/ID</div>
          <div className="tableColumnClient">Creation Date</div>
          <div className="tableColumnClient">End Date</div>
          <div className="tableColumnClient">Seller</div>
          <div className="tableColumnClient">Buyer</div>
          <div className="tableColumnClient">Premium</div>
          <div className="tableColumnClient">Status</div>
        </div>
        {mockData.map(data => (
          <ClientTableItem
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

export default ClientTable;
