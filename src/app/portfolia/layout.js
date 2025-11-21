export const metadata = {
  title: 'Gelecek Mobil Yazılım - Dijital Dönüşümün Öncüsü',
  description: '🚀 i will | Qasa | Türkiye\'nin yenilikçi mobil yazılım şirketi. 1000+ kullanıcı, 15+ mutlu müşteri. Mobil uygulama ve web geliştirme çözümleri.',
  keywords: 'mobil uygulama, web geliştirme, yazılım şirketi, i will, qasa, restoran yönetimi',
  authors: [{ name: 'Gelecek Mobil Yazılım' }],
  openGraph: {
    title: '⚡ Gelecek Mobil Yazılım | Dijital Dönüşümün Öncüsü',
    description: '🎯 i will Sosyal Platform\n🍽️ Qasa Restoran Yönetimi\n💡 Yenilikçi Çözümler\n\n1000+ Kullanıcı | 6+ Proje | 81 İl',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://iwill.com.tr/portfolio',
    siteName: 'Gelecek Mobil Yazılım',
    images: [
      {
        url: 'https://iwill.com.tr/geleceklogo.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Gelecek Mobil Yazılım - Portföy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '⚡ Gelecek Mobil Yazılım | Dijital Dönüşümün Öncüsü',
    description: '🎯 i will | 🍽️ Qasa | 💡 Yenilikçi Dijital Çözümler',
    images: ['https://iwill.com.tr/geleceklogo.png?v=2'],
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon_io/favicon.ico' },
      { rel: 'manifest', url: '/favicon_io/site.webmanifest' },
    ],
  },
}

export default function PortfolioLayout({ children }) {
  return <>{children}</>
}