const techStack = [
	{
		name: "React",
		src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png",
	},
	{
		name: "TailwindCSS",
		src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/3840px-Tailwind_CSS_Logo.svg.png",
	},
	{
		name: "DaisyUI",
		src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDPcDYITbYD8fSOU5Y8UEQoSGpvPlMYDIOyM-V4hlphbUubnvZEJ8euE&s=10",
	},
	{
		name: "Lucide",
		src: "https://avatars.githubusercontent.com/u/66879934?v=4",
	},
];

export default function About() {
	return (
		<section className="px-5 py-5 sm:px-10 sm:py-10">
			<h1 className="text-2xl mb-6 text-center uppercase">ABOUT</h1>

			<div className="mx-auto w-full max-w-3xl">
				<p className="mb-3">
					This app's primary use is to display student clubs. Students can sort the clubs
					based on their names and seek further details of a club by clicking the "View
					details" button.
				</p>
				<p className="mb-3">
					Additionally, students can also join these clubs by clicking the join button.
					However, this is temporary due to authentication not yet implemented in this
					app.
				</p>

				<h2 className="mb-3">Tech stack used:</h2>

				<div className="grid gap-4 justify-center grid-cols-[repeat(2,minmax(0,11rem))] md:grid-cols-[repeat(4,minmax(0,11rem))]">
					{techStack.map((tech) => (
						<div
							key={tech.name}
							className="card bg-base-200 shadow-sm p-4 w-full flex flex-col"
						>
							<h2 className="text-center mb-3">{tech.name}</h2>
							<figure className="flex-1 flex items-center justify-center">
								<img
									src={tech.src}
									alt={`${tech.name} logo`}
									className="w-full h-auto"
								/>
							</figure>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
