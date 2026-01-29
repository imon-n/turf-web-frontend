import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://i.ibb.co.com/4R9nTb57/schools-promotional-videos-1.jpg",
      bio: "Passionate about sports and technology, John leads TurfCast with a vision to bring turf matches to fans worldwide.",
    },
    {
      name: "Jane Smith",
      role: "Head of Streaming",
      image: "https://i.ibb.co.com/4R9nTb57/schools-promotional-videos-1.jpg",
      bio: "Jane ensures top-notch streaming quality, making every match accessible on Facebook and YouTube.",
    },
    {
      name: "Mike Johnson",
      role: "Content Manager",
      image: "https://i.ibb.co.com/4R9nTb57/schools-promotional-videos-1.jpg",
      bio: "Mike curates highlights and replays, capturing the best moments for fans and players.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Mission Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 space-y-6">
              <Subtitle>Our Mission</Subtitle>
              <p className="text-[#808380] text-sm sm:text-base leading-relaxed">
                At TurfCast, our mission is to make every turf match accessible
                to fans, players, and communities. We leverage cutting-edge
                streaming technology to broadcast live matches on platforms like
                Facebook and YouTube, while providing high-quality replays and
                highlights to relive the action. Whether you're a player
                analyzing your performance or a fan cheering from afar, we’ve
                got you covered.
              </p>
              <NavLink
                to="/services"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-md text-sm font-medium transition-colors"
              >
                Explore Our Services
              </NavLink>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="https://i.ibb.co.com/spNmmWGD/pexels-pixabay-47730.jpg"
                alt="TurfCast Mission Image"
                className="rounded-2xl w-full h-[300px] sm:h-[400px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Title>Meet Our Team</Title>
          <Subtitle>Passionate People Behind TurfCast</Subtitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-yellow-500">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-200 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <Title>Join the TurfCast Community</Title>
          <p className="text-sm sm:text-base max-w-2xl mx-auto">
            Be part of the action! Watch live matches, share highlights, and
            connect with football fans worldwide. Subscribe to stay updated with
            the latest from TurfCast.
          </p>
          <div className="flex justify-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={24} />
            ))}
          </div>
          <p className="text-sm font-semibold">4.9/5 from Fans & Players</p>
          <NavLink to="/contact" className="flex justify-center">
            <Btn>Get in Touch</Btn>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
