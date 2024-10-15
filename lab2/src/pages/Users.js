import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	console.log(users);

	return (
		<>
			<div className="single-page-title">
				<h2>Welcome to Users-Page</h2>
			</div>
			<div className="users-main">
				{users.map((user) => (
					<Link
						className="users-link"
						key={user.id}
						to={`/user/${user.id}`}
					>
						<ul>
							<li className="users-item"><span className="text-bolder">Name: </span>{user.name}</li>
							<li className="users-item"><span className="text-bolder">Email: </span>{user.email}</li>
							<li className="users-item"><span className="text-bolder">Phone: </span>{user.phone}</li>
							<li className="users-item"><span className="text-bolder">Website: </span>{user.website}</li>
						</ul>
					</Link>
				))}
			</div>
		</>
	);
}
