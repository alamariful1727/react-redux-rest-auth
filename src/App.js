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

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<>
						<Header />
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<Route path="/logout" component={Logout} />
							<Route path="/tigrow" component={Tigrow} />
						</Switch>
					</>
				</Router>
			</Provider>
		);
	}
}

export default App;
