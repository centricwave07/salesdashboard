'use client'

import { Poppins } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import { ThemeProvider } from '@/lib/theme-provider'
import ThemeDataProvider from '@/lib/themeContext'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
})

type Theme = 'light' | 'dark'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localValue = localStorage.getItem("mode")
      if (localValue == undefined || localValue == null || localValue == "") {
        localStorage.setItem("mode", "light")
      }

    }
  }, [])

  return (
    <html lang="en">
    <body
    className={cn(
      `h-full bg-background font-sans antialiased`,
      poppins.variable,
    )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <ThemeDataProvider >
          <Sidebar pages={children} />
        </ThemeDataProvider>
      </ThemeProvider>
    </body>
  </html>
  )
}
