'use client';

import { useState } from 'react';
import { Bubbles, MainText } from './Components';
import Navbar from './Components/Navbar';
import { AboutPage } from './Components/AboutPage';
import { ContactPage } from './Components/ContactPage';
import { ProjectsPage } from './Components/ProjectsPage';

export default function Home() {
	const [activeLink, setActiveLink] = useState('');

	return (
		<div>
			<Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
			<Bubbles />

			<MainText setActiveLink={setActiveLink} />

			<AboutPage setActiveLink={setActiveLink} />

			<ProjectsPage setActiveLink={setActiveLink} />

			<ContactPage setActiveLink={setActiveLink} />
		</div>
	);
}
