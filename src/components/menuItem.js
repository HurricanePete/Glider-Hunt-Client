import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {setBannerToggle} from '../actions/app';

const MenuListItem = styled.li.attrs({
	className: 'link'
})`
	display: inline-block;
	z-index: 0;
	transition: all 0.25s ease-in-out;

	@media (max-width: 1000px) {
		display: block;
	}
`;

export class MenuItem extends React.Component {

	toggleModal(event) {
		event.preventDefault();
		this.props.dispatch(setBannerToggle());
	}

	render() {
		return(
			<ul className="ma0 pa0" >
				<MenuListItem>
					<a className="ul-hover" href="/" onClick={e => this.toggleModal(e)}><i className="fas fa-search"></i></a>
				</MenuListItem>
				<hr className="w-25"/>
				<MenuListItem>
					<a className="ul-hover" href="/" onClick={e => this.toggleModal(e)}>Reviews</a>
				</MenuListItem>
				<hr className="w-25"/>
				<MenuListItem>
					<a className="ul-hover" href="/" onClick={e => this.toggleModal(e)}>Blog</a>
				</MenuListItem>
				<hr className="w-25"/>
				<MenuListItem>
					<a className="ul-hover" href="/" onClick={e => this.toggleModal(e)}>Login</a>
				</MenuListItem>
			</ul>
		)
	}
}

export default connect()(MenuItem);