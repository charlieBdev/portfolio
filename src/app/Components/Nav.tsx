"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation';
import { useState } from "react";

export default function Nav() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const currentRoute = usePathname()
    return (
      <nav className="bg-neutral-900 p-3 h-24">
        
        {/* <div className="hidden space-x-8 lg:flex text-purple-300">
          <Link href="/" className={currentRoute === "/" ? "active-link" : ""}>home</Link>
          <Link href="/about" className={currentRoute === "/about" ? "active-link" : ""}>about</Link>
          <Link href="/projects" className={currentRoute === "/projects" ? "active-link" : ""}>projects</Link>
          <Link href="/contact" className={currentRoute === "/contact" ? "active-link" : ""}>contact</Link>
        </div> */}

        {isDropdownOpen ? (
          <div className="flex justify-between align-middle">
            <Link href="/" className={currentRoute === "/" ? "active-link" : "text-purple-300"}>home</Link>
            <Link href="/about" className={currentRoute === "/about" ? "active-link" : "text-purple-300"}>about</Link>
            <Link href="/projects" className={currentRoute === "/projects" ? "active-link" : "text-purple-300"}>projects</Link>
            <Link href="/contact" className={currentRoute === "/contact" ? "active-link" : "text-purple-300"}>contact</Link>
            <button
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transform ${
                  isDropdownOpen ? "rotate-180" : ""
                } transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M4 6h16M4 12h16M4 18h16"
              />
              </svg>
            </button>
          </div>
        )
        :
        (
          <div className="flex justify-between align-center">
            <div>
              <h1 className="text-3xl font-bold text-cyan-400">CHARLIE BISHOP</h1>
              <h2 className="text-emerald-300 lg:self-end">Junior<span className="text-yellow-300"> Full Stack Developer</span></h2>
            </div>
            <button
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transform ${
                  isDropdownOpen ? "rotate-180" : ""
                } transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              />
              </svg>
            </button>
          </div>
        )
        }
      </nav>
    )
}
