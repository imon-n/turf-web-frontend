import { IoLocationSharp } from "react-icons/io5";

export default function ContactLocation() {
  const locations = [
    {
      title: "CU Campus, Hathazari, Chattogram, Bangladesh",
      description:
        "Our primary hub for turf bookings, live match coverage, and community events in Chittagong.",
      map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3686.6004257138356!2d91.79571899999999!3d22.481645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI4JzUzLjkiTiA5McKwNDcnNDQuNiJF!5e0!3m2!1sen!2sbd!4v1789523314804!5m2!1sen!2sbd",
    },
    
  ];

  return (
    <div className="py-0">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 border-b border-gray-700 pb-8"
            >
              {/* Title & Description */}
              <div className="flex items-start gap-3">
                <IoLocationSharp
                  size={30}
                  className="text-yellow-500 flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-xl font-semibold">
                    {location.title}
                  </h3>
                </div>
              </div>

              {/* Map */}
              <div className="w-full  rounded-lg overflow-hidden">
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
