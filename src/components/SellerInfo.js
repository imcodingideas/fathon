import React, { Component } from 'react';
import '../assets/css/sellerInfo.css';

class SellerInfo extends Component {
  render() {
    return (
      <div className="sellerInfo">
        <div className="sellerContainer">
          <h2>{'Seller Info'}</h2>
          <hr />
          {'5Fhantom'}
          <br />
          {'Wallet Address'}
          <br />
          {'0x32Be343B94f860124dC4fEe278FDC2C102D88'}
          <br />
          {'Balance $5000'}
        </div>
      </div>
    );
  }
}

export default SellerInfo;
