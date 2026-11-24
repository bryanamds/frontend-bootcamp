import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

export default async function Home() {
	const products = await getProducts();

	return (
		<div className="font-sans">
			<h1 className="text-2xl text-center mb-6">Products</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{products.map((product: any) => (
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
					/>
				))}
			</div>
		</div>
	);
}
