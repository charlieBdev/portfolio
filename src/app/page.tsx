import { Bubbles, MainText } from './Components';
import About from './about/page';
import Contact from './contact/page';
import Projects from './projects/page';

export default function Home() {
	return (
		<div>
			<Bubbles />
			<MainText />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}
