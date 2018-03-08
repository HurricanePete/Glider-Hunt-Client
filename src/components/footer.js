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
	overflow: hidden;
`;

export default class Footer extends React.Component {
	render() {
		return(
			<StyledFooter>
				<p>Brand and Size images taken from <a href="http://xcmag.com/news/2010-prize-draw/">http://xcmag.com/news/2010-prize-draw/</a> and <a href="https://www.tutorialspoint.com/paragliding/paragliding_flying_types.htm">https://www.tutorialspoint.com/paragliding/paragliding_flying_types.htm</a></p>
			</StyledFooter>
		)
	}
}