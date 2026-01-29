export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto py-12 px-6 md:px-12">
        
        {/* ✅ Brand Info */}
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase">
            TurfCast
          </h2>
          <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            From Turf to Screen — Anytime, Anywhere. 
            Watch live turf matches, replays, and highlights 
            on Facebook & YouTube, all powered by TurfCast.
          </p>
        </div>

        {/* ✅ Navigation */}
        <div className="space-y-4 text-center">
          <h4 className="text-base sm:text-lg font-semibold text-white uppercase text-center">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Services</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* ✅ Recent Matches */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-base sm:text-lg font-semibold uppercase text-center text-white">
            Recent Highlights
          </h4>
          <div className="flex gap-3 justify-center md:justify-star">
            <img
              src="https://i.ibb.co.com/4R9nTb57/schools-promotional-videos-1.jpg"
              alt="Match Highlight"
              className="w-28 sm:w-32 md:w-36 lg:w-24 h-20 sm:h-24 lg:h-20 rounded-lg object-cover"
            />
            <img
              src="https://i.ibb.co.com/spNmmWGD/pexels-pixabay-47730.jpg"
              alt="Football"
              className="w-28 sm:w-32 md:w-36 lg:w-24 h-20 sm:h-24 lg:h-20 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* ✅ Subscribe */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-base sm:text-lg font-semibold text-white uppercase">
            Stay Updated
          </h4>
          <form className="w-full max-w-sm mx-auto md:mx-0">
            <div className="flex items-center bg-gray-900 rounded-full shadow-md overflow-hidden border border-gray-700">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 min-w-0 bg-transparent text-gray-100 placeholder-gray-500 px-5 py-3 text-sm focus:ring-0 focus:outline-none"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 font-semibold text-sm rounded-full transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-xs sm:text-sm text-gray-500 px-4">
        © {new Date().getFullYear()} TurfCast. All rights reserved.
      </div>
    </footer>
  );
}
