export const SET_BANNER_TOGGLE = 'SET_BANNER_TOGGLE';
export const setBannerToggle = () => ({
	type: SET_BANNER_TOGGLE
})

export const SET_SIGNUP_STATUS = 'SET_SIGNUP_STATUS';
export const setSignupStatus = () => ({
	type: SET_SIGNUP_STATUS	
})

export const postContact = email => dispatch => {
	if(email !== '') {
		return fetch('http://localhost:8080/contact', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		})
		.then(function(res) {
			console.log(res);
			dispatch(setSignupStatus());
					
		}, function	(error) {
			console.log(error);
		})
	}
}