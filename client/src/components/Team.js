import React from "react";
import "./Teamsfound.css";
import { Card } from "react-materialize";

function Team({ name, game, type, memo, players }) {
	return (
		<Card id="teamsfoundcard">
			<h3 className="font-italic">{name}</h3>
			{game && <h4 className="font-italic">{game}</h4>}
			{type && <h4 className="font-italic">{type}</h4>}
			{memo && <h4 className="font-italic">{memo}</h4>}
			{players && <h4 className="font-italic">Current Players: {players}</h4>}
			{<button className="btn waves-effect waves-light"
                                id="joinbutton"
                                type="submit"
                                name="action"
                                
                            >
                                Join <i className="fas fa-user-plus" />
                            </button>}
		</Card>
	);
}

export default Team;
