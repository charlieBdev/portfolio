import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center w-full p-3 text-3xl border-t border-neutral-600 sticky bottom-0 z-10">
            <div className="flex space-x-8 justify-center">
                <Link href="https://www.linkedin.com/in/charlie-bishop-4a897314a/" target="_blank"><i className="devicon-linkedin-plain"></i></Link>
                <Link href="https://github.com/charlieBdev" target="_blank"><i className="devicon-github-original"></i></Link>
            </div>
            <p className="text-sm text-center text-neutral-500">© Charlie Bishop 2023</p>
        </footer>
    )
}
