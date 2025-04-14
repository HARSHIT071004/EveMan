// import React from "react";
// import { Link, Navigate } from "react-router-dom";
// import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
// const ContactSupport = () => {
//   return (
//     <div className="py-1 px-2 p-2 text-center mb-19">
//       <h2 className="text-4xl font-semibold mb-1 text-[rgb(255,255,255)]">Contact <span className="text-[#f39c12] ">& Support</span></h2><br /><br />

//       <div className="flex flex-wrap justify-center gap-9">
//         {/* <a href="/call" className="px-1 py-1 text-1xl text-black   bg-white rounded-lg  hover:bg-[#000000c4] hover:text-amber-100 transition">
//            Call Support
//         </a>

       
//         <a href="/email" className="px-7 py-6 text-1xl   text-black rounded-lg shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition">
//            Email Support
//         </a>

      
//        <a href="/helpcenter"
//       className="px-7 py-6 text-1xl text-black rounded-lg shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition"
//     >
//       Live Chat
//     </a>

//         <a href="/faqs" className="px-7 py-6 text-2xl  text-blac  rounded-lg shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition ">
//            FAQs
//         </a> */}

//         {/* <a href="/help-center" className="px-6 py-3 bg-white   rounded-lg text-black shadow-lg hover:bg-blue-300 transition">
//            Help Center
//         </a> */}
// <div className="flex gap-4">
//   <Link
//     to="/call"
//     className="px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md transition-all duration-300"
//   >
//     Call Support
//   </Link>

//   <Link
//     to="/email"
//     className="px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md transition-all duration-300"
//   >
//     Email Support
//   </Link>

//   {/* Uncomment if needed */}
//   {/* <Link
//     to="/helpcenter"
//     className="px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg shadow-md transition-all duration-300"
//   >
//     Live Chat
//   </Link> */}

//   <Link
//     to="/faqs"
//     className="px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-teal-600 rounded-lg shadow-md transition-all duration-300"
//   >
//     FAQs
//   </Link>
// </div>


// <div className="flex gap-4">
//       <a
//         href="https://instagram.com/sharmaaa"
//         target="_blank"
//         className="text-pink-500 hover:text-pink-600 transition duration-300"
//       >
//         <FaInstagram size={24} />
//       </a>
//       <a
//         href="https://twitter.com"
//         target="_blank"
//         className="text-blue-400 hover:text-blue-500  h-5vh transition duration-300"
//       >
//         <FaTwitter size={24} />
//       </a>
//       <a
//         href="https://wa.me/918384030533"
//         target="_blank"
//         className="text-green-500 hover:text-green-600 transition duration-300"
//       >
//         <FaWhatsapp size={24} />
//       </a>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSupport;












import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ContactSupport = () => {
  return (
    <div className="py-4 px-3 text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#f39c12]">
        Contact <span className="text-white">& Support</span>
      </h2>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-10">
        <Link
          to="/call"
          className="w-full md:w-auto px-6 py-3 text-base md:text-lg font-semibold text-black bg-[#ffb300] rounded-lg shadow-md transition-all duration-300 text-center"
        >
          Call Support
        </Link>
        <Link
          to="/email"
          className="w-full md:w-auto px-6 py-3 text-base md:text-lg font-semibold text-black bg-[#ffb300] rounded-lg shadow-md transition-all duration-300 text-center"
        >
          Email Support
        </Link>
        <Link
          to="/faqs"
          className="w-full md:w-auto px-6 py-3 text-base md:text-lg font-semibold text-black bg-[#ffb300] rounded-lg shadow-md transition-all duration-300 text-center"
        >
          FAQs
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 md:gap-8">
        <a
          href="https://instagram.com/sharmaaa"
          target="_blank"
          className="text-pink-500 hover:text-pink-600 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 transition duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://wa.me/918384030533"
          target="_blank"
          className="text-green-500 hover:text-green-600 transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactSupport;
