import './globals.css'
import LayoutClient from '@/components/LayoutClient'

export const metadata = {
  metadataBase: new URL('https://iwill.com.tr'),
  title: {
    default: 'i will - Türkiye\'nin Sosyal Platformu',
    template: '%s | i will'
  },
  description: 'i will ile geleceğini paylaş! Sosyal etkinlikler, arkadaşlık, networking. Türkiye\'nin en yenilikçi sosyal platformu. 1000+ aktif kullanıcı, 81 ilde hizmet.',
  keywords: ['i will', 'sosyal platform', 'etkinlik platformu', 'sosyal ağ', 'türkiye sosyal platform', 'mobil uygulama', 'sosyal medya türkiye', 'etkinlik uygulaması', 'networking platformu', 'arkadaşlık uygulaması', 'gelecek mobil yazılım'],
  authors: [
    { name: 'Gelecek Mobil Yazılım Tic. A.Ş.' },
    { name: 'Yunus Emre Kayıkçı', url: 'https://iwill.com.tr/detaylar/emre-kayikci' }
  ],
  creator: 'Gelecek Mobil Yazılım',
  publisher: 'Gelecek Mobil Yazılım Tic. A.Ş.',
  
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://iwill.com.tr',
    siteName: 'i will',
    title: 'i will | Türkiye\'nin Sosyal Platformu',
    description: '🎯 Sosyal etkinlikler\n💡 Networking\n🌟 Arkadaşlık\n\n1000+ Kullanıcı | 500+ Etkinlik | 81 İl',
    images: [
      {
        url: 'https://iwill.com.tr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'i will - Türkiye\'nin Sosyal Platformu',
        type: 'image/png',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@iwill_com_tr',
    creator: '@iwill_com_tr',
    title: 'i will | Türkiye\'nin Sosyal Platformu',
    description: '🎯 Etkinlik | 💡 Networking | 🌟 Arkadaşlık\n1000+ Kullanıcı ile geleceğini paylaş!',
    images: ['https://iwill.com.tr/og-image.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_24x24_transparent.png', sizes: '24x24', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon_io/favicon.ico' },
    ],
  },
  
  manifest: '/favicon_io/site.webmanifest',
  
  alternates: {
    canonical: 'https://iwill.com.tr',
    languages: {
      'tr-TR': 'https://iwill.com.tr',
      'en-US': 'https://iwill.com.tr/en',
    },
  },
  
  category: 'technology',
  
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/app/id6478287444',
      app_store_id: '6478287444',
    },
    android: {
      package: 'com.iwill.app',
      url: 'https://play.google.com/store/apps/details?id=com.iwill.app',
    },
  },
  
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'i will',
    'application-name': 'i will',
    'msapplication-TileColor': '#6366f1',
    'theme-color': '#6366f1',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#6366f1',
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gelecek Mobil Yazılım Tic. A.Ş.',
    legalName: 'Gelecek Mobil Yazılım Ticaret Anonim Şirketi',
    url: 'https://iwill.com.tr',
    logo: 'https://iwill.com.tr/og-image.png',
    foundingDate: '2025',
    founders: [
      {
        '@type': 'Person',
        name: 'Yunus Emre Kayıkçı',
        jobTitle: 'Kurucu & CEO',
        url: 'https://iwill.com.tr/detaylar/emre-kayikci',
        sameAs: 'https://www.linkedin.com/in/yunusemrekayikci'
      },
      {
        '@type': 'Person',
        name: 'Safa Erol Altınok',
        jobTitle: 'Kurucu Ortak',
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karabük',
      addressCountry: 'TR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-533-680-70-50',
      contactType: 'customer service',
      email: 'admin@iwill.com.tr',
      availableLanguage: ['Turkish', 'English']
    },
    sameAs: [
      'https://www.instagram.com/iwill.com.tr',
      'https://www.linkedin.com/company/gelecekmobilyazilim'
    ],
    description: 'Türkiye\'nin yenilikçi sosyal platformu i will\'in geliştiricisi. Mobil uygulama ve web yazılım çözümleri.',
    slogan: 'Geleceğini Paylaş',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 8
    }
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'i will',
    alternateName: 'Gelecek Mobil Yazılım',
    url: 'https://iwill.com.tr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://iwill.com.tr/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'tr-TR',
    copyrightYear: 2025,
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Gelecek Mobil Yazılım Tic. A.Ş.'
    }
  }

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'i will',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'SocialNetworkingApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY'
    },
    downloadUrl: 'https://iwill.com.tr/download',
    description: 'Türkiye\'nin sosyal platformu. Etkinlikler, networking ve arkadaşlık.'
  }

  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}