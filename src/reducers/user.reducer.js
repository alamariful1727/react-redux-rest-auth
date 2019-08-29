import { SIGN_IN, LOGOUT } from "../actions/types";

const initialState = {
	user: {},
	isAuthenticate: localStorage.hasOwnProperty("token"),
	token: localStorage.hasOwnProperty("token")
		? localStorage.getItem("token")
		: ""
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				token: action.payload,
				isAuthenticate: localStorage.hasOwnProperty("token")
			};
		case LOGOUT:
			return { isAuthenticate: false, token: "" };
		default:
			return state;
	}
};
