"use client";

import Link from "next/link";
import Flunderscore from "./Components/Flunderscore";
import getRandomSong from "@/utils/getRandomSong";
import { useEffect, useState } from "react";
import Bubbles from "./Components/Bubbles";

export default function Home() {
	const [songURL, setSongURL] = useState<string>("");

	useEffect(() => {
		setSongURL(getRandomSong());
	}, []);

	const handleClick = () => {
		const newSongURL = getRandomSong();
		setSongURL(newSongURL);
		window.open(songURL, "_blank");
	};

	return (
		<section className="flex flex-col justify-center items-center min-h-screen relative">
			<Bubbles />
			<p className="text-6xl text-center relative select-none">
				e
				<Link href="/about" className="animate-pulse text-purple-300">
					a
				</Link>
				t
			</p>
			<p className="text-6xl text-center relative select-none">
				slee
				<Link href="/projects" className="animate-pulse text-purple-300">
					p
				</Link>
			</p>
			<p className="text-6xl text-center relative select-none">
				<Link href="/contact" className="animate-pulse text-purple-300">
					c
				</Link>
				ode
			</p>
			<p className="text-6xl text-center relative select-none">
				rep
				<Link
					onClick={handleClick}
					href="/"
					className="animate-pulse text-purple-300"
				>
					e
				</Link>
				at
			</p>
			{/* <p className="text-6xl text-center">repeat</p> */}
			<Flunderscore />
		</section>
	);
}
