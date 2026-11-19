import { Link } from "react-router-dom";

export default function notFound() {
	return (
		<div className="">
			<h1>404</h1>
			<h2>Page not found</h2>
			<Link to="/" className="btn btn-primary">
				Homes
			</Link>
		</div>
	);
}
