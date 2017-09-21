import React, { Component } from 'react';
//import '../assets/css/homeTable.css';

class OracleTableItem extends Component {
  render() {
    return (
      <div className="itemHolderOracle">
        <div className="tableColumnFirst">
          <a href="#">{this.props.id}</a>
        </div>
        <div className="tableColumn">{this.props.creationDate}</div>
        <div className="tableColumn">{this.props.endDate}</div>
        <div className="tableColumn">{this.props.seller}</div>
        <div className="tableColumn">{this.props.buyer}</div>
        <div className="tableColumn">{this.props.premium}</div>
        <div className="tableColumn">{this.props.status}</div>

        <div className="temperature">
          <input
            className="temperatureInput"
            placeholder="Enter temperature..."
          />
          <button className="temperatureBtn">Submit</button>
        </div>
      </div>
    );
  }
}

export default OracleTableItem;
