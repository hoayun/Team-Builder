import React, { Component } from "react";
import { Select, Button } from "react-materialize";
import "./Findteam.css";

class Findteam extends Component {
	render() {
		return (
			<div className="container" id="selectgame">
				<h3>Find a Team</h3>
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

				<Button type="submit" id="submitbutton" waves="grey">
					Submit <i class="fas fa-check" />
				</Button>
			</div>
		);
	}
}

export default Findteam;
