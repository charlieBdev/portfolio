import type { Metadata } from 'next';
import './globals.css';
// import Head from 'next/head'
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export const metadata: Metadata = {
	title: 'Charlie B - Jnr Web Dev',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
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
			<body className="flex flex-col min-h-screen justify-between">
				<ThemeProvider>
					<Navbar />
					<main className="flex-grow mt-24 flex flex-col">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
