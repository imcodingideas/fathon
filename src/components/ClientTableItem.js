import React, { Component } from 'react';
//import '../assets/css/homeTable.css';

class ClientTableItem extends Component {
  render() {
    return (
      <div className="itemHolderClient">
        <div className="tableColumnFirst">
          <a href="#">{this.props.id}</a>
        </div>
        <div className="tableColumn">{this.props.creationDate}</div>
        <div className="tableColumn">{this.props.endDate}</div>
        <div className="tableColumn">{this.props.seller}</div>
        <div className="tableColumn">{this.props.buyer}</div>
        <div className="tableColumn">{this.props.premium}</div>
        <div className="tableColumn">{this.props.status}</div>

        <div className="claim">
          <button className="claimBtn">Claim</button>
        </div>
      </div>
    );
  }
}

export default ClientTableItem;
