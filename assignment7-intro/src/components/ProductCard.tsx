import Link from "next/link";
import "../app/globals.css";

interface ProductCardProps {
	id: any;
	title: string;
	price: number;
	image: string;
}

export default function ProductCard({ id, title, price, image }: ProductCardProps) {
	return (
		<div className="card bg-base-200 shadow-sm">
			<figure>
				<img src={image} alt="Product image" className="w-40 h-40 object-contain mt-7" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{price}</p>
				<div className="card-actions justify-end">
					<Link href={`/products/${id}`} className="btn btn-error">
						View details
					</Link>
				</div>
			</div>
		</div>
	);
}
