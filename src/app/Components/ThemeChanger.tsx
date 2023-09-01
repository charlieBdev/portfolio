"use client"

import { useTheme } from "next-themes";
import Light from "./Light"
import Dark from "./Dark"
// import { useEffect, useState } from "react";

export default function ThemeChanger() {
    const { theme, setTheme } = useTheme()
    // const [mounted, setMounted] = useState<boolean>(false)

    // useEffect(() => {
    //     setMounted(true)
    // }, [])

    // if (!mounted) {
    //     return null
    // }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Toggle ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
            className="flex items-center rounded-lg transition delay-100 duration-300 ease-in-out"
        >
            {theme === 'light' ? <Dark /> : <Light />}
        </button>
    )
}
