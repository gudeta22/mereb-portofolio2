import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/images/menu.png";
import xicon from "../assets/images/xicon.jpg";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="bg-[#011813] border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <img className="h-20 w-20 " src={logo} alt="Logo" />
              </div>
            </div>
            <div className="hidden md:block ">
              <div className="ml-10 flex   items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-5 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-5 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-5 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/projects"
                  className="text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-5  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-5   px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden  flex items-center">
              {open ? (
                <button
                  type="button"
                  className="text-gray-800 hover:text-gray-600 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <img src={xicon} alt="Menu" className="h-5 w-6" />
                </button>
              ) : (
                <button
                  type="button"
                  className="text-gray-800   focus:outline-none"
                  onClick={toggleMenu}
                >
                  <img src={menu} alt="Close" className="h-8 w-8" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-800">
        {open && (
          <ul className="text-white md:hidden lg:hidden sm:hidden">
            <li>
              <Link  to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;

