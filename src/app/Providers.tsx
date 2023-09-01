'use client'

import { ReactNode } from "react"
import { useEffect, useState } from "react"
import { ThemeProvider } from "next-themes"

interface ProvidersProps {
    children: ReactNode
}

export function Providers({ children }: ProvidersProps) {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

    return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
