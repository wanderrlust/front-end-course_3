import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/userActions";

const UsersList = () => {
	const dispatch = useDispatch();
	const { users, loading, error } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	if (loading) {
		return <div className="message-screen">Loading...</div>;
	}
	if (error) {
		return <div className="message-screen">Error: {error}</div>;
	}

	return (
		<div className="users-list-wrap">
			<ul className="users-list">
				{users.map((user) => (
					<li key={user.id} className="user-item">
						<div className="user-name">
							<span className="strong-font">ПІБ: </span>
							{user.first_name} {user.last_name}
						</div>
						<div className="user-email">
							<span className="strong-font">Email: </span>
							{user.email}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UsersList;
