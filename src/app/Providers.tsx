'use client'

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes"

interface ProvidersProps {
    children: ReactNode; // Define children prop with ReactNode type
}

export function Providers({ children }: ProvidersProps) {
    return <ThemeProvider>{children}</ThemeProvider>
}