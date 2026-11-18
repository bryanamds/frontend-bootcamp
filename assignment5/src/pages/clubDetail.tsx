import { useParams, Link } from "react-router-dom";
import { clubs } from "../data/clubs";

export default function ClubDetail() {
	const { id } = useParams();
	const club = clubs.find((c) => c.id === id);

	if (!club) {
		return (
			<div>
				<h1 className="text-2xl">Club not found</h1>
				<Link to="/clubs" className="btn mt-4">
					Back to clubs
				</Link>
			</div>
		);
	}

	return (
		<div>
			<Link to="/clubs" className="btn mb-4">
				← Back
			</Link>

			<img src={club.image} alt={club.name} className="w-96 rounded-lg" />
			<h1 className="text-3xl my-4">{club.name}</h1>
			<p className="mb-6">{club.description}</p>

			<h2 className="text-xl mb-2">Events</h2>
			<ul>
				{club.events.map((event) => (
					<li key={event.name}>
						{event.name} — {event.date}
					</li>
				))}
			</ul>
		</div>
	);
}
