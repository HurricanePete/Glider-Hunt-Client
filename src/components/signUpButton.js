import React from 'react';
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';

const StyledButton = styled.div.attrs({
	className: ''
})`
	display: inline-block;
	position: relative;
	width: 25%;
	height: 60px;
	transform: translateZ(-30px);
	transform-style: preserve-3d;
	transition: all 0.25s ease-out;

	${props => props.status && css`
		transform: translateZ(-30px) rotateX(90deg);
	`}

`;

const ButtonSide = styled.button.attrs({
	className: ''
})`
	position: absolute;
	display: block;
	color: white;
	border: none;
	border-radius: 2px;
	background-color: peru;
	color: white;
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
	position: absolute;
	display: block;
	background-color: green;
	height: 60px;
	color: white;
	transform: rotateX(-90deg) translateZ(30px);
`;

export class SignUpButton extends React.Component {
	render() {
		console.log(this.props.email);
		const {email} = this.props;
		return(
			<StyledButton status={email ? 1 : 0}>
				<ButtonSide>Sign Me Up</ButtonSide>
				<CheckSide>Check</CheckSide>
			</StyledButton>
		)
	}
}

const mapStateToProps = state => {
	return {
		email: state.submitted
	}
}

export default connect(mapStateToProps)(SignUpButton);