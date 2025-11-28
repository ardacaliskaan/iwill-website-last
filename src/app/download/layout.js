export const metadata = {
  title: 'i will İndir - iOS & Android Uygulama',
  description: 'i will uygulamasını ücretsiz indir! iOS App Store ve Android Google Play\'de. 1000+ kullanıcı, 500+ etkinlik. Türkiye\'nin sosyal platformu şimdi cebinde!',
  keywords: ['i will indir', 'i will app', 'i will uygulama', 'sosyal platform indir', 'etkinlik uygulaması', 'i will ios', 'i will android', 'ücretsiz sosyal app'],
  openGraph: {
    title: '📱 i will İndir | Ücretsiz iOS & Android',
    description: '🎯 Etkinlikleri Keşfet\n💡 Yeni İnsanlarla Tanış\n🌟 Geleceğini Paylaş\n\n✅ Ücretsiz İndir\n📊 1000+ Kullanıcı\n🗺️ 81 İl',
    images: [{
      url: 'https://iwill.com.tr/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  alternates: {
    canonical: 'https://iwill.com.tr/download',
  },
}

export default function DownloadLayout({ children }) {
  return children
}