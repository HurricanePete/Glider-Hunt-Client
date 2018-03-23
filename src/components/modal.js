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
	top: 45vh;
	background-color: white;
	float: none;
	margin: 0 auto;
	padding: 1rem;
`

const CloseButtton = styled.span.attrs({
	className: 'pointer'
})`
	color: grey;
	float: right;
	font-size: 28px;
	font-weight: bold;
`

export class Modal extends React.Component{
	constructor(props) {
		super(props);
	}

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
					<EmailForm />
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