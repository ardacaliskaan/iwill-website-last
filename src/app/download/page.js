'use client'

import { useEffect, useState } from 'react'

export default function Download() {
  const [isRedirecting, setIsRedirecting] = useState(true)
  const [deviceType, setDeviceType] = useState('')

  useEffect(() => {
    const detectAndRedirect = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera

      // iOS cihazları kontrol et
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        setDeviceType('iOS')
        window.location.href = 'https://apps.apple.com/app/i-will/id6744853265'
        return
      }

      // Android cihazları kontrol et
      if (/android/i.test(userAgent)) {
        setDeviceType('Android')
        window.location.href = 'https://play.google.com/store/apps/details?id=com.gelecekmobilyazilim.iwill'
        return
      }

      // Masaüstü veya diğer cihazlar
      setIsRedirecting(false)
    }

    // Kısa bir gecikme ile yönlendirme (UX için)
    const timer = setTimeout(detectAndRedirect, 500)
    return () => clearTimeout(timer)
  }, [])

  // Yönlendirme ekranı
  if (isRedirecting && deviceType) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-primary">
        <div className="text-center text-white">
          <img src="/i-will-logo-white.png" alt="i will" className="h-20 mx-auto mb-8" />
          <div className="spinner mx-auto mb-6"></div>
          <p className="text-xl font-medium">
            {deviceType === 'iOS' ? 'App Store\'a' : 'Google Play\'e'} yönlendiriliyorsunuz...
          </p>
        </div>
      </div>
    )
  }

  // Masaüstü kullanıcılar için sayfa
  return (
    <>
      <section className="min-h-screen flex items-center justify-center pt-20 px-5 gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <img src="/i-will-logo-white.png" alt="i will" className="h-24 mx-auto mb-8" />
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            i will'i İndir
          </h1>
          
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Türkiye'nin sosyal platformuna katıl. iOS veya Android cihazına hemen indir!
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="https://apps.apple.com/app/i-will/id6744853265"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl flex items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all"
            >
              <i className="fab fa-apple text-4xl"></i>
              <div className="text-left">
                <span className="block text-xs">Download on the</span>
                <span className="block text-xl font-semibold">App Store</span>
              </div>
            </a>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.gelecekmobilyazilim.iwill"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl flex items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all"
            >
              <i className="fab fa-google-play text-3xl"></i>
              <div className="text-left">
                <span className="block text-xs">GET IT ON</span>
                <span className="block text-xl font-semibold">Google Play</span>
              </div>
            </a>
          </div>

          {/* QR Codes */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 inline-block">
            <h3 className="text-white font-semibold mb-6">QR Kod ile İndir</h3>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <div className="text-center">
                <div className="bg-white p-4 rounded-xl mb-3">
                  <img src="/qr-ios.png" alt="iOS QR" className="w-32 h-32" />
                </div>
                <span className="text-white/80 text-sm">iOS</span>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-xl mb-3">
                  <img src="/qr-android.png" alt="Android QR" className="w-32 h-32" />
                </div>
                <span className="text-white/80 text-sm">Android</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Neler Yapabilirsin?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Topluluk Bul</h3>
              <p className="text-gray-600 text-sm">Aynı ilgi alanlarına sahip insanlarla tanış</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-calendar-plus text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Etkinlik Oluştur</h3>
              <p className="text-gray-600 text-sm">Kendi etkinliğini oluştur ve paylaş</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Arkadaş Edin</h3>
              <p className="text-gray-600 text-sm">Yeni insanlarla tanış ve arkadaşlıklar kur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}