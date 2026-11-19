import { Menu } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<Menu />
					</div>
					<ul
						tabIndex={-1}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/clubs">Clubs</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost text-xl">MIT Club Finder</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/clubs">Clubs</Link>
					</li>
					<li>
						<Link to="/About">About</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<a
					className="btn btn-outline hover:bg-black hover:text-white hover:rounded-sm hover:border hover:border-black"
					href="https://github.com/bryanamds/frontend-bootcamp/tree/main/assignment5"
					target="_blank"
				>
					Repository
				</a>
			</div>
		</div>
	);
}
