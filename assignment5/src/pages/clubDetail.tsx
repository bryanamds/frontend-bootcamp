import { useParams, Link } from "react-router-dom";
import { clubs } from "../data/clubs";
import NotFound from "../pages/notfound";

export default function ClubDetail() {
	const { id } = useParams();
	const club = clubs.find((c) => c.id === id);

	if (!club) {
		return <NotFound />;
	}

	return (
		<div className="m-5 sm:m-10">
			<Link to="/clubs" className="btn mb-4">
				← Back
			</Link>

			<section className="grid md:grid-cols-2 gap-4 md:text-left">
				<div>
					<img src={club.image} alt={club.name} className="w-full rounded-lg" />
				</div>
				<div>
					<h1 className="text-3xl my-4">{club.name}</h1>
					<p>{club.description}</p>
				</div>
			</section>

			<h2 className="text-xl mt-8 mb-4">Upcoming events</h2>
			<div className="flex gap-2">
				{club.events.map((event) => (
					<div className="card w-74 shadow-sm bg-amber-100">
						<div className="card-body">
							<h2 className="card-title">{event.name}</h2>
							<p>on {event.date}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
