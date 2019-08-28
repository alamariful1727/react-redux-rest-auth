import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { allReducers } from "./reducers/index.reducer";
const initialState = {};

const middleware = [thunk];

export const store = createStore(
	allReducers,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
