import { cacheLife } from "next/cache";

export async function getProducts() {
	"use cache";
	cacheLife("hours");

	const response = await fetch("https://fakestoreapi.com/products?limit=5");

	if (!response.ok) {
		throw new Error("Failed to fetch products!");
	}

	return response.json();
}
