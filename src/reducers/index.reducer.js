import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";

export const allReducers = combineReducers({
	user: userReducer
});
