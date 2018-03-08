import React from 'react';

import './styles/hero.css';

//import Logo from './static-photos/nav-icon.png';

//<img src={Logo} alt="demo" />

export default function Hero(props) {
	return(
		<section className="hero row pv3">
			<div className="hero-wrapper col-6 clear-float center tc">
				<h2 className="logo-name dib ma0">Glider Hunt</h2>
				<form className="search-form dib col-6" action="#">
					<input className="search pv2 ph3" type="search"></input>
					<button className="submit pv2 p2" type="submit"><i className="fas fa-search"></i></button>
				</form>
			</div>
			<ul className="hero-list col-4 clear-float center tc list pa0">
				<li className="hero-link"><a href="/">Brands</a></li>
				<li className="hero-link"><a href="/">Sizes</a></li>
				<li className="hero-link"><a href="/">Match Me</a></li>
			</ul>
		</section>
	)
}