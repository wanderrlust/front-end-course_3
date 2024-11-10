import React from "react";

const UserList = () => {
	return (
		<div className="container">
			<h1>User List</h1>
			<ul className="user-list">
				<li>
					<strong>Name:</strong> John Doe <br />
					<strong>Email:</strong> john@example.com
				</li>
				<li>
					<strong>Name:</strong> Jane Smith <br />
					<strong>Email:</strong> jane@example.com
				</li>
			</ul>
		</div>
	);
};

export default UserList;
