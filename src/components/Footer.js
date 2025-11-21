import Link from 'next/link'

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
              Türkiye'nin sosyal platformu. Geleceğini bizimle paylaş.
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

        {/* Bottom */}
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