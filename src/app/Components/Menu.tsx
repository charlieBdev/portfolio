"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";


export default function Menu() {

    const [isNavOpen, setIsNavOpen] = useState(false)
    const currentRoute = usePathname()

    const { theme } = useTheme()
    const bgClass = theme === 'light' ? 'bg-neutral-50' : 'bg-neutral-900'

    return (
        <>
        <div className={`MOBILE-MENU flex lg:hidden`}>
          <button
            className="HAMBURGER-ICON rounded-lg"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>   

          <div className={isNavOpen ? `showMenuNav ${bgClass} ` : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-6 py-8 rounded-lg"
              onClick={() => setIsNavOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <ul className={`MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-purple-300 text-lg z-50`}>
              <li className="my-8">
                <Link onClick={() => setIsNavOpen(false)} href="/" className={currentRoute === "/" ? "text-pink-400 border-b border-pink-400" : "border-b border-purple-300"}>home</Link>
              </li>
              <li className="my-8">
                <Link onClick={() => setIsNavOpen(false)} href="/about" className={currentRoute === "/about" ? "text-pink-400 border-b border-pink-400" : "border-b border-purple-300"}>about</Link>
              </li>
              <li className="my-8">
                <Link onClick={() => setIsNavOpen(false)} href="/projects" className={currentRoute === "/projects" ? "text-pink-400 border-b border-pink-400" : "border-b border-purple-300"}>projects</Link>
              </li>
              <li className="my-8">
                <Link onClick={() => setIsNavOpen(false)} href="/contact" className={currentRoute === "/contact" ? "text-pink-400 border-b border-pink-400" : "border-b border-purple-300"}>contact</Link>
              </li>
            </ul>
          </div>
        </div>
          <ul className="DESKTOP-MENU hidden mr-3 space-x-12 lg:flex text-purple-300">
            <li>
              <Link href="/" className={currentRoute === "/" ? "text-pink-400 border-b border-pink-400" : "border-b border-purple-300"}>home</Link>
            </li>
            <li>
              <Link href="/about" className={currentRoute === "/about" ? "text-pink-400 border-b border-pink-400" : "border-b border-purple-300"}>about</Link>
            </li>
            <li>
              <Link href="/projects" className={currentRoute === "/projects" ? "text-pink-400 border-b border-pink-400" : "border-b border-purple-300"}>projects</Link>
            </li>
            <li>
              <Link href="/contact" className={currentRoute === "/contact" ? "text-pink-400 border-b border-pink-400" : "border-b border-purple-300"}>contact</Link>
            </li>
          </ul>
        </>
    )
}
