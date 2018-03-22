import React from 'react';

import './styles/browseBy.css';

export default class BrowseBy extends React.Component {
	render() {
		return(
			<section className="browser-row row tc pv3">
				<h2 className="desktop-title">Find the best for you</h2>
				<div className="browser-wrapper pv4">
					<div className="browser-tile training col-3 dib">
						<h2>Training</h2>
						<span className="db">Browse <i className="fas fa-angle-right"></i></span>
					</div>
					<div className="line-dec bg-white"></div>
					<div className="browser-tile gear col-3 dib">
						<h2>Gear</h2>
						<span className="db">Browse <i className="fas fa-angle-right"></i></span>	
					</div>
				</div>
			</section>
		)
	}
}