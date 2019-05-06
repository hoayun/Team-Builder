import React, { Component } from "react";
import { login } from "./UserFunctions";
import "./Login.css";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
			
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	onSubmit(event) {
		event.preventDefault();

		const user = {
			email: this.state.email,
			password: this.state.password
		};

		login(user).then((res) => {
			if (res) {
				this.props.history.push("/profiles");
			}
		});
	}

	render() {
		return (
			<div className="container" id="loginform">
				<div className="section">
					<div className="row">
						<form className="col s8">
							<h2>Login</h2>
							<div className="row">
								<div className="input-field col s8">
									<input
										id="email"
										type="email"
										className="validate"
										name="email"
										value={this.state.email}
										onChange={this.onChange}
									/>
									<label htmlFor="email">
										<i className="fas fa-envelope" /> Email
									</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s8">
									<input
										id="password"
										type="password"
										className="validate"
										name="password"
										value={this.state.password}
										onChange={this.onChange}
									/>
									<label htmlFor="password">
										<i className="fas fa-key" /> Password
									</label>
								</div>
							</div>
							<button
								className="btn waves-effect waves-light"
								id="loginbutton"
								type="submit"
								name="action"
								onClick={this.onSubmit}
							>
								Login <i className="fas fa-sign-in-alt" />
							</button>
						</form>
						{/* <div className="card-image">
							<img src="teambuilderlogo2.png" />
						</div> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
