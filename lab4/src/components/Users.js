import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, toggleUserStatus } from "../reducers/usersSlice";

const Users = () => {
	const dispatch = useDispatch();
	const { users, loading, error } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	if (loading) return <div className="msg">Loading...</div>;
	if (error) return <div className="msg">Error: {error}</div>;

	return (
		<>
			<div className="users-list-title">Users List</div>
			<ul className="users-list">
				{users.map((user) => (
					<li key={user.id} className={`users-list-item ${user.active ? 'active' : ''}`}>
						<span className="users-status">
							{user.name} ({user.active ? "Активний" : "Заблокований"})
						</span>
						<button className="btn-toggle"
							onClick={() => dispatch(toggleUserStatus(user.id))}
						>
							Заблокувати
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default Users;
