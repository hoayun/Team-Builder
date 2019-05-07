import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Game from "./components/Game";
import Createteam from "./components/Createteam";
import Findteam from "./components/Findteam";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Landing} />
					<div className="container">
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/game" component={Game} />
						<Route exact path="/createteam" component={Createteam} />
						<Route exact path="/findteam" component={Findteam} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
