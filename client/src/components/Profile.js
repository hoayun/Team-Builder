import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Table } from "react-materialize";

import "./Profile.css";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			screenname: ""
		};
	}

	componentDidMount() {
		const token = localStorage.getItem("usertoken");
		console.log(token);
		const decoded = jwt_decode(token);
		this.setState({
			email: decoded.email,
			password: decoded.password,
			screenname: decoded.screenname
		});
	}

	render() {
		return (
			<div id="profiletable">
				<h3>Profile</h3>
				<Table className="bordered">
					<thead>
						<tr>
							<th data-field="email">Email</th>
							<th data-field="password">Password</th>
							<th data-field="screenname">Screenname</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>{this.state.email}</td>

							<td>{this.state.password} </td>

							<td>{this.state.screenname} </td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}

export default Profile;
