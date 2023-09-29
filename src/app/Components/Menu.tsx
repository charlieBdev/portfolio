'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Burger from './Burger';
import Cross from './Cross';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Menu() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const currentRoute = usePathname();
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<div className="MOBILE-MENU flex lg:hidden">
				<div
					className={
						isNavOpen
							? `showMenuNav ${
									theme === 'light'
										? 'text-neutral-900 bg-neutral-50'
										: 'text-neutral-50 bg-neutral-900'
							  }`
							: 'hideMenuNav'
					}
					aria-label="Mobile Navigation"
				>
					<div
						className="CROSS-ICON absolute top-0 right-0 px-6 py-8"
						onClick={() => setIsNavOpen(false)}
						aria-label="Close Mobile Navigation"
					>
						<Cross />
					</div>
					<ul
						className={`MENU-LINK-MOBILE-OPEN text-center space-y-12 text-xl`}
					>
						<li>
							<Link
								onClick={() => setIsNavOpen(false)}
								href="/"
								className={
									currentRoute === '/'
										? 'text-pink-400 border-b border-pink-400'
										: 'border-b border-purple-300 text-purple-300'
								}
								aria-label="Home"
							>
								home
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setIsNavOpen(false)}
								href="/about"
								className={
									currentRoute === '/about'
										? 'text-pink-400 border-b border-pink-400'
										: 'border-b border-purple-300 text-purple-300'
								}
								aria-label="About"
							>
								about
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setIsNavOpen(false)}
								href="/projects"
								className={
									currentRoute === '/projects'
										? 'text-pink-400 border-b border-pink-400'
										: 'border-b border-purple-300 text-purple-300'
								}
								aria-label="Projects"
							>
								projects
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setIsNavOpen(false)}
								href="/contact"
								className={
									currentRoute === '/contact'
										? 'text-pink-400 border-b border-pink-400'
										: 'border-b border-purple-300 text-purple-300'
								}
								aria-label="Contact"
							>
								contact
							</Link>
						</li>
						<div
							className="flex space-x-4 text-3xl"
							aria-label="Social Media Links"
						>
							<Link
								href="https://github.com/charlieBdev"
								target="_blank"
								aria-label="GitHub"
							>
								<AiFillLinkedin />
							</Link>
							<Link
								href="https://www.linkedin.com/in/charlie-bishop-4a897314a/"
								target="_blank"
								aria-label="LinkedIn"
							>
								<AiFillGithub />
							</Link>
						</div>
					</ul>
				</div>
				<button
					className="MENU-ICON"
					onClick={() => setIsNavOpen((prev) => !prev)}
					aria-label="Mobile Menu"
				>
					<Burger />
				</button>
			</div>
			<ul className="DESKTOP-MENU hidden mr-3 space-x-12 lg:flex text-purple-300">
				<li>
					<Link
						href="/"
						className={
							currentRoute === '/'
								? 'text-pink-400 border-b border-pink-400'
								: 'border-b border-purple-300'
						}
					>
						home
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className={
							currentRoute === '/about'
								? 'text-pink-400 border-b border-pink-400'
								: 'border-b border-purple-300'
						}
					>
						about
					</Link>
				</li>
				<li>
					<Link
						href="/projects"
						className={
							currentRoute === '/projects'
								? 'text-pink-400 border-b border-pink-400'
								: 'border-b border-purple-300'
						}
					>
						projects
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						className={
							currentRoute === '/contact'
								? 'text-pink-400 border-b border-pink-400'
								: 'border-b border-purple-300'
						}
					>
						contact
					</Link>
				</li>
			</ul>
		</>
	);
}
