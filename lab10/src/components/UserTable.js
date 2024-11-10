import React from "react";

const UserTable = () => {
	return (
		<>
			<h2>User Table</h2>
			{console.log("User Table was rendered")}
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{Array.from({ length: 15 }).map((_, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>User {index + 1}</td>
							<td>user{index + 1}@example.com</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default UserTable;
