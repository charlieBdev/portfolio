'use client';

import SkillsList from './SkillsList';
import IconsList from './IconsList';
import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { SectionProps } from '../interfaces/SectionProps';
import { slideIn } from '../../utils/motion';

export const AboutPage = (props: SectionProps) => {
	const { setActiveLink } = props;
	const ref = useRef(null);
	const isInViewAbout = useInView(ref, { amount: 0.9 });

	useEffect(() => {
		if (isInViewAbout) setActiveLink('About');
	}, [isInViewAbout, setActiveLink]);

	return (
		// flex flex-col justify-center items-center min-h-screen relative
		<section
			ref={ref}
			id='about'
			className='min-h-[calc(100vh)] flex flex-col justify-center gap-3 px-6 xl:px-24 bg-opacity-90 dark:bg-opacity-90 backdrop-blur dark:backdrop-blur'
		>
			<div>
				<motion.h2
					className='text-4xl tracking-wide text-cyan-400 font-bold mb-3'
					initial={{ opacity: 0 }}
					animate={isInViewAbout ? { opacity: 1 } : {}}
					transition={{
						duration: 0.5,
					}}
				>
					About<span className="text-pink-400">.</span>
				</motion.h2>
				<div className='flex flex-col gap-3'>
					<motion.p variants={slideIn('left', 'spring', 0.25, 0.75)}>
						Before reigniting my interest in tech, I was an English language
						teacher abroad and online in the UK. I've had a range of other roles
						in Network Installation and QA to name a few.
					</motion.p>
					<p>
						In August I finished my second bootcamp and I'm looking for{' '}
						<span className=''>Junior</span> or{' '}
						<span className=''>Entry-level</span> roles in{' '}
						<span className=''>Sheffield</span> or{' '}
						<span className=''>Remote/Hybrid</span>.
					</p>
				</div>
			</div>
			<div className='flex flex-col justify-center gap-3'>
				<IconsList />
				<SkillsList />
			</div>
		</section>
	);
};
