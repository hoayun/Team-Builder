import React, { Component } from "react";
import { Button, Card } from "react-materialize";
import "./Findteam.css";
import jwt_decode from "jwt-decode";
import { findTeam, updateTeam2 } from "./UserFunctions";
import ReactMaterialSelect from "react-material-select";
import "react-material-select/lib/css/reactMaterialSelect.css";
import Team from "./Team";
class Findteam extends Component {
	constructor() {
		super();
		this.state = {
			game: "",
			type: "",
			player: "",
			teams: []
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(event) {
		event.preventDefault();

		const newTeam = {
			game: this.state.game.value,
			type: this.state.type.value
		};
		console.log(newTeam);

		findTeam(newTeam).then((res) => {
			this.setState({
				teams: res.data
			});
			//	console.log(state.teams)
		});
	}
	componentDidMount() {
		const token = localStorage.getItem("usertoken");
		console.log(token);
		const decoded = jwt_decode(token);
		this.setState({
			player: decoded.screenname
		});
	}

	handleChange(event) {
		this.setState({ game: event });
	}
	handleChange1(event) {
		this.setState({ type: event });
	}
	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

handleTeamSave = id => {
	const team = this.state.teams.find(team => team.id === id);
	const newTeam2 = {
		id:team.id,
		player2:this.state.player
	}
	console.log(newTeam2);
	updateTeam2(newTeam2).then((res) => {
		console.log(res);
	})

}
	render() {
		return (
			<div className="container" id="selectgame">
				<h3>Find a Team</h3>
				<ReactMaterialSelect name="game" label="Select a game" onChange={this.handleChange.bind(this)}>
					<option dataValue="Rocket League">Rocket League</option>

					<option dataValue="Overwatch">Overwatch</option>
					<option dataValue="Destiny2">Destiny 2</option>
				</ReactMaterialSelect>
				<ReactMaterialSelect name="type" label="Select a game type" onChange={this.handleChange1.bind(this)}>
					<option dataValue="2v2">2v2</option>
					<option dataValue="3v3">3v3</option>
					<option dataValue="4v4">4v4</option>
				</ReactMaterialSelect>

				<Button type="submit" id="submitbutton" waves="light" name="action" onClick={this.onSubmit}>
					Submit <i className="fas fa-check" />
				</Button>
				<Card title="Teams Found" id="resultstable">
					{this.state.teams.map((team) => (
						<Team
							key={team.id}
							name={team.name}
							game={team.game}
							type={team.type}
							memo={team.memo}
							players={team.player1+","+team.player2+","+team.player3}
							Button={() => (
                                <button className="btn btn-primary ml-2" id="joinbutton"
                                   
                                  onClick={() => this.handleTeamSave(team.id)}>
                                    Join <i className="fas fa-user-plus" />
                                </button>
							)}
						/>
					))}
				</Card>
			</div>
		);
	}
}

export default Findteam;
