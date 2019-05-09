import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Table } from "react-materialize";

import "./Profile.css";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			screenname: ""
		};
	}

	componentDidMount() {
		const token = localStorage.getItem("usertoken");
		console.log(token);
		const decoded = jwt_decode(token);
		this.setState({
			email: decoded.email,
			screenname: decoded.screenname
		});
	}

	render() {
		return (
			<div id="profiletable">
				<h3>{this.state.screenname} </h3>
				<Table className="bordered">
					<thead>
						<tr>
							<th data-field="email">Email</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>{this.state.email}</td>
						</tr>
					</tbody>
				</Table>
				<a href="/Game" className="waves-effect waves-dark btn" id="gamesbutton">
					<i className="fas fa-users" /> Go to Find/Create Team
				</a>
			</div>
		);
	}
}

export default Profile;
