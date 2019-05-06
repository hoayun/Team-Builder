import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import "./Navbar.css";

class Landing extends Component {
	logOut(event) {
		event.preventDefault();
		localStorage.removeItem("usertoken");
		this.person.history.push("/");
	}

	render() {
		const loginRegLink = (
			<ul className="nav-wrapper">
				<h4 className="brand-logo" id="navheader">
					Team Builder LFG
				</h4>
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
			// <Navbar centerLogo alignLinks="right">
			// 	<ul className="NavItem">
			// 		<Link to="/" className="nav-link">
			// 			Team Builder LFG
			// 		</Link>
			// 	</ul>
			// 	{localStorage.usertoken ? userLink : loginRegLink}
			// </Navbar>

			<Navbar
				brand={
					<a href="/" className="brand-logo center">
						Team Builder LFG
					</a>
				}
				centerLogo
				alignLinks="right"
			>
				<NavItem href="/Login" id="loginlink">
					<i className="fas fa-sign-in-alt" /> Login
				</NavItem>
				<NavItem href="/Register" id="registerlink">
					Register <i className="fas fa-user-plus" />
				</NavItem>
			</Navbar>
		);
	}
}

export default withRouter(Landing);
