'use client';

import getRandomColor from '@/utils/getRandomColor';
import {
	AnimatePresence,
	motion,
	useInView,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export const Bubbles = ({ setActiveLink }) => {
	const ref = useRef(null);
	const isInViewMainText = useInView(ref, { amount: 0.9 });
	const [opacity, setOpacity] = useState(0);

	useEffect(() => {
		if (isInViewMainText) setActiveLink('Home');
	}, [isInViewMainText, setActiveLink]);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

	const [bubbles, setBubbles] = useState([]);
	const maxBubbleSize = 83;

	useEffect(() => {
		const initialBubbles = [];
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;

		for (let i = 0; i < 36; i++) {
			initialBubbles.push({
				id: i,
				x: Math.random() * (windowWidth - maxBubbleSize),
				y: Math.random() * (windowHeight - maxBubbleSize),
				radius: Math.random() * maxBubbleSize,
				color: getRandomColor(),
			});
		}
		setBubbles(initialBubbles);
	}, []);

	const popBubble = (bubbleId) => {
		const updatedBubbles = bubbles.filter((bubble) => bubble.id !== bubbleId);
		setBubbles(updatedBubbles);
	};

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		setOpacity(latest);
	});

	return (
		<div
			ref={ref}
			className='relative min-h-[calc(100vh-5rem)] mt-20 flex flex-col justify-center items-center'
		>
			<motion.div
				style={{
					y: textY,
					opacity: 1 - opacity,
				}}
			>
				<p className='text-8xl relative select-none z-10'>Hello</p>
			</motion.div>
			<div className='mt-20'>
				<AnimatePresence>
					{bubbles.map((bubble) => (
						<motion.div
							key={bubble.id}
							style={{
								position: 'absolute',
								left: bubble.x,
								top: bubble.y,
								y: backgroundY,
								width: bubble.radius,
								height: bubble.radius,
								borderRadius: '50%',
								backgroundColor: `rgba(${bubble.color}, 0.1)`,
								border: `1px solid rgba(${bubble.color}, 1)`,
								cursor: 'pointer',
								zIndex: 0,
							}}
							onClick={() => popBubble(bubble.id)}
							className='hover:animate-pulse'
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							whileHover={{ scale: 0.9 }}
							exit={{ opacity: 0, scale: 1.3 }}
						></motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};
