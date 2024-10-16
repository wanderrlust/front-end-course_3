import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFoundPage from "./NotFoundPage";

export default function UserDetails() {
	const { id } = useParams();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);
		setError(false);

		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error("User not found");
				}
				return res.json();
			})
			.then((data) => {
				if (Object.keys(data).length === 0) {
					setError(true);
				} else {
					setUser(data);
				}
				setLoading(false);
			})
			.catch((err) => {
				setError(true);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <NotFoundPage />;
	}

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
