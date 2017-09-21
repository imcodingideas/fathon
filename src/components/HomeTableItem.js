import React, { Component } from 'react';
//import '../assets/css/homeTable.css';

class HomeTableItem extends Component {
  render() {
    return (
      <div className="itemHolder">
        <div className="tableColumnFirst">
          <a href="#">{this.props.id}</a>
        </div>
        <div className="tableColumn">{this.props.creationDate}</div>
        <div className="tableColumn">{this.props.endDate}</div>
        <div className="tableColumn">{this.props.seller}</div>
        <div className="tableColumn">{this.props.buyer}</div>
        <div className="tableColumn">{this.props.premium}</div>
        <div className="tableColumn">{this.props.status}</div>
      </div>
    );
  }
}

export default HomeTableItem;
