import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex w-full p-6 space-x-8 justify-center text-3xl border-t border-neutral-600 sticky bottom-0 z-50">
                <Link href="https://www.linkedin.com/in/charlie-bishop-4a897314a/" target="_blank"><i className="devicon-linkedin-plain"></i></Link>
                <Link href="https://github.com/charlieBdev" target="_blank"><i className="devicon-github-original"></i></Link>
        </footer>
    )
}
