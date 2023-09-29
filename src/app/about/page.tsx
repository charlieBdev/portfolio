import Link from 'next/link';
import SkillsList from '../components/SkillsList';
import IconsList from '../components/IconsList';

export default function About() {
	return (
		// flex flex-col justify-center items-center min-h-screen relative
		<div className="flex flex-col space-y-3 p-6 xl:px-24 h-full">
			<section className="space-y-1">
				<h2 className="text-lg text-pink-400">About</h2>
				<p>
					Hello! I have just finished a ten-week intensive{' '}
					<span className="">Software Engineering</span> bootcamp with{' '}
					<Link
						href="https://northcoders.com/"
						className="underline decoration-purple-300 text-purple-300"
						target="_blank"
						aria-label="Northcoders"
					>
						Northcoders
					</Link>{' '}
					and am looking for <span className="">Junior</span> or{' '}
					<span className="">Entry-level</span> roles in{' '}
					<span className="">Sheffield</span> or{' '}
					<span className="">Remote</span>.
				</p>
				<p>
					Before reigniting my interest in tech, I was mostly an English
					language teacher abroad and in the UK.
				</p>
				<p>
					Check out my{' '}
					<Link
						href="/projects"
						className="underline decoration-purple-300 text-purple-300"
						aria-label="Projects"
					>
						projects
					</Link>{' '}
					or send a message via the{' '}
					<Link
						href="/about"
						className="underline decoration-purple-300 text-purple-300"
						aria-label="Contact"
					>
						contact
					</Link>{' '}
					page if you would like to discuss a role, career advice, or you'd just
					like a chat!
				</p>
			</section>
			<section className="flex flex-col justify-center">
				<h3 className="text-lg text-pink-400">Skills</h3>
				<p>
					Here are some of the technologies I have used and hope to keep
					learning more about plus a little more about me.
				</p>
				<IconsList />
				<SkillsList />
			</section>
		</div>
	);
}
