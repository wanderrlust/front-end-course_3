import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SinglePage() {
	const { id } = useParams();
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, [id]);

	return (
		<div>
			{user && (
				<>
					<div className="single-page-title">
						<h1>{user.name}</h1>
					</div>
					<ul>
						<li className="users-item">
							<span className="text-bolder">Email: </span>
							{user.email}
						</li>
						<li className="users-item">
							<span className="text-bolder">Phone: </span>
							{user.phone}
						</li>
						<li className="users-item">
							<span className="text-bolder">Website: </span>
							{user.website}
						</li>
					</ul>
				</>
			)}
		</div>
	);
}
