// import React from "react";

// const footer = () => {
//   return (
//     <footer className="w-full h-110 bg-[rgb(160,191,253)] text-white ">
//       <div className="container h-80  flex flex-col justify-center gap-8 items-center mx-auto text-center">
         
//     <div className="flex justify-center text-1xl text-gray-700 gap-15 mt-2 ">
//           <a href="/" className=" text-1xl hover:text-gray-900">Home</a>
//           <a href="/about" className="text-1xl hover:text-gray-900">About</a>
//           <a href="/services" className="text-1xl hover:text-gray-900">Services</a>
//           <a href="/contacts" className="text-1xl hover:text-gray-900">Contact</a>
//         </div>
//         <br/>








//         <button onClick={()=>{navigate("/CreateEvent")}}  className="text-3xl rounded-2xl hover:scale-105 transition-all duration-300 px-19 py-7 
// bg-[rgb(3,3,3)] text-white  
// hover:bg-[#6557a3]">
//           Create Events
//         </button>
        



//         <p className="text-1xl    text-gray-900 ">&copy; 2025 Eveman. All rights reserved.</p>
//       </div>
     
//       </footer>
   
//   );
// };

// export default footer;


import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-black border-t-2 border-gray-900 mt-1 text-white py-12">
      <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center gap-10 text-center">
        {/* Navigation Links */}
        <div className="flex justify-center gap-12 text-base font-medium text-gray-300">
  <Link
    to="/"
    className="hover:text-purple-500 transition-colors duration-300 ease-in-out"
  >
    Home
  </Link>
  <Link
    to="/about"
    className="hover:text-purple-500 transition-colors duration-300 ease-in-out"
  >
    About
  </Link>
  <Link
    to="/services"
    className="hover:text-purple-500 transition-colors duration-300 ease-in-out"
  >
    Services
  </Link>
  <Link
    to="/contacts"
    className="hover:text-purple-500 transition-colors duration-300 ease-in-out"
  >
    Contact
  </Link>
</div>

        {/* Create Events Button */}
        {/* Uncomment if needed */}
        {/* <button
          onClick={() => navigate("/CreateEvent")}
          className="text-xl font-semibold rounded-2xl px-8 py-4 bg-gray-900 text-white hover:bg-purple-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-600/40"
        >
          Create Events
        </button> */}

        {/* Copyright */}
        <p className="text-sm text-gray-500 font-light">
          © {new Date().getFullYear()} Eveman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;





// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Footer = () => {
//   const navigate = useNavigate();

//   return (
//     <footer className="w-full bg-[#0a0412] border-t-2 mt-1 text-white py-12">
//       <div className="container max-w-6xl mx-auto flex flex-col mb-15 justify-center items-center gap-8 text-center">
//         {/* Navigation Links */}
//         <div className="flex justify-center gap-15 text-sm text-gray-300">
//           <a
//             href="/"
//             className="hover:text-purple-400 transition-colors duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="/about"
//             className="hover:text-purple-400 transition-colors duration-300"
//           >
//             About
//           </a>
//           <a
//             href="/services"
//             className="hover:text-purple-400 transition-colors duration-300"
//           >
//             Services
//           </a>
//           <a
//             href="/contacts"
//             className="hover:text-purple-400 transition-colors duration-300"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Create Events Button */}
//         <button
//           onClick={() => navigate("/CreateEvent")}
//           className="text-xl font-semibold rounded-2xl px-8 py-4 bg-[rgb(17,17,17)] text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-700/50"
//         >
//           Create Events
//         </button>

//         {/* Copyright */}
//         <p className="text-sm text-gray-400">
//           © {new Date().getFullYear()} Eveman. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
