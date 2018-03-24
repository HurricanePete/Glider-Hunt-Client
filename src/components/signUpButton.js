import React from 'react';
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';

import {setSignupStatus, postContact} from '../actions/app';

const StyledButton = styled.div.attrs({
	className: ''
})`
	display: inline-block;
	height: 60px;
	order: 2;
	overflow: hidden;

	@media (max-width: 1000px) {
		display: block;
		width: 100%;
	}
`;

const ButtonSide = styled.button.attrs({
	className: '',
	type: 'submit'
})`
	color: white;
	border: none;
	border-radius: 2px;
	background-color: peru;
	color: white;
	width: 100%;
	height: 60px;
	padding: 1rem 2rem;
	font-size: 25px;
	text-transform: uppercase;
	font-weight: bold;
	transition: all 0.25s ease-out;

	&:hover {
		background-color: white;
	  	color: #00203a;
	    cursor: pointer;
	    transform: scale(1.01);
	}
`;

const CheckSide = styled.div.attrs({
	className: ''
})`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	background-color: green;
	color: white;
	transition: all 0.35s ease-in-out;

	${props => props.status && css`
		transform: translateY(-60px);
	`}
`;

export class SignUpButton extends React.Component {

	render() {
		const {submitted} = this.props;
		return(
			<StyledButton>
				<ButtonSide >Sign Me Up</ButtonSide>
				<CheckSide status={submitted ? 1 : 0}><i className="fas fa-check fa-lg"></i></CheckSide>
			</StyledButton>
		)
	}
}

const mapStateToProps = state => {
	return {
		submitted: state.submitted
	}
}

export default connect(mapStateToProps)(SignUpButton);