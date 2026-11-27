import Link from "next/link";

interface PostCardProps {
	id: string;
	title: string;
	content: string;
	createdAt: any;
}

export default function PostCard({ id, title, content, createdAt }: PostCardProps) {
	return (
		<Link
			href={`/posts/${id}`}
			className="card bg-base-100 card-md shadow-sm hover:bg-base-300"
		>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p className="line-clamp-3">{content}</p>

				<div className="justify-end card-actions mt-5">{createdAt}</div>
			</div>
		</Link>
	);
}
