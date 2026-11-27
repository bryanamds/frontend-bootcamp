"use client";

interface PostsErrorProps {
	error: unknown;
	retry: () => void;
}

export default function PostsError({ retry }: PostsErrorProps) {
	return (
		<div role="alert" className="my-8 rounded-lg bg-base-200 p-6 text-center">
			<h2 className="mb-2 text-xl font-semibold">Something went wrong</h2>
			<p className="mb-4">We could not load the posts. Please try again.</p>
			<button type="button" className="btn btn-primary" onClick={() => retry()}>
				Try again
			</button>
		</div>
	);
}
