import './globals.css'
import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'

const hanken_grotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={hanken_grotesk.className}>{children}</body>
    </html>
  )
}
