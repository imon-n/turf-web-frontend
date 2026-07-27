import { Link } from "react-router";
import Title from "../../utils/Title";
import { Video, Film, Star } from "lucide-react";

export default function OurService() {
  const services = [
    {
      title: "Recorded Match",
      subtitle: "Every match is recorded and saved for replay anytime.",
      icon: <Film className="w-10 h-10 text-green-500" />,
      img: "reaco.png",
      available: true,
    },
    {
      title: "Highlights",
      subtitle:
        "Relive the best moments with automatically generated highlights.",
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      img: "high.png",
      available: true,
    },
    {
      title: "Live Streaming",
      subtitle: "Broadcast your matches live on Facebook and YouTube.",
      icon: <Video className="w-10 h-10 text-blue-500" />,
      img: "live-streaming.jpg",
      available: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="our-services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition "
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-6 space-y-4">
                <div className="flex justify-center">{service.icon}</div>

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="text-gray-600 text-sm">{service.subtitle}</p>

                {service.available ? (
                  <div className="flex  justify-center">
                    <Link
                      to="/services"
                      className="block w-full py-3 text-sm font-medium bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition"
                    >
                      Take Service
                    </Link>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <span className="inline-block w-full bg-gray-200 text-gray-600 px-5 py-2 rounded-lg font-medium">
                      Upcoming Soon
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
