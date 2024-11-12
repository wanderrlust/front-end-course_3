import React, { useState } from "react";
import "./reset.css";
import './App.css';
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

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
				{showUserProfile && <UserProfile />}
			</main>
			<Footer />
		</div>
	);
}
