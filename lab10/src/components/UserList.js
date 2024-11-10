import React from "react";

const UserList = () => {
	return (
		<>
			<h2>User List</h2>
			{console.log("User List was rendered")}
			<ul className="user-list">
				{[
					{ name: "John Doe", email: "john@example.com" },
					{ name: "Jane Smith", email: "jane@example.com" },
					{ name: "Michael Brown", email: "michael@example.com" },
					{ name: "Emily Davis", email: "emily@example.com" },
					{ name: "Christopher Johnson", email: "chris@example.com" },
					{ name: "Jessica Lee", email: "jessica@example.com" },
					{ name: "Daniel Miller", email: "daniel@example.com" },
					{ name: "Ashley Wilson", email: "ashley@example.com" },
					{ name: "David Moore", email: "david@example.com" },
					{ name: "Olivia Thomas", email: "olivia@example.com" },
				].map((user, index) => (
					<li key={index}>
						<strong>Name:</strong> {user.name} <br />
						<strong>Email:</strong> {user.email}
					</li>
				))}
			</ul>
		</>
	);
};

export default UserList;
