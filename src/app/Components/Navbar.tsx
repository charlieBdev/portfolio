"use client";

import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import Menu from "./Menu";

export default function Navbar() {
	return (
		<header>
			<nav className="px-6 xl:px-24 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 fixed top-0 w-full h-24 shadow-xl bg-opacity-60 backdrop-blur dark:bg-opacity-60 dark:backdrop-blur">
				<Link href="/" className="md:flex md:items-center md:space-x-3">
					<h1 className="text-2xl font-medium text-cyan-400">CHARLIE BISHOP</h1>
					<p className="text-lg text-emerald-400">
						Junior<span className="text-yellow-300"> Web Developer</span>
					</p>
				</Link>
				<div className="flex items-center justify-center space-x-3 lg:space-x-12">
					<ThemeChanger />
					<Menu />
				</div>
			</nav>
		</header>
	);
}
