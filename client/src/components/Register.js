import React, { Component } from "react";
import { register } from "./UserFunctions";

class Register extends Component {
	constructor() {
		super();
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onChange = this.onSubmit.bind(this);
	}

	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	onSubmit(event) {
		event.preventDefault();

		const newUser = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password
		};

		register(newUser).then((res) => {
			this.props.history.push("/login");
		});
	}

	render() {
		return (
			<div ClassName="container" id="signupform">
				<div ClassName="section">
					<div ClassName="row">
						<form ClassName="col s8">
							<h2>Sign Up</h2>
							<div ClassName="row">
								<div ClassName="input-field col s8">
									<input
										id="firstname"
										type="text"
										ClassName="validate"
										name="first_name"
										value={this.state.first_name}
										onChange={this.onChange}
									/>
									<label for="name">
										<i ClassName="fas fa-user" /> First Name
									</label>
								</div>
								<div ClassName="input-field col s8">
									<input
										id="lastname"
										type="text"
										ClassName="validate"
										name="last_name"
										value={this.state.last_name}
										onChange={this.onChange}
									/>
									<label for="name">
										<i ClassName="fas fa-user" /> Last Name
									</label>
								</div>
								<div ClassName="input-field col s8">
									<input
										id="email"
										type="email"
										ClassName="validate"
										name="email"
										value={this.state.email}
										onChange={this.onChange}
									/>
									<label for="email">
										<i ClassName="fas fa-envelope" /> Email
									</label>
								</div>
							</div>
							<div ClassName="row">
								<div ClassName="input-field col s8">
									<input
										id="password"
										type="password"
										ClassName="validate"
										name="password"
										value={this.state.password}
										onChange={this.onChange}
									/>
									<label for="password">
										<i ClassName="fas fa-key" /> Password
									</label>
								</div>
							</div>
							<button
								ClassName="btn waves-effect waves-light"
								id="signupbutton"
								type="submit"
								name="action"
							>
								Sign Up <i ClassName="fas fa-user-plus" />
							</button>
						</form>
						<div ClassName="card-image">
							<img src="teambuilderlogo2.png" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
