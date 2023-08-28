"use client"

import React from 'react'
import { useTheme } from "next-themes";


const Hero = () => {

    const { theme } = useTheme()
    const bgClass = theme === 'light' ? 'bg-white' : 'bg-black'

    return (
        <section className={`${bgClass} flex flex-col items-center h-screen w-full relative`}>
            <div className="flex flex-col lg:flex-row lg:space-x-6 mt-36 lg:mt-56">
                <p className="text-6xl animate-pulse text-center">eat</p>
                <p className="text-6xl animate-pulse text-center">sleep</p>
                <p className="text-6xl animate-pulse text-center">code</p>
                <p className="text-6xl animate-pulse text-center">repeat</p>
            </div>
        </section>
    )
}

export default Hero