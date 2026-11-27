"use client";
import PostCard from "@/components/PostCard";
import { useEffect, useState } from "react";
import { collection, onSnapshot, type Timestamp } from "firebase/firestore";
import getDatabase from "@/lib/firebase";

interface Post {
	id: string;
	title: string;
	content: string;
	createdAt: Timestamp;
}

export default function PostsPage() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [searchQuery, setSearchQuery] = useState("");

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		let unsubscribe = () => {};
		const handleError = (reason: unknown) => {
			setError(reason instanceof Error ? reason : new Error(String(reason)));
			setLoading(false);
		};

		try {
			const db = getDatabase();

			unsubscribe = onSnapshot(
				collection(db, "posts"),
				(snapshot) => {
					try {
						const list = snapshot.docs.map((doc) => ({
							id: doc.id,
							...(doc.data() as Omit<Post, "id">),
						}));

						setPosts(list);
						setLoading(false);
						setError(null);
					} catch (reason) {
						handleError(reason);
					}
				},
				handleError,
			);
		} catch (reason) {
			handleError(reason);
		}

		return unsubscribe;
	}, []);

	if (error) throw error;

	const cleanQuery = searchQuery.trim().toLowerCase();
	const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(cleanQuery));

	if (loading) return <p>Loading posts...</p>;

	return (
		<div>
			{/* TITLE */}
			<h1 className="mb-5">Posts</h1>

			{/* SEARCH BAR */}
			<label className="input mb-5 w-full">
				<svg
					className="h-[1em] opacity-50"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<g
						strokeLinejoin="round"
						strokeLinecap="round"
						strokeWidth="2.5"
						fill="none"
						stroke="currentColor"
					>
						<circle cx="11" cy="11" r="8"></circle>
						<path d="m21 21-4.3-4.3"></path>
					</g>
				</svg>

				<input
					type="search"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="grow"
					placeholder="Search by title"
				/>
			</label>

			{/* POSTS */}
			<div className="grid grid-cols-3 gap-5">
				{filteredPosts.map((post) => {
					const createdAt = post.createdAt.toDate();
					const formattedDate = new Intl.DateTimeFormat("en-GB", {
						day: "numeric",
						month: "short",
						year: "numeric",
					}).format(createdAt);
					return (
						<PostCard
							key={post.id}
							id={post.id}
							title={post.title}
							content={post.content}
							createdAt={formattedDate}
						/>
					);
				})}
			</div>

			{filteredPosts.length === 0 && <p>No post matches your search ;-;</p>}
		</div>
	);
}
