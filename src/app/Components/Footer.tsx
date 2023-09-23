"use client";

// import { useTheme } from "next-themes"
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
	return (
		// <footer className={`flex justify-between items-center px-6 xl:px-24 border-t border-neutral-500 fixed bottom-0 left-0 right-0 h-16 text-neutral-700 bg-white dark:text-white dark:bg-black`}>
		<footer className="h-16 flex justify-between items-center px-6 xl:px-24 border-t border-neutral-200 dark:border-neutral-800 bg-opacity-60 backdrop-blur dark:bg-opacity-60 dark:backdrop-blur">
			<div className="flex space-x-4 text-3xl">
				<Link href="https://github.com/charlieBdev" target="_blank">
					<AiFillLinkedin />
				</Link>
				<Link
					href="https://www.linkedin.com/in/charlie-bishop-4a897314a/"
					target="_blank"
				>
					<AiFillGithub />
				</Link>
			</div>
			<p className="text-xs ml-auto font-light select-none">
				© 2023 | <span className="hidden sm:inline-block">Made by </span>{" "}
				Charlie Bishop{" "}
				<span className="hidden md:inline-block">with lots of ☕</span>{" "}
				<span className="hidden lg:inline-block">and 🥑</span>{" "}
				<span className="hidden xl:inline-block">but mostly 🍪</span>
			</p>
		</footer>
	);
}
