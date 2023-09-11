"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Burger from "./Burger";
import Cross from "./Cross";

export default function Menu() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const currentRoute = usePathname();

	return (
		<>
			<div className="MOBILE-MENU flex lg:hidden">
				<div
					className={
						isNavOpen
							? `showMenuNav text-neutral-900 bg-neutral-50 dark:text-neutral-50 dark:bg-neutral-900`
							: "hideMenuNav"
					}
				>
					<div
						className="CROSS-ICON absolute top-0 right-0 px-6 py-8"
						onClick={() => setIsNavOpen(false)}
					>
						<Cross />
					</div>
					<ul
						className={`MENU-LINK-MOBILE-OPEN text-purple-300 text-center space-y-12 text-xl`}
					>
						<li className="">
							<Link
								onClick={() => setIsNavOpen(false)}
								href="/"
								className={
									currentRoute === "/"
										? "text-pink-400 border-b border-pink-400"
										: "border-b border-purple-300"
								}
							>
								home
							</Link>
						</li>
						<li className="">
							<Link
								onClick={() => setIsNavOpen(false)}
								href="/about"
								className={
									currentRoute === "/about"
										? "text-pink-400 border-b border-pink-400"
										: "border-b border-purple-300"
								}
							>
								about
							</Link>
						</li>
						<li className="">
							<Link
								onClick={() => setIsNavOpen(false)}
								href="/projects"
								className={
									currentRoute === "/projects"
										? "text-pink-400 border-b border-pink-400"
										: "border-b border-purple-300"
								}
							>
								projects
							</Link>
						</li>
						<li className="">
							<Link
								onClick={() => setIsNavOpen(false)}
								href="/contact"
								className={
									currentRoute === "/contact"
										? "text-pink-400 border-b border-pink-400"
										: "border-b border-purple-300"
								}
							>
								contact
							</Link>
						</li>
						<div className="flex space-x-4 text-3xl text-neutral-950 dark:text-neutral-50">
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
					</ul>
				</div>
				<button
					className="HAMBURGER-ICON"
					onClick={() => setIsNavOpen((prev) => !prev)}
				>
					<Burger />
				</button>
			</div>
			<ul className="DESKTOP-MENU hidden mr-3 space-x-12 lg:flex text-purple-300">
				<li>
					<Link
						href="/"
						className={
							currentRoute === "/"
								? "text-pink-400 border-b border-pink-400"
								: "border-b border-purple-300"
						}
					>
						home
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className={
							currentRoute === "/about"
								? "text-pink-400 border-b border-pink-400"
								: "border-b border-purple-300"
						}
					>
						about
					</Link>
				</li>
				<li>
					<Link
						href="/projects"
						className={
							currentRoute === "/projects"
								? "text-pink-400 border-b border-pink-400"
								: "border-b border-purple-300"
						}
					>
						projects
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						className={
							currentRoute === "/contact"
								? "text-pink-400 border-b border-pink-400"
								: "border-b border-purple-300"
						}
					>
						contact
					</Link>
				</li>
			</ul>
		</>
	);
}
