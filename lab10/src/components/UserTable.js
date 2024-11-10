import React from "react";

const UserTable = () => {
	return (
		<div className="container">
			<h1>User Table</h1>
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>John Doe</td>
						<td>john@example.com</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jane Smith</td>
						<td>jane@example.com</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default UserTable;
