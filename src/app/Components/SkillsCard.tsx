'use client';

import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface SkillsCardProps {
	topic: string;
	skills: string[];
	svg: JSX.Element;
	setActiveSlide: React.Dispatch<React.SetStateAction<string>>;
}

export const SkillsCard: React.FC<SkillsCardProps> = ({
	topic,
	skills,
	svg,
	setActiveSlide,
}) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { amount: 0.9 });

	useEffect(() => {
		if (isInView) setActiveSlide(topic);
	}, [isInView, setActiveSlide]);

	return (
		<div
			ref={ref}
			className='p-3 pt-2 w-full h-44 text-sm rounded-lg shadow hover:shadow-xl select-none'
		>
			<div className='flex flex-row items-center justify-center text-green-500'>
				{svg}
				<p className='text-lg text-green-500 p-1'>{topic}</p>
			</div>
			<ul className='text-md space-y-1 text-center'>
				{skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</div>
	);
};
