"use client";

import Link from "next/link";
import ThemeButton from "./ThemeButton";
import Menu from "./Menu";

export default function Navbar() {
	return (
		<header className="">
			<nav className="fixed top-0 left-0 right-0 px-6 h-24 xl:px-24 flex items-center justify-between shadow-xl bg-opacity-90 backdrop-blur dark:bg-opacity-90 dark:backdrop-blur z-10">
				<Link href="/" className="md:flex md:items-center md:space-x-3">
					<h1 className="text-2xl font-medium text-cyan-400">CHARLIE BISHOP</h1>
					<p className="text-lg text-emerald-400">
						Junior<span className="text-yellow-300"> Web Developer</span>
					</p>
				</Link>
				<div className="flex items-center justify-center space-x-3 lg:space-x-12">
					<ThemeButton />
					<Menu />
				</div>
			</nav>
		</header>
	);
}
