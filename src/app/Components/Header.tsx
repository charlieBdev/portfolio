export default function Header() {
    return (
        <header className="p-3">
            <div className="flex flex-row">
                <div className="flex flex-col lg:flex-row lg:align-end">
                    <h1 className="text-3xl font-bold text-cyan-400">CHARLIE BISHOP</h1>
                    <h2 className="text-emerald-300 lg:self-end">Junior<span className="text-yellow-300"> Full Stack Developer</span></h2>
                </div>
            </div>
        </header>
    )
}
