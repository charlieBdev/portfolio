import Flunderscore from "./Components/Flunderscore";
import { Bubbles, MainText } from "./Components";

export default function Home() {
	return (
		<section className="h-screen text-center">
			<Bubbles />
			<MainText />
			<Flunderscore />
		</section>
	);
}
