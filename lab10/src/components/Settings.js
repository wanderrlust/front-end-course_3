import React from "react";
import UserTable from "./UserTable";

const Settings = () => {
	return (
		<div className="container">
			<h1>Settings Page</h1>
			{console.log("Settings was rendered")}
			<p>This is the Settings page.</p>
			<UserTable />
		</div>
	);
};

export default Settings;
