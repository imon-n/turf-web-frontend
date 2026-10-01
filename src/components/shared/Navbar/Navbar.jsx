"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
import Logo from "../../../utils/Logo";
import useAuth from "../../../hooks/useAuth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const { user, logOut } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },

    { name: "Book a Slot", path: "/book-slot" },
    { name: "Turfs", path: "/turfs" },

    { name: "Contact", path: "/contact" },
  ];

  const exploreLinks = [
    { name: "Recorded Matches", path: "/recordings" },
    { name: "Highlights", path: "/highlights" },
    { name: "Service Overview", path: "/services" },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      setIsOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-0 text-white">
        <Logo />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="transition-colors duration-300 hover:text-yellow-400"
              >
                {link.name.toUpperCase()}
              </Link>
            </li>
          ))}

          {/* Explore Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className="flex items-center gap-1 hover:text-yellow-400 transition-colors duration-300"
            >
              EXPLORE
              <AiOutlineDown
                size={13}
                className={`transition-transform duration-200 ${
                  isExploreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isExploreOpen && (
              <div className="absolute top-full right-0 mt-4 w-52 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsExploreOpen(false)}
                    className="block px-5 py-3 text-sm transition-colors hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {/* Profile Image */}
              <img
                src={user.photoURL || "https://i.pravatar.cc/150?img=12"}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
              />

              {/* Logout */}
              {/* Dashboard */}
              <Link
                href="/dashboard"
                className="hidden sm:block px-4 py-2 text-sm font-medium bg-yellow-500 text-black hover:bg-amber-600 hover:text-white rounded-md  transition"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <Link
              href="/login"
              className="hidden sm:block px-4 py-2 text-sm font-medium bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition"
            >
              Login
            </Link>
          )}

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col px-6 py-6 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}

            {/* Mobile Explore */}
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className="flex items-center justify-between hover:text-yellow-400 transition-colors duration-300"
            >
              <span>EXPLORE</span>

              <AiOutlineDown
                size={15}
                className={`transition-transform duration-200 ${
                  isExploreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isExploreOpen && (
              <div className="ml-4 flex flex-col gap-3 border-l border-gray-700 pl-4">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => {
                      setIsExploreOpen(false);
                      setIsOpen(false);
                    }}
                    className="text-sm text-gray-300 hover:text-yellow-400 transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Auth */}
          <div className="flex flex-col gap-3 pt-5 mt-5 border-t border-gray-700">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-red-500 text-red-400 rounded-md"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-center bg-yellow-400 text-black rounded-md"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
