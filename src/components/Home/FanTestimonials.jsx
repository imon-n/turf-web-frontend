import { FaStar } from "react-icons/fa";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function FanTestimonials() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-5 py-10 gap-10">
      {/* Left side */}
      <div className="w-full lg:w-1/2 space-y-5">
        <div>
          <Title>Fan Testimonials</Title>
          <Subtitle>Players & Fans Share Their Experience</Subtitle>
        </div>

        <div className="border-amber-800 mt-10 sm:mt-16">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[620px]">
              {/* Main Image */}
              <img
                className="w-full h-auto rounded-xl"
                src="https://i.ibb.co.com/603111dW/Image-3.png"
                alt="main"
              />
              {/* Icon */}
              <img
                className="
                w-14 h-14 
                sm:w-20 sm:h-20 
                md:w-24 md:h-24 
                absolute 
                -top-4 sm:-top-6 md:-top-8 
                -right-4 sm:-right-6 md:-right-8
              "
                src="https://i.ibb.co.com/gLN2d2br/Icon-1.png"
                alt="icon"
              />
            </div>
          </div>
        </div>

        {/* Rating Card */}
        <div className="bg-[#111] rounded-2xl w-full p-4 sm:p-6 space-y-4 shadow-lg text-white">
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={24} />
            ))}
          </div>
          <p className="opacity-85 text-xs sm:text-sm">
            Watching our local football matches live on Facebook was an amazing
            experience. The streaming quality was top-notch, and we could even
            rewatch the highlights after the game. Highly recommended for every
            turf and sports community!
          </p>
          <h4 className="text-base sm:text-lg font-semibold">
            Gulam Rabbi Hossain, Football Enthusiast
          </h4>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-5/12 space-y-3">
        {[
          {
            name: "Shadat Hossain, Team Manager",
            text: "Having all our matches recorded has been a game changer. Players can review their performance and fans love the highlights.",
          },
          {
            name: "Rakibul Islam, Local Player",
            text: "The live streaming on YouTube made our small turf tournament feel professional. Family and friends could watch from anywhere.",
          },
          {
            name: "Jubayer Ahmed, Fan",
            text: "I really enjoyed watching the highlights package after the match. It captured all the exciting moments perfectly!",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl w-full p-4 sm:p-6 sm:px-12 border border-gray-300 shadow-lg space-y-4"
          >
            <div className="flex justify-start gap-1 sm:gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={20} />
              ))}
            </div>
            <p className="text-xs sm:text-sm">{item.text}</p>
            <h4 className="text-base sm:text-lg font-semibold">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
