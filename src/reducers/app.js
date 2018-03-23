import * as actions from '../actions/app';

const initialState = {
	banner: false
};

export const appReducer = (state=initialState, action) => {
	if(action.type === actions.SET_BANNER_TOGGLE) {
		return Object.assign({}, state, {
			banner: !state.banner
		})
	}

	return state;
};