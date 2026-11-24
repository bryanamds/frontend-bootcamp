export async function getProducts() {
	const res = await fetch("https://fakestoreapi.com/products?limit=5");

	if (!res.ok) {
		throw new Error("Failed to fetch products!");
	}

	return res.json();
}

export async function getProductById(id: any) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);

	if (!res.ok) {
		throw new Error("Failed to fetch products!");
	}

	return res.json();
}
