"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function Nav() {
  const currentRoute = usePathname()
    return (
        <nav className="bg-neutral-900 p-2 sticky top-0">
          <ul className="flex flex-row space-x-2 justify-center text-purple-300">
            <Link href="/" className={currentRoute === "/" ? "active-link" : ""}>home</Link>
            <Link href="/about" className={currentRoute === "/about" ? "active-link" : ""}>about</Link>
            <Link href="/projects" className={currentRoute === "/projects" ? "active-link" : ""}>projects</Link>
            <Link href="/contact" className={currentRoute === "/contact" ? "active-link" : ""}>contact</Link>
          </ul>
        </nav>
    )
}
