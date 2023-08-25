// import Image from "next/image"
// import about from "../../../public/about.png"

import Link from "next/link"

export default function About() {
    return (
      <section className="flex flex-col bg-neutral-950">
        <section className="p-6 space-y-1">
          <h2 className="text-lg text-pink-400">About</h2>
          <p>Hey, I have just finished a <span className="text-neutral-400">Software Engineering</span> Bootcamp with <span className="text-neutral-400">Northcoders</span> and am looking for <span className="text-neutral-400">Junior</span> or <span className="text-neutral-400">Entry-level</span> roles in <span className="text-neutral-400">Sheffield</span> or Remote.</p>
          <p>Check out my <Link href="/projects" className="underline decoration-purple-300 text-purple-300">projects</Link> or send a message via the <Link href="/about" className="underline decoration-purple-300 text-purple-300">contact</Link> page if you would like a chat.</p>
        </section>
        {/* <div className="flex flex-row flex-wrap justify-center text-center gap-2 m-3 lg:gap-6 xl:gap-9"> */}
        <section className="flex flex-col justify-center gap-3 mt-0 m-3">
          <h3 className="ml-3 text-lg text-pink-400">Skills</h3>
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-neutral-900 rounded-md p-3 w-full h-44 text-sm sm:w-auto">
              <p className="text-center text-lg text-green-500 p-1">Frontend</p>
              <ul className="text-md space-y-1">
                <li>Semantic HTML5</li>
                <li>CSS3 & Tailwind</li>
                <li>React & Next.js</li>
                <li>Accessibility</li>
                <li>UX & UI</li>
              </ul>
            </div>
            <div className="bg-neutral-900 rounded-md p-3 w-full h-44 text-sm sm:w-auto">
              <p className="text-center text-lg text-green-500 p-1">Backend</p>
              <ul className="space-y-1">
                <li>RESTful APIs</li>
                <li>Postgres</li>
                <li>Express</li>
                <li>Axios</li>
                <li className="text-neutral-400">Flask</li>
              </ul>
            </div>
            <div className="bg-neutral-900 rounded-md p-3 w-full h-44 text-sm sm:w-auto">
              <p className="text-center text-lg text-green-500 p-1">Languages</p>
              <ul className="space-y-1">
                <li>JavaScript</li>
                <li>SQL</li>
                <li className="text-neutral-400">Python</li>
                <li className="text-neutral-400">C#</li>
                <li className="text-neutral-400">C</li>
              </ul>
            </div>
            <div className="bg-neutral-900 rounded-md p-3 w-full h-44 text-sm sm:w-auto">
              <p className="text-center text-lg text-green-500 p-1">Qualities</p>
              <ul className="space-y-1">
                <li>Goes the extra mile</li>
                <li>Detail orientated</li>
                <li>Always learning</li>
                <li>Team player</li>
                <li>Persivilient</li>
              </ul>
            </div>
            <div className="bg-neutral-900 rounded-md p-3 w-full h-44 text-sm sm:w-auto">
              <p className="text-center text-lg text-green-500 p-1">Others</p>
              <ul className="space-y-1">
                <li>Pair Programming</li>
                <li>TDD with Jest</li>
                <li>Git / Github</li>
                <li>VS Code</li>
                <li>MVC</li>
              </ul>
            </div>
            <div className="bg-neutral-900 rounded-md p-3 w-full h-44 text-sm sm:w-auto">
              <p className="text-center text-lg text-green-500 p-1">Interests</p>
              <ul className="space-y-1">
                <li>Current affairs podcasts - News Agents</li>
                <li>Making beats / Scratching</li>
                <li>Video games - Zelda</li>
                <li>Reading non-fiction</li>
                <li>BJJ - brown belt</li>
              </ul>
            </div>
          </div>
        </section>
        {/* <Image
          src={about}
          // width={500}
          // height={500}
          alt="Lots of things Charlie likes: coding, games, space, coffee, music, nature, peace, and love."
          className="max-h-full object-scale-down mx-auto"
          priority={true}
          placeholder = 'blur'
          height='500'
        /> */}
      </section>
    )
}
