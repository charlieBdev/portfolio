'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Burger from './Burger';
import Cross from './Cross';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Menu() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [currNav, setCurrNav] = useState('Home');
	const { theme } = useContext(ThemeContext);

	const handleClick = (navLink: string) => {
		if (isNavOpen) setIsNavOpen(false);
		setCurrNav(navLink);
		console.log(navLink);
	};

	return (
		<>
			<div className='MOBILE-MENU flex lg:hidden'>
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
					aria-label='Mobile Navigation'
				>
					<motion.div
						className='CROSS-ICON absolute top-0 right-0 px-6 py-6'
						onClick={() => setIsNavOpen(false)}
						aria-label='Close Mobile Navigation'
					>
						<motion.div
							whileTap={{ scale: 0.5 }}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
						>
							<Cross />
						</motion.div>
					</motion.div>
					<ul
						className={`MENU-LINK-MOBILE-OPEN text-center space-y-12 text-xl`}
					>
						<li>
							<Link
								onClick={() => handleClick('Home')}
								href='/'
								className={
									currNav === 'Home'
										? 'text-pink-400 border-b border-pink-400'
										: 'border-b border-purple-300 text-purple-300'
								}
								aria-label='Home'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								onClick={() => handleClick('About')}
								href='#about'
								className={
									currNav === 'About'
										? 'text-pink-400 border-b border-pink-400'
										: 'border-b border-purple-300 text-purple-300'
								}
								aria-label='About'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								onClick={() => handleClick('Projects')}
								href='#projects'
								className={
									currNav === 'Projects'
										? 'text-pink-400 border-b border-pink-400'
										: 'border-b border-purple-300 text-purple-300'
								}
								aria-label='Projects'
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								onClick={() => handleClick('Contact')}
								href='#contact'
								className={
									currNav === 'Contact'
										? 'text-pink-400 border-b border-pink-400'
										: 'border-b border-purple-300 text-purple-300'
								}
								aria-label='Contact'
							>
								Contact
							</Link>
						</li>
						<div
							className='flex space-x-4 text-3xl'
							aria-label='Social Media Links'
						>
							<Link
								href='https://github.com/charlieBdev'
								target='_blank'
								aria-label='GitHub'
							>
								<motion.div
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.5 }}
								>
									<AiFillGithub />
								</motion.div>
							</Link>
							<Link
								href='https://www.linkedin.com/in/charlie-bishop-4a897314a/'
								target='_blank'
								aria-label='LinkedIn'
							>
								<motion.div
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.5 }}
								>
									<AiFillLinkedin />
								</motion.div>
							</Link>
						</div>
					</ul>
				</div>
				<button
					className='MENU-ICON'
					onClick={() => setIsNavOpen((prev) => !prev)}
					aria-label='Mobile Menu'
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						whileTap={{ scale: 0.5 }}
					>
						<Burger />
					</motion.div>
				</button>
			</div>

			<ul className='DESKTOP-MENU hidden mr-3 space-x-12 lg:flex text-purple-300'>
				<li>
					<Link
						href='/'
						className={
							currNav === 'Home'
								? 'text-pink-400 border-b border-pink-400'
								: 'border-b border-purple-300'
						}
						onClick={() => handleClick('Home')}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href='#about'
						className={
							currNav === 'About'
								? 'text-pink-400 border-b border-pink-400'
								: 'border-b border-purple-300'
						}
						onClick={() => handleClick('About')}
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href='#projects'
						className={
							currNav === 'Projects'
								? 'text-pink-400 border-b border-pink-400'
								: 'border-b border-purple-300'
						}
						onClick={() => handleClick('Projects')}
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						href='#contact'
						className={
							currNav === 'Contact'
								? 'text-pink-400 border-b border-pink-400'
								: 'border-b border-purple-300'
						}
						onClick={() => handleClick('Contact')}
					>
						Contact
					</Link>
				</li>
			</ul>
		</>
	);
}
