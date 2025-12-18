'use client'

import { useState } from 'react'

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const galleryItems = [
    { src: '/etkinlikleri-kesfet.png', title: 'Etkinlikleri Keşfet' },
    { src: '/kendi-etkinligini-paylas.png', title: 'Kendi Etkinliğini Paylaş' },
    { src: '/senin-alanin-senin-tarzin.png', title: 'Senin Alanın Senin Tarzın' },
  ]

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryItems.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)

  return (
    <>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-16 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/anasayfa-resim.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-primary-dark/50" />
        
        {/* Animated background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Türkiye'nin Sosyal Etkinlik Platformu
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-light drop-shadow-lg">
            i will ile geleceğini paylaş
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/app/i-will/id6744853265"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl flex items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
            >
              <i className="fab fa-apple text-4xl group-hover:scale-110 transition-transform"></i>
              <div className="text-left">
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Download on the</span>
                <span className="block text-xl font-bold">App Store</span>
              </div>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.gelecekmobilyazilim.iwill"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl flex items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
            >
              <i className="fab fa-google-play text-3xl group-hover:scale-110 transition-transform"></i>
              <div className="text-left">
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Get it on</span>
                <span className="block text-xl font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Uygulama Özellikleri
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                onClick={() => openLightbox(index)}
                className="cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <span className="text-white font-semibold text-lg">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-5 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Neden i will?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Topluluk</h3>
              <p className="text-gray-600">Aynı ilgi alanlarına sahip insanlarla tanış ve birlikte eğlen.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-calendar-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Etkinlikler</h3>
              <p className="text-gray-600">Konserler, spor aktiviteleri ve daha fazlası için arkadaş bul.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-share-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Paylaşım</h3>
              <p className="text-gray-600">Deneyimlerini paylaş ve yeni maceralara birlikte çık.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 gradient-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hemen Başla!
          </h2>
          <p className="text-white/90 text-lg mb-8">
            i will'i indir ve geleceğini şekillendirmeye bugün başla.
          </p>
          <a 
            href="/download"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <i className="fas fa-download"></i>
            Uygulamayı İndir
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button 
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-3xl hover:text-primary transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-5 text-white text-3xl hover:text-primary transition-colors"
          >
            <i className="fas fa-angle-left"></i>
          </button>
          
          <img 
            src={galleryItems[currentImage].src}
            alt={galleryItems[currentImage].title}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-5 text-white text-3xl hover:text-primary transition-colors"
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      )}
    </>
  )
}