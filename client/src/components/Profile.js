import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			screenname: "",
			errors: {}
		};
	}

	componentDidMount() {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);
		this.setState({
			email: decoded.email,
			password: decoded.password,
			screenname: decoded.screenname
		});
	}

	render() {
		return (
			<div className="container">
				<table className="bordered">
					<thead>
						<tr>
							<th>Profile</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Email</td>
							<td>{this.state.email}</td>
						</tr>
						<tr>
							<td>Password</td>
							<td>{this.state.password} </td>
						</tr>
						<tr>
							<td>screenname</td>
							<td>{this.state.screenname} </td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Profile;
