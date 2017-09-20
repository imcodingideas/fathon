import React, { Component } from 'react';
import '../assets/css/form.css';
import Input from './Input'
class Form extends Component {
  render() {
    return (
      <div className="form">
		<form>
			<h2>Enter the contact details</h2>
			<div className="formColumn leftColumn">
				<Input name="Buyer"  for="buyer"/>
				<Input name="Contract Start"  for="start"/>
				<Input name="Template Limit"  for="limit"/>
			</div>
			<div className="formColumn centerColumn"></div>
			<div className="formColumn rightColumn">
				<Input name="Seller"  for="seller"/>
				<Input name="Contract End" for="end" />
				<Input name="Payout for each degree above limit" for="payout" />
			</div>
			<div className="container">
				<Input name="Enter insurance Premium" for="insurance"/>
			</div>
			<button className="submit">Submit</button>			
		</form>
      </div>
    );
  }
}

export default Form;
