import React, { Component } from "react";
import { login } from "./UserFunctions";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {}
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	onSubmit(event) {
		event.preventdefault();

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
			<div ClassName="container" id="signinform">
				<div ClassName="section">
					<div ClassName="row">
						<form ClassName="col s8">
							<h2>Sign In</h2>
							<div ClassName="row">
								<div ClassName="input-field col s8">
									<input
										id="email"
										type="email"
										ClassName="validate"
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
								id="signinbutton"
								type="submit"
								name="action"
							>
								Sign In <i ClassName="fas fa-sign-in-alt" />
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

export default Login;
