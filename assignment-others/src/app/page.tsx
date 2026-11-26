"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Divider from "@/components/Divider";
import Link from "next/link";
import HookCard from "@/components/HookCard";

export default function Page() {
	const [count, setCount] = useState(0);
	const [setup, setSetup] = useState("");
	const [punchline, setPunchline] = useState("");

	useEffect(() => {
		fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=twopart")
			.then((res) => res.json())
			.then((data) => {
				setSetup(data.setup);
				setPunchline(data.delivery);
			});
	}, [count]);

	const inputElement = useRef<HTMLInputElement>(null);
	const focusInput = () => {
		inputElement.current?.focus();
	};

	const [address, setAddress] = useState("123 Wrong St, Cambridge, Massachusetts, USA");
	const [price, setPrice] = useState(100);

	const totalPrice = useMemo(() => {
		const tax = price / 5;
		console.log("Your price has been calculated!");

		return price + tax;
	}, [price]);

	return (
		<div>
			<h1 className="text-3xl font-bold">Bryan Amadeus' Page</h1>
			<h2 className="text-2xl mb-3">2502044264</h2>
			<Link href="/details" className="btn btn-primary">
				Learn more
			</Link>

			<Divider />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<HookCard title="useState">
					<p className="">Counter: {count}</p>
					<button onClick={() => setCount(count + 1)} className="btn">
						Add 1 (also resets joke)
					</button>
				</HookCard>

				<HookCard title="useEffect">
					<h3>Random joke: </h3>
					<p>{setup}</p>
					<p>{punchline}</p>
				</HookCard>

				<HookCard title="useRef">
					<input
						type="text"
						ref={inputElement}
						placeholder="Enter your text"
						className="rounded p-1 border border-gray-300"
					/>
					<button onClick={focusInput} className="btn">
						Focus Input
					</button>
				</HookCard>

				<HookCard title="useMemo">
					<p>Address: {address}</p>
					<p>Total: {totalPrice}</p>
					<button
						onClick={() =>
							setAddress("XYZ Right St, Jakarta Barat, DKI Jakarta, Indonesia")
						}
						className="btn"
					>
						Change address
					</button>
					<button onClick={() => setPrice(price + 100)} className="btn">
						Change price
					</button>
				</HookCard>
			</div>
		</div>
	);
}
