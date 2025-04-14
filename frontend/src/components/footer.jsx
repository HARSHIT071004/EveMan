import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[rgba(27,35,41,0.8)] backdrop-blur-md border-t-2 border-gray-800/50 text-white py-12 overflow-hidden">
      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Background Elements */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(243,156,18,0.1)_0%,transparent_70%)] opacity-30 -z-10"></div>
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#f39c12]/10 rounded-full blur-xl -z-10"></div> */}

        {/* Navigation and Branding Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#f39c12] mb-4 tracking-wide drop-shadow-md">
            Eveman
          </h3>
          <p className="text-sm md:text-base text-gray-400 font-light max-w-xs">
            Empowering unforgettable events with innovation and excellence.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-4">
            <Link
              to="/"
              className="text-base font-medium text-gray-300 hover:text-[#f39c12] transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-300 hover:text-[#f39c12] transition-colors duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-base font-medium text-gray-300 hover:text-[#f39c12] transition-colors duration-300 ease-in-out"
            >
              Services
            </Link>
            <Link
              to="/contacts"
              className="text-base font-medium text-gray-300 hover:text-purple-500 transition-colors duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Additional Info Section
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
          <p className="text-sm md:text-base text-gray-400 font-light mb-2">
            Stay connected for the latest event updates and offers.
          </p>
          <p className="text-xs md:text-sm text-gray-500 font-light">
            Email: support@eveman.com | Phone: +1-234-567-890
          </p>
          <p className="text-xs md:text-sm text-gray-500 font-light mt-2">
            Follow us on <span className="text-[#f39c12] hover:underline">Twitter</span>,{" "}
            <span className="text-[#f39c12] hover:underline">Instagram</span>, and{" "}
            <span className="text-[#f39c12] hover:underline">LinkedIn</span>.
          </p>
        </div> */}

        {/* Copyright and Legal */}
        <div className="text-center mt-6 lg:mt-0">
          <p className="text-xs md:text-sm text-gray-500 font-light">
            © {new Date().getFullYear()} Eveman. All rights reserved. |{" "}
            <span className="text-gray-400 hover:text-[#9e3c51] cursor-pointer">
              Privacy Policy
            </span>{" "}
            |{" "}
            <span className="text-gray-400 hover:text-[#9e3c51] cursor-pointer">
              Terms of Service
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;