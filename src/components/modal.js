import React from 'react';
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';

import EmailForm from './emailForm';

import {setBannerToggle} from '../actions/app';

const StyledModal = styled.section.attrs({
	className: ''
})`
	display: none;
	position: fixed;
	z-index: 5;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0,0,0,0.4);


	${props => props.display && css`
		display: block;
	`}
`;

const ModalContent = styled.div.attrs({
	className: 'col-6'
})`
	position: absolute;
	top: 30vh;
	left: 0;
	right: 0;
	background-color: ghostwhite;
	float: none;
	margin: 0 auto;
	padding: 2rem 1rem;
	text-align: center;
	border-radius: 5px;
	overflow: hidden;
`

const CloseButtton = styled.span.attrs({
	className: 'pointer'
})`
	position: absolute;
	top: 8px;
	right: 1rem;
	color: grey;
	font-size: 28px;
	font-weight: bold;
`

const Construct = styled.div.attrs({
	className: ''
})`
	background-color: orange;
    height: 22px;
    width: 350px;
    transform: rotate(-45deg);
    position: absolute;
    top: 0;
    left: -5rem;


   @media (max-width: 500px) {
   		top: -4rem;
   } 
`

export class Modal extends React.Component{
	toggleModal(event) {
		event.preventDefault();
		this.props.dispatch(setBannerToggle());
	}

	render() {
		const {modalDisplay} = this.props;
		return(
			<StyledModal display={modalDisplay} >
				<ModalContent>
					<CloseButtton onClick={e => this.toggleModal(e)}>&times;</CloseButtton>
					<Construct></Construct>
					<header className="pb3">
						<h1>Please pardon our dust</h1>
						<h2>We're still under construction.</h2>
						<h3>Sign up below to stay up to date</h3>
						<h2>or</h2>
						<h3>Email us at: <span className="blue">about@gliderhunt.com</span></h3>
					</header>
					<EmailForm modal={true} />
				</ModalContent>
			</StyledModal>
		)
	}
}

const mapStateToProps = state => {
	return{
		modalDisplay: state.banner
	}
}

export default connect(mapStateToProps)(Modal);