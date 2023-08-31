import Link from "next/link"


export default function Projects() {
    return (
      <div className="mt-24 mb-16 p-6 space-y-1 xl:flex xl:flex-col xl:items-center">
        <section>
          <h2 className="text-lg text-pink-400">Projects</h2>
          <p>Don't panic! Projects <span className="">incoming...</span></p>
          <p>In the meantime, while I build this page, please check out <Link href="https://charliebdev.github.io/" target="_blank" className="underline decoration-purple-300 text-purple-300">my old portfolio</Link> made pre-Bootcamp.</p>
          <p>There you can find my latest projects such as <Link href="https://aa-sound-waves.vercel.app/" target="_blank" className="underline decoration-purple-300 text-purple-300">SoundWaves</Link>, which was a team project, and <Link href="https://euphonious-scone-36cbae.netlify.app/" target="_blank" className="underline decoration-purple-300 text-purple-300">NC News</Link>.</p>
        </section>
      </div>
      
    )
}
