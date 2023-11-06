'use client';

import Link from 'next/link';
import ThemeButton from './ThemeButton';
import Menu from './Menu';
import { MenuProps } from '../interfaces/MenuProps';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { unsubscribe } from 'diagnostics_channel';

export default function Navbar(props: MenuProps) {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious();
		// latest > 150 is padding at top to prevent immediate hiding on scroll down
		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		// <header className=''>
		<motion.nav
			variants={{
				visible: { y: 0 },
				hidden: { y: '-100%' },
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.35, ease: 'easeInOut' }}
			className='fixed top-0 w-full px-6 h-20 xl:px-24 flex items-center justify-between shadow-xl bg-opacity-90 backdrop-blur dark:bg-opacity-90 dark:backdrop-blur z-10'
		>
			<Link href='/' className='md:flex md:items-end md:space-x-3'>
				<h1 className='text-2xl font-medium text-cyan-400'>Charlie Bishop</h1>
				<p className='text-lg text-emerald-500'>
					Junior
					<span className='text-yellow-400'> Web Developer</span>
				</p>
			</Link>
			<div className='flex items-center justify-center space-x-3 lg:space-x-12'>
				<ThemeButton />
				<Menu {...props} />
			</div>
		</motion.nav>
		// </header>
	);
}
