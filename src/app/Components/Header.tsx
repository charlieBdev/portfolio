import Skills from "./Skills";

export default function Header() {
    return (
        <header className="p-3">
            <div className="flex flex-row gap-3">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold"><span className="text-cyan-300">CHARLIE BISHOP</span></h1>
                    <h2 className="text-emerald-300"><span className="text-yellow-300">Junior</span> Full Stack Developer</h2>
                </div>
                <Skills />
            </div>
        </header>
    )
}
