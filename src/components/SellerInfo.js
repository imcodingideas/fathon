import React, { Component } from 'react';
import '../assets/css/sellerInfo.css';

class SellerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '5Fhantom',
      address: 'Wallet Address',
      id: '0x32Be343B94f860124dC4fEe278FDC2C102D88',
      balance: '$5000'
    };
  }
  render() {
    return (
      <div className="sellerInfo">
        <div className="sellerContainer">
          <h2>{'Seller Info'}</h2>
          <hr />
          {this.state.name}
          <br />
          {this.state.address}
          <br />
          {this.state.id}
          <br />
          {`Balance ${this.state.balance}`}
        </div>
      </div>
    );
  }
}

export default SellerInfo;
