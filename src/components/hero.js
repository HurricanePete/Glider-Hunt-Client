import React from 'react';

import './styles/hero.css';

export default function Hero(props) {
	return(
		<section className="hero row pv3">
			<h1 className="logo-name ma0">Get Your Wings . . .</h1>
			<h2>This is my subtitle</h2>
			<div className="hero-wrapper col-3 clear-float center tc">
				<h3>Looking for top training and dealers?</h3>
				<button className="submit match pv2 ph2" type="submit">Match Me</button> 
			</div>
		</section>
	)
}