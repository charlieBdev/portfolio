'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export const Bubbles = () => {
	const [bubbles, setBubbles] = useState([]);
	const maxBubbleSize = 83;

	const getRandomColor = () => {
		const colors = [
			'244, 114, 182',
			'34, 211, 238',
			'52, 211, 153',
			'253, 224, 71',
			'251, 146, 60',
		];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	};

	useEffect(() => {
		const initialBubbles = [];
		for (let i = 0; i < 101; i++) {
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
		// Filter out the bubble with the specified ID
		const updatedBubbles = bubbles.filter((bubble) => bubble.id !== bubbleId);
		setBubbles(updatedBubbles);
		// setBubbleCount((curr) => curr - 1)
	};

	return (
		<div className="bg-inherit mt-24 fixed top-0 left-0 w-full h-full">
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
							backgroundColor: `rgba(${bubble.color}, 0.3)`,
							border: `1px solid rgba(${bubble.color}, 1)`,
							cursor: 'pointer', // Add pointer cursor,
							zIndex: 100,
						}}
						onClick={() => popBubble(bubble.id)}
						className="hover:animate-pulse"
						// initial={{
						// 	opacity: 0,
						// 	scale: 0,
						// }}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						// animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 1.3 }}
					></motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};
