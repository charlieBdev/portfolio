import Link from "next/link"


export default function Projects() {
    return (
      <main className="flex flex-col bg-neutral-950">
        <section className="p-6 space-y-1">
          <h2 className="text-lg text-pink-400">Projects</h2>
          <p>Don't panic! Projects <span className="text-neutral-400">incoming...</span></p>
          <p>In the meantime, while I build this page, please check out <Link href="https://charliebdev.github.io/" className="underline decoration-purple-300 text-purple-300">my old portfolio</Link> made pre-Bootcamp.</p>
          <p>You can find my latest projects such as <Link href="https://aa-sound-waves.vercel.app/" className="underline decoration-purple-300 text-purple-300">SoundWaves</Link> and <Link href="https://euphonious-scone-36cbae.netlify.app/" className="underline decoration-purple-300 text-purple-300">NC News</Link>.</p>
        </section>
      </main>
    )
}
