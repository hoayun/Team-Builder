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
			localStorage.setItem("usertoken", response.data.token);
			console.log(response.data.token);
			return response.data.token;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const registerTeam = (newTeam) => {
	return axios
		.post("/create", {
			
			memo: newTeam.memo,
			name: newTeam.name,
			game: newTeam.game,
			type: newTeam.type,
			player1: newTeam.player
		
		})
		.then((response) => {
			console.log("Registered");
			console.log(response)

		});
};
