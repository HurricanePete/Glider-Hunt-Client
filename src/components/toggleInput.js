import React from 'react';
import styled, {css} from 'styled-components';

const StyledInput = styled.input.attrs({
	className: "search pv2 ph3",
	type: "search"
})`

	${props => props.open && css`
		width: 90%;
		display: inline-block;
	`}

	${props => !props.open && css`
		width: 0;
		display: none;
	`}
`;

	// 	animation-name: smoothShow;
	// 	animation-duration: 1s;

	// 	@keyframes smoothShow {
	// 	10% {width: 1rem;}
	// 	20% {width: 2rem;}
	// 	30% {width: 3rem;}
	// 	40% {width: 4rem;}
	// 	50% {width: 5rem;}
	// 	60% {width: 6rem;}
	// 	70% {width: 7rem;}
	// 	80% {width: 8rem;}
	// 	90% {width: 9rem;}
	// 	100% {width: 10rem;}
	// }

const StyledDiv = styled.div.attrs({
	className: "search-form dib"
})`
	position: relative;
	z-index: 1;

	

	${props => props.open && css`
		width: 25%;

	`}

	${props => !props.open && css`
		width: auto;
	`}

`;

	// @keyframes smoothShow {
	// 	0% {
	// 		display: none;
	// 		opacity: 0;
	// 	}

	// 	1% {
	// 		display: inline-block;
	// 		opacity: 0;
	// 		transform: scaleX(0);
	// 	}

	// 	100% {
	// 		opacity: 1;
	// 		transform: scaleX(1);
	// 	}
	// }

	// animation-name: smoothShow;
	// animation-duration: 1s;

export default class ToggleInput extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);

		this.state = {
			open: false
		}
	}

	handleClick() {
		if(!this.state.open) {
			document.addEventListener('click', this.handleOutsideClick, false);
		}
		else {
			document.removeEventListener('click', this.handleOutsideClick, false);
		}

		this.setState(prevState => ({
			open: !prevState.open
		}))
	}

	handleOutsideClick(e) {
		if(this.node.contains(e.target)) {
			return;
		}

		this.handleClick()
	}

	render() {
		const searchButton = (<button className="w-10 h-100 dib" type="submit"><i className="fas fa-search"></i></button>);
		const fakeButton = (<button className="w2 h-100 dib" onClick={this.handleClick}><i className="fas fa-search"></i></button>);

			return(
				<StyledDiv className="" innerRef={node => {this.node = node}} open={this.state.open}>
					<form className="search-form dib w-100" action="#">
						<StyledInput className="search pv2 ph3 w-90" type="search" open={this.state.open} />
						{this.state.open ? searchButton : fakeButton}
					</form>
				</StyledDiv>
			)	
	}
}