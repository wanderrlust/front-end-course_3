import React from "react";
import "./index.css";
import "./reset.css";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";

export default function App() {
	return (
		<div className="app-wrapper">
			<UserForm />
			<UsersList />
		</div>
	);
}
