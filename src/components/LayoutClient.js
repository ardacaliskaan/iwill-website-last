'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LayoutClient({ children }) {
  const pathname = usePathname()
  const isPortfolio = pathname === '/portfolia'

  return (
    <>
      <Header />
      <main>{children}</main>
      {!isPortfolio && <Footer />}
    </>
  )
}