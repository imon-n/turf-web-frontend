import Link from "next/link";
import Btn from "../../utils/Btn";

export default function Banner() {
  return (
    <div
      id="banner-section"
      className="relative min-h-[560px] overflow-hidden bg-cover bg-center px-4 sm:min-h-[600px] sm:px-6 md:px-10 lg:min-h-[600px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/spNmmWGD/pexels-pixabay-47730.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center text-white sm:min-h-[600px] lg:min-h-[600px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
          {/* Left Content */}
          <div className="space-y-1 text-center lg:space-y-6 lg:text-left pt-6 pl-0 md:pl-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-80 sm:text-sm sm:tracking-widest">
              Capture Every Match • Every Moment
            </p>

            <h1 className="text-2xl font-bold uppercase leading-tight sm:text-3xl md:text-4xl ">
              <span className="text-yellow-500">Turf</span>Cast
              <br />
              From Turf to Screen - Anytime, Anywhere
            </h1>

            <p className="mx-auto max-w-2xl text-xs leading-6 text-gray-200 sm:text-sm md:text-base lg:mx-0 lg:leading-7">
              Watch your football matches. Get
              instant live, highlights, and full match recordings - all in
              one place with TurfCast.
            </p>

            <div className="flex justify-center pt-2 lg:justify-start">
              <Link href="/book-slot">
                <span className="group relative inline-block whitespace-nowrap">
                  <Btn
                    className="
                      relative overflow-hidden
                      border-4 whitespace-nowrap
                      px-8 py-3
                      text-base sm:text-lg
                      !bg-yellow-500 !text-black
                      shadow-lg
                      transition-all duration-300
                      group-hover:scale-105
                      group-hover:shadow-[0_0_30px_rgba(234,179,8,0.65)]
                    "
                  >
                    <span
                      className="
                        absolute inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent via-white/40 to-transparent
                        transition-transform duration-700
                        group-hover:translate-x-full
                      "
                    />
                    <span className="relative z-10">Take Our Service</span>
                  </Btn>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Video */}
          {/* Right Side */}
          <div className="flex flex-col items-center lg:items-end">
            {/* Video */}
            <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl border-2 border-yellow-500/60 bg-black shadow-[0_0_40px_rgba(234,179,8,0.2)]">
              <video
                className="aspect-video w-full object-cover"
                src="/videos/turfcast-demo.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-md bg-black/70 px-4 py-2 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-500">
                  TurfCast
                </p>
                <p className="text-xs text-white">Live Match Experience</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 mb-3 flex w-full justify-center lg:justify-end">
              <div className="flex w-full max-w-[420px] items-center justify-center gap-4 rounded-xl bg-white p-4 text-black shadow-xl sm:gap-6 sm:p-2">
                <img
                  className="h-14 w-14 shrink-0 rounded-lg object-cover sm:h-20 sm:w-20"
                  src="https://i.ibb.co.com/4R9nTb57/schools-promotional-videos-1.jpg"
                  alt="Live Match"
                />

                {/* Live Matches */}
                <div className="min-w-0 text-center">
                  <h2 className="text-2xl font-bold sm:text-4xl">50+</h2>

                  <p className="text-[14px] font-medium leading-4 opacity-70 sm:text-sm sm:leading-5">
                    <span className="whitespace-nowrap">Matches Streamed</span>
                    
                  </p>
                </div>

                {/* Divider */}
                <div className="h-12 w-px shrink-0 bg-gray-300 sm:h-16" />

                {/* Turf Locations */}
                <div className="min-w-0 text-center">
                  <h2 className="text-2xl font-bold sm:text-4xl">4+</h2>

                  <p className="text-[14px] font-medium leading-4 opacity-70 sm:text-sm sm:leading-5">
                    <span className="whitespace-nowrap">Turf Covered</span>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
