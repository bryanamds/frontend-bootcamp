export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	return (
		<div className="">
			<h1>This is Post ID {id}</h1>
		</div>
	);
}
