import React, { Component } from "react";
import { Select, TextInput, Button } from "react-materialize";
import "./Createteam.css";

class Createteam extends Component {
	render() {
		return (
			<div className="container" id="selectgame2">
				<h3>Create a Team</h3>
				<TextInput label="Team Name" />
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
				<Select value="">
					<option value="" disabled>
						Choose your game type
					</option>
					<option value="1">2v2</option>
					<option value="2">3v3</option>
					<option value="3">4v4</option>
				</Select>
				<TextInput label="Memo" />
				<Button type="submit" id="submitbutton" waves="grey">
					Submit <i class="fas fa-check" />
				</Button>
			</div>
		);
	}
}

export default Createteam;
