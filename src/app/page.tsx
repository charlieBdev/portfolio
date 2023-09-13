import Flunderscore from "./Components/Flunderscore";
import { Bubbles, MainText } from "./Components";

export default function Home() {
	return (
		<section className="flex flex-col justify-center items-center min-h-screen relative">
			<Bubbles />
			<MainText />
			<Flunderscore />
		</section>
	);
}
