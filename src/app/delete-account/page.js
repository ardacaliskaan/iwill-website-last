export const metadata = {
  title: 'iwill - Hesap Silme | Gelecek Mobil Yazılım',
  description: 'iwill hesabınızı ve verilerinizi silin',
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4ECDC4] to-[#44A08D] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Logo ve Başlık */}
          <div className="text-center mb-8">
            <img src="/i-will-logo.png" alt="iwill" className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800">iwill Hesap Silme</h1>
            <p className="text-gray-500 mt-1">Gelecek Mobil Yazılım Tic. A.Ş.</p>
          </div>

          {/* Uygulama İçinden Silme */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#4ECDC4] text-white rounded-full flex items-center justify-center text-sm">1</span>
              Uygulama İçinden Hesap Silme
            </h2>
            <div className="bg-gray-50 rounded-xl p-5 ml-10">
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#4ECDC4]">1.</span>
                  <span>iwill uygulamasını açın ve hesabınıza giriş yapın</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#4ECDC4]">2.</span>
                  <span>Alt menüden <strong>Profil</strong> sekmesine gidin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#4ECDC4]">3.</span>
                  <span>Sağ üst köşedeki <strong>Ayarlar</strong> (⚙️) ikonuna tıklayın</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#4ECDC4]">4.</span>
                  <span><strong>Hesabı Sil</strong> seçeneğine tıklayın</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#4ECDC4]">5.</span>
                  <span>Onay ekranında <strong>Hesabımı Sil</strong> butonuna tıklayın</span>
                </li>
              </ol>
            </div>
          </div>

          {/* E-posta ile Silme */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#4ECDC4] text-white rounded-full flex items-center justify-center text-sm">2</span>
              E-posta ile Hesap Silme Talebi
            </h2>
            <div className="bg-blue-50 rounded-xl p-5 ml-10">
              <p className="text-gray-700 mb-3">
                Uygulamaya erişemiyorsanız, kayıtlı e-posta adresinizden aşağıdaki adrese hesap silme talebinizi gönderebilirsiniz:
              </p>
              <a href="mailto:admin@iwill.tr" className="text-[#4ECDC4] font-semibold text-lg hover:underline">
                admin@iwill.tr
              </a>
              <p className="text-gray-500 text-sm mt-2">
                Talebiniz 7 iş günü içinde işleme alınacaktır.
              </p>
            </div>
          </div>

          {/* Silinen Veriler */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">!</span>
              Silinen Veriler
            </h2>
            <div className="bg-red-50 rounded-xl p-5 ml-10">
              <p className="text-gray-700 mb-3">Hesabınız silindiğinde aşağıdaki veriler <strong>kalıcı olarak</strong> silinecektir:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Profil bilgileri (ad, kullanıcı adı, fotoğraf)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Oluşturduğunuz tüm etkinlikler
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Mesajlar ve sohbet geçmişi
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Takipçi ve takip listeleri
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Beğeniler ve katılımlar
                </li>
              </ul>
            </div>
          </div>

          {/* Saklama Süresi */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm">i</span>
              Veri Saklama Süresi
            </h2>
            <div className="bg-gray-50 rounded-xl p-5 ml-10">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Hesap silme işlemi <strong>anında</strong> gerçekleştirilir</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Yedekleme sistemlerinden veriler <strong>30 gün</strong> içinde tamamen silinir</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Yasal zorunluluklar gereği tutulan veriler ilgili süre sonunda silinir</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Uyarı */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
            <p className="text-yellow-800 text-sm">
              <strong>⚠️ Dikkat:</strong> Bu işlem geri alınamaz. Hesabınızı sildikten sonra verilerinizi kurtarmanız mümkün değildir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}