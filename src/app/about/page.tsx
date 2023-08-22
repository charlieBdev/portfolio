import Image from "next/image"
import about from "../../../public/about.png"

export default function About() {
    return (
      <main className="flex flex-col h-screen justify-between overflow-hidden">
        <div className="p-3 text-sm lg:text-center">
          <p className="mb-1">Hey, I have just finished a bootcamp with <span className="text-neutral-400">Northcoders</span> and am looking for <span className="text-neutral-400">junior</span> or entry-level roles in <span className="text-neutral-400">Sheffield</span> or remote.</p>
          <p>Check out my <span className="text-neutral-400">projects</span> or send a message via the <span className="text-neutral-400">contact</span> page if you'd like a chat.</p>
        </div>
        <div className="flex flex-row justify-around lg:justify-evenly ">
          <div className="bg-neutral-900 sm:rounded-md p-3 w-32 text-sm">
            <p className="text-green-500">Frontend</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="bg-neutral-900 sm:rounded-md p-3 w-32 text-sm">
            <p className="text-green-500">Backend</p>
            <ul>
              <li>Express</li>
              <li>Postgres</li>
              <li>Axios</li>
              <li className="text-neutral-400">Flask</li>
            </ul>
          </div>
          <div className="bg-neutral-900 sm:rounded-md p-3 w-32 text-sm">
            <p className="text-green-500">Languages</p>
            <ul>
              <li>JavaScript</li>
              <li className="text-neutral-400">Python</li>
              <li className="text-neutral-400">C#</li>
            </ul>
          </div>
          <div className="bg-neutral-900 sm:rounded-md p-3 w-32 text-sm">
            <p className="text-green-500">Qualities</p>
            <ul>
              <li>Great team player</li>
              <li>Attention to detail</li>
              <li>Goes the extra mile</li>
            </ul>
          </div>
        </div>  
        <Image
          src={about}
          // width={500}
          // height={500}
          alt="Lots of things Charlie likes: coding, games, space, coffee, music, nature, peace, and love."
          className="max-h-full object-scale-down mx-auto"
          priority={true}
          placeholder = 'blur'
          height='500'
        />
      </main>
    )
}
