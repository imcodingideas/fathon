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
      <div className="row ">
        <div className="sellerInfo col s8 push-s2 card-panel white">
          <div className="row">
            <div className="col s10 push-s1">
              <h5>{'Seller Info'}</h5>
              <br />
              <hr />
              <br />
              {this.state.name}
              <br />
              <br />
              {this.state.address}
              <br />
              <br />
              {this.state.id}
              <br />
              <br />
              {`Balance ${this.state.balance}`}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerInfo;
