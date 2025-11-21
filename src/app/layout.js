'use client'

import './globals.css'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isPortfolio = pathname === '/portfolia'

  return (
    <html lang="tr">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <title>i will - Türkiye'nin Sosyal Platformu</title>
        <meta name="description" content="i will ile geleceğini paylaş. Türkiye'nin sosyal platformu." />
        <link rel="icon" href="/favicon_24x24_transparent.png" />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main>{children}</main>
        {!isPortfolio && <Footer />}
      </body>
    </html>
  )
}