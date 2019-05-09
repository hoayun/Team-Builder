import React from "react";
import "./Teamsfound.css";
import { Card } from "react-materialize";

function Team({ name, game, type, memo }) {
	return (
		<Card id="teamsfoundcard">
			<h3 className="font-italic">{name}</h3>
			{game && <h4 className="font-italic">{game}</h4>}
			{type && <h4 className="font-italic">{type}</h4>}
			{memo && <h4 className="font-italic">{memo}</h4>}
		</Card>
	);
}

export default Team;
