import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

export default function Hakkimizda() {
  const teamMembers = [
    {
      name: 'Yunus Emre Kayıkçı',
      role: 'Kurucu & CEO',
      slug: 'emre-kayikci'
    },
    {
      name: 'Safa Erol Altınok',
      role: 'Co-Founder',
      slug: 'safa-erol-altinok'
    },
    {
      name: 'Mahmut Arda Çalışkan',
      role: 'Geliştirici',
      slug: 'arda-caliskan'
    }
  ]

  return (
    <>
      <PageHeader title="Hakkımızda" />

      {/* About Content */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Biz Kimiz?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                i will, yeni maceralara atılırken aynı heyecanı taşıyan başkalarını da yanında görmek isteyenlerin platformudur.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                i will konser arkadaşı, okeye dördüncü, halı sahada forvet veya çıkılan bir seyahatte yoldaştır. Kullanıcılarımızın hep bir arada bulunmalarının vereceği coşkuyla etkinliklerini daha eğlenceli hale getirmek tek arzumuzdur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                2024 yılında kurulan i will, Türkiye'nin sosyal platformu olma vizyonuyla yola çıkmıştır.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/geleceklogo.png" 
                alt="Gelecek Mobil Hakkında" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-5 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-bullseye text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Misyonumuz</h3>
            <p className="text-gray-600">
              İnsanları ortak ilgi alanları etrafında bir araya getirerek, anlamlı bağlantılar kurmalarını ve unutulmaz deneyimler yaşamalarını sağlamak.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-eye text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Vizyonumuz</h3>
            <p className="text-gray-600">
              Türkiye'nin en büyük sosyal etkinlik platformu olarak, milyonlarca insanın hayatına dokunmak ve topluluklar oluşturmak.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ekibimiz</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Link 
                key={member.slug}
                href={`/detaylar/${member.slug}`}
                className="group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-primary/20">
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-user text-white text-3xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}