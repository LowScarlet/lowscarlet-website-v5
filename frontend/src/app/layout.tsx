import './globals.css'
import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'

const hanken_grotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LowScarlet - Personal Website',
  description: 'Hi 👋, I am Tegar Maulana Fahreza, a web developer from Indonesia.',
  metadataBase: new URL('https://lowscarlet.my.id'),
  openGraph: {
    type: "website",
    url: "https://lowscarlet.my.id",
    title: "LowScarlet - Personal Website",
    description: "Hi 👋, I am Tegar Maulana Fahreza, a web developer from Indonesia.",
    siteName: "LowScarlet",
    images: [
      '/pp.png'
    ]
  },
  colorScheme: "dark",
  creator: "Tegar Maulana Fahreza",
  publisher: "Vercel"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='transition duration-300 ease-in-out dark:bg-dark-calm bg-white'>
      <body className={hanken_grotesk.className}>{children}</body>
    </html>
  )
}
