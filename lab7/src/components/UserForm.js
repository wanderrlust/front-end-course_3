import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/userActions";

const UserForm = () => {
	const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createUser({ first_name: firstName, last_name: lastName, email: email}));
		setFirstName("");
		setLastName("");
		setEmail("");
	};

	return (
		<form onSubmit={handleSubmit} className="user-form">
			<input
				className="user-input"
				type="text"
				placeholder="Ім'я"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
				required
			/>
			<input
				className="user-input"
				type="text"
				placeholder="Прізвище"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
				required
			/>
			<input
				className="user-input"
				type="text"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<button className="user-add-btn" type="submit">Додати користувача</button>
		</form>
	);
};

export default UserForm;
