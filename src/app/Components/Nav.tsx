"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation';
import { useState } from "react";


export default function Nav() {

  const currentRoute = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div 
      className="p-6 flex items-center justify-between border-b border-neutral-600 sticky top-0 z-40 bg-neutral-950"
    >
      <div>
        <h1 className="text-3xl font-bold text-cyan-400">CHARLIE BISHOP</h1>
        <p className="text-lg text-emerald-300">Junior<span className="text-yellow-300"> Full Stack Web Developer</span></p>
      </div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-neutral-300"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-neutral-300"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-neutral-300"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 first-line:text-neutral-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-purple-300 text-lg">
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
        </section>

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
      </nav>
    </div>
  );
}
