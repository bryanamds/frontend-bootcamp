export default function About() {
	return (
		<div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
			<div className="flex flex-col">
				<h1 className="text-2xl mb-6 text-center uppercase max-lg:mt-10">ABOUT</h1>
				<p className="md:w-125 w-65 mb-2">
					This app's primary use is to display student clubs. Students can sort the clubs
					based on their names and also look at club's details by clicking the "View
					details" button located on every clubs.
				</p>
				<p className="md:w-125 w-65 mb-2">
					Additionally, students can also join these clubs by clicking the join button.
					However, this is temporary due to authentication not yet implemented in this
					app.
				</p>
				<h2 className="mb-2">Tech stack used:</h2>
				<div className="grid gap-4 md:grid-cols-4 grid-cols-2">
					<div className="card bg-base-200 w-30 shadow-sm p-4">
						<h2 className="text-center mb-3">React</h2>
						<figure>
							<img
								src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
								alt="logo"
							/>
						</figure>
					</div>

					<div className="card bg-base-200 w-30 shadow-sm p-4">
						<h2 className="text-center mb-3">TailwindCSS</h2>
						<figure>
							<img
								src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/3840px-Tailwind_CSS_Logo.svg.png"
								alt="logo"
							/>
						</figure>
					</div>

					<div className="card bg-base-200 w-30 shadow-sm p-4">
						<h2 className="text-center mb-3">DaisyUI</h2>
						<figure>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDPcDYITbYD8fSOU5Y8UEQoSGpvPlMYDIOyM-V4hlphbUubnvZEJ8euE&s=10"
								alt="logo"
							/>
						</figure>
					</div>

					<div className="card bg-base-200 w-30 shadow-sm p-4">
						<h2 className="text-center mb-3">Lucide</h2>
						<figure>
							<img
								src="https://avatars.githubusercontent.com/u/66879934?v=4"
								alt="logo"
							/>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
}
