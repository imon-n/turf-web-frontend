import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero / Info Section */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            {/* Left Section */}
            <div className="text-center md:max-w-2xl md:text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500 sm:text-sm">
                Get In Touch
              </p>

              <Title>Let’s Connect</Title>

              <div className="mt-3">
                <Subtitle>
                  We’re here to help with questions and feedback.
                </Subtitle>
              </div>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 md:mx-0">
                Have a question about our services or want to bring TurfCast
                to your turf? Send us a message and our team will get back to
                you.
              </p>

              {/* Quick Contact Info */}
              <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                <div className="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-xs text-gray-300">
                  <Mail size={14} className="text-yellow-500" />
                  Email Support
                </div>

                <div className="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-xs text-gray-300">
                  <MessageCircle size={14} className="text-yellow-500" />
                  Quick Response
                </div>
              </div>
            </div>

            {/* Social Section */}
            <div className="flex flex-col items-center gap-4 md:items-end">
              <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Follow TurfCast
              </p>

              <div className="flex gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full border border-gray-700 bg-gray-900
                    text-gray-300 transition-all duration-300
                    hover:scale-110 hover:border-yellow-500
                    hover:bg-yellow-500 hover:text-black
                  "
                >
                  <FaFacebookF size={17} />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full border border-gray-700 bg-gray-900
                    text-gray-300 transition-all duration-300
                    hover:scale-110 hover:border-yellow-500
                    hover:bg-yellow-500 hover:text-black
                  "
                >
                  <FaInstagram size={18} />
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full border border-gray-700 bg-gray-900
                    text-gray-300 transition-all duration-300
                    hover:scale-110 hover:border-yellow-500
                    hover:bg-yellow-500 hover:text-black
                  "
                >
                  <FaYoutube size={19} />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full border border-gray-700 bg-gray-900
                    text-gray-300 transition-all duration-300
                    hover:scale-110 hover:border-yellow-500
                    hover:bg-yellow-500 hover:text-black
                  "
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-1 w-8 rounded-full bg-yellow-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-yellow-600">
                  Send a Message
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                How Can We Help?
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill out the form and let us know how we can assist you.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Location */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-1 w-8 rounded-full bg-yellow-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-yellow-600">
                    Find Us
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Our Location
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Visit or connect with the TurfCast team.
                </p>
              </div>

              <ContactLocation />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Strip */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-3 md:px-10">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
              <Mail size={18} className="text-yellow-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-semibold text-gray-800">
                support@turfcast.com
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
              <Phone size={18} className="text-yellow-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm font-semibold text-gray-800">
                +880 1746726836
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-end">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
              <MapPin size={18} className="text-yellow-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm font-semibold text-gray-800">
                Chattogram, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}