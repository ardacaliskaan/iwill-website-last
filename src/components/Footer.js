import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const footerLinks = {
    sayfalar: [
      { href: '/', label: 'Anasayfa' },
      { href: '/hakkimizda', label: 'Hakkımızda' },
      { href: '/kariyer', label: 'Kariyer' },
      { href: '/destek', label: 'Destek' },
      { href: '/iletisim', label: 'İletişim' },
    ],
    yasal: [
      { href: '#', label: 'Gizlilik Politikası' },
      { href: '#', label: 'Kullanım Şartları' },
      { href: '#', label: 'KVKK' },
      { href: '#', label: 'Çerez Politikası' },
    ],
  }

  const socialLinks = [
    { href: 'https://www.instagram.com/iwill.com.tr', icon: 'fab fa-instagram' },
    { href: 'https://www.facebook.com', icon: 'fab fa-facebook-f' },
    { href: 'https://www.linkedin.com', icon: 'fab fa-linkedin-in' },
    { href: 'https://www.youtube.com', icon: 'fab fa-youtube' },
  ]

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">i will</h4>
            <p className="text-gray-400 text-sm mb-4">
              Türkiye'nin sosyal platformu. Geleceğini paylaş.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary hover:-translate-y-1 transition-all"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Sayfalar */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Sayfalar</h4>
            <ul className="space-y-2">
              {footerLinks.sayfalar.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-primary-light hover:pl-1 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Yasal</h4>
            <ul className="space-y-2">
              {footerLinks.yasal.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-primary-light hover:pl-1 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:admin@iwill.com.tr"
                  className="text-gray-400 text-sm hover:text-primary-light transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-envelope"></i>
                  admin@iwill.com.tr
                </a>
              </li>
              <li>
                <a 
                  href="tel:+905336807050"
                  className="text-gray-400 text-sm hover:text-primary-light transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-phone"></i>
                  0533 680 70 50
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm flex items-center gap-2">
                  <i className="fas fa-map-marker-alt"></i>
                  Karabük, Türkiye
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Güvenli Ödeme Logoları */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col items-center gap-6">
            {/* Başlık */}
            <div className="text-center">
              <h5 className="text-white font-semibold text-sm mb-2">Güvenli Ödeme</h5>
              <p className="text-gray-500 text-xs">SSL sertifikası ile korunan güvenli alışveriş</p>
            </div>

            {/* Ödeme Logoları */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* iyzico Logo */}
              <div className="flex items-center">
                <Image
                  src="/images/iyzico-logo.png"
                  alt="iyzico ile öde"
                  width={120}
                  height={40}
                  className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Divider - sadece desktop'ta görünür */}
              <div className="hidden md:block w-px h-8 bg-white/10"></div>

              {/* Kart Logoları */}
              <div className="flex items-center">
                <Image
                  src="/images/payment-cards.png"
                  alt="Visa, MasterCard, American Express, Troy"
                  width={300}
                  height={40}
                  className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm mb-3">
            © 2025 i will - Gelecek Mobil Yazılım Tic. A.Ş. Tüm Hakları Saklıdır.
          </p>
          <a 
            href="https://ardacaliskan.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 text-sm text-gray-400 border-2 border-transparent rounded-full hover:text-primary hover:border-primary transition-all"
          >
            © Designed by Çalışkan Yazılım
          </a>
        </div>
      </div>
    </footer>
  )
}