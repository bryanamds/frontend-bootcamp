import { Link } from "react-router";

export default function Home() {
	return (
		<div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(./assets/background.jpg)] bg-cover bg-center px-6 md:px-16">
			<div className="max-w-xl text-center">
				<h1 className="mb-4 text-4xl font-bold text-white drop-shadow md:text-6xl">
					Student Club Finder
				</h1>
				<p className="mb-8 text-lg text-white/90 md:text-xl">
					Surround yourself with people of similar passions here in MIT!
				</p>
				<Link to="/clubs" className="btn btn-primary">
					Find clubs
				</Link>
			</div>
		</div>
	);
}
