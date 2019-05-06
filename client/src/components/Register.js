import React, { Component } from "react";
import { register } from "./UserFunctions";
import "./Register.css";

class Register extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			screenname: "",
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	onSubmit(event) {
		event.preventDefault();

		const newUser = {
			email: this.state.email,
			password: this.state.password,
			screenname: this.state.screenname
		};

		register(newUser).then((res) => {
			this.props.history.push("/login");
		});
	}

	render() {
		return (
			<div className="container" id="registerform">
				<div className="section">
					<div className="row">
						<form className="col s8">
							<h2>Register</h2>
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
							<div className="row">
								<div className="input-field col s8">
									<input
										id="screenname"
										type="text"
										className="validate"
										name="screenname"
										value={this.state.screenname}
										onChange={this.onChange}
									/>
									<label htmlFor="name">
										<i className="fas fa-user" /> Screen Name
									</label>
								</div>
							</div>
							<button
								className="btn waves-effect waves-light"
								id="registerbutton"
								type="submit"
								name="action"
								onClick={this.onSubmit}
							>
								Register <i className="fas fa-user-plus" />
							</button>
						</form>
						<div className="card-image">{/* <img src="teambuilderlogo2.png" /> */}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
