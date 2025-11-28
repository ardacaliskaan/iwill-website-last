export const metadata = {
  title: 'Destek - i will Yardım ve SSS',
  description: 'i will uygulaması hakkında sık sorulan sorular ve destek. Hesap oluşturma, etkinlik katılımı, güvenlik ve daha fazlası hakkında yardım alın.',
  keywords: ['i will destek', 'i will yardım', 'i will sss', 'i will nasıl kullanılır', 'i will hesap', 'i will sorun'],
  openGraph: {
    title: 'Destek | i will',
    description: '❓ Sık Sorulan Sorular\n💬 Yardım Merkezi\n📧 Destek Ekibi\n\nSize yardımcı olmak için buradayız!',
    images: [{
      url: 'https://iwill.com.tr/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  alternates: {
    canonical: 'https://iwill.com.tr/destek',
  },
}

export default function DestekLayout({ children }) {
  return children
}