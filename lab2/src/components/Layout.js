import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<header>
				<ul className="nav">
					<li className="nav-item">
						<NavLink className="nav-link" to="/">
							Home
						</NavLink>
					</li>

				</ul>
			</header>

			<main>
				<Outlet />
			</main>

			<footer>Copyright 2024</footer>
		</>
	);
}
