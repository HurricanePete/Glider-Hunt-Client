import React from 'react';
import styled from 'styled-components';

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

export default class MenuItem extends React.Component {
	render() {
		return(
			<ul className="ma0 pa0" >
				<MenuListItem>
					<a className="ul-hover" href="/"><i className="fas fa-search"></i></a>
				</MenuListItem>
				<hr className="w-25"/>
				<MenuListItem>
					<a className="ul-hover" href="/">Reviews</a>
				</MenuListItem>
				<hr className="w-25"/>
				<MenuListItem>
					<a className="ul-hover" href="/">Blog</a>
				</MenuListItem>
				<hr className="w-25"/>
				<MenuListItem>
					<a className="ul-hover" href="/">Login</a>
				</MenuListItem>
			</ul>
		)
	}
}