import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router";
import Logo from "../../../utils/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Book a Slot", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Stream", path: "/Stream" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        <Logo />

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-yellow-400" : "hover:text-yellow-400"
                  }`
                }
              >
                {link.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              {/* Profile Image */}
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
              />

              {/* Logout */}
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  console.log("Logout");
                }}
                className="hidden sm:block px-4 py-2 text-sm font-medium border border-red-500 text-red-400 rounded-md hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Register */}
              <NavLink
                to="/register"
                className="hidden sm:block px-4 py-2 text-sm font-medium border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition"
              >
                Register
              </NavLink>

              {/* Login */}
              <NavLink
                to="/login"
                className="hidden sm:block px-4 py-2 text-sm font-medium bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition"
              >
                Login
              </NavLink>
            </>
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
        <div className="md:hidden bg-black text-white flex flex-col space-y-4 px-6 py-6 absolute w-full shadow-lg">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name.toUpperCase()}
            </NavLink>
          ))}

          <div className="flex flex-col gap-3 pt-3 border-t border-gray-700">
            <NavLink
              to="/register"
              className="px-4 py-2 text-center border border-yellow-400 text-yellow-400 rounded-md"
            >
              Register
            </NavLink>

            <NavLink
              to="/login"
              className="px-4 py-2 text-center bg-yellow-400 text-black rounded-md"
            >
              Login
            </NavLink>

            <button
              onClick={() => console.log("Logout")}
              className="px-4 py-2 border border-red-500 text-red-400 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
