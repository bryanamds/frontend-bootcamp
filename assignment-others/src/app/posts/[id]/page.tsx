import getDatabase from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const db = getDatabase();

	const postSnapshot = await getDoc(doc(db, "posts", id));

	if (!postSnapshot.exists()) {
		return <h1>Not found</h1>;
	}

	const post = postSnapshot.data();
	const createdAt = post.createdAt.toDate();
	const formattedDate = new Intl.DateTimeFormat("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(createdAt);

	return (
		<div className="md:mx-20 lg:mx-50">
			<p className="my-3">{formattedDate}</p>
			<h1 className="text-5xl mb-10">{post.title}</h1>
			<p className="text-lg">{post.content}</p>
		</div>
	);
}
