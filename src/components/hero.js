import React from 'react';
import {connect} from 'react-redux';

import {setBannerToggle} from '../actions/app';

import './styles/hero.css';

export class Hero extends React.Component {
	toggleModal(event) {
		event.preventDefault();
		this.props.dispatch(setBannerToggle());
	}

	render() {
		return(
			<section className="hero row pv3">
				<h1 className="logo-name ma0">Get Your Wings</h1>
				<h2>Find the top gliders and training in your area.</h2>
				<div className="hero-wrapper col-3 clear-float center tc">
					<h3>Don't know where to start?</h3>
					<button className="submit match pv2 ph2" type="submit" onClick={e => this.toggleModal(e)}>Match Me</button> 
				</div>
			</section>
		)
	}
}


export default connect()(Hero);