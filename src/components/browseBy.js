import React from 'react';

import Brand from './static-photos/glider-brands.jpg';
import Sizes from './static-photos/glider-sizes.jpg';
import Match from './static-photos/checklist.png';

import './styles/browseBy.css';

//<img className="browse-img" src={Brand} alt="Glider Brands" /> <img className="browse-img" src={Sizes} alt="Glider Sizes" /> <img className="browse-img" src={Match} alt="Match Me" />

export default class BrowseBy extends React.Component {
	render() {
		return(
			<section className="row tc pv3 parallax-glider">
				<h1 className="desktop-title">Whether this is your first time or you're an old hand, this is the place to find your glider</h1>
				<h2>Browse by...</h2>
				<div className="browser-wrapper pb4">
					<div className="browser-tile brands col-3 dib">
						<h2>Brand</h2>
					</div>
					<div className="browser-tile sizes col-3 dib">
						<h2>Size</h2>	
					</div>
					<div className="browser-tile match col-3 dib">
						<h2>Match Me</h2>
					</div>
				</div>
			</section>
		)
	}
}