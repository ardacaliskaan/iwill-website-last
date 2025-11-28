export const metadata = {
  title: 'İletişim - i will Ekibi ile İletişime Geçin',
  description: 'i will ekibi ile iletişime geçin. Sorularınız, önerileriniz için bizimle iletişime geçebilirsiniz. Tel: 0533 680 70 50 | Email: admin@iwill.com.tr | Karabük, Türkiye',
  keywords: ['i will iletişim', 'i will destek', 'i will ekip', 'i will telefon', 'i will email', 'gelecek mobil iletişim'],
  openGraph: {
    title: 'İletişim | i will',
    description: '📞 0533 680 70 50\n📧 admin@iwill.com.tr\n📍 Karabük, Türkiye\n\nSorularınız için bize ulaşın!',
    images: [{
      url: 'https://iwill.com.tr/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  alternates: {
    canonical: 'https://iwill.com.tr/iletisim',
  },
}

export default function IletisimLayout({ children }) {
  return children
}