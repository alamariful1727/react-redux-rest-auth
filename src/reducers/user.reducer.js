import { SIGN_IN, LOGOUT } from "../actions/types";

const initialState = {
	user: {},
	isAuthenticate: false,
	token: ""
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				token: action.payload,
				isAuthenticate: true
			};
		case LOGOUT:
			return { isAuthenticate: false, token: "" };
		default:
			return state;
	}
};
