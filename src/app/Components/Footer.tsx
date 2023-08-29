"use client"

// import { useTheme } from "next-themes"
import Link from "next/link"
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'


export default function Footer() {
    
    // const { theme } = useTheme()
    // const bgClass = theme === 'light' ? 'bg-white' : 'bg-black'
    
    return (
        <footer className={`flex justify-between items-center px-6 xl:px-24 text-3xl border-t border-neutral-600 sticky bottom-0 h-12`}>
            <div className="flex space-x-4">
                <Link href="https://github.com/charlieBdev" target="_blank"><AiFillLinkedin /></Link>
                <Link href="https://www.linkedin.com/in/charlie-bishop-4a897314a/" target="_blank"><AiFillGithub /></Link>
            </div>
            <p className="text-xs ml-auto font-light">© 2023 Charlie Bishop<i className="devicon-github-original"></i></p>
        </footer>
    )
}
