import React, { Component } from 'react';
import '../assets/css/form.css';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <div className="form card-panel white s10 col">
        <form>
          <h6>Enter the contact details</h6>

          <div className="row">
            <div className="col s6">
              <Input name="Buyer" for="buyer" />
              <Input name="Contract Start" for="start" />
              <Input name="Template Limit" for="limit" />
            </div>
            <div className="col s6">
              <Input name="Seller" for="seller" />
              <Input name="Contract End" for="end" />
              <Input name="Payout for each degree above limit" for="payout" />
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <Input name="Enter insurance Premium" for="insurance" />
            </div>
          </div>

          <div className="row">
            <div className="col s6 push-s6">
              <button className="col s12 btn indigo darken-1">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
