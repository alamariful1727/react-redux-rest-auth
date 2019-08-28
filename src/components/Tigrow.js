import React, { Component } from "react";
import { connect } from "react-redux";

class Tigrow extends Component {
	render() {
		return (
			<div>
				<h1 className="text-center">TiGrow-Chat</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
};

export default connect(mapStateToProps)(Tigrow);
