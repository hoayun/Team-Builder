import React, { Component } from "react";
import { Select, TextInput, Button } from "react-materialize";
import "./Createteam.css";
import { registerTeam } from "./UserFunctions";
import jwt_decode from "jwt-decode";
import ReactMaterialSelect from 'react-material-select'
import 'react-material-select/lib/css/reactMaterialSelect.css'

class Createteam extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			memo: "",
			game: "",
			type: "",
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


    handleChange(event){
		this.setState({ game: event });
	}
	handleChange1(event){
		this.setState({ type: event });
	}

	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	
	}

	onSubmit(event) {
		event.preventDefault();

		const newTeam = {
			name: this.state.name,
			memo: this.state.memo,
			game: this.state.game.value,
			type: this.state.type.value,
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
				<ReactMaterialSelect
				name="game"
				label="Select a game"
				onChange={this.handleChange.bind(this)}
				>
					<option dataValue="Rocket League">Rocket League</option>
					<option dataValue="Overwatch" >

						Overwatch
					</option>
					<option dataValue="Destiny2" >
						Destiny 2
					</option>

				</ReactMaterialSelect>
				<ReactMaterialSelect 
				name="type"
				label="Select a game type"
				onChange={this.handleChange1.bind(this)}
				

				>

					

					<option dataValue="2v2">2v2</option>
					<option dataValue="3v3">3v3</option>
					<option dataValue="4v4">4v4</option>
				</ReactMaterialSelect>
				<TextInput label="Memo"
				name="memo"
				value={this.state.memo}
				onChange={this.onChange} />
				<Button type="submit" 
				    id="submitbutton" 
					name="action"
					onClick={this.onSubmit}

					waves="light">

					Submit <i className="fas fa-check" />
				</Button>
			</div>
		);
	}
}

export default Createteam;
