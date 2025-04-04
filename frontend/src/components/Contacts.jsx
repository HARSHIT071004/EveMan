












// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Contacts = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r p-6">
 

//       <div className="flex items-center justify-between bg-[rgb(22,16,16)] backdrop-blur-lg shadow-lg p-8 rounded-xl h-140 mt-19 w-[67%]  text-white">
//         {/* Left - Get in Touch Form */}
//         <div className="w-1/2 p-10">
//           <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-1xl font-medium">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full text-xl p-3 mt-1 shadow-lg bg-[#9a9b96] text-black rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label className="block text-1xl font-medium">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full text-xl p-3 mt-1 shadow-lg bg-[#9a9b96] text-black rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div>
//               <label className="block text-1xl font-medium">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full text-xl p-3 mt-1 bg-[#9a9b96] shadow-lg text-black rounded-lg outline-none"
//                 placeholder="Write your message..."
//                 rows="2"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full text-1xl h-16 bg-blue-700 py-1 text-white rounded-lg font-semibold shadow-md transition hover:bg-blue-900 hover:scale-105"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Right - Image */}
//         <div className="w-1/2 flex justify-center">
//           <img
//             className="h-[350px] w-[400px] object-cover rounded-4xl cursor-pointer"
//             src="/eveman5.jpg"
//             alt="Event"
//             onClick={() => navigate("/about")}
//           />
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Contacts;



















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgb(22,16,16)] p-6">
      <div className="flex flex-col md:flex-row items-center justify-between bg-black shadow-2xl rounded-3xl p-8 w-full max-w-4xl border border-gray-700">
        {/* Left - Get in Touch Form */}
        <div className="w-full md:w-1/2 p-6 text-white">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-base font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-base font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-base font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Write your message..."
                rows="3"
              />
            </div>

            <button
              type="submit"
              className="w-full text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative group mt-6 md:mt-0">
          <img
            className="h-[250px] md:h-[350px] w-full md:w-[400px] object-cover rounded-3xl cursor-pointer transition-transform duration-300 group-hover:scale-105"
            src="/eveman5.jpg"
            alt="Event"
            onClick={() => navigate("/about")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;