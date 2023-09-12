import type { Metadata } from "next";
import "./globals.css";
// import Head from 'next/head'
import { Providers } from "./Providers";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
	title: "Charlie B - Jnr Web Dev",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{/* <html lang="en" suppressHydrationWarning> */}
			{/* <html lang="en" className="light" style={{ colorScheme: 'light' }}> */}
			<html lang="en" suppressHydrationWarning className="dark">
				<head>
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
					/>

					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
				</head>
				<body className="flex flex-col text-neutral-900 bg-neutral-50 dark:text-neutral-50 dark:bg-neutral-900">
					<Providers>
						{children}
						<Navbar />
						<main></main>
						<Footer />
					</Providers>
				</body>
			</html>
		</>
	);
}
