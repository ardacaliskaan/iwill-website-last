'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitch() {
  const pathname = usePathname()
  
  // Check if current path is English version
  const isEnglish = pathname.includes('/en')
  
  return (
    <Link
      href={isEnglish ? pathname.replace('/en', '') : `/en${pathname}`}
      className="fixed bottom-5 right-5 bg-gray-900 text-white px-5 py-3 rounded-full font-medium text-sm z-50 hover:bg-primary hover:-translate-y-1 transition-all shadow-lg flex items-center gap-2"
    >
      <i className="fas fa-globe"></i>
      {isEnglish ? 'Türkçe' : 'English'}
    </Link>
  )
}