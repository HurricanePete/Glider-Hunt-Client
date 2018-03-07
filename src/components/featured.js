import React from 'react';

import Tile from './tile';

export default class Featured extends React.Component {
	render() {
		let tiles = [];
		for(let i=0; i<3; i++) {
			tiles.push(<Tile key={i} />)
		}
		return(
			<section className="col-8 clear-float center tc pv4">
				<ul>
					{tiles}
				</ul>
			</section>
		)
	}
}