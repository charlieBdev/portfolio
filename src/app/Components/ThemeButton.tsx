'use client';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import { motion } from 'framer-motion';

export default function ThemeButton() {
	const { theme, switchLight, switchDark } = useContext(ThemeContext);

	return (
		<motion.button
			aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
			onClick={theme === 'light' ? switchDark : switchLight}
			className="text-2xl transition-colors duration-150 rounded-full hover:animate-pulse"
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
		>
			{theme === 'light' ? <CiDark /> : <CiLight />}
		</motion.button>
	);
}
