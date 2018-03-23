import React from 'react';

import './styles/emailForm.css';

export default class EmailForm extends React.Component {
	render() {
		const {modal} = this.props;
		return(
			<form className={"signup " + (modal ? "" : "col-8")}>
			<h2 className={modal ? "hidden" : ""}>Stay up to date as we grow.</h2>
				<input placeholder="Your Email Here..." type="email" />
				<button className="submit" type="submit">Sign Me Up</button>
			</form>
		);
	}
}