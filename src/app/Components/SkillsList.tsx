'use client';

import skillsArr from '@/data/skillsArr';
import { SkillsCard } from '.';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsList = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const handleAnchorClick = (index: number) => {
		setActiveSlide(index);
	};

	return (
		<>
			{/* small plus screens */}
			<div className='sm:grid sm:grid-cols-3 gap-3 hidden'>
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
			<div className='carousel carousel-center sm:hidden gap-3 rounded-lg py-6'>
				{skillsArr.map((skill, index) => (
					<div
						key={skill.topic}
						id={`item${index + 1}`}
						className='carousel-item w-[90%]'
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
			{/* <div className='flex justify-center w-full py-2 gap-4 md:hidden items-center'>
				{skillsArr.map((skill, index) => (
					<a
						key={skill.topic}
						// href={`#item${index + 1}`}
						href='#about'
						className={`text-center ${
							activeSlide === index
								? 'text-green-500 shadow-xl animate-pulse'
								: 'border-none'
						}`}
						onClick={(event) => handleAnchorClick(index)}
						aria-label={skill.topic}
					>
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
							{skill.svg}
						</motion.div>
					</a>
				))}
			</div> */}
		</>
	);
};

export default SkillsList;
