import React, { Component } from "react";
import "./Teamsfound.css";

class Teamsfound extends Component {
	render() {
		return (
			<div className="row" id="teamsfoundcard">
				<h2>Teams Found</h2>
				<div className="col s12 m6" id="teamcards">
					<div className="card grey darken-3">
						<div className="card-content white-text">
							<span className="card-title">Team Name</span>
							<p>Here is a team that matches your criteria, press button to join team.</p>
						</div>
						<div className="card-action">
							<a class="waves-effect waves-dark btn-small" id="jointeambutton">
								<i class="fas fa-users" /> Join Team
							</a>
						</div>
					</div>
				</div>

				<div className="col s12 m6" id="teamcards">
					<div className="card grey darken-3">
						<div className="card-content white-text">
							<span className="card-title">Team Name</span>
							<p>Here is a team that matches your criteria, press button to join team.</p>
						</div>
						<div className="card-action">
							<a class="waves-effect waves-dark btn-small" id="jointeambutton">
								<i class="fas fa-users" /> Join Team
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Teamsfound;
