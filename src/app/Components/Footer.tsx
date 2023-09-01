"use client"

// import { useTheme } from "next-themes"
import Link from "next/link"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'


export default function Footer() {
    
    // const { theme } = useTheme()
    // const colours = theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
    
    return (
        // <footer className={`flex justify-between items-center px-6 xl:px-24 border-t border-neutral-500 fixed bottom-0 left-0 right-0 h-16 text-neutral-700 bg-white dark:text-white dark:bg-black`}>
        <footer className={`flex justify-between items-center px-6 xl:px-24 border-t border-neutral-500 h-16 text-neutral-950 bg-neutral-50 dark:text-neutral-50 dark:bg-neutral-950`}>
            <div className="flex space-x-4 text-3xl">
                <Link href="https://github.com/charlieBdev" target="_blank"><AiFillLinkedin /></Link>
                <Link href="https://www.linkedin.com/in/charlie-bishop-4a897314a/" target="_blank"><AiFillGithub /></Link>
            </div>
            <p className="text-xs ml-auto font-light">© 2023 Charlie Bishop</p>
        </footer>
    )
}
