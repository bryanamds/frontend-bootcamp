import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: "Assignment App",
	description: "By me! A student with NIM 2502044264",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className="h-full antialiased">
			<body className="min-h-full flex flex-col">
				<Navbar />
				<div className="mx-5 md:mx-10 lg:mx-40">{children}</div>
			</body>
		</html>
	);
}
