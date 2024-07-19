'use client'

import { Poppins } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import ThemeContext, { ThemeProvider } from "@/lib/themeContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-sans",
})

type Theme = 'light' | 'dark';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <html lang="en">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <body className={cn(theme, poppins.variable)}>
          <Sidebar pages={children} />
        </body>
        </ThemeContext.Provider>
    </html>
  )
}
