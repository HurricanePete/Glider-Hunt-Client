import React from 'react';
import styled from 'styled-components';

import './styles/footer.css';

import Logo from './static-photos/nav-icon.png';

const StyledFooter = styled.footer.attrs({
	className: ""
})`
	width: 100%;
	border-top: 2px solid black;
	background-color: black;
	color: white;
	text-align: center;
	padding: 1rem;
	font-size: 20px;
	overflow: hidden;
`;

export default class Footer extends React.Component {
	render() {
		return(
			<StyledFooter>
				<div className="footer-contents col-8 clear-float">
					<div className="logo dib">
						<div className="image-wrapper dib" title="Home">
							<img className="" src={Logo} alt="Glider Hunt Logo" />
						</div>
						<p className="pl2">GliderHunt, Inc.</p>
					</div>
					<ul className="footer-list list">
						<li className="footer-links">
							<a href="/">About</a>
						</li>
						<li className="footer-links">
							<a href="/">Contact Us</a>
						</li>
					</ul>
				</div>
			</StyledFooter>
		)
	}
}