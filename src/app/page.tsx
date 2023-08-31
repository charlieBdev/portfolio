"use client"

import Link from "next/link"

// import React from 'react'
// import { useTheme } from "next-themes";


export default function Home() {

  return (
      <section className="flex flex-col justify-center items-center min-h-screen">
        <p className="text-6xl animate-pulse text-center">e<Link href="/about" className="text-purple-300 animate-pulse">a</Link>t</p>
        <p className="text-6xl animate-pulse text-center">sleep</p>
        <p className="text-6xl animate-pulse text-center"><Link href="/contact" className="text-purple-300 animate-pulse">c</Link>ode</p>
        <p className="text-6xl animate-pulse text-center">re<Link href="/projects" className="text-purple-300 animate-pulse">p</Link>eat</p>
      </section>
  )
}
