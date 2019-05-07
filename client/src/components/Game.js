import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
	render() {
		return (
			<div className="container">
				<div className="col s10 m10">
					<div className="card horizontal">
						<div className="card-stacked">
							<div className="card-content">
								<h1 className="center-align">Team Builder LFG</h1>
								<p className="center-align">Here you would select either Find a team or Make a team.</p>
							</div>
							<div className="center-align card-action">
								<a href="/Findteam" className="waves-effect waves-light btn-large" id="findteambutton">
									<i class="fas fa-search" /> Find Team
								</a>
								<a
									href="/Createteam"
									className="waves-effect waves-light btn-large"
									id="maketeambutton"
								>
									Create Team <i class="fas fa-handshake" />
								</a>
							</div>
						</div>
						{/* <div className="card-image">
							<img src="teambuilderlogo2.png" />
						</div> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Game;
