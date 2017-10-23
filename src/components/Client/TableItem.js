import React, { Component } from 'react';
// import '../assets/css/homeTable.css';

class TableItem extends Component {
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
      <div className="itemHolderClient">
        <div className="row">
          <div className="col s12 grayText">
            <div className="row">
              <div className="col s11 push-s1">
                <div className="tColumnFirst valign-wrapper center-align">
                  <a href="#">{id}</a>
                </div>
                <div className="tColumn valign-wrapper center-align">
                  {creationDate}
                </div>
                <div className="tColumn valign-wrapper center-align">
                  {endDate}
                </div>
                <div className="tColumn valign-wrapper center-align">
                  {seller}
                </div>
                <div className="tColumn valign-wrapper center-align">
                  {buyer}
                </div>
                <div className="tColumn valign-wrapper center-align">
                  {premium}
                </div>
                <div className="tColumn valign-wrapper center-align">
                  {status}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <button className="col s1 push-s10 btn teal accent-4">Claim</button>
        </div>
      </div>
    );
  }
}

export default TableItem;
