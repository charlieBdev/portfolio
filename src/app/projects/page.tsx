'use client';

import { useState } from 'react';
import ProjectsList from '../Components/ProjectsList';

import { LuFilter, LuFilterX } from 'react-icons/lu';

interface Tags {
	tags: string[];
}

export default function Projects() {
	const [showFilters, setShowFilters] = useState(false);

	return (
		<section
			id='projects'
			className='h-[calc(100vh-6rem)] flex flex-col justify-center p-6 xl:px-24 gap-1 bg-opacity-90 dark:bg-opacity-90 backdrop-blur dark:backdrop-blur z-10'
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
}
