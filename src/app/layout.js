import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LanguageSwitch from '@/components/LanguageSwitch'

export const metadata = {
  title: 'i will - Türkiye\'nin Sosyal Platformu',
  description: 'i will ile geleceğini paylaş. Türkiye\'nin sosyal platformu.',
  icons: {
    icon: '/favicon_24x24_transparent.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link 
          rel="stylesheet" 
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <LanguageSwitch />
      </body>
    </html>
  )
}