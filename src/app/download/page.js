'use client'

import { useEffect, useState } from 'react'

export default function Download() {
  const [isRedirecting, setIsRedirecting] = useState(true)
  const [deviceType, setDeviceType] = useState('')
  const [countdown, setCountdown] = useState(3)

  const appStoreUrl = 'https://apps.apple.com/app/i-will/id6744853265'
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.gelecekmobilyazilim.iwill'

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        setDeviceType('iOS')
        return appStoreUrl
      }

      if (/android/i.test(userAgent)) {
        setDeviceType('Android')
        return playStoreUrl
      }

      return null
    }

    const storeUrl = detectDevice()

    if (storeUrl) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval)
            window.location.href = storeUrl
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(countdownInterval)
    } else {
      setIsRedirecting(false)
    }
  }, [])

  // Mobil yönlendirme ekranı
  if (isRedirecting && deviceType) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark">
        <div className="text-center text-white px-6">
          <div className="mb-8 animate-bounce">
            <img src="/iwill_beyaz.PNG" alt="i will" className="h-24 mx-auto" />
          </div>
          
          <div className="mb-8">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-3xl font-bold mb-3">
              {deviceType === 'iOS' ? 'App Store' : 'Google Play'}
            </p>
            <p className="text-white/80 text-lg">
              {countdown} saniye içinde yönlendiriliyorsunuz...
            </p>
          </div>

          <a 
            href={deviceType === 'iOS' ? appStoreUrl : playStoreUrl}
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            <i className={`fab fa-${deviceType === 'iOS' ? 'apple' : 'google-play'} text-2xl`}></i>
            Hemen İndir
          </a>
        </div>
      </div>
    )
  }

  // Masaüstü sayfa
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-5 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="mb-8">
            <img src="/iwill_beyaz.PNG" alt="i will" className="h-28 mx-auto drop-shadow-2xl" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            İndir
          </h1>
          
          <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
            Etkinlikleri keşfet, yeni insanlarla tanış, anılar biriktir!
          </p>

          {/* Store Buttons - Custom Design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            {/* App Store Button */}
            <a 
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-10 py-5 rounded-2xl flex items-center justify-center gap-4 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 group"
            >
              <i className="fab fa-apple text-5xl group-hover:scale-110 transition-transform"></i>
              <div className="text-left">
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Download on the</span>
                <span className="block text-2xl font-bold">App Store</span>
              </div>
            </a>
            
            {/* Google Play Button */}
            <a 
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-10 py-5 rounded-2xl flex items-center justify-center gap-4 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 group"
            >
              <i className="fab fa-google-play text-4xl group-hover:scale-110 transition-transform"></i>
              <div className="text-left">
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Get it on</span>
                <span className="block text-2xl font-bold">Google Play</span>
              </div>
            </a>
          </div>

          {/* QR Code Section */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 inline-block border border-white/10 shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <i className="fas fa-qrcode text-primary text-xl"></i>
              <h3 className="text-white font-bold text-xl">Telefonunuzla Tarayın</h3>
            </div>
            <p className="text-white/60 text-sm mb-8">Kameranızı QR koda tutun ve anında indirin</p>
            
            <div className="flex flex-col sm:flex-row gap-10 justify-center">
              {/* iOS QR */}
              <div className="text-center group">
                <div className="bg-white p-5 rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(appStoreUrl)}&bgcolor=ffffff&color=000000`}
                    alt="iOS QR Code" 
                    className="w-36 h-36"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <i className="fab fa-apple text-xl"></i>
                  <span className="font-semibold">iOS</span>
                </div>
              </div>

              {/* Android QR */}
              <div className="text-center group">
                <div className="bg-white p-5 rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(playStoreUrl)}&bgcolor=ffffff&color=000000`}
                    alt="Android QR Code" 
                    className="w-36 h-36"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <i className="fab fa-android text-xl"></i>
                  <span className="font-semibold">Android</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <i className="fas fa-chevron-down text-white/30 text-2xl"></i>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Neler Yapabilirsin?</h2>
          <p className="text-gray-500 text-center mb-16 text-lg">Sosyal hayatını zenginleştir</p>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-3xl hover:bg-gray-50 transition-all duration-300 group">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <i className="fas fa-compass text-white text-3xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3">Etkinlik Keşfet</h3>
              <p className="text-gray-600">Çevrenizdeki etkinlikleri keşfedin ve katılın</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl hover:bg-gray-50 transition-all duration-300 group">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <i className="fas fa-plus-circle text-white text-3xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3">Etkinlik Oluştur</h3>
              <p className="text-gray-600">Kendi etkinliğinizi oluşturun ve paylaşın</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl hover:bg-gray-50 transition-all duration-300 group">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <i className="fas fa-user-friends text-white text-3xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3">Arkadaş Bul</h3>
              <p className="text-gray-600">Aynı ilgi alanlarına sahip insanlarla tanışın</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-5 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">1000+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Aktif Kullanıcı</div>
            </div>
            <div className="p-6 border-x border-gray-800">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">500+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Etkinlik</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">81</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">İl</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hemen Başla!</h2>
          <p className="text-gray-600 text-lg mb-10">
            i will ile geleceğini şekillendirmeye bugün başla
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <i className="fab fa-apple text-xl"></i>
              App Store
            </a>
            <a 
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <i className="fab fa-google-play text-lg"></i>
              Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
