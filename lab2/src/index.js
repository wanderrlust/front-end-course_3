import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="users" element={<Users />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
root.render(<App />);
