import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-10">
      {/* info section  */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left section */}
        <div className="md:w-2/3 space-y-3 text-center md:text-left">
          <Title>Let’s Connect</Title>
          <Subtitle>TurfCast team is here to help....!</Subtitle>
        </div>

        {/* Right section - Social icons */}
        <div className="flex gap-4 md:flex-col">
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 text-2xl border border-gray-300 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-110 bg-blue-600 text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 text-2xl border border-gray-300 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-110 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 text-2xl border border-gray-300 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-110 bg-red-600 text-white"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="flex items-center justify-center transition duration-300 w-10 h-10 text-2xl border border-gray-300 rounded-full shadow-md  transform hover:scale-110 bg-sky-600 text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* form section */}
      <ContactForm />
      <ContactLocation />
    </div>
  );
}
