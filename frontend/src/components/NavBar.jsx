// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const tabs = [
//     {
//       "name": "Home", "link": "/"
//     },
//     {
//       "name": "Sign Up", "link": "/signup"
//     },
//     {
//       "name": "Log In", "link": "/login"
//     },
//     {
//       "name": "Contacts", "link": "/contacts"
//     },

//   ];
//   return (
//     <nav className="fixed top-0 left-0 right-0 h-[10vh] z-20 backdrop-blur-lg bg-[rgb(15,15,17)] overflow-hidden flex items-center text-white p-6 ">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Left Side: Logo */}
//         <h1 className="ml-4 text-4xl font-bold tracking-wide bg-gradient-to-r from-[#b9b9b9] to-[#d8b9af] bg-clip-text text-transparent">
//           EveMan
//         </h1>

//         {/* Right Side: Navigation Links */}
//         <div className="flex gap-4 mr-4">
//           {
//             tabs.map((tab, index) => (
//               <Link
//                 to={tab.link}
//                 className="py-2 px-4 rounded-3xl bg-white border-2 border-[#a5b4fc] text-black backdrop-blur-md bg-gr {}adient-to-r from-[#6b7280]/20 to-[#a5b4fc]/20 hover:from-[#6b7280]/40 hover:to-[#a5b4fc]/40 transition-all duration-300 hover:scale-105 hover:border-[#c7d2fe] cursor-pointer hover:shadow-lg hover:shadow-[#a5b4fc]/30"
//               >
//                 <p className="text-sm font-semibold">{tab.name}</p>
//               </Link>
//             ))
//           }
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;












// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const tabs = [
//     { name: "Home", link: "/" },
//     { name: "Sign Up", link: "/signup" },
//     { name: "Log In", link: "/login" },
//     { name: "Contacts", link: "/contacts" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 h-[10vh] z-20 backdrop-blur-lg bg-[rgb(15,15,17)] overflow-hidden flex items-center text-white p-6">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Left Side: Logo */}
//         <h1 className="ml-4 text-4xl font-bold tracking-wide bg-gradient-to-r from-[#b9b9b9] to-[#d8b9af] bg-clip-text text-transparent">
//           EveMan
//         </h1>

//         {/* Right Side: Navigation Links */}
//         <div className="hidden md:flex gap-4 mr-4">
//           {tabs.map((tab, index) => (
//             <Link
//               key={index}
//               to={tab.link}
//               className="py-2 px-4 rounded-3xl bg-white border-2 border-[#a5b4fc] text-black backdrop-blur-md gradient-to-r from-[#6b7280]/20 to-[#a5b4fc]/20 hover:from-[#6b7280]/40 hover:to-[#a5b4fc]/40 transition-all duration-300 hover:scale-105 hover:border-[#c7d2fe] cursor-pointer hover:shadow-lg hover:shadow-[#a5b4fc]/30"
//             >
//               <p className="text-sm font-semibold">{tab.name}</p>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center justify-center">
//           <button className="text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden flex flex-col gap-4 mt-4">
//         {tabs.map((tab, index) => (
//           <Link
//             key={index}
//             to={tab.link}
//             className="py-2 px-4 rounded-3xl bg-white border-2 border-[#a5b4fc] text-black backdrop-blur-md gradient-to-r from-[#6b7280]/20 to-[#a5b4fc]/20 hover:from-[#6b7280]/40 hover:to-[#a5b4fc]/40 transition-all duration-300 hover:scale-105 hover:border-[#c7d2fe] cursor-pointer hover:shadow-lg hover:shadow-[#a5b4fc]/30 text-center"
//           >
//             <p className="text-sm font-semibold">{tab.name}</p>
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const tabs = [
//     { name: "Home", link: "/" },
//     { name: "Sign Up", link: "/signup" },
//     { name: "Log In", link: "/login" },
//     { name: "Contacts", link: "/contacts" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 h-[8vh] z-20 backdrop-blur-lg bg-[rgb(15,15,17)] flex items-center text-white p-4 sm:p-6">
//       <div className="container mx-auto flex justify-between items-center w-full">
//         {/* Left Side: Logo */}
//         <h1 className="ml-2 text-3xl font-bold tracking-wide bg-gradient-to-r from-[#b9b9b9] to-[#d8b9af] bg-clip-text text-transparent">
//           EveMan
//         </h1>

//         {/* Right Side: Navigation Links */}
//         <div className="hidden md:flex gap-4 mr-4">
//           {tabs.map((tab, index) => (
//             <Link
//               key={index}
//               to={tab.link}
//               className="py-2 px-4 rounded-3xl bg-white border-2 border-[#a5b4fc] text-black backdrop-blur-md gradient-to-r from-[#6b7280]/20 to-[#a5b4fc]/20 hover:from-[#6b7280]/40 hover:to-[#a5b4fc]/40 transition-all duration-300 hover:scale-105 hover:border-[#c7d2fe] cursor-pointer hover:shadow-lg hover:shadow-[#a5b4fc]/30 text-sm font-semibold"
//             >
//               {tab.name}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <button className="text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden flex flex-col gap-4 mt-4 ${isMenuOpen ? "block" : "hidden"}`}>
//         {tabs.map((tab, index) => (
//           <Link
//             key={index}
//             to={tab.link}
//             className="py-2 px-4 rounded-3xl bg-white border-2 border-[#a5b4fc] text-black backdrop-blur-md gradient-to-r from-[#6b7280]/20 to-[#a5b4fc]/20 hover:from-[#6b7280]/40 hover:to-[#a5b4fc]/40 transition-all duration-300 hover:scale-105 hover:border-[#c7d2fe] cursor-pointer hover:shadow-lg hover:shadow-[#a5b4fc]/30 text-center text-sm font-semibold"
//           >
//             {tab.name}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const tabs = [
//     { name: "Home", link: "/" },
//     { name: "Sign Up", link: "/signup" },
//     { name: "Log In", link: "/login" },
//     { name: "Contacts", link: "/contacts" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 h-[8vh] z-20 backdrop-blur-lg bg-[rgb(0,0,0)] flex items-center text-white p-4 sm:p-6">
//       <div className="container mx-auto flex justify-between items-center w-full">
//         {/* Left Side: Logo */}
//         <h1 className="ml-2 text-4xl font-extrabold tracking-wider bg-gradient-to-r from-[#b9b9b9] to-[#d8b9af] bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
//   EveMan
// </h1>

//         {/* Right Side: Navigation Links */}
//         <div className="hidden md:flex gap-4 mr-4">
//           {tabs.map((tab, index) => (
//             <Link
//               key={index}
//               to={tab.link}
//               className="py-2 px-4 rounded-3xl bg-white border-2 border-[#a5b4fc] text-black backdrop-blur-md gradient-to-r from-[#6b7280]/20 to-[#a5b4fc]/20 hover:from-[#6b7280]/40 hover:to-[#a5b4fc]/40 transition-all duration-300 hover:scale-105 hover:border-[#c7d2fe] cursor-pointer hover:shadow-lg hover:shadow-[#a5b4fc]/30 text-sm font-semibold"
//             >
//               {tab.name}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <button className="text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden flex flex-col gap-4 mt-6 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"}`}
//       >
//         {tabs.map((tab, index) => (
//           <Link
//             key={index}
//             to={tab.link}
//             className="py-2 px-4 rounded-3xl bg-white border-2 border-[#a5b4fc] text-black backdrop-blur-md gradient-to-r from-[#6b7280]/20 to-[#a5b4fc]/20 hover:from-[#6b7280]/40 hover:to-[#a5b4fc]/40 transition-all duration-300 hover:scale-105 hover:border-[#c7d2fe] cursor-pointer hover:shadow-lg hover:shadow-[#a5b4fc]/30 text-center text-sm font-semibold"
//           >
//             {tab.name}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { name: "Home", link: "/" },
    { name: "Sign Up", link: "/signup" },
    { name: "Log In", link: "/login" },
    { name: "Contacts", link: "/contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white h-[10vh] bg-black/40 backdrop-blur-lg border-b border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full flex justify-between items-center">
        
        <h1 className="text-3xl font-bold tracking-widest  text-[#ffb300] bg-gradient-to-r from-[#b9b9b9] to-[#d8b9af] bg-clip-text " style={{ fontFamily: 'Poppins, sans-serif' }}>
          EveMan
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.link}
              className="px-5 py-2 text-sm font-semibold rounded-3xl bg-white/10 border border-gray-400 hover:border-white backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-white/20"
            >
              {tab.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md w-full px-6 py-4 flex flex-col gap-4 absolute top-full left-0 z-40">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.link}
              className="py-2 px-4 text-sm font-semibold text-white rounded-2xl bg-white/10 border border-gray-500 hover:border-white transition-all duration-300 hover:bg-white/20 hover:scale-105 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
