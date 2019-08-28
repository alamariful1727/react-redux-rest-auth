import React, { Component } from "react";
import { getToken } from "./../actions/authHelper";
export default class Home extends Component {
	render() {
		return (
			<div className="">
				<h1 className="text-center">Home page</h1>
				<h6 className="text-center">{getToken()}</h6>
			</div>
		);
	}
}
