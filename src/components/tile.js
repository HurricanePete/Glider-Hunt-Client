import React from 'react';

export default function Tile(props) {
	return(
		<li className="dib col-3 h5">
			<article className="ba">
				<h3 className="bb ma0 pa3">Paraglider Name</h3>
				<div className="w-50 h3 dib br pa3">
				Image
				</div>
				<div className="w-50 h3 dib pa3">
				Important Facts
				</div>
				<div className="h3 bt pa3">
				Comments
				</div>
			</article>
		</li>
	)
}