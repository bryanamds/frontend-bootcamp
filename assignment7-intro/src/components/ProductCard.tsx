import "../app/globals.css";

interface ProductCardProps {
	title: string;
	price: number;
	image: string;
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
	return (
		<div className="card bg-base-100 w-96 shadow-sm">
			<figure>
				<img src={image} alt="Product image" className="w-24" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{price}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">View details</button>
				</div>
			</div>
		</div>
	);
}
