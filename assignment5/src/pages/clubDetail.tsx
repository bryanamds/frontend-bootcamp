import { useParams, Link } from "react-router-dom";
import { clubs } from "../data/clubs";
import NotFound from "../pages/notfound";
import { useEffect, useState } from "react";

const STORAGE_KEY = "joinedClubs";

function getJoinedClubs(): string[] {
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) {
			return JSON.parse(saved);
		} else {
			return [];
		}
	} catch {
		return [];
	}
}

export default function ClubDetail() {
	const { id } = useParams();
	const club = clubs.find((c) => c.id === id);

	const [joined, setJoined] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);

	useEffect(() => {
		if (id) {
			setJoined(getJoinedClubs().includes(id));
		}
	}, [id]);

	function handleJoin() {
		if (!id) return;

		const joinedClubs = getJoinedClubs();

		if (!joinedClubs.includes(id)) {
			joinedClubs.push(id);
			localStorage.setItem(STORAGE_KEY, JSON.stringify(joinedClubs));
		}

		setJoined(true);
		setShowConfirm(true);
	}

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
					<p className="mb-4">{club.description}</p>
					{joined ? (
						<button className="btn btn-success" disabled>
							You have joined this club!
						</button>
					) : (
						<button className="btn btn-primary" onClick={handleJoin}>
							Join Club
						</button>
					)}

					{showConfirm && (
						<div role="alert" className="alert alert-success mt-4">
							<span>Successfully joined the {club.name}!</span>
						</div>
					)}
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
