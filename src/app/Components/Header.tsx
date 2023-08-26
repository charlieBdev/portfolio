"use client"

import Link from "next/link"
import ThemeChanger from "./ThemeChanger";
import Menu from "./Menu";

export default function Header() {

  return (
    <div 
      className="p-6 flex items-center justify-between border-b border-neutral-500 sticky top-0 z-10"
    >
      <Link href="/">
        <h1 className="text-3xl font-bold text-cyan-400">CHARLIE BISHOP</h1>
        <p className="text-lg text-emerald-400">Junior<span className="text-yellow-300"> Full Stack Web Developer</span></p>
      </Link>
      <nav className="flex space-x-3 lg:space-x-12">
        <ThemeChanger />
        <Menu />
      </nav>
    </div>
  );
}
