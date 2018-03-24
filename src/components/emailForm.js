import React from 'react';
import {connect} from 'react-redux';

import {SignUpButton} from './signUpButton';

import {setSignupStatus, postContact} from '../actions/app';

import './styles/emailForm.css';

//<button className="submit" type="submit">Sign Me Up</button>

export class EmailForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({email: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.dispatch(setSignupStatus());
		console.log(this.state.email);
		if(this.state !== '') {
			this.props.dispatch(postContact(this.state.email));
		}
	}

	render() {
		const {modal} = this.props;
		return(
			<form className={"signup " + (modal ? "" : "col-8")} onSubmit={this.handleSubmit}>
				<h2 className={modal ? "hidden" : ""}>Stay up to date as we grow.</h2>
				<input placeholder="Your Email Here..." type="email" value={this.state.email} onChange={this.handleChange} />
				<SignUpButton />
			</form>
		);
	}
}

export default connect()(EmailForm);