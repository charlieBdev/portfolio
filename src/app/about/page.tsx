import Link from "next/link"
import SkillsList from "../Components/SkillsList"

export default function About() {
    return (
      <div className="flex flex-col mt-24 space-y-3 p-6 xl:px-24 min-h-screen">
          <section className="space-y-1">
            <h2 className="text-lg text-pink-400">About</h2>
            <p>Ola! I have just finished a ten-week intensive <span className="">Software Engineering</span> bootcamp with <Link href="https://northcoders.com/" className="underline decoration-purple-300 text-purple-300" target="_blank">Northcoders</Link> and am looking for <span className="">Junior</span> or <span className="">Entry-level</span> roles in <span className="">Sheffield</span> or <span className="">Remote</span>.</p>
            <p>Before reigniting my interest in tech, I was mostly an English language teacher abroad and in the UK.</p>
            <p>Check out my <Link href="/projects" className="underline decoration-purple-300 text-purple-300">projects</Link> or send a message via the <Link href="/about" className="underline decoration-purple-300 text-purple-300">contact</Link> page if you'd just like a chat.</p>
          </section>
          <section className="flex flex-col justify-center">
            <h3 className="text-lg text-pink-400">Skills</h3>
            <p>Here are some of the technologies I have used and hope to keep learning more about plus a little more about me.</p>
            <SkillsList />
          </section>
      </div>
    )
}
