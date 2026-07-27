import Btn from "../../utils/Btn";

export default function Banner() {
  return (
    <div
      id="banner-section"
      className="h-[500px] sm:h-[600px] lg:h-[741px] bg-cover bg-center relative px-3 md:px-10"
      style={{
        backgroundImage: `url(https://i.ibb.co.com/spNmmWGD/pexels-pixabay-47730.jpg)`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-5xl mx-auto left-0 top-24 text-white space-y-6">
        {/* Title section */}
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80">
            Football Live • Highlights • Replays
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase leading-snug lg:leading-tight">
            <span className="text-yellow-500">Turf</span>Cast <br /> From Turf
            to Screen - Anytime, Anywhere
          </h1>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Watch your favorite turf matches live on Facebook & YouTube. Get
            instant highlights, replays, and full match recordings — all in one
            place with TurfCast.
          </p>
        </div>

        
        <span className=" flex items-center gap-2 group">
          <Btn className="border-4">Take Our Service</Btn>
        </span>

        
        {/* Stats Section */}
        <div className="flex justify-center lg:justify-start">
          <div className="flex bg-white text-black flex-row items-center gap-6 rounded-md shadow-lg p-4 sm:p-6 w-72 h-20 sm:w-fit sm:h-fit mx-auto lg:mx-0 absolute top-60 lg:top-74">
            <img
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-md object-cover"
              src="https://i.ibb.co.com/4R9nTb57/schools-promotional-videos-1.jpg"
              alt="Live Match"
            />
            <div className="text-center">
              <h2 className="font-bold text-2xl sm:text-4xl">50+</h2>
              <p className="text-sm font-medium opacity-70">
                <span className="whitespace-nowrap">Live Matches</span> Streamed
              </p>
            </div>

            <div className="hidden sm:block w-px h-12 sm:h-16 bg-gray-300"></div>

            <div className="text-center">
              <h2 className="font-bold text-2xl sm:text-4xl">10+</h2>
              <p className="text-xs sm:text-sm font-medium opacity-70">
                <span className="whitespace-nowrap">Turf Locations</span> Covered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
