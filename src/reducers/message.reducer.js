import { GET_MESSAGES, MESSAGES_LOADING, NEW_MESSAGE } from "../actions/types";

const initialState = {
	messages: [],
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case NEW_MESSAGE:
			return {
				...state,
				messages: [action.payload, ...state.messages],
				loading: false
			};
		case GET_MESSAGES:
			return {
				...state,
				messages: action.payload.messages,
				loading: false
			};
		case MESSAGES_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
