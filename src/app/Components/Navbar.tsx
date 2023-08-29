"use client"

import Link from "next/link"
import ThemeChanger from "./ThemeChanger"
import Menu from "./Menu"
// import { useTheme } from "next-themes"


export default function Navbar() {

  // const { theme } = useTheme()
  // const bgClass = theme === 'light' ? 'bg-white' : 'bg-black'

  return (
    <footer>
      <nav 
        className={`px-6 flex items-center justify-between xl:px-24 border-b border-neutral-500 sticky top-0 h-24 shadow-xl z-[100]`}
      >
        <Link href="/" className="lg:flex lg:items-center lg:space-x-3">
          <h1 className="text-2xl font-medium text-cyan-400">CHARLIE BISHOP</h1>
          <p className="text-lg text-emerald-400">Junior<span className="text-yellow-300"> Web Developer</span></p>
        </Link>
        <div className="flex items-center justify-center space-x-3 lg:space-x-12">
          {/* {bgClass === 'bg-white' && <p className="text-xs">Sure?</p>} */}
          <ThemeChanger />
          <Menu />
        </div>
      </nav>
    </footer>
    
  )
}
