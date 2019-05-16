import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Table, Card } from "react-materialize";
import { findActiveTeam } from "./UserFunctions";
import "./Profile.css";
import Active from "./activeTeam";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			screenname: "",
			teams: []
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
		const activeTeams = {
			player1: decoded.screenname,
		
		};
		console.log(activeTeams);

		findActiveTeam(activeTeams).then((res) => {
			this.setState({
				teams: res.data
			});
			//	console.log(state.teams)
		});
		}

	render() {
		return (
			<div className="row">
				<div className="col 6">
					<div id="profiletable">
						<h3>Profile</h3>
						<Table className="bordered">
							<thead>
								<tr>
									<th data-field="screenname">Screen Name</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{this.state.screenname}</td>
								</tr>
							</tbody>
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
				</div>

				<div className="col 6">
					<Card title="Active Teams" id="currentteamtable">
						{this.state.teams.map((team) => (
							<Active
								key={team.id}
								name={team.name}
								game={team.game}
								type={team.type}
								memo={team.memo}
								players={team.player1}
								Button={() => (
									<button className="btn btn-primary ml-2">
										{" "}
										{() => this.handleteamSave(team.id)}
										Team Page
									</button>
								)}
							/>
						))}
					</Card>
				</div>
			</div>
		);
	}
}

export default Profile;
