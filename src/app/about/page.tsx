import Link from 'next/link';
import SkillsList from '../Components/SkillsList';
import IconsList from '../Components/IconsList';

export default function About() {
	return (
		// flex flex-col justify-center items-center min-h-screen relative
		<section
			id='about'
			className='min-h-[calc(100vh-5rem)] flex flex-col justify-center gap-3 p-6 xl:px-24 bg-opacity-90 dark:bg-opacity-90 backdrop-blur dark:backdrop-blur'
		>
			<div className='gap-3'>
				<h2 className='text-lg text-pink-400'>About</h2>
				{/* <p>
					Hi, I'm Charlie. I finished a thirteen-week intensive{' '}
					<span className=''>Software Engineering</span> bootcamp with{' '}
					<Link
						href='https://northcoders.com/projects/august-2023-software/'
						className='underline decoration-purple-300 text-purple-300'
						target='_blank'
						aria-label='Northcoders'
					>
						Northcoders
					</Link>{' '}
					in August 2023 and am looking for <span className=''>Junior</span> or{' '}
					<span className=''>Entry-level</span> roles in{' '}
					<span className=''>Sheffield</span> or{' '}
					<span className=''>Remote</span>. I'd be open to hybrid work also in
					the surrounding area.
				</p> */}
				<div className='flex flex-col gap-3'>
					<p>
						Before reigniting my interest in tech, I was an English language
						teacher abroad and online in the UK. I've had a range of other roles
						in Network Installation and QA to name a few.
					</p>
					<p>
						In August I finished my second bootcamp and I'm looking for{' '}
						<span className=''>Junior</span> or{' '}
						<span className=''>Entry-level</span> roles in{' '}
						<span className=''>Sheffield</span> or{' '}
						<span className=''>Remote/Hybrid</span>.
					</p>
				</div>

				{/* <p>
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
				</p> */}
			</div>
			<div className='flex flex-col justify-center gap-3'>
				{/* <h3 className='text-lg text-pink-400'>Skills</h3>
				<p>
					Some of the technologies I have used and hope to keep learning more
					about plus a little more about me.
				</p> */}
				<IconsList />
				<SkillsList />
			</div>
		</section>
	);
}
