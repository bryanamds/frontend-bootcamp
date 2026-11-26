import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Assignment App",
	description: "By me! A student with NIM 2502044264",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className="h-full antialiased">
			<body className="min-h-full flex flex-col m-5 lg:m-20">{children}</body>
		</html>
	);
}
