import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<>
			<div className="single-page-title">
                <div className="page404"><h1>404</h1></div>
				<h2>
					Your link is not found, please back on{" "}
					<Link to="/">HOME-Page</Link>
				</h2>
			</div>
		</>
	);
}
