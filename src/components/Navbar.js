import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/images/menu.png";
import xicon from "../assets/images/xicon.jpg";
import logo from "../assets/images/logo.png";
import '../index.css'
function Navbar() {
  const [open, setOpen] = useState(false);

 
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="bg-[#011813] border-none  w-[100%]  fixed z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <Link to='/about' >
                <img className="h-20 w-20 " src={logo} alt="Logo" />

                </Link>
              
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

      <div className="bg-white animate-pulldown fixed z-50">
        {open && (
          <ul className=" p-1 animate-pulldown md:hidden lg:hidden sm:hidden absolute bg-white text-black duration-500 w-full">
            <li className="p-2  hover:bg-gray-500  w-full">
              <Link  to="/" className="transition ease-in-out delay-100   hover:scale-32 ">Home</Link>
            </li>
            <li className="p-2  hover:bg-gray-500  " >
              <Link to="/about">About</Link>
            </li>
            <li className="p-2  hover:bg-gray-500  ">
              <Link to="/services">Services</Link>
            </li>
            <li className="p-2  hover:bg-gray-500  ">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="p-2  hover:bg-gray-500  ">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )} 
      </div>
    </div>
  );
}

export default Navbar;

