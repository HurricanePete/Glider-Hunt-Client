import React from 'react';
import {connect} from 'react-redux';

import {setBannerToggle} from '../actions/app';

import './styles/browseBy.css';

export class BrowseBy extends React.Component {
	toggleModal(event) {
		event.preventDefault();
		this.props.dispatch(setBannerToggle());
	}

	render() {
		return(
			<section className="browser-row row tc pv3">
				<h2 className="desktop-title">Start your hunt</h2>
				<div className="browser-wrapper pv4">
					<div className="browser-tile training col-3 dib" onClick={e => this.toggleModal(e)}>
						<h2>Training</h2>
						<span className="db">Browse <i className="fas fa-angle-right"></i></span>
					</div>
					<div className="line-dec bg-white"></div>
					<div className="browser-tile gear col-3 dib" onClick={e => this.toggleModal(e)}>
						<h2>Gear</h2>
						<span className="db">Browse <i className="fas fa-angle-right"></i></span>	
					</div>
				</div>
			</section>
		)
	}
}

export default connect()(BrowseBy);