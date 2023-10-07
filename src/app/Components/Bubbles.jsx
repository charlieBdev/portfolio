'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import { PingPongDelay, ToneAudioBuffer } from 'tone';

export const Bubbles = () => {
	useEffect(() => {
		const buffer = new ToneAudioBuffer(
			'https://tonejs.github.io/examples/audio/FWDL.mp3',
			() => {
				console.log('loaded');
			}
		);
	}, []);

	const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
	const synth = new Tone.MonoSynth().toDestination();

	synth.volume.value = -20;

	const pingPong = new PingPongDelay('4n', 0.2).toDestination();

	synth.connect(pingPong);

	const bubbleNotes = [
		'A4',
		'E4',
		'F#4',
		'A4',
		'D5',
		'E5',
		'F#5',
		'A5',
		'F#5',
		'E5',
		'D5',
		'A4',
		'E4',
		'F#4',
		'A4',
		'D5',
		'E5',
		'F#5',
		'A5',
		'F#5',
		'E5',
		'D5',
		'A4',
		'F#4',
		'E4',
		'F#4',
		'A4',
		'B4',
		'C#5',
		'A4',
	];

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

		// Trigger the note on the synth
		synth.triggerAttackRelease(bubbleNotes[currentNoteIndex], '8n');
		setCurrentNoteIndex((prevIndex) => (prevIndex + 1) % bubbleNotes.length);
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
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ opacity: 0, scale: 1.3 }}
					></motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};
