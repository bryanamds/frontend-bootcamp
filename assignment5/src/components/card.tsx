type CardProps = {
	name: any;
	image: any;
	shortDescription: any;
};

export default function Card({ name, image, shortDescription }: CardProps) {
	return (
		<div className="card bg-base-100 w-96 shadow-sm">
			<figure>
				<img
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p>{shortDescription}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">View Details</button>
				</div>
			</div>
		</div>
	);
}
