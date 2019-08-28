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
		dispatch({
			type: SIGN_IN,
			payload: token
		});
	} catch (error) {
		console.log(error);
	}
};
export const logoutUser = () => async dispatch => {
	dispatch({
		type: LOGOUT
	});
};
