import React, { Component } from "react";

class Landing extends Component {
	render() {
		return (
			<div className="container">
				<div className="col s10 m10">
					<div className="card horizontal">
						<div className="card-stacked">
							<div className="card-content">
								<h1 className="center-align">Team Builder LFG</h1>
								<p className="center-align">
									A new way to connect/make new friends to form teams, for a better gaming experience.
								</p>
							</div>
							<div className="center-align card-action">
								<a href="/Login" className="waves-effect waves-light btn-large" id="signinbutton">
									<i className="fas fa-sign-in-alt" /> Login
								</a>
								<a href="/Register" className="waves-effect waves-light btn-large" id="signupbutton">
									Register <i className="fas fa-user-plus" />
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

export default Landing;
