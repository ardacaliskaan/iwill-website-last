'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzT8-cPWsxKqQMV-AA01SdDD87eE8Nd5s3p2WRS5gFefhpjhJds543shwfIh5T_zDYStg/exec', {
        method: 'POST',
        body: new FormData(e.target)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', phone: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    { icon: 'fas fa-building', title: 'Ticari Ünvan', content: 'Gelecek Mobil Yazılım Tic. A.Ş.' },
    { icon: 'fas fa-phone-alt', title: 'Telefon', content: '0533 680 70 50', href: 'tel:+905336807050' },
    { icon: 'fas fa-envelope', title: 'E-posta', content: 'admin@iwill.com.tr', href: 'mailto:admin@iwill.com.tr' },
    { icon: 'fas fa-user-tie', title: 'Sorumlu Kişi', content: 'Yunus Emre Kayıkçı' }
  ]

  return (
    <>
      <PageHeader title="İletişim" />

      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <i className="fas fa-headset text-primary"></i>
              İletişim Bilgileri
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${info.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.href ? (
                      <a href={info.href} className="text-gray-600 hover:text-primary transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <h3 className="font-semibold mb-4">Sosyal Medya</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/iwill.com.tr" target="_blank" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com" target="_blank" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <i className="fab fa-x-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Bize Yazın</h2>
            
            {isSubmitted && (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-2">
                <i className="fas fa-check-circle"></i>
                Mesajınız başarıyla gönderildi!
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">Adınız</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Adınızı giriniz"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon numaranız"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">E-posta</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-posta adresiniz"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Mesajınız</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Mesajınızı yazınız"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="spinner w-5 h-5"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Gönder
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}