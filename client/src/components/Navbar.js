import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import "./Navbar.css";

class Landing extends Component {
	logOut(event) {
		event.preventDefault();
		localStorage.removeItem("usertoken");
		this.person.history.push("/");
	}

	render() {
		
		// const userLink = (
		// 	<ul className="nav-wrapper">
		// 		<li className="NavItem">
		// 			<Link to="/profile" className="nav-link">
		// 				User
		// 			</Link>
		// 		</li>
		// 		<li className="NavItem">
		// 			<a href="/" onClick={this.logOut.bind(this)} className="nav-link">
		// 				Logout
		// 			</a>
		// 		</li>
		// 	</ul>
		// );

		return (
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

				<NavItem href="/" id="logoutlink">
					<i className="fas fa-sign-out-alt" /> Logout
				</NavItem>
			</Navbar>
		);
	}
}

export default withRouter(Landing);
