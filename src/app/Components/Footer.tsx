"use client"

import Link from "next/link";
import { useTheme } from "next-themes";


export default function Footer() {

    const { theme } = useTheme()
    const bgClass = theme === 'light' ? 'bg-white' : 'bg-black'

    return (
        <footer className={`${bgClass} flex px-6 justify-center items-center text-3xl border-t border-neutral-600 sticky bottom-0 h-12`}>
            <div className="space-x-8">
                <Link href="https://www.linkedin.com/in/charlie-bishop-4a897314a/" target="_blank"><i className="devicon-linkedin-plain"></i></Link>
                <Link href="https://github.com/charlieBdev" target="_blank"><i className="devicon-github-original"></i></Link>
            </div>
            <p className="text-xs font-light text-neutral-500 ml-auto">© 2023 Charlie Bishop</p>
        </footer>
    )
}
