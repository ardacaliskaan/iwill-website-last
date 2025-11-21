'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Portfolio() {
  // Hide language switcher on this page
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      .language-switcher,
      [class*="language"],
      button[aria-label*="language"],
      .fixed.bottom-6.right-6 {
        display: none !important;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])
  const [activeProject, setActiveProject] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      name: 'i will',
      category: 'social',
      tagline: 'Türkiye\'nin Sosyal Platformu',
      description: 'Etkinlik bazlı sosyal ağ platformu. Kullanıcılar etkinlik oluşturabilir, katılabilir ve yeni insanlarla tanışabilir. Sosyal bağlantıları güçlendiren, gerçek hayatta buluşmayı kolaylaştıran yenilikçi bir çözüm.',
      features: [
        'Etkinlik Keşfet & Oluştur',
        'Gerçek Zamanlı Bildirimler',
        'Konum Bazlı Akıllı Öneriler',
        'Sosyal Etkileşim & Mesajlaşma',
        'Kullanıcı Profilleri & İlgi Alanları',
        'Güvenli Topluluk Ortamı'
      ],
      stats: { 
        users: '1,000+', 
        events: '500+', 
        cities: '81',
        rating: '4.8/5'
      },
      color: 'from-blue-900 to-blue-700',
      icon: 'fas fa-users',
      link: 'https://iwill.com.tr'
    },
    {
      id: 2,
      name: 'Qasa',
      category: 'restaurant',
      tagline: 'Akıllı Restoran Yönetimi',
      description: 'QR kod tabanlı sipariş sistemi ve kapsamlı restoran yönetim çözümü. Operasyonel verimliliği artırın, müşteri deneyimini dijitalleştirin, maliyetleri optimize edin.',
      features: [
        'QR Kod Menü & Temassız Sipariş',
        'Dinamik Masa Yönetimi',
        'Çok Katmanlı Sadakat Programı',
        'Gerçek Zamanlı Stok & Envanter',
        'Detaylı Ciro & Analiz Raporları',
        'Garson & Mutfak Paneli',
        'Entegre POS Sistemi',
        'Çoklu Şube Yönetimi'
      ],
      stats: { 
        restaurants: '15+', 
        orders: '10,000+', 
        satisfaction: '98%',
        avgIncrease: '+35%'
      },
      color: 'from-slate-800 to-slate-600',
      icon: 'fas fa-utensils'
    },
    {
      id: 3,
      name: 'Qasa v2',
      category: 'restaurant',
      tagline: 'Yeni Nesil Food Delivery Platformu',
      description: 'Restoran ve müşteri arasındaki köprüyü güçlendiren, komisyon oranlarını optimize eden, sürdürülebilir food delivery ekosistemi. Yerel restoranları destekleyen adil platform.',
      features: [
        'Multi-Restoran Marketplace',
        'Akıllı Kurye Yönetimi & Optimizasyon',
        'Canlı Sipariş Takibi',
        'AI Destekli Yönlendirme',
        'Entegre Ödeme Altyapısı',
        'Dinamik İndirim & Kampanya',
        'Restaurant Dashboard & Analytics',
        'Müşteri Sadakat Entegrasyonu'
      ],
      stats: { 
        phase: 'Geliştirme Aşaması', 
        launch: '2025 Q2', 
        targetRestaurants: '100+',
      },
      color: 'from-gray-700 to-gray-900',
      icon: 'fas fa-motorcycle',
      badge: 'Yakında'
    }
  ]

  const team = [
    {
      name: 'Yunus Emre Kayıkçı',
      role: 'Kurucu & CEO',
      description: 'Vizyon sahibi lider. Stratejik planlama ve iş geliştirme.',
      icon: 'fas fa-chess-king',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Safa Erol Altınok',
      role: 'Co-Founder',
      description: 'Ürün stratejisi ve müşteri ilişkileri uzmanı.',
      icon: 'fas fa-handshake',
      color: 'from-slate-600 to-slate-800'
    },
    {
      name: 'Mahmut Arda Çalışkan',
      role: 'Yazılım Departmanı',
      description: 'Full-stack geliştirme ve teknik mimari.',
      icon: 'fas fa-code',
      color: 'from-gray-600 to-gray-800'
    }
  ]

  const stats = [
    { label: 'Tamamlanan Proje', value: '6+', icon: 'fas fa-project-diagram' },
    { label: 'Aktif Kullanıcı', value: '1,000+', icon: 'fas fa-users' },
    { label: 'Mutlu Müşteri', value: '15+', icon: 'fas fa-smile' },
    { label: 'Şehir', value: '81', icon: 'fas fa-map-marked-alt' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-24 md:pt-0">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className={`max-w-6xl mx-auto px-5 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo/Company Name */}
          <div className="mb-8">

          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Gelecek Mobil Yazılım
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-4 font-light max-w-3xl mx-auto">
            Dijital Dönüşümün Öncüsü
          </p>
          
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Yenilikçi mobil ve web çözümlerimizle işletmenizi geleceğe taşıyoruz. 
            Kullanıcı odaklı, ölçeklenebilir, güvenilir yazılımlar geliştiriyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <i className="fas fa-briefcase"></i>
              Projelerimizi İnceleyin
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              <i className="fas fa-envelope"></i>
              İletişime Geçin
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
              >
                <i className={`${stat.icon} text-blue-400 text-2xl mb-3`}></i>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <i className="fas fa-chevron-down text-white/40 text-2xl"></i>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Hakkımızda
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Biz Kimiz?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2025 yılında kurulan Gelecek Mobil Yazılım, yenilikçi dijital çözümler üreten 
              genç ve dinamik bir teknoloji şirketidir.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                İşletmelerin dijital dönüşüm süreçlerinde en güvenilir teknoloji ortağı olmak. 
                Kullanıcı deneyimini ön planda tutan, ölçeklenebilir ve sürdürülebilir çözümler sunmak.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Türkiye'nin önde gelen mobil yazılım şirketlerinden biri olmak. 
                Global pazarda rekabet edebilecek, dünya standartlarında ürünler geliştirmek.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-blue-600 text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">İnovasyon</h4>
              <p className="text-gray-600 text-sm">Sürekli yenilik ve teknoloji takibi</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-slate-700 text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">Güvenilirlik</h4>
              <p className="text-gray-600 text-sm">Sağlam altyapı ve güvenli kod</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-blue-600 text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">Kullanıcı Odaklı</h4>
              <p className="text-gray-600 text-sm">Her zaman kullanıcı deneyimi öncelik</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-5 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Portföy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projelerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Farklı sektörlere özel, yenilikçi dijital çözümler
            </p>

            {/* Filter Tabs */}
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Tümü
              </button>
              <button
                onClick={() => setActiveTab('social')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === 'social'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Sosyal Medya
              </button>
              <button
                onClick={() => setActiveTab('restaurant')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === 'restaurant'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Restoran Teknolojisi
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects
              .filter(project => activeTab === 'all' || project.category === activeTab)
              .map((project, index) => (
              <div 
                key={project.id}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  {/* Project Visual */}
                  <div className={`bg-gradient-to-br ${project.color} p-12 flex items-center justify-center relative overflow-hidden ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center">
                      <i className={`${project.icon} text-white text-8xl mb-6 drop-shadow-2xl`}></i>
                      <h3 className="text-4xl font-bold text-white drop-shadow-lg">{project.name}</h3>
                      {project.badge && (
                        <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mt-4 border border-white/30">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-12">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                      {project.category === 'social' ? 'Sosyal Platform' : 'Restoran Teknolojisi'}
                    </span>
                    
                    <h3 className="text-3xl font-bold mb-3">{project.tagline}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <i className="fas fa-check-circle text-blue-600"></i>
                      Özellikler
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <i className="fas fa-angle-right text-blue-600 mt-1"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx}>
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-blue-600 font-semibold hover:gap-3 transition-all"
                      >
                        Projeyi İncele
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Hizmetlerimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
              Sunduğumuz Hizmetler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern teknolojilerle profesyonel çözümler üretiyoruz. İşletmenizi dijital dünyada öne çıkaracak hizmetler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Web Development */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-code text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Modern, hızlı ve SEO uyumlu web siteleri ve uygulamaları geliştiriyorum.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Proje bazlı</span>
                <span className="font-semibold text-blue-600">2-8 hafta</span>
              </div>
              <button className="w-full bg-slate-900 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                <i className="fas fa-circle text-green-400 text-xs"></i>
                Teklif Al
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            {/* Backend Development */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-server text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Backend Development</h3>
              <p className="text-gray-600 mb-6">
                Güçlü, güvenli ve ölçeklenebilir backend sistemleri ve API'ler tasarlıyorum.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Proje bazlı</span>
                <span className="font-semibold text-slate-700">3-10 hafta</span>
              </div>
              <button className="w-full bg-slate-900 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                <i className="fas fa-circle text-green-400 text-xs"></i>
                Teklif Al
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            {/* Mobile Development */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-mobile-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Mobile Development</h3>
              <p className="text-gray-600 mb-6">
                iOS platformu için native mobil uygulamalar geliştiriyorum.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Proje bazlı</span>
                <span className="font-semibold text-blue-600">4-12 hafta</span>
              </div>
              <button className="w-full bg-slate-900 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                <i className="fas fa-circle text-green-400 text-xs"></i>
                Teklif Al
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            {/* UI/UX Design */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-gray-600 mb-6">
                Kullanıcı odaklı, modern ve etkileyici arayüz tasarımları oluşturuyorum.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Proje bazlı</span>
                <span className="font-semibold text-slate-700">1-4 hafta</span>
              </div>
              <button className="w-full bg-slate-900 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                <i className="fas fa-circle text-green-400 text-xs"></i>
                Teklif Al
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            {/* Consulting & Code Review */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-comments text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Consulting & Code Review</h3>
              <p className="text-gray-600 mb-6">
                Projeniz için teknik danışmanlık ve kod kalitesi değerlendirmesi sağlıyorum.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Saatlik</span>
                <span className="font-semibold text-blue-600">Esnek</span>
              </div>
              <button className="w-full bg-slate-900 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                <i className="fas fa-circle text-green-400 text-xs"></i>
                Teklif Al
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            {/* Maintenance & Support */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-tools text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Maintenance & Support</h3>
              <p className="text-gray-600 mb-6">
                Mevcut uygulamalarınız için bakım, güncelleme ve teknik destek hizmeti.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Aylık paket</span>
                <span className="font-semibold text-slate-700">Sürekli</span>
              </div>
              <button className="w-full bg-slate-900 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                <i className="fas fa-circle text-green-400 text-xs"></i>
                Teklif Al
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">
              Tüm projelerimizde modern teknolojiler, en iyi pratikler ve sürdürülebilir kod standartları kullanılır
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Hızlı Teslimat</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>7/24 Destek</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Kalite Garantisi</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Uygun Fiyat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-5 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
              Ekibimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Arkasındaki Ekip</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Tutkulu, deneyimli ve yenilikçi profesyonellerden oluşan ekibimiz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`${member.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-blue-400 font-semibold mb-4">{member.role}</div>
                <p className="text-white/70">{member.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-white/60 mb-6">Ayrıca 6 uzman yazılımcı ile birlikte çalışıyoruz</p>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <i className="fas fa-users"></i>
              <span className="font-semibold">Toplam 9 Kişilik Ekip</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-5 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projenizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Dijital dönüşüm yolculuğunuzda yanınızdayız. 
            İşletmenizi bir üst seviyeye taşıyalım.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="mailto:info@gelecek-yazilim.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <i className="fas fa-envelope"></i>
              E-posta Gönder
            </a>
            <a 
              href="tel:+908508883478"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              <i className="fas fa-phone"></i>
              Hemen Ara
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 text-white/80">
            <div>
              <i className="fas fa-map-marker-alt text-2xl mb-2 text-blue-400"></i>
              <div className="font-semibold">Adres</div>
              <div className="text-sm">Karabük, Türkiye</div>
            </div>
            <div>
              <i className="fas fa-envelope text-2xl mb-2 text-blue-400"></i>
              <div className="font-semibold">E-posta</div>
              <div className="text-sm">admin@iwill.com.tr</div>
            </div>
            <div>
              <i className="fas fa-phone text-2xl mb-2 text-blue-400"></i>
              <div className="font-semibold">Telefon</div>
              <div className="text-sm">0850 888 34 78</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Gelecek Mobil Yazılım</h3>
            <p className="text-white/60">Dijital Dönüşümün Öncüsü</p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/iwill.com.tr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60 text-sm mb-3">
              © 2025 Gelecek Mobil Yazılım Tic. A.Ş. Tüm Hakları Saklıdır.
            </p>
            <div className="flex justify-center gap-6 text-sm text-white/40">
              <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
              <Link href="/kullanim-sartlari">Kullanım Şartları</Link>
              <Link href="/kvkk">KVKK</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}