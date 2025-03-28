import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const tabs = [
    {
      "name": "Home", "link": "/"
    },
    {
      "name": "Sign Up", "link": "/signup"
    },
    {
      "name": "Log In", "link": "/login"
    },
    {
      "name": "Contacts", "link": "/contacts"
    },

  ];
  return (
    <nav className="fixed top-0 left-0 right-0 h-[10vh] z-20 backdrop-blur-lg bg-[rgb(15,15,17)] overflow-hidden flex items-center text-white p-6 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <h1 className="ml-4 text-4xl font-bold tracking-wide bg-gradient-to-r from-[#b9b9b9] to-[#d8b9af] bg-clip-text text-transparent">
          EveMan
        </h1>

        {/* Right Side: Navigation Links */}
        <div className="flex gap-4 mr-4">
          {
            tabs.map((tab, index) => (
              <Link
                to={tab.link}
                className="py-2 px-4 rounded-3xl bg-white border-2 border-[#a5b4fc] text-black backdrop-blur-md bg-gr {}adient-to-r from-[#6b7280]/20 to-[#a5b4fc]/20 hover:from-[#6b7280]/40 hover:to-[#a5b4fc]/40 transition-all duration-300 hover:scale-105 hover:border-[#c7d2fe] cursor-pointer hover:shadow-lg hover:shadow-[#a5b4fc]/30"
              >
                <p className="text-sm font-semibold">{tab.name}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;