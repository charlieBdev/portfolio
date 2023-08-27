import type { Metadata } from 'next'
import './globals.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Providers } from './Providers'
import  { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Charlie B - Jnr Web Dev',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" className="light" style={{ colorScheme: 'light' }}>
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          <link rel="apple-touch-icon" sizes="180x180" href="src/app/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="src/app/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="src/app/favicon-16x16.png" />
          <link rel="manifest" href="src/app/site.webmanifest" />
        </head>
        <body className={inter.className}>
            <Providers>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </Providers>
        </body>
      </html>
    </>
  )
}
