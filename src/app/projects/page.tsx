import Link from "next/link"
import ProjectsList from "../Components/ProjectsList"


export default function Projects() {
    return (
      <div className="mt-24 mb-16 p-6 xl:px-24 space-y-1 xl:flex xl:flex-col">
        <section className="">
          <h2 className="text-lg text-pink-400">Projects</h2>
          {/* <p>Don't panic! Projects <span className="">incoming...</span></p> */}
          {/* <p>There you can find my latest projects such as <Link href="https://aa-sound-waves.vercel.app/" target="_blank" className="underline decoration-purple-300 text-purple-300">SoundWaves</Link>, which was a team project, and <Link href="https://euphonious-scone-36cbae.netlify.app/" target="_blank" className="underline decoration-purple-300 text-purple-300">NC News</Link>.</p> */}
          {/* <p>You can also check out <Link href="https://charliebdev.github.io/" target="_blank" className="underline decoration-purple-300 text-purple-300">my old portfolio</Link> made pre-Bootcamp using Bootstrap for the styling.</p> */}
        </section>
        <ProjectsList />
      </div>
    )
}
