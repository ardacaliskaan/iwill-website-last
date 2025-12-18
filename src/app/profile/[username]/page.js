import Image from 'next/image';

export async function generateMetadata({ params }) {
  const { username } = params;
  return {
    title: `@${username} - iwill`,
    description: `@${username} profilini iwill uygulamasında görüntüle. Sosyal etkinlik paylaşım platformu.`,
    openGraph: {
      title: `@${username} - iwill`,
      description: `@${username} profilini iwill uygulamasında görüntüle`,
      type: 'profile',
    },
  };
}

export default function ProfilePage({ params }) {
  const { username } = params;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4ECDC4] via-[#44A08D] to-[#3D8B7E] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full text-center border border-white/20">
        {/* Logo */}
        <div className="mb-8">
          <div className="relative w-28 h-28 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] p-1">
            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
              <Image 
                src="/i-will-logo.png" 
                alt="iwill" 
                width={96} 
                height={96}
                className="w-20 h-20 object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Username */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4ECDC4] to-[#44A08D] bg-clip-text text-transparent mb-2">
            @{username}
          </h1>
          <p className="text-gray-600 text-base">
            Bu profili görmek için<br />iwill uygulamasını indirin
          </p>
        </div>

        {/* Download buttons */}
        <div className="space-y-3 mt-8">
          <a 
            href="https://apps.apple.com/tr/app/iwill/id6744387129"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3.5 px-6 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            <span className="font-semibold">App Store'dan İndir</span>
          </a>
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.gelecekmobilyazilim.iwill"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3.5 px-6 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <span className="font-semibold">Google Play'den İndir</span>
          </a>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-400 mt-8">
          Sosyal etkinlik paylaşım platformu
        </p>
      </div>
    </div>
  );
}