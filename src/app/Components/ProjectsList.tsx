"use client";

import ProjectCard from "./ProjectCard";
import projectsArr from "../../data/projectsArr";
import React, { useState } from "react";

interface ProjectListProps {
	showFilters: boolean;
}

const ProjectsList: React.FC<ProjectListProps> = ({ showFilters }) => {
	const allTags = projectsArr.reduce((tags: string[], project) => {
		return [...tags, ...project.tags];
	}, []);

	const uniqueTags = [...new Set(allTags)].sort();

	const [selectedTag, setSelectedTag] = useState("");

	const toggleTag = (tag: string) => {
		if (selectedTag === tag) {
			// remove if there
			setSelectedTag("");
		} else {
			// add if not there
			setSelectedTag(tag);
		}
	};

	const filteredProjects = projectsArr.filter((project) => {
		if (selectedTag === "") {
			return true;
		} else {
			return project.tags.some((tag) => selectedTag === tag);
		}
	});

	return (
		<div>
			{showFilters && (
				<ul className="flex flex-wrap gap-1 mb-3">
					{uniqueTags.map((tag) => (
						<button
							key={tag}
							onClick={() => {
								toggleTag(tag);
							}}
							className={`border border-neutral-400 rounded-lg text-neutral-400 font-light text-sm px-1 hover:shadow-lg ${
								selectedTag === tag ? "selected" : ""
							}`}
						>
							{tag}
						</button>
					))}
				</ul>
			)}

			<section className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
				{/* <section className="flex justify-center flex-wrap gap-3"> */}
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
					/>
				))}
			</section>
		</div>
	);
};

export default ProjectsList;
