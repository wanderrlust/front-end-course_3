import React from "react";
import "./index.css";
import "./reset.css";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import { Toaster } from "react-hot-toast";

export default function App() {
	return (
		<>
			<Toaster position="top-left" />
			<div className="app-wrapper">
				<UserForm />
				<UsersList />
			</div>
		</>
	);
}
