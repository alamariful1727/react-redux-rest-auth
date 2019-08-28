import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Register extends React.Component {
	render() {
		return (
			<div className="container my-4">
				<Form>
					<FormGroup>
						<Label for="fname">First Name</Label>
						<Input
							type="text"
							name="fname"
							id="fname"
							placeholder="Enter your first name"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="lname">Last Name</Label>
						<Input
							type="text"
							name="lname"
							id="lname"
							placeholder="Enter your last name"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="confirmPassword">Confirm Password</Label>
						<Input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							placeholder="Confirm password"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="contactNo">Contact Number</Label>
						<Input
							type="text"
							name="contactNo"
							id="contactNo"
							placeholder="Enter your Contact Number"
						/>
					</FormGroup>
					<Button>Register</Button>
				</Form>
			</div>
		);
	}
}
