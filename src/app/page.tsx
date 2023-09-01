"use client"

import Link from "next/link"
import Spring from "./Components/Spring"

// import React from 'react'
// import { useTheme } from "next-themes";


export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <p className="text-6xl text-center">e<Link href="/about" className="text-purple-300">a</Link>t</p>
      <p className="text-6xl text-center">slee<Link href="/projects" className="text-purple-300">p</Link></p>
      <p className="text-6xl text-center"><Link href="/contact" className="text-purple-300">c</Link>ode</p>
      <p className="text-6xl text-center flex">repeat{<Spring />}</p>
    </section>
  )
}
