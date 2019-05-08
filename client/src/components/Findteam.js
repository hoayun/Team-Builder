import React, { Component } from "react";
import { Button } from "react-materialize";
import "./Findteam.css";
import jwt_decode from "jwt-decode";
import { findTeam } from "./UserFunctions";
import ReactMaterialSelect from 'react-material-select'
import 'react-material-select/lib/css/reactMaterialSelect.css'
class Findteam extends Component {
	
		constructor() {
			super();
			this.state = {
			
				game: "",
				type: "",
				player: ""
			
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
				//this.props.history.push("/Game");
				console.log(res);
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
	
		handleChange(event){
			this.setState({ game: event });
		}
		handleChange1(event){
			this.setState({ type: event });
		}
		onChange(event) {
			this.setState({ [event.target.name]: event.target.value });
		
		}

	
	render() {
		return (
			<div className="container" id="selectgame">
				<h3>Find a Team</h3>
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

				<Button type="submit" 
				id="submitbutton" 
				waves="grey"
				name="action"
				onClick={this.onSubmit}
					>
					Submit <i class="fas fa-check" />
				</Button>
			</div>
		);
	}
}

export default Findteam;
