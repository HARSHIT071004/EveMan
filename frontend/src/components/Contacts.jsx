// import React, { useState } from "react";

// const Contacts = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="   min-h-screen flex flex-col items-center justify-center bg-gradient-to-r p-6">
//       {/* <div className=" bg-[rgb(33,33,33)] backdrop-blur-lg shadow-lg p-8 rounded-xl h-220 w-full text-white">
//       <div className="w-1/2 flex justify-center">
//     <img
//       className="h-[600px] w-[1600px] object-cover rounded-4xl cursor-pointer"
//       src="/eveman6.jpg"
//       alt="Event"
//       onClick={() => navigate("/about")}
//     />
//   </div>
        
//         <h2 className="text-3xl font-bold text-center mr-430 mb-6">Get in Touch </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-2xl font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-[35%] text-2xl p-3 mt-1 shadow-lg bg-[#9a9b96] py-9 text-black rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div>
//             <label className=" block text-2xl font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-[35%] text-2xl bg-[#9a9b96] p-3 mt-1 shadow-lg py-9 text-black rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div>
//             <label className="block text-2xl font-medium">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-[35%] text-2xl p-3 mt-1 bg-[#9a9b96] py-94shadow-lg text-black rounded-lg outline-none"
//               placeholder="Write your message..."
//               rows="4"
//             />
//           </div>
//           <button
//             type="submit"
//             className="ml-1 w-[35%] text-2xl h-16 bg-blue-700 py-3text-gray-500 rounded-lg  font-semibold shadow-md transition hover:bg-blue-900 hover:scale-85"
//           >
//             Send Message 
//           </button>
//         </form>

        
//       </div> */}

















// <div className="flex items-center justify-between bg-[rgb(22,16,16)] backdrop-blur-lg shadow-lg p-8 rounded-xl h-140 mt-19 w-[67%]  text-white">
//   {/* Left - Get in Touch Form */}
//   <div className="w-1/2 p-10">
//     <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label className="block text-1xl font-medium">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full text-xl p-3 mt-1 shadow-lg bg-[#9a9b96] py-3 text-black rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//           placeholder="Enter your name"
//         />
//       </div>

//       <div>
//         <label className="block text-1xl font-medium">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full text-xl bg-[#9a9b96] p-3 mt-1 shadow-lg py-3 text-black rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//           placeholder="Enter your email"
//         />
//       </div>

//       <div>
//         <label className="block text-1xl font-medium">Message</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="w-full text-xl p-3 mt-1 bg-[#9a9b96] shadow-lg text-black rounded-lg outline-none"
//           placeholder="Write your message..."
//           rows="2"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full text-1xl h-16 bg-blue-700 py-1 text-white rounded-lg font-semibold shadow-md transition hover:bg-blue-900 hover:scale-105"
//       >
//         Send Message
//       </button>
//     </form>
//   </div>

//   {/* Right - Image */}
//   <div className="w-1/2 flex justify-center">
//     <img
//       className="h-[350px] w-[400px] object-cover rounded-4xl cursor-pointer"
//       src="/eveman5.jpg"
//       alt="Event"
//       onClick={() => navigate("/about")}
//     />
//   </div>
// </div>

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r p-6">
      {/* <div className=" bg-[rgb(33,33,33)] backdrop-blur-lg shadow-lg p-8 rounded-xl h-220 w-full text-white">
      <div className="w-1/2 flex justify-center">
    <img
      className="h-[600px] w-[1600px] object-cover rounded-4xl cursor-pointer"
      src="/eveman6.jpg"
      alt="Event"
      onClick={() => navigate("/about")}
    />
  </div>
        
        <h2 className="text-3xl font-bold text-center mr-430 mb-6">Get in Touch </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-2xl font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-[35%] text-2xl p-3 mt-1 shadow-lg bg-[#9a9b96] py-9 text-black rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className=" block text-2xl font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-[35%] text-2xl bg-[#9a9b96] p-3 mt-1 shadow-lg py-9 text-black rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-2xl font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-[35%] text-2xl p-3 mt-1 bg-[#9a9b96] py-94shadow-lg text-black rounded-lg outline-none"
              placeholder="Write your message..."
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="ml-1 w-[35%] text-2xl h-16 bg-blue-700 py-3text-gray-500 rounded-lg  font-semibold shadow-md transition hover:bg-blue-900 hover:scale-85"
          >
            Send Message 
          </button>
        </form>

        
      </div> */}

      <div className="flex items-center justify-between bg-[rgb(22,16,16)] backdrop-blur-lg shadow-lg p-8 rounded-xl h-140 mt-19 w-[67%]  text-white">
        {/* Left - Get in Touch Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-1xl font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full text-xl p-3 mt-1 shadow-lg bg-[#9a9b96] text-black rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-1xl font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full text-xl p-3 mt-1 shadow-lg bg-[#9a9b96] text-black rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-1xl font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full text-xl p-3 mt-1 bg-[#9a9b96] shadow-lg text-black rounded-lg outline-none"
                placeholder="Write your message..."
                rows="2"
              />
            </div>

            <button
              type="submit"
              className="w-full text-1xl h-16 bg-blue-700 py-1 text-white rounded-lg font-semibold shadow-md transition hover:bg-blue-900 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="w-1/2 flex justify-center">
          <img
            className="h-[350px] w-[400px] object-cover rounded-4xl cursor-pointer"
            src="/eveman5.jpg"
            alt="Event"
            onClick={() => navigate("/about")}
          />
        </div>
      </div>

    </div>
  );
};

export default Contacts;
