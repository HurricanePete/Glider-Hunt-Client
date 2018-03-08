import React from 'react';
import styled from 'styled-components';

import './styles/nav.css';

import Logo from './static-photos/favicon.png';

const StyledNavigation = styled.nav.attrs({
	className: ""//fixed"
})`
	height: 56px;
	width: 100%;
	padding: 0.5rem;
	text-align: center;
`;

export default class Nav extends React.Component {
	render() {
		return(
			<StyledNavigation>
				<div className="nav-contents col-8 clear-float center tl">
					<div className="image-wrapper dib" title="Home">
						<img className="" src={Logo} alt="Glider Hunt Logo" />
					</div>
					<ul className="dib fr mh3 mv0 list">
						<li className="dib">
							<a href="/">Log In</a>
						</li>
					</ul>
				</div>
			</StyledNavigation>
		)
	}
} 