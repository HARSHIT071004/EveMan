import React from "react";
import { Navigate } from "react-router-dom";
const ContactSupport = () => {
  return (
    <div className="py-1 px-2 p-2 text-center">
      <h2 className="text-5xl font-semibold mb-4 text-[rgb(255,255,255)]">Contact <span className="text-purple-400">& Support</span></h2><br/><br/>
      
      <div className="flex flex-wrap justify-center gap-4">
        {/* <a href="/call" className="px-1 py-1 text-1xl text-black   bg-white rounded-lg  hover:bg-[#000000c4] hover:text-amber-100 transition">
           Call Support
        </a>

       
        <a href="/email" className="px-7 py-6 text-1xl   text-black rounded-lg shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition">
           Email Support
        </a>

      
       <a href="/helpcenter"
      className="px-7 py-6 text-1xl text-black rounded-lg shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition"
    >
      Live Chat
    </a>

        <a href="/faqs" className="px-7 py-6 text-2xl  text-blac  rounded-lg shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition ">
           FAQs
        </a> */}

        {/* <a href="/help-center" className="px-6 py-3 bg-white   rounded-lg text-black shadow-lg hover:bg-blue-300 transition">
           Help Center
        </a> */}

<a href="/call" className="px-3 py-2 text-lg text-black  bg-white rounded-lg hover:bg-[#000000c4] hover:text-amber-100 transition">
  Call Support
</a>

<a href="/email" className="px-4 py-2 text-lg text-black bg-white rounded-lg shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition">
  Email Support
</a>

<a href="/helpcenter" className="px-4 py-2 text-lg text-black bg-white rounded-lg shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition">
  Live Chat
</a>

<a href="/faqs" className="px-4 py-2 text-lg text-black rounded-lg bg-white shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition">
  FAQs
</a>

        <div className="flex gap-4">
          <a href="https://instagram.com/sharmaaa" target="_blank" className="text-1xl text-pink-500 hover:text-pink-600 transition">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" className="text-1xl text-blue-400 hover:text-blue-500 transition">
             Twitter
          </a>
          <a href="https://wa.me/918384030533" target="_blank" className="text-1 xl text-green-500 hover:text-green-600 transition">
             WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;














// import React from "react";
// import { Navigate } from "react-router-dom";

// const ContactSupport = () => {
//   return (
//     <div className="py-4 px-4 sm:px-6 lg:px-8 text-center">
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-white">
//         Contact <span className="text-purple-400">& Support</span>
//       </h2>

//       <div className="flex flex-wrap justify-center gap-4">
//         <a
//           href="/call"
//           className="px-4 py-2 text-lg sm:text-xl text-black bg-white rounded-lg hover:bg-[#000000c4] hover:text-amber-100 transition"
//         >
//           Call Support
//         </a>

//         <a
//           href="/email"
//           className="px-4 py-2 text-lg sm:text-xl text-black bg-white rounded-lg shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition"
//         >
//           Email Support
//         </a>

//         <a
//           href="/helpcenter"
//           className="px-4 py-2 text-lg sm:text-xl text-black bg-white rounded-lg shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition"
//         >
//           Live Chat
//         </a>

//         <a
//           href="/faqs"
//           className="px-4 py-2 text-lg sm:text-xl text-black rounded-lg bg-white shadow-lg hover:bg-[#000000c4] hover:text-amber-100 transition"
//         >
//           FAQs
//         </a>
//       </div>

//       <div className="flex gap-4 justify-center mt-6">
//         <a
//           href="https://instagram.com/sharmaaa"
//           target="_blank"
//           className="text-lg sm:text-xl text-pink-500 hover:text-pink-600 transition"
//         >
//           Instagram
//         </a>
//         <a
//           href="https://twitter.com"
//           target="_blank"
//           className="text-lg sm:text-xl text-blue-400 hover:text-blue-500 transition"
//         >
//           Twitter
//         </a>
//         <a
//           href="https://wa.me/918384030533"
//           target="_blank"
//           className="text-lg sm:text-xl text-green-500 hover:text-green-600 transition"
//         >
//           WhatsApp
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ContactSupport;
