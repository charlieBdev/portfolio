'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Bubbles = () => {
	const [bubbles, setBubbles] = useState([]);
	const maxBubbleSize = 83;

	const getRandomColor = () => {
		const colors = [
			'244, 114, 182',
			// cyan
			'34, 211, 238',
			// emerald
			// '16, 185, 129',
			'250, 204, 21',
			'251, 146, 60',
			// purple
			'216, 180, 254',
			// green
			'34, 197, 94',
			// '255, 255, 255',
			// '0, 0, 0',
		];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	};

	useEffect(() => {
		const initialBubbles = [];
		for (let i = 0; i < 48; i++) {
			initialBubbles.push({
				id: i, // Add an ID to identify each bubble
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight,
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

	return (
		<div className='bg-inherit mt-20 fixed top-0 left-0 w-full'>
			<AnimatePresence>
				{bubbles.map((bubble) => (
					<motion.div
						key={bubble.id}
						style={{
							position: 'absolute',
							left: bubble.x,
							top: bubble.y,
							width: bubble.radius,
							height: bubble.radius,
							borderRadius: '50%',
							backgroundColor: `rgba(${bubble.color}, 0.1)`,
							border: `1px solid rgba(${bubble.color}, 1)`,
							cursor: 'pointer',
							zIndex: 100,
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
	);
};
