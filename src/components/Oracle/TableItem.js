import React, { Component } from 'react';
// import '../assets/css/homeTable.css';

class OracleTableItem extends Component {
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
      <div className="itemHolderOracle">
        <div className="row">
          <div className="col s12 grayText">
            <div className="row">
              <div className="col s11 push-s1">
                <div className="tColumnFirst isFirstItem valign-wrapper center-align">
                  {id}
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
          <div className="col s4 push-s8">
            <input className="col s8" placeholder="Enter temperature..." />
            <button className="col s4 btn indigo darken-1 temperatureBtn">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OracleTableItem;
