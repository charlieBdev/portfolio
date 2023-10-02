'use client';

import React, { useState, useEffect } from 'react';

export const Bubbles = () => {
	const [bubbles, setBubbles] = useState([]);
	const maxBubbleSize = 83;
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	// const [bubbleCount, setBubbleCount] = useState(currentYear)

	// const getRandomTooltip = () => {
	//   const bubbleTips = [
	//     "How could you?!",
	//     "You animal!",
	//     "Nooooo!",
	//     "I thought we were friends.",
	//     "🥲",
	//     "Goodbye, my lover.",
	//     "Yes, I really made a list of tooltips for these bubbles.",
	//     "I'm too young to pop!",
	//     "When you least expect it...",
	//     "I'm not mad. Just disappointed.",
	//     "I'll be back.",
	//     "😱",
	//     "Mama, oooh",
	//   ]
	//   const randomIndex = Math.floor(Math.random() * bubbleTips.length);
	//   return bubbleTips[randomIndex];
	// }
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
			{bubbles.map((bubble) => (
				<div
					key={bubble.id}
					style={{
						position: 'absolute',
						left: bubble.x,
						top: bubble.y,
						width: bubble.radius,
						height: bubble.radius,
						borderRadius: '50%',
						backgroundColor: `rgba(${bubble.color}, 0.2)`,
						border: `1px solid rgba(${bubble.color}, 0.8)`,
						cursor: 'pointer', // Add pointer cursor,
						zIndex: 100,
					}}
					onClick={() => popBubble(bubble.id)}
					// className="hover:animate-pulse tooltip tooltip-top"
					className="hover:animate-pulse"
					// data-tip={getRandomTooltip()}
				/>
			))}
		</div>
	);
};
