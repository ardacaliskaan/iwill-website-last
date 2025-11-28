export const metadata = {
  title: 'iwill - Hesap Silme',
  description: 'iwill hesabınızı silin',
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4ECDC4] to-[#44A08D] flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        <img src="/i-will-logo.png" alt="iwill" className="w-20 h-20 mx-auto mb-6" />
        
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Hesap Silme</h1>
        
        <div className="space-y-4 text-gray-700">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold mb-3">📱 Uygulama İçinden:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>iwill uygulamasını açın</li>
              <li>Profil sekmesine gidin</li>
              <li>Ayarlar ikonuna tıklayın</li>
              <li>Hesabı Sil seçeneğini seçin</li>
              <li>Onaylayın</li>
            </ol>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="font-semibold mb-2">📧 E-posta ile:</p>
            <p className="text-sm">
              Kayıtlı e-posta adresinizden <a href="mailto:destek@gelecekyazilim.com" className="text-blue-600 underline">destek@gelecekyazilim.com</a> adresine hesap silme talebinizi gönderin.
            </p>
          </div>
          
          <div className="bg-red-50 rounded-xl p-4 text-sm text-red-600">
            <strong>⚠️</strong> Hesabınız silindiğinde tüm verileriniz kalıcı olarak silinir.
          </div>
        </div>
      </div>
    </div>
  );
}
