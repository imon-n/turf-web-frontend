import { IoLocationSharp } from "react-icons/io5";

export default function ContactLocation() {
  const locations = [
    {
      title: "Agrabad, Chattogram, Bangladesh",
      description:
        "Our primary hub for turf bookings, live match coverage, and community events in Chittagong.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7381.582050031661!2d91.81349669999999!3d22.323741749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8b5353672d5%3A0x7e873374534df3f1!2sAgrabad%20Commercial%20Area%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1758697448241!5m2!1sen!2sbd",
    },
    {
      title: "Banani, Dhaka, Bangladesh",
      description:
        "Connecting players and fans in Dhaka with turf booking, live streaming, and instant match replays.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9021549588634!2d90.4043432111697!3d23.750876988653697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b1e2e99d59%3A0x6d1c6a9f9c7d2c6!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1758616000000!5m2!1sen!2sbd",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase py-5 sm:py-7 md:py-10 lg:py-12">
          Locations
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 border-b border-gray-700 pb-8"
            >
              {/* Title & Description */}
              <div className="flex items-start gap-3">
                <IoLocationSharp
                  size={36}
                  className="text-yellow-500 flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    {location.title}
                  </h3>
                  <p className="text-[#808380] text-sm sm:text-base mt-1">
                    {location.description}
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <iframe
                  title={location.title}
                  src={location.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
