import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
	getMessages,
	newMessage,
	pushMessage,
	sendFcmToken
} from "./../actions/message.action";
import { dateFormatter } from "./../helpers/index";
import { messaging } from "../init-fcm";

class Tigrow extends Component {
	state = {
		inputMessage: "",
		user: {},
		fcm_token: "",
		notifications: []
	};

	// notification listener
	registerPushListener = pushNotification => {
		navigator.serviceWorker.addEventListener("message", ({ data }) => {
			console.log(data);
			console.log(this.props.auth);
			const d = data["firebase-messaging-msg-data"].data;

			console.log(this.props.auth.user._id);
			console.log(d);

			// check
			this.pushMessage(d);
		});
	};

	// pushing message
	pushMessage = newMessage => {
		newMessage.account = JSON.parse(newMessage.account);
		console.log(newMessage);
		let curr = this.props.auth.user._id;
		let n = newMessage.account.id;

		if (curr.toString() !== n.toString()) {
			this.props.pushMessage(newMessage);
		}
		return;
	};

	// set fcm token
	setFCM_Token = token => {
		// let t = { token };
		// send token to server
		// this.props.sendFcmToken(t);
		this.setState({
			fcm_token: token
		});
	};

	componentDidMount() {
		this.props.getMessages();
		const setToken = token => this.setFCM_Token(token);
		// fcm
		messaging
			.requestPermission()
			.then(async function() {
				const token = await messaging.getToken();
				console.log(token);
				setToken(token);
			})
			.catch(function(err) {
				console.log("Unable to get permission to notify.", err);
			});

		this.registerPushListener(this.pushNotification);
	}

	dateFormat = date => {
		return dateFormatter(date);
	};

	onSubmit = async e => {
		e.preventDefault();
		const { inputMessage } = this.state;

		const newMsg = {
			text: inputMessage,
			fcm_token: this.state.fcm_token
		};
		console.log(newMsg);
		await this.props.newMessage(newMsg);
		// Clear State
		this.setState({
			inputMessage: ""
		});
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { inputMessage } = this.state;
		return (
			<>
				<h1 className="text-center">TiGrow-Chat</h1>
				<div className="offset-lg-3 col-lg-6 my-3">
					<Form onSubmit={this.onSubmit}>
						<FormGroup>
							<Label for="inputMessage">Enter your message</Label>
							<Input
								type="textarea"
								required
								name="inputMessage"
								id="inputMessage"
								rows="3"
								value={inputMessage}
								onChange={this.onChange}
							/>
						</FormGroup>
						<Button type="submit" className="btn btn-success">
							Send
						</Button>
					</Form>
				</div>
				{/* messages */}
				<div id="messages">
					{this.props.msg.messages.map(msg => (
						<div
							key={msg.id}
							id="message"
							className="border border-secondary px-5 pt-3 rounded-pill mb-1"
						>
							<div className="header d-flex justify-content-between">
								<h6>{msg.account.email}</h6>
								<small>{this.dateFormat(new Date(msg.createdAt)).format}</small>
							</div>
							<p>{msg.text}</p>
						</div>
					))}
				</div>
			</>
		);
	}
}

Tigrow.propTypes = {
	getMessages: PropTypes.func.isRequired,
	newMessage: PropTypes.func.isRequired,
	pushMessage: PropTypes.func.isRequired,
	sendFcmToken: PropTypes.func.isRequired,
	msg: PropTypes.object.isRequired,
	isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
	auth: state.auth,
	msg: state.msg,
	isAuthenticate: state.auth.isAuthenticate
});

export default connect(
	mapStateToProps,
	{ getMessages, newMessage, pushMessage, sendFcmToken }
)(Tigrow);
