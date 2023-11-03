'use client';

import ProjectCard from './ProjectCard';
import projectsArr from '../../data/projectsArr';
import React, { useState } from 'react';

interface ProjectListProps {
	showFilters: boolean;
}

const ProjectsList: React.FC<ProjectListProps> = ({ showFilters }) => {
	const allTags = projectsArr.reduce((tags: string[], project) => {
		return [...tags, ...project.tags];
	}, []);

	const uniqueTags = [...new Set(allTags)].sort((a, b) =>
		a[0].toLowerCase().localeCompare(b[0].toLowerCase())
	);

	const [selectedTag, setSelectedTag] = useState('');

	const toggleTag = (tag: string) => {
		if (selectedTag === tag) {
			// remove if there
			setSelectedTag('');
		} else {
			// add if not there
			setSelectedTag(tag);
		}
	};

	const filteredProjects = projectsArr.filter((project) => {
		if (selectedTag === '') {
			return true;
		} else {
			return project.tags.some((tag) => selectedTag === tag);
		}
	});

	return (
		<div>
			{showFilters && (
				<ul className='flex gap-1 items-center justify-start carousel carousel-center pb-3 rounded-lg'>
					{uniqueTags.map((tag) => (
						<button
							key={tag}
							onClick={() => {
								toggleTag(tag);
							}}
							className={`carousel-item border border-neutral-400 rounded-lg text-neutral-400 font-light text-sm px-2 py-1 hover:shadow-lg ${
								selectedTag === tag ? 'selected' : ''
							}`}
						>
							{tag}
						</button>
					))}
				</ul>
			)}

			{/* <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"> */}
			<div className='flex items-center justify-center'>
				<div className='carousel carousel-center gap-3 pb-6 rounded-lg'>
					{filteredProjects.map((project) => (
						<ProjectCard
							key={project.name}
							name={project.name}
							desc={project.desc}
							imgURL={project.imgURL}
							tags={project.tags}
							btnText={project.btnText}
							btnLink={project.btnLink}
							selectedTag={selectedTag}
							toggleTag={toggleTag}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsList;
