import Card from "../components/card";
import { clubs } from "../data/clubs";

export default function Clubs() {
	return (
		<div className="">
			<h1 className="text-2xl mb-20">This is clubs page</h1>

			<div className="flex flex-row gap-4">
				{clubs.map((club) => (
					<Card
						name={club.name}
						image={club.image}
						shortDescription={club.shortDescription}
					/>
				))}
			</div>
		</div>
	);
}
