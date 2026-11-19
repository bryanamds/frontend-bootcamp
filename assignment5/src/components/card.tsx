import { Link } from "react-router";

type CardProps = {
	id: string;
	name: any;
	image: any;
	shortDescription: any;
};

export default function Card({ id, name, image, shortDescription }: CardProps) {
	return (
		<div className="card bg-base-300 shadow-sm">
			<figure>
				<img src={image} alt="club front image" className="w-full h-42 object-cover" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p>{shortDescription}</p>
				<div className="card-actions justify-end">
					<Link to={`/clubs/${id}`} className="btn btn-primary">
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
}
