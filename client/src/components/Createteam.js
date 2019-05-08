import React, { Component } from "react";
import { Select, TextInput, Button } from "react-materialize";
import "./Createteam.css";
import { registerTeam } from "./UserFunctions";
import jwt_decode from "jwt-decode";

class Createteam extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			memo: "",
			game: "rocket league",
			type: "3v3",
			player: ""
		
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		
	}
	componentDidMount() {
		const token = localStorage.getItem("usertoken");
		console.log(token);
		const decoded = jwt_decode(token);
		this.setState({
			
			player: decoded.screenname
		});
	}


	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	onSubmit(event) {
		event.preventDefault();

		const newTeam = {
			name: this.state.name,
			memo: this.state.memo,
			game: this.state.game,
			type: this.state.type,
			player: this.state.player
		};
		console.log(newTeam);

		registerTeam(newTeam).then((res) => {
			//this.props.history.push("/Game");
			console.log(res);
		});
	}
	render() {
		return (
			<div className="container" id="selectgame2">
				<h3>Create a Team</h3>
				<TextInput 
				label="Team Name"
				name="name"
				value={this.state.name}
				onChange={this.onChange} />
				<Select value="">
					<option value="">Choose your Game</option>
					<option value="1">Rocket League</option>
					<option value="2" disabled>
						Overwatch
					</option>
					<option value="3" disabled>
						Destiny 2
					</option>
				</Select>
				<Select 
				//value={this.state.type} 
             // onChange={(e) => this.setState({type: e.target.value})}>
				//defaultValue={this.state.value} 
				>
					<option value="" disabled>
						Choose your game type
					</option>
					<option value="1">2v2</option>
					<option value="2">3v3</option>
					<option value="3">4v4</option>
				</Select>
				<TextInput label="Memo"
				name="memo"
				value={this.state.memo}
				onChange={this.onChange} />
				<Button type="submit" 
				    id="submitbutton" 
					name="action"
					onClick={this.onSubmit}
					waves="grey">
					Submit <i className="fas fa-check" />
				</Button>
			</div>
		);
	}
}

export default Createteam;
