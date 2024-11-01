import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateUser, deleteUser } from "../actions/userActions";

const UsersList = () => {
	const dispatch = useDispatch();
	const { users, loading, error } = useSelector((state) => state.users);
	const [editingUser, setEditingUser] = useState(null);
	const [updatedData, setUpdatedData] = useState({
		first_name: "",
		last_name: "",
		email: "",
	});

	const handleEditClick = (user) => {
		setEditingUser(user.id);
		setUpdatedData({
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
		});
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleUpdateUser = (id) => {
		dispatch(updateUser(id, updatedData));
		setEditingUser(null);
	};

	const handleDeleteUser = (id) => {
		dispatch(deleteUser(id));
	};

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
						<div className="user-item-info">
							{editingUser === user.id ? (
								<>
									<div className="user-name">
										<span className="strong-font">
											ПІБ:{" "}
										</span>
										<input
											type="text"
											name="first_name"
											value={updatedData.first_name}
											onChange={handleInputChange}
										/>
										<input
											type="text"
											name="last_name"
											value={updatedData.last_name}
											onChange={handleInputChange}
										/>
									</div>
									<div className="user-email">
										<span className="strong-font">
											Email:{" "}
										</span>
										<input
											type="email"
											name="email"
											value={updatedData.email}
											onChange={handleInputChange}
										/>
									</div>
								</>
							) : (
								<>
									<div className="user-name">
										<span className="strong-font">
											ПІБ:{" "}
										</span>
										{user.first_name} {user.last_name}
									</div>
									<div className="user-email">
										<span className="strong-font">
											Email:{" "}
										</span>
										{user.email}
									</div>
								</>
							)}
						</div>
						<div className="user-item-tools">
							{editingUser === user.id ? (
								<button
									className="user-update-btn"
									onClick={() => handleUpdateUser(user.id)}
								>
									✔
								</button>
							) : (
								<>
									<button
										className="user-update-btn"
										onClick={() => handleEditClick(user)}
									>
										🖍
									</button>
									<button
										className="user-update-btn"
										onClick={() =>
											handleDeleteUser(user.id)
										}
									>
										🗑
									</button>
								</>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UsersList;
