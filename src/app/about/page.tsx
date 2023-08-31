import Link from "next/link"

export default function About() {
    return (
      <div className="flex flex-col p-6 space-y-3 xl:items-center">
          <section className="space-y-1">
            <h2 className="text-lg text-pink-400">About</h2>
            <p>I have just finished a ten-week intensive <span className="">Software Engineering</span> Bootcamp with <span className="">Northcoders</span> and am looking for <span className="">Junior</span> or <span className="">Entry-level</span> roles in <span className="">Sheffield</span> or <span className="">Remote</span>.</p>
            <p>Before reigniting my interest in tech, I was mostly an English language teacher abroad and in the UK.</p>
            <p>Check out my <Link href="/projects" className="underline decoration-purple-300 text-purple-300">projects</Link> or send a message via the <Link href="/about" className="underline decoration-purple-300 text-purple-300">contact</Link> page if you'd just like a chat.</p>
          </section>
          {/* <div className="flex flex-row flex-wrap justify-center text-center gap-2 m-3 lg:gap-6 xl:gap-9"> */}
          <section className="flex flex-col justify-center mt-3">
            {/* <h3 className="text-lg text-pink-400">Skills</h3> */}
            {/* <p>Here are some of the technologies I have used and hope to keep learning more about.</p> */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              <div className="rounded-md border border-neutral-500 p-3 pt-1 w-full h-44 text-sm sm:w-auto">
                <p className="text-center text-lg text-green-500 p-1">Frontend</p>
                <ul className="text-md space-y-1">
                  <li>Semantic HTML</li>
                  <li>React & Next.js</li>
                  <li>CSS & Tailwind</li>
                  <li>Accessibility</li>
                  <li>UX & UI</li>
                </ul>
              </div>
              <div className="rounded-md border border-neutral-500 p-3 pt-1 w-full h-44 text-sm sm:w-auto">
                <p className="text-center text-lg text-green-500 p-1">Backend</p>
                <ul className="text-md space-y-1">
                  <li>RESTful APIs</li>
                  <li>Postgres</li>
                  <li>Express</li>
                  <li>Axios</li>
                  <li className="">Flask</li>
                </ul>
              </div>
              <div className="rounded-md border border-neutral-500 p-3 pt-1 w-full h-44 text-sm sm:w-auto">
                <p className="text-center text-lg text-green-500 p-1">Languages</p>
                <ul className="text-md space-y-1">
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li className="">Python</li>
                  <li className="">C#</li>
                  {/* <li className="">C</li> */}
                </ul>
              </div>
              <div className="rounded-md border border-neutral-500 p-3 pt-1 w-full h-44 text-sm sm:w-auto">
                <p className="text-center text-lg text-green-500 p-1">Qualities</p>
                <ul className="text-md space-y-1">
                  <li>Goes the extra mile</li>
                  <li>Detail orientated</li>
                  <li>Always learning</li>
                  <li>Persivilience</li>
                  <li>Team player</li>
                </ul>
              </div>
              <div className="rounded-md border border-neutral-500 p-3 pt-1 w-full h-44 text-sm sm:w-auto">
                <p className="text-center text-lg text-green-500 p-1">Others</p>
                <ul className="text-md space-y-1">
                  <li>Pair Programming</li>
                  <li>TDD with Jest</li>
                  <li>Git & Github</li>
                  <li>VS Code</li>
                  <li>MVC</li>
                </ul>
              </div>
              <div className="rounded-md border border-neutral-500 p-3 pt-1 w-full h-44 text-sm sm:w-auto">
                <p className="text-center text-lg text-green-500 p-1">Interests</p>
                <ul className="text-md space-y-1">
                  <li>Current affairs podcasts & James O'Brien</li>
                  <li>Music Production & Turntablism</li>
                  <li>Video games - Zelda currently</li>
                  <li>BJJ - Brown Belt of 8 years</li>
                  <li>Reading non-fiction</li>
                </ul>
              </div>
            </div>
          </section>
      </div>
    )
}
