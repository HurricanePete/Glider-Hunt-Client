import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer.attrs({
	className: ""
})`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 5rem;
	border-top: 2px solid black;
	text-align: center;
	padding: 1rem;
`;

export default class Footer extends React.Component {
	render() {
		return(
			<StyledFooter>
				This is a footer
			</StyledFooter>
		)
	}
}