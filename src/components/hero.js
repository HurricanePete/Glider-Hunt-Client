import React from 'react';

import './styles/hero.css';

export default function Hero(props) {
	return(
		<section className="hero row pv3">
			<h1 className="logo-name ma0">Get Your Wings</h1>
			<h2>Find the top gliders and training in your area.</h2>
			<div className="hero-wrapper col-3 clear-float center tc">
				<h3>Don't know where to start?</h3>
				<button className="submit match pv2 ph2" type="submit">Match Me</button> 
			</div>
		</section>
	)
}
