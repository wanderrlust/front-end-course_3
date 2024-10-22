import React from "react";
import "./reset.css";
import Tasks from "./components/Tasks";
import "./index.css";
import Users from "./components/Users";

export default function App() {
	return (
		<>
			<h2>Task reducer:</h2>
			<Tasks />
			<h2>Users reducer:</h2>
			<Users />
		</>
	);
}
