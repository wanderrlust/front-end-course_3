import React from "react";
import UserList from "./UserList";

const Home = () => {
	return (
		<div className="container">
			<h1>Home Page</h1>
			{console.log("Home was rendered")}
			<p>Welcome to the home page!</p>
			<UserList />
		</div>
	);
};

export default Home;
