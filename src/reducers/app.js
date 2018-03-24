import * as actions from '../actions/app';

const initialState = {
	banner: false,
	submitted: false
};

export const appReducer = (state=initialState, action) => {
	if(action.type === actions.SET_BANNER_TOGGLE) {
		return Object.assign({}, state, {
			banner: !state.banner
		})
	}
	else if(action.type === actions.SET_SIGNUP_STATUS) {
		return Object.assign({}, state, {
			submitted: true
		})
	}

	return state;
};