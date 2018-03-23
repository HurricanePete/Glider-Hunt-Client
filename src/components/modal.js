import React from 'react';
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';

import EmailForm from './emailForm';

const StyledModal = styled.section.attrs({
	className: ''
})`
	display: none;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0,0,0,0.4);


	${props => !props.display && css`
		display: none;
	`}
`;

const ModalContent = styled.div.attrs({
	className=''
})`
	background-color: white;
`

export class Modal extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<StyledModal>
				<ModalContent>
					<span>
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