import React, { Suspense, lazy } from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Profile = lazy(() => import("./components/Profile"));
const Settings = lazy(() => import("./components/Settings"));

const App = () => {
	console.log("APP was rendered");
	return (
		<Router>
			<>
				<nav>
					{console.log("NAV was rendered")}
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
						<li>
							<Link to="/settings">Settings</Link>
						</li>
					</ul>
				</nav>

				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</Suspense>
			</>
		</Router>
	);
};

export default App;
