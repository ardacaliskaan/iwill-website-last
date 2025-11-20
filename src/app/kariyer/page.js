import PageHeader from '@/components/PageHeader'

export default function Kariyer() {
  const benefits = [
    { icon: 'fas fa-laptop-house', title: 'Uzaktan Çalışma', desc: 'İstediğin yerden çalış' },
    { icon: 'fas fa-clock', title: 'Esnek Saatler', desc: 'Kendi programını belirle' },
    { icon: 'fas fa-graduation-cap', title: 'Eğitim Desteği', desc: 'Sürekli gelişim imkanı' },
    { icon: 'fas fa-heart', title: 'Sağlık Sigortası', desc: 'Kapsamlı sağlık güvencesi' },
  ]

  const positions = [
    {
      title: 'Senior Flutter Developer',
      department: 'Mühendislik',
      type: 'Tam Zamanlı',
      location: 'Uzaktan',
    },
    {
      title: 'UI/UX Designer',
      department: 'Tasarım',
      type: 'Tam Zamanlı',
      location: 'Uzaktan',
    },
    {
      title: 'Backend Developer (Node.js)',
      department: 'Mühendislik',
      type: 'Tam Zamanlı',
      location: 'Uzaktan',
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Pazarlama',
      type: 'Tam Zamanlı',
      location: 'İstanbul',
    },
  ]

  return (
    <>
      <PageHeader title="Kariyer" />

      {/* Intro */}
      <section className="py-20 px-5 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Geleceği Birlikte İnşa Edelim
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          i will olarak, tutkulu ve yetenekli insanlarla birlikte çalışmayı seviyoruz. 
          Eğer sen de Türkiye'nin sosyal platformunu inşa etmek istiyorsan, 
          doğru yerdesin!
        </p>
      </section>

      {/* Benefits */}
      <section className="py-20 px-5 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Neden i will?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${benefit.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Açık Pozisyonlar</h2>
          
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary"
              >
                <div>
                  <h3 className="font-bold text-lg mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {position.department}
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full">
                      {position.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full">
                      <i className="fas fa-map-marker-alt mr-1"></i>
                      {position.location}
                    </span>
                  </div>
                </div>
                <a 
                  href="mailto:kariyer@iwill.com.tr"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:-translate-y-1 hover:shadow-lg transition-all whitespace-nowrap"
                >
                  Başvur
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>

          {/* No Position? */}
          <div className="mt-12 text-center bg-gray-50 p-8 rounded-xl">
            <h3 className="font-bold text-lg mb-3">Aradığın pozisyon yok mu?</h3>
            <p className="text-gray-600 mb-4">
              Yine de bize CV'ni gönder, uygun pozisyon açıldığında seninle iletişime geçelim.
            </p>
            <a 
              href="mailto:kariyer@iwill.com.tr"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <i className="fas fa-envelope"></i>
              kariyer@iwill.com.tr
            </a>
          </div>
        </div>
      </section>
    </>
  )
}