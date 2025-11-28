export const metadata = {
  title: 'Kariyer - i will Ekibine Katıl',
  description: 'i will ekibine katılmak ister misin? Gelecek Mobil Yazılım\'da kariyer fırsatları. Türkiye\'nin en yenilikçi sosyal platformunda çalış!',
  keywords: ['i will kariyer', 'gelecek mobil kariyer', 'yazılım işi', 'developer iş', 'startup iş', 'karabük iş'],
  openGraph: {
    title: 'Kariyer | i will',
    description: '🚀 Ekibimize katıl!\n💼 Yenilikçi projeler\n🌟 Genç ve dinamik ekip\n📍 Karabük, Türkiye',
    images: [{
      url: 'https://iwill.com.tr/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  alternates: {
    canonical: 'https://iwill.com.tr/kariyer',
  },
}

export default function KariyerLayout({ children }) {
  return children
}