import React, { Component } from 'react';
import '../assets/css/input.css';

class Input extends Component {
  	render() {
		return (
		<div className="input">
			<label className="inputLabel" htmlFor={this.props.for}>{this.props.name}</label>
			<input className="inputInput" name={this.props.for} />
		</div>
		);
  	}
}

export default Input;