import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export default function EmreKayikci() {
  return (
    <>
      <PageHeader title="Yunus Emre Kayıkçı" />

      <section className="py-20 px-5 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="/emre-kayikci.jpg" 
                alt="Yunus Emre Kayıkçı"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold mb-2">Yunus Emre Kayıkçı</h2>
              <p className="text-primary font-medium mb-6">Kurucu & CEO</p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Yunus Emre Kayıkçı, 2018 yılında Sakarya Üniversitesi İşletme Fakültesi'nden mezun olmuştur. 
                  İş hayatına Kayıkçılar Toptan Gıda San. Tic. Ltd. Şti.'de Satış Sorumlusu olarak başlamış 
                  ve ardından Tedarik Müdürü pozisyonuna yükselmiştir.
                </p>
                
                <p>
                  Bu süre zarfında, şirketin büyümesine ve sektöründe önemli bir yer edinmesine katkı sağlamıştır.
                </p>
                
                <p>
                  Ayrıca, <strong className="text-primary">Gelecek Mobil Yazılım Tic. A.Ş.</strong>'nin kurucu ortağı olup, 
                  mobil yazılım sektöründe yenilikçi çözümler geliştirmeye yönelik çalışmalar yapmaktadır.
                </p>
                
                <p>
                  Bunun yanı sıra, <strong className="text-primary">i will Mobil Uygulaması</strong> adlı startup'ın kurucusudur 
                  ve bu uygulama ile kullanıcı deneyimini geliştirmeyi hedefleyen projelere öncülük etmektedir.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/yunusemrekayikci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="mailto:emre@iwill.com.tr"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/hakkimizda"
            className="inline-flex items-center gap-2 text-primary font-semibold px-6 py-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all"
          >
            <i className="fas fa-arrow-left"></i>
            Geri Dön
          </Link>
        </div>
      </section>
    </>
  )
}