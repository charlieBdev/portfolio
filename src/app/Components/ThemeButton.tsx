"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

export default function ThemeChanger() {
	const { theme, switchLight, switchDark } = useContext(ThemeContext);

	return (
		<button
			aria-label={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
			onClick={theme === "light" ? switchDark : switchLight}
			className="text-2xl transition-colors duration-150 rounded-full p-1 hover:animate-pulse"
		>
			{theme === "light" ? <CiDark /> : <CiLight />}
		</button>
	);
}
