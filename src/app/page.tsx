'use client';

import { useState } from 'react';
import { Bubbles, MainText } from './Components';
import Navbar from './Components/Navbar';
import About from './about/page';
import Contact from './contact/page';
import Projects from './projects/page';

export default function Home() {
	const [activeLink, setActiveLink] = useState('Home');

	return (
		<div>
			<Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
			<Bubbles />
			<MainText />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}
