import {
	GET_MESSAGES,
	MESSAGES_LOADING,
	NEW_MESSAGE,
	PUSH_MESSAGE
} from "./types";
import v1 from "../Apis/v1";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./auth.action";

// get all messages
export const getMessages = () => (dispatch, getState) => {
	dispatch(setMessagesLoading());
	v1.get("/message", tokenConfig(getState))
		.then(res =>
			dispatch({
				type: GET_MESSAGES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

// new massage
export const newMessage = message => (dispatch, getState) => {
	v1.post("/message", message, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: NEW_MESSAGE,
				payload: res.data.newMessage
			});
		})
		.catch(err => {
			console.log(err);
			dispatch(returnErrors(err.response.data, err.response.status));
		});
};

// push message
export const pushMessage = message => dispatch => {
	dispatch({
		type: PUSH_MESSAGE,
		payload: message
	});
};

export const setMessagesLoading = () => {
	return {
		type: MESSAGES_LOADING
	};
};
