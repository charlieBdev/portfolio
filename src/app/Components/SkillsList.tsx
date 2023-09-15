"use client";

import skillsArr from "@/data/skillsArr";
import { SkillsCard } from ".";
import { useState, useEffect, useRef } from "react";

const SkillsList = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const handleAnchorClick = (index: number) => {
		setActiveSlide(index);
	};

	return (
		<>
			{/* small plus screens */}
			<div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 hidden">
				{skillsArr.map((skill) => (
					<SkillsCard
						key={skill.topic}
						topic={skill.topic}
						skills={skill.skills}
						svg={skill.svg}
					/>
				))}
			</div>

			{/* mobile carousel */}
			<div className="carousel w-full mt-3 sm:hidden rounded-lg shadow dark:border dark:border-neutral-800 overflow-hidden hover:shadow-xl">
				{skillsArr.map((skill, index) => (
					<div
						key={skill.topic}
						id={`item${index + 1}`}
						className="carousel-item w-full"
					>
						<SkillsCard
							key={skill.topic}
							topic={skill.topic}
							skills={skill.skills}
							svg={skill.svg}
						/>
					</div>
				))}
			</div>
			<div className="flex justify-center w-full py-2 gap-4 sm:hidden">
				{skillsArr.map((skill, index) => (
					<a
						key={skill.topic}
						href={`#item${index + 1}`}
						className={`border rounded text-center ${
							activeSlide === index
								? "text-green-500 shadow-xl border-green-500 border-2"
								: "text-green-500 dark:border-neutral-800"
						}`}
						onClick={(event) => handleAnchorClick(index)} // Update activeSlide when the link is clicked
					>
						{skill.svg}
					</a>
				))}
			</div>
		</>
	);
};

export default SkillsList;
