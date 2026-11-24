"use client";

import { useEffect, useState } from "react";

export default function FavouriteButton() {
	const [fav, setFav] = useState(false);

	useEffect(() => {
		if (fav) {
			alert("added to wishlist!");
		}
	}, [fav]);

	return (
		<div className="btn btn-error" onClick={() => setFav(!fav)}>
			{fav ? "Remove from Favourite" : "Add to Favourite"}
		</div>
	);
}
