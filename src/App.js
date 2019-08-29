import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Tigrow from "./components/Tigrow";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="container">
						<Header />
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<Route path="/logout" component={Logout} />
							<Route path="/tigrow" component={Tigrow} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default hot(module)(App);
