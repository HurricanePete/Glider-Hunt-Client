import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {setBannerToggle} from '../actions/app';

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

export class Footer extends React.Component {
	toggleModal(event) {
		event.preventDefault();
		this.props.dispatch(setBannerToggle());
	}

	render() {
		return(
			<StyledFooter>
				<div className="footer-contents col-8 clear-float">
					<div className="dib">
						<a className="logo" href="/">
							<div className="image-wrapper dib" title="Home">
								<img className="" src={Logo} alt="Glider Hunt Logo" />
							</div>
							<p className="pl2 dib">GliderHunt, Inc.</p>
						</a>
					</div>
					<ul className="footer-list list">
						<li className="footer-links">
							<a href="/" onClick={e => this.toggleModal(e)}>About</a>
						</li>
						<li className="footer-links">
							<a href="/" onClick={e => this.toggleModal(e)}>Contact Us</a>
						</li>
					</ul>
				</div>
			</StyledFooter>
		)
	}
}

export default connect()(Footer);