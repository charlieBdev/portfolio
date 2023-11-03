'use client';

import { useEffect, useRef, useState } from 'react';
import ProjectsList from './ProjectsList';

import { LuFilter, LuFilterX } from 'react-icons/lu';
import { useInView, motion } from 'framer-motion';
import { SectionProps } from '../interfaces/SectionProps';

export const ProjectsPage = (props: SectionProps) => {
	const { setActiveLink } = props;
	const [showFilters, setShowFilters] = useState(false);

	const ref = useRef(null);
	const isInViewProjects = useInView(ref, { amount: 0.9 });

	useEffect(() => {
		if (isInViewProjects) setActiveLink('Projects');
	}, [isInViewProjects, setActiveLink]);

	return (
		<section
			ref={ref}
			id='projects'
			className='min-h-[calc(100vh)] pt-20 flex flex-col justify-center items-between p-6 xl:px-24 gap-1 bg-opacity-90 dark:bg-opacity-90 backdrop-blur dark:backdrop-blur'
		>
			<div className='flex justify-between items-center'>
				<h2 className='text-lg text-pink-400'>Projects</h2>
				<div
					className='flex gap-1 items-center hover:cursor-pointer text-neutral-400'
					onClick={() => setShowFilters(!showFilters)}
				>
					<p className='text-sm '>{showFilters ? 'Hide' : 'Show'} filters </p>
					{showFilters ? <LuFilterX /> : <LuFilter />}
				</div>
			</div>
			<ProjectsList showFilters={showFilters} />
		</section>
	);
};
