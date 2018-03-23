import React from 'react';
import styled from 'styled-components';

import Menu from './menu';
import MenuIcon	from './menuIcon';

import './styles/nav.css';

import Logo from './static-photos/favicon.png';

const StyledNavigation = styled.nav.attrs({
	className: ""
})`
	width: 100%;
	text-align: center;
`;

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuToggle: false
		}
	}

	menuClick() {
		this.setState({menuToggle: !this.state.menuToggle})
	}

	render() {
		const show = this.state.menuToggle;
		return(
			<StyledNavigation display={show ? 1 : 0}>
				<div className={"nav-contents col-12 clear-float center tl " + (show ? "bb bw1 b--white" : "")}>
					<div className="logo dib">
						<a href="/">
							<div className="image-wrapper dib" title="Home">
								<img className="" src={Logo} alt="Glider Hunt Logo" />
							</div>
							<h2 className="mh3 mv0 dib white">GliderHunt</h2>
						</a>
					</div>
					<MenuIcon onClick={() => this.menuClick()} />
					<Menu display={'true'} />
				</div>
				{show ? <Menu /> : null}
			</StyledNavigation>
		)
	}
} 