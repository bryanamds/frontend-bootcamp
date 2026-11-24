import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

export default async function Home() {
	const products = await getProducts();

	return (
		<div className="font-sans">
			<h1 className="text-2xl">Products</h1>

			<div className="">
				{products.map((product: any) => (
					<ProductCard
						key={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
					/>
				))}
			</div>
		</div>
	);
}
