export const metadata = {
  title: 'Hakkımızda - i will Sosyal Platformu',
  description: 'i will, 2025 yılında kurulan Gelecek Mobil Yazılım tarafından geliştirildi. 8 kişilik uzman ekip, 1000+ mutlu kullanıcı. Türkiye\'nin yenilikçi sosyal platformu.',
  keywords: ['i will hakkında', 'i will ekip', 'gelecek mobil yazılım', 'yunus emre kayıkçı', 'safa erol altınok', 'türk sosyal platform'],
  openGraph: {
    title: 'Hakkımızda | i will',
    description: '🚀 2025\'te kurulan yenilikçi platform\n👥 8 kişilik uzman ekip\n💡 Türkiye\'nin sosyal platformu\n🎯 1000+ mutlu kullanıcı',
    images: [{
      url: 'https://iwill.com.tr/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  alternates: {
    canonical: 'https://iwill.com.tr/hakkimizda',
  },
}

export default function HakkimizdaLayout({ children }) {
  return children
}