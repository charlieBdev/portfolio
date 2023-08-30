"use client"

import Link from "next/link"
import ThemeChanger from "./ThemeChanger"
import Menu from "./Menu"
// import { useTheme } from "next-themes"


export default function Navbar() {

  // const { theme } = useTheme()
  // const bgClass = theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'

  return (
    <footer>
      <nav 
        className={`text-black bg-white dark:text-white dark:bg-black px-6 flex items-center justify-between xl:px-24 border-b border-neutral-500 fixed top-0 right-0 left-0 h-24 shadow-xl`}
      >
        <Link href="/" className="md:flex md:items-center md:space-x-3">
          <h1 className="text-2xl font-medium text-cyan-400">CHARLIE BISHOP</h1>
          <p className="text-lg text-emerald-400">Junior<span className="text-yellow-300"> Web Developer</span></p>
        </Link>
        <div className="flex items-center justify-center space-x-3 lg:space-x-12">
          {/* {theme === 'light' && <p className="text-xs text-orange-400">Yikes!</p>}
          {theme === 'dark' && <p className="text-xs">Z-z-z!</p>} */}
          <ThemeChanger />
          <Menu />
        </div>
      </nav>
    </footer>
    
  )
}
