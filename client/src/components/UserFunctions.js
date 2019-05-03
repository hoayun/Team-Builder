import axios from "axios";

export const register = (newUser) => {
	return axios
		.post("users/register", {
			
			email: newUser.email,
			password: newUser.password,
			screenname: newUser.screenname
		})
		.then((response) => {
			console.log("Registered");
			console.log(response)
		});
};

export const login = (user) => {
	return axios
		.post("users/login", {
			email: user.email,
			password: user.password
		})
		.then((response) => {
			localStorage.setItem("usertoken", response.data);
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
};