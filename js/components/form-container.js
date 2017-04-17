import React from 'react';
import {connect} from 'react-redux';

import {userGuess} from '../actions/index';

import Form from './form';

export class FormContainer extends React.Componenet{
	constructor(props){
		super(props);
		this.state = {
			value:''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.dispatch(userGuess(this.state.value));
	}

	render(){
		return(
			<Form value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} />
			)
	}
}

export default connect()(FormContainer);