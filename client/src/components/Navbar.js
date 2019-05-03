import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar } from "react-materialize";

class Landing extends Component {
	logOut(event) {
		event.preventDefault();
		localStorage.removeItem("usertoken");
		this.person.history.push("/");
	}

	render() {
		const loginRegLink = (
			<ul className="nav-wrapper">
				{/* <li className="brand-logo">Team Builder LFG</li> */}
				<li className="NavItem">
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>
				<li className="NavItem">
					<Link to="/register" className="nav-link">
						Register
					</Link>
				</li>
			</ul>
		);

		const userLink = (
			<ul className="nav-wrapper">
				<li className="NavItem">
					<Link to="/profile" className="nav-link">
						User
					</Link>
				</li>
				<li className="NavItem">
					<a href="/" onClick={this.logOut.bind(this)} className="nav-link">
						Logout
					</a>
				</li>
			</ul>
		);

		return (
			<Navbar alignLinks="right">
				<ul className="NavItem">
					<Link to="/" className="nav-link">
						Home
					</Link>
				</ul>
				{localStorage.usertoken ? userLink : loginRegLink}
			</Navbar>
		);
	}
}

export default withRouter(Landing);
