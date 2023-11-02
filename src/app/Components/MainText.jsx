'use client';
import { animated, useSpring } from '@react-spring/web';
import { motion } from 'framer-motion';

export const MainText = () => {
	const getRandomDelay = () => Math.floor(Math.random() * 1000) + 500; // Adjust delay range as needed

	const flickerAnimation = useSpring({
		to: async (next) => {
			while (true) {
				await next({ opacity: 0.3 });
				await next({ opacity: 1 });
				await next({ opacity: 0.6 });
				await next({ opacity: 1 });
				await next({ opacity: 0.4 });
				await next({ opacity: 1 });
				await next({ opacity: 0.5 });
				await next({ opacity: 1 });
				await next({ opacity: 0.7 });
				await next({ opacity: 1 });

				await new Promise((resolve) => setTimeout(resolve, getRandomDelay()));
			}
		},
		from: { opacity: 1 },
		config: { tension: 200, friction: 10 },
	});

	return (
		<div className='h-[calc(100vh-6rem)] mt-24 flex flex-col items-center justify-center gap-3 select-none p-6 xl:px-24 xl:items-center hover:cursor-pointer overflow-hidden'>
			<motion.div drag>
				<animated.p style={flickerAnimation} className='text-8xl relative'>
					Hello
				</animated.p>
			</motion.div>
		</div>
	);
};
