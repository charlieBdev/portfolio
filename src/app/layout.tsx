import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
// import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Toaster } from 'sonner';
// import Head from 'next/head';

export const metadata: Metadata = {
	title: 'Charlie B - Jnr Web Dev',
	description: 'Portfolio website of Charlie B',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className='!scroll-smooth overflow-x-hidden transition-all duration-500 ease-in-out'
		>
			<head>
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
				/>

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />

				{/* Google tag (gtag.js) */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag() {
								dataLayer.push(arguments);
							}
							gtag('js', new Date());
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
								page_path: window.location.pathname,
							});
						`,
					}}
				></script>
			</head>
			<body className='flex flex-col justify-between'>
				<ThemeProvider>
					{/* <Navbar /> */}
					<main className='flex flex-col'>{children}</main>
					<Footer />
					<Toaster richColors />
				</ThemeProvider>
			</body>
		</html>
	);
}
