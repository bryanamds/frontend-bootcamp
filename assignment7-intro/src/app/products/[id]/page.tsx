import { getProductById } from "@/lib/api";
import FavouriteButton from "@/components/FavouriteButton";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const product = await getProductById(id);

	return (
		<div className="font-sans grid grid-cols-2 md:m-20">
			<img src={product.image} alt="Product image" />
			<div className="">
				<h1 className="text-2xl">{product.title}</h1>
				<div className="flex items-center">
					<p>{product.rating.rate}⭐</p>
					<p className="text-sm text-gray-400">({product.rating.count})</p>
				</div>
				<p className="text-green-500">${product.price}</p>

				<p className="mt-2">{product.description}</p>
				<div className="badge badge-neutral badge-soft mt-5">{product.category}</div>
				<div className="mt-3">
					<FavouriteButton />
				</div>
			</div>
		</div>
	);
}
