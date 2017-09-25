import React, { Component } from 'react';
// import '../assets/css/homeTable.css';

class HomeTableItem extends Component {
  render() {
    const {
      id,
      creationDate,
      endDate,
      seller,
      buyer,
      premium,
      status
    } = this.props;
    return (
      <div className="homeTable col s12 white grayText">
        <div className="row">
          <div className="col s11 push-s1">
            <div className="tColumnFirst valign-wrapper center-align">
              <a href="#">{id}</a>
            </div>
            <div className="tColumn valign-wrapper center-align">
              {creationDate}
            </div>
            <div className="tColumn valign-wrapper center-align">{endDate}</div>
            <div className="tColumn valign-wrapper center-align">{seller}</div>
            <div className="tColumn valign-wrapper center-align">{buyer}</div>
            <div className="tColumn valign-wrapper center-align">{premium}</div>
            <div className="tColumn valign-wrapper center-align">{status}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeTableItem;
