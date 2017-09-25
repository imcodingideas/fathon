import React, { Component } from 'react';
import '../assets/css/oracleTable.css';
import Header from './Header';
import SellerInfo from './SellerInfo';
import Form from './Form';
import OracleTableItem from './OracleTableItem';
import mockData from './mockData';

class OracleTable extends Component {
  render() {
    return (
      <div className="oracleTable">
        <div className="row">
          <div className="col s12">
            <div className="tableHeaderOracle">
              <div className="row">
                <div className="col s11 push-s1">
                  <div className="tColumnFirst valign-wrapper center-align">
                    Contact Address/ID
                  </div>
                  <div className="tColumn valign-wrapper center-align">
                    Creation Date
                  </div>
                  <div className="tColumn valign-wrapper center-align">
                    End Date
                  </div>
                  <div className="tColumn valign-wrapper center-align">
                    Seller
                  </div>
                  <div className="tColumn valign-wrapper center-align">
                    Buyer
                  </div>
                  <div className="tColumn valign-wrapper center-align">
                    Premium
                  </div>
                  <div className="tColumn valign-wrapper center-align">
                    Status
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            {mockData.map(data => (
              <OracleTableItem
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
        </div>
      </div>
    );
  }
}

export default OracleTable;
