import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";
import { connect } from "react-redux";

class Header extends React.Component {
	static defaultProps = {
		title: "Chat-App"
	};
	state = {
		isOpen: false
	};
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		let loggedNav;
		if (this.props.isAuthenticate) {
			loggedNav = (
				<>
					<NavItem>
						<NavLink href="/tigrow">TiGrow</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/logout">Logout</NavLink>
					</NavItem>
				</>
			);
		} else {
			loggedNav = (
				<>
					<NavItem>
						<NavLink href="/login/">Login</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/register/">Register</NavLink>
					</NavItem>
				</>
			);
		}
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">{this.props.title}</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{loggedNav}
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticate: state.user.isAuthenticate
});

export default connect(mapStateToProps)(Header);
