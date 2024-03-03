'use client';

import skillsArr from '@/data/skillsArr';
import { SkillsCard } from '.';
import { useState } from 'react';
// import { motion } from 'framer-motion';

const SkillsList = () => {
	const [activeSlide, setActiveSlide] = useState('Frontend');

	// const handleAnchorClick = (index: number) => {
	// 	setActiveSlide(index);
	// };

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
			<div className='carousel carousel-center sm:hidden rounded-lg pb-6'>
				{skillsArr.map((skill, index) => (
					<div
						key={skill.topic}
						id={`item${index + 1}`}
						className='carousel-item w-full'
					>
						<SkillsCard
							key={skill.topic}
							topic={skill.topic}
							skills={skill.skills}
							svg={skill.svg}
							setActiveSlide={setActiveSlide}
						/>
					</div>
				))}
			</div>
			<div className='flex justify-center w-full gap-4 sm:hidden items-center'>
				{skillsArr.map((skill, index) => (
					<p
						key={skill.topic}
						// href={`#item${index + 1}`}
						className={`text-center ${
							activeSlide === skill.topic
								? 'text-cyan-400 shadow-xl'
								: 'border-none'
						}`}
						// onClick={(event) => handleAnchorClick(index)}
						aria-label={skill.topic}
					>
						{/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}> */}
						{skill.svg}
						{/* </motion.div> */}
					</p>
				))}
			</div>
		</>
	);
};

export default SkillsList;
