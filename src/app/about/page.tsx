// import Image from "next/image"
// import about from "../../../public/about.png"

import Link from "next/link"

export default function About() {
    return (
      <main className="flex flex-col justify-between">
        <div className="p-3 ml-3 mr-3 text-sm lg:text-center xl:text-md">
          <p className="mb-1">Hey, I have just finished a Software Engineering Bootcamp with <span className="text-neutral-400 animate-pulse">Northcoders</span> and am looking for <span className="text-neutral-400 animate-pulse">Junior</span> or Entry-level roles in <span className="text-neutral-400 animate-pulse">Sheffield</span> or Remote.</p>
          <p>Check out my <Link href="/projects" className="border-b border-purple-300 text-purple-300">projects</Link> or send a message via the <Link href="/about" className="border-b border-purple-300 text-purple-300">contact</Link> page if you'd like a chat.</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center text-center gap-2 m-3 lg:gap-6 xl:gap-9">
          <div className="bg-neutral-900 rounded-md p-3 w-32 text-sm xl:w-40 xl:text-md shadow-inner shadow-neutral-600 hover:shadow-neutral-300">
            <p className="text-green-500 animate-pulse">Frontend</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="bg-neutral-900 rounded-md p-3 w-32 text-sm xl:w-40 xl:text-md shadow-inner shadow-neutral-600 hover:shadow-neutral-300">
            <p className="text-green-500 animate-pulse">Backend</p>
            <ul>
              <li>Express</li>
              <li>Postgres</li>
              <li>Axios</li>
              <li className="text-neutral-400">Flask</li>
            </ul>
          </div>
          <div className="bg-neutral-900 rounded-md p-3 w-32 text-sm xl:w-40 xl:text-md shadow-inner shadow-neutral-600 hover:shadow-neutral-300">
            <p className="text-green-500 animate-pulse">Languages</p>
            <ul>
              <li>JavaScript</li>
              <li className="text-neutral-400">Python</li>
              <li className="text-neutral-400">C#</li>
            </ul>
          </div>
          <div className="bg-neutral-900 rounded-md p-3 w-32 text-sm xl:w-40 xl:text-md shadow-inner shadow-neutral-600 hover:shadow-neutral-300">
            <p className="text-green-500 animate-pulse">Qualities</p>
            <ul>
              <li>Team player</li>
              <li>Detail orientated</li>
              <li>Goes the extra mile</li>
            </ul>
          </div>
          <div className="bg-neutral-900 rounded-md p-3 w-32 text-sm xl:w-40 xl:text-md shadow-inner shadow-neutral-600 hover:shadow-neutral-300">
            <p className="text-green-500 animate-pulse">Others</p>
            <ul>
              <li>Pair Programming</li>
              <li>Git / Github</li>
              <li>VS Code</li>
              <li>MVC</li>
              <li>TDD</li>
            </ul>
          </div>
        </div>  
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
      </main>
    )
}
