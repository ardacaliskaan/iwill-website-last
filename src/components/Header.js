'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/', label: 'Anasayfa' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/kariyer', label: 'Kariyer' },
    { href: '/destek', label: 'Destek' },
    { href: '/iletisim', label: 'İletişim' },
  ]

  const socialLinks = [
    { href: 'https://www.instagram.com/iwill.com.tr', icon: 'fab fa-instagram' },
    { href: 'https://www.facebook.com', icon: 'fab fa-facebook-f' },
    { href: 'https://www.linkedin.com', icon: 'fab fa-linkedin-in' },
    { href: 'https://www.youtube.com', icon: 'fab fa-youtube' },
    { href: 'https://www.tiktok.com', icon: 'fab fa-tiktok' },
    { href: 'https://twitter.com', icon: 'fab fa-x-twitter' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img 
            src="/i-will-logo.png" 
            alt="i will Logo" 
            className="h-10 hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white font-medium hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white text-sm hover:bg-primary hover:-translate-y-1 transition-all"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-gray-900 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 pt-20">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            <i className="fas fa-times"></i>
          </button>

          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-lg font-medium py-3 border-b border-white/10 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3 mt-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition-colors"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}