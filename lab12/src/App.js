import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

const fetchUserData = async () => {
	return {
		name: "Іван Кучмак",
		age: 20,
		email: "kuchmak@gmail.com",
	};
};

export default function App() {
	const [showUserProfile, setShowUserProfile] = useState(false);

	const handleShowProfile = () => setShowUserProfile(true);

	return (
		<div className="app-container">
			<Header />
			<main>
				<h2>Головна сторінка</h2>
				<button onClick={handleShowProfile}>
					Показати профіль користувача
				</button>
				{showUserProfile && (
					<UserProfile fetchUserData={fetchUserData} />
				)}
			</main>
			<Footer />
		</div>
	);
}
