import React, { useEffect, useState } from "react";

export default function UserProfile() {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		setUserData({
			name: "Іван Кучмак",
			age: 20,
			email: "kuchmak@gmail.com",
		});
	}, []);

	return (
		<div className="user-profile">
			<h2>Профіль користувача</h2>
			{userData ? (
				<div>
					<p>Ім'я: {userData.name}</p>
					<p>Вік: {userData.age}</p>
					<p>Email: {userData.email}</p>
				</div>
			) : (
				<p>Завантаження даних...</p>
			)}
		</div>
	);
}
