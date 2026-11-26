"use client";
import PostCard from "@/components/PostCard";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import getDatabase from "@/lib/firebase";

interface Post {
	id: string;
	title: string;
	content: string;
	createdAt: any;
}

export default function PostsPage() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchPosts() {
			const db = getDatabase();
			const postsCol = collection(db, "posts");
			const snapshot = await getDocs(postsCol);

			const list = snapshot.docs.map((doc) => ({
				id: doc.id,
				...(doc.data() as Omit<Post, "id">),
			}));

			setPosts(list);
			setLoading(false);
		}

		fetchPosts();
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<div className="">
			<h1>Posts</h1>
			<div className="grid grid-cols-3 gap-5">
				{posts.map((post) => (
					<PostCard
						key={post.id}
						id={post.id}
						title={post.title}
						content={post.content}
						createdAt={post.createdAt.toDate().toLocaleString("en-GB")}
					/>
				))}
			</div>
		</div>
	);
}
