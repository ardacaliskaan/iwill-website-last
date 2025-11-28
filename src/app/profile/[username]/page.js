export const metadata = {
  title: 'iwill - Profili Görüntüle',
  description: 'Bu profili iwill uygulamasında görüntüle',
};

export default function ProfilePage({ params }) {
  const { username } = params;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4ECDC4] to-[#44A08D] flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
        <img src="/i-will-logo.png" alt="iwill" className="w-24 h-24 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">@{username}</h1>
        <p className="text-gray-600 mb-8">Bu profili görmek için iwill uygulamasını indir</p>
        
        <div className="space-y-4">
          <a 
            href="https://apps.apple.com/tr/app/iwill/id6744387129"
            className="flex items-center justify-center gap-3 bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition"
          >
            <span>App Store dan İndir</span>
          </a>
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.gelecekmobilyazilim.iwill"
            className="flex items-center justify-center gap-3 bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition"
          >
            <span>Google Play den İndir</span>
          </a>
        </div>
      </div>
    </div>
  );
}
