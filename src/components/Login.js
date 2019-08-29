import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signInUser } from "./../actions/user.action";

class Login extends React.Component {
	state = {
		email: "jest@gmail.com",
		password: "Jest@1234"
	};

	onSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		// TODO: login validation

		// login user
		const user = {
			email,
			password
		};

		this.props.signInUser(user);
		// TODO: check login

		// Clear State
		this.setState({
			email: "",
			password: ""
		});
		this.props.history.push("/");
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { email, password } = this.state;
		return (
			<div className="container my-4">
				<Form onSubmit={this.onSubmit}>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
							value={email}
							onChange={this.onChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
							value={password}
							onChange={this.onChange}
						/>
					</FormGroup>
					<Button>Login</Button>
				</Form>
			</div>
		);
	}
}

Login.propTypes = {
	signInUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
	isAuthenticate: state.user.isAuthenticate
});
export default connect(
	mapStateToProps,
	{ signInUser }
)(Login);
