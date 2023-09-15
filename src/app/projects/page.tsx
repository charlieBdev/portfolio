"use client";

import { useState } from "react";
import ProjectsList from "../Components/ProjectsList";

import { LuFilter, LuFilterX } from "react-icons/lu";

interface Tags {
	tags: string[];
}

export default function Projects() {
	const [showFilters, setShowFilters] = useState(false);

	return (
		<div className="mt-24 p-6 xl:px-24 space-y-1 min-h-screen">
			<section className="flex justify-between items-center">
				<h2 className="text-lg text-pink-400">Projects</h2>
				<div
					className="flex gap-1 items-center hover:cursor-pointer"
					onClick={() => setShowFilters(!showFilters)}
				>
					<p className="text-sm text-neutral-400">
						{showFilters ? "Hide" : "Show"} filters{" "}
					</p>
					{showFilters ? <LuFilterX /> : <LuFilter />}
				</div>
			</section>
			<ProjectsList showFilters={showFilters} />
		</div>
	);
}
