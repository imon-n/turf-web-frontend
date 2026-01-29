import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router";
import Logo from "../../../utils/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "streamAI", path: "/StreamAI" },
    { name: "stream", path: "/Stream" },
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

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col space-y-4 px-6 py-6 absolute w-full shadow-lg animate-slideDown">
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
        </div>
      )}
    </header>
  );
}
