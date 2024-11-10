import React from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";
import UserTable from "./components/UserTable";

const App = () => {
	return (
		<Router>
			<>
				<nav>
					{console.log("NAV was rendered")}
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/profile">Profile</a>
						</li>
						<li>
							<a href="/settings">Settings</a>
						</li>
						<li>
							<a href="/user-details">User Details</a>
						</li>
						<li>
							<a href="/user-list">User List</a>
						</li>
						<li>
							<a href="/user-table">User Table</a>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/user-details" element={<UserDetails />} />
					<Route path="/user-list" element={<UserList />} />
					<Route path="/user-table" element={<UserTable />} />
				</Routes>
			</>
		</Router>
	);
};

export default App;
