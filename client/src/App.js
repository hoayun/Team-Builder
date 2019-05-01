import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "./logo.svg";
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
						<Route exact path="/login" comoonent={Login} />
						<Route exact path="profile" component={Profile} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
