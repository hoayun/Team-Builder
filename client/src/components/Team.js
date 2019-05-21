import React from "react";
import "./Team.css";
import { Card } from "react-materialize";

function Team({ name, game, type, memo, players, Button }) {
	return (
		<Card id="teamsfoundcard">
			<h3 className="font-italic">{name}</h3>
			{game && <h4 className="font-italic">{game}</h4>}
			{type && <h4 className="font-italic">{type}</h4>}
			{memo && <h4 className="font-italic">{memo}</h4>}
			{players && <h4 className="font-italic">Current Players: {players}</h4>}
			
			<Button />
		</Card>
	);
}

export default Team;
