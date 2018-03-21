import React from 'react';

import './styles/hero.css';

//import Logo from './static-photos/nav-icon.png';

//<img src={Logo} alt="demo" />

				// <form className="search-form col-6" action="#">
				// 	<input className="search pv2 ph3" type="search"></input>
				// 	<button className="submit pv2 p2" type="submit"><i className="fas fa-search"></i></button>
				// </form>

			// 	<ul className="hero-list col-4 clear-float center tc list pa0">
			// 	<li className="hero-link"><a href="/">Brands</a></li>
			// 	<li className="hero-link"><a href="/">Sizes</a></li>
			// 	<li className="hero-link"><a href="/">Match Me</a></li>
			// </ul>

export default function Hero(props) {
	return(
		<section className="hero row pv3">
			<h1 className="logo-name ma0">Get Your wings</h1>
			<div className="hero-wrapper col-4 clear-float center tc">
				<input className="search pv2 ph3" type="search" />
				<button className="submit pv2 ph2" type="submit">Match Me</button> 
			</div>
		</section>
	)
}