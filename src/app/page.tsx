"use client"

// import Image from "next/image"
// import about from "../../public/about.png"
// import Link from "next/link"

import { useTheme } from "next-themes";


export default function Home() {
  
  const { theme } = useTheme()
  const bgClass = theme === 'light' ? 'bg-white' : 'bg-black'

  return (
    <section className={`${bgClass} flex flex-col items-center justify-center min-h-screen`}>
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <p className="text-6xl animate-pulse text-center">eat</p>
        <p className="text-6xl animate-pulse text-center">sleep</p>
        <p className="text-6xl animate-pulse text-center">code</p>
        <p className="text-6xl animate-pulse text-center">repeat</p>
      </div>
    </section>
  )
}
