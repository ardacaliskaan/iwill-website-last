'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'

export default function Destek() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqItems = [
    {
      question: 'i will nedir?',
      answer: 'i will, etkinliklere birlikte katılacak arkadaşlar bulmanızı sağlayan bir sosyal platformdur. Konserlerden spor aktivitelerine, seyahatlerden oyun gecelerine kadar her türlü etkinlik için partner bulabilirsiniz.'
    },
    {
      question: 'Uygulama ücretsiz mi?',
      answer: 'Evet, i will tamamen ücretsiz olarak indirilebilir ve kullanılabilir. İlerleyen dönemlerde premium özellikler eklenebilir ancak temel işlevler her zaman ücretsiz kalacaktır.'
    },
    {
      question: 'Nasıl kayıt olabilirim?',
      answer: 'App Store veya Google Play\'den uygulamayı indirdikten sonra telefon numaranız veya e-posta adresiniz ile hızlıca kayıt olabilirsiniz. Sosyal medya hesaplarınızla da giriş yapabilirsiniz.'
    },
    {
      question: 'Etkinlik nasıl oluşturabilirim?',
      answer: 'Ana sayfadaki "+" butonuna tıklayarak yeni bir etkinlik oluşturabilirsiniz. Etkinlik türü, tarih, konum ve katılımcı sayısı gibi detayları girdikten sonra etkinliğiniz yayınlanır.'
    },
    {
      question: 'Güvenlik önlemleri nelerdir?',
      answer: 'Tüm kullanıcılarımızın güvenliği bizim için önceliktir. Profil doğrulama sistemi, kullanıcı değerlendirmeleri ve şikayet mekanizması ile güvenli bir ortam sağlıyoruz. Ayrıca 7/24 destek ekibimiz mevcuttur.'
    },
    {
      question: 'Hesabımı nasıl silebilirim?',
      answer: 'Uygulama içinden Ayarlar > Hesap > Hesabı Sil seçeneğini kullanarak hesabınızı kalıcı olarak silebilirsiniz. Bu işlem geri alınamaz ve tüm verileriniz silinir.'
    },
    {
      question: 'Destek ekibine nasıl ulaşabilirim?',
      answer: 'Uygulama içi destek bölümünden, admin@iwill.com.tr e-posta adresinden veya sosyal medya hesaplarımızdan bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.'
    },
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <PageHeader title="Destek" />

      {/* Quick Links */}
      <section className="py-12 px-5 bg-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="mailto:admin@iwill.com.tr" className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <i className="fas fa-envelope text-primary text-2xl mb-3"></i>
            <p className="font-medium text-sm">E-posta</p>
          </a>
          <a href="tel:+905336807050" className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <i className="fas fa-phone text-primary text-2xl mb-3"></i>
            <p className="font-medium text-sm">Telefon</p>
          </a>
          <a href="https://www.instagram.com/iwill.com.tr" target="_blank" className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <i className="fab fa-instagram text-primary text-2xl mb-3"></i>
            <p className="font-medium text-sm">Instagram</p>
          </a>
          <a href="/iletisim" className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <i className="fas fa-headset text-primary text-2xl mb-3"></i>
            <p className="font-medium text-sm">İletişim</p>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Sıkça Sorulan Sorular
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className={`bg-gray-50 rounded-xl overflow-hidden border transition-colors ${
                  activeIndex === index ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold pr-4">{item.question}</span>
                  <i className={`fas fa-chevron-down text-primary transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}></i>
                </button>
                <div className={`px-5 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-5 gradient-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Sorunuz mu var?
          </h2>
          <p className="text-white/90 mb-8">
            Aradığınız cevabı bulamadıysanız, bize ulaşın. En kısa sürede size yardımcı olacağız.
          </p>
          <a 
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <i className="fas fa-paper-plane"></i>
            İletişime Geç
          </a>
        </div>
      </section>
    </>
  )
}