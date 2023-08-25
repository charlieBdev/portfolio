import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex w-full h-16 justify-around p-4 fixed bottom-0 border-t border-neutral-600 text-xl bg-neutral-950">
            <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/in/charlie-bishop-4a897314a/" target="_blank"><i className="devicon-linkedin-plain text-2xl"></i></Link>
                <Link href="https://github.com/charlieBdev" target="_blank"><i className="devicon-github-original text-2xl"></i></Link>
            </div>
        </footer>
    )
}
