import React, { useState, Suspense, lazy } from "react";
import UserList from "./UserList";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

const Home = () => {
	const [showHeavyComponent, setShowHeavyComponent] = useState(false);

	return (
		<div className="container">
			<h1>Home Page</h1>
			{console.log("Home was rendered")}
			<p>Welcome to the home page!</p>
			<UserList />
			<button className="heavy-btn" onClick={() => setShowHeavyComponent(true)}>
				Load Heavy Component
			</button>
			{showHeavyComponent && (
				<Suspense fallback={<p>Loading heavy component...</p>}>
					<HeavyComponent />
				</Suspense>
			)}
		</div>
	);
};

export default Home;
