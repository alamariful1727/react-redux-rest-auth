import { SIGN_IN, LOGOUT } from "./types";
import v1 from "./../Apis/v1";

export const signInUser = user => async dispatch => {
	try {
		let headers = {
			Accept: "application/json",
			"Content-Type": "application/json"
		};
		const response = await v1.post("account/login", user, headers);
		const token = response.data.token;
		// set the token on localStorage
		localStorage.setItem("token", token);
		dispatch({
			type: SIGN_IN,
			payload: { user, token }
		});
	} catch (error) {
		console.log(error);
	}
};
export const logoutUser = () => async dispatch => {
	localStorage.removeItem("token");
	dispatch({
		type: LOGOUT
	});
};
