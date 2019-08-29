import React, { Component } from "react";
export default class Home extends Component {
	render() {
		return (
			<div className="">
				<h1 className="text-center">Chat-rooms</h1>
				<p>Members: {this.state.counter}</p>
				<button
					className="btn btn-info"
					onClick={() => {
						this.setState({ counter: this.state.counter + 1 });
					}}
				>
					Increment
				</button>
			</div>
		);
	}
}
