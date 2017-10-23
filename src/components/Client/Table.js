import React from 'react';
import './Table.css';
import TableItem from '../Client/TableItem';
import mockData from '../mockData';

export default () => {
  return (
    <div className="clientTable">
      <div className="row">
        <div className="col s12">
          <div className="tableHeaderClient whiteText">
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
                <div className="tColumn valign-wrapper center-align">Buyer</div>
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
            <TableItem
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
};
