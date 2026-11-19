import { useState } from "react";
import Card from "../components/card";
import { clubs } from "../data/clubs";

export default function Clubs() {
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
	const [view, setView] = useState<"grid" | "list">("grid");
	const sortedClubs = [...clubs].sort((a, b) =>
		sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
	);

	return (
		<div>
			{/* Page title */}
			<h1 className="text-2xl mb-6">This is clubs page</h1>

			{/* Sort buttons */}
			<div className="flex gap-2 mb-4">
				<button
					className={`btn ${sortOrder === "asc" ? "btn-primary" : ""}`}
					onClick={() => setSortOrder("asc")}
				>
					A → Z
				</button>
				<button
					className={`btn ${sortOrder === "desc" ? "btn-primary" : ""}`}
					onClick={() => setSortOrder("desc")}
				>
					Z → A
				</button>
			</div>

			{/* View toggle: Grid View [switch] List View */}
			<div className="flex items-center gap-3 mb-6">
				<span>Grid View</span>
				<input
					type="checkbox"
					className="toggle toggle-primary"
					checked={view === "list"}
					onChange={(e) => setView(e.target.checked ? "list" : "grid")}
				/>
				<span>List View</span>
			</div>

			{/* Clubs */}
			<div
				className={
					view === "grid"
						? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
						: "flex flex-col gap-4"
				}
			>
				{sortedClubs.map((club) => (
					<Card
						key={club.id}
						id={club.id}
						name={club.name}
						image={club.image}
						shortDescription={club.shortDescription}
					/>
				))}
			</div>
		</div>
	);
}
