import { FaStar } from "react-icons/fa";
import Subtitle from "../../utils/Subtitle";

export default function MatchExperience() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-10 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center lg:items-start gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div>
              <Subtitle>
                Elevate Your <br /> Matchday Experience
              </Subtitle>
            </div>

            {/* Feature 1 */}
            <div>
              <h3 className="text-xl sm:text-2xl text-yellow-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
                Professional Live Streaming
                <span className="text-white text-xs sm:text-sm font-bold">
                  01
                </span>
              </h3>
              <p className="text-[#808380] text-sm sm:text-base mt-2">
                Enjoy high-quality live streaming of your matches directly on
                Facebook and YouTube so fans never miss a moment.
              </p>
              <hr className="mt-4 border-[#333]" />
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-xl sm:text-2xl text-yellow-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
                Replay Anytime
                <span className="text-white text-xs sm:text-sm font-bold">
                  02
                </span>
              </h3>
              <p className="text-[#808380] text-sm sm:text-base mt-2">
                Every match is recorded and stored so players and teams can
                relive the full match whenever they want.
              </p>
              <hr className="mt-4 border-[#333]" />
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="text-xl sm:text-2xl text-yellow-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
                Highlight the Best Moments
                <span className="text-white text-xs sm:text-sm font-bold">
                  03
                </span>
              </h3>
              <p className="text-[#808380] text-sm sm:text-base mt-2">
                Relive thrilling goals, key saves, and exciting plays with
                automatically generated highlights.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4">
            <img
              src="https://i.ibb.co.com/qFC4tydw/pexels-140938577-10347874.jpg"
              alt="Football Match"
              className="rounded-2xl w-full sm:w-[400px] h-[250px] sm:h-[350px] md:h-[420px] object-cover"
            />
            <div className="bg-[#111] rounded-2xl w-full sm:w-[400px] p-4 sm:p-6 text-center space-y-2 shadow-lg">
              <div className="flex justify-center gap-1 text-yellow-400">
                <FaStar size={18} className="sm:size-[20px] md:size-[22px]" />
                <FaStar size={18} className="sm:size-[20px] md:size-[22px]" />
                <FaStar size={18} className="sm:size-[20px] md:size-[22px]" />
                <FaStar size={18} className="sm:size-[20px] md:size-[22px]" />
                <FaStar size={18} className="sm:size-[20px] md:size-[22px]" />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                4.9/5 Ratings from Players & Fans
              </h4>
              <p className="text-[#808380] text-xs sm:text-sm">
                Trusted by local teams & football communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
