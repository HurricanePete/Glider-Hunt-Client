import React from 'react';

import './styles/hero.css';

import Logo from './static-photos/nav-icon.png';

export default function Hero(props) {
	return(
		<section className="col-8 clear-float center tc pv4">
			<header className="pt5">
				<img src={Logo} />
				<h1>Glider Hunt</h1>
			</header>
			<form className="search-form w-50 center" action="#">
				<input className="search pv2 ph3" type="search"></input>
				<button className="submit pv2 ph3" type="submit"><i className="fas fa-search"></i></button>
			</form>
		</section>
	)
}