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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgba(22,16,16,0.9)] p-4 sm:p-6 overflow-hidden">
      <div className="relative  max-w-5xl rounded-3xl p-[3px] bg-gradient-to-br from-[#f39c12]/30 via-[#9e3c51]/20 to-transparent shadow-2xl border-2 border-gray-800/60">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[rgba(27,35,41,0.8)] backdrop-blur-md rounded-[inherit] p-6 sm:p-8 lg:p-10 text-white">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,156,18,0.15)_0%,transparent_60%)] opacity-50 -z-10"></div>
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#f39c12]/10 rounded-full blur-xl -z-10"></div>

          {/* Left - Get in Touch Form */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f39c12] mb-6 tracking-wide drop-shadow-lg text-center">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-base sm:text-lg font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mt-1 bg-[rgba(47,57,65,0.8)] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f39c12] transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-base sm:text-lg font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mt-1 bg-[rgba(47,57,65,0.8)] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f39c12] transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-base sm:text-lg font-medium text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mt-1 bg-[rgba(47,57,65,0.8)] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f39c12] transition-all duration-300"
                  placeholder="Write your message..."
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg bg-gradient-to-r from-[#f39c12] to-[#9e3c51] text-white py-3 rounded-xl hover:from-[#e08e0d] hover:to-[#8a2a3c] transition-all duration-300 shadow-md hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Image */}
          {/* <div className="w-full md:w-1/2 flex justify-center items-center relative group mt-6 md:mt-0">
            <img
              className="w-full h-[250px] md:h-[350px] object-cover rounded-3xl cursor-pointer transition-transform duration-300 group-hover:scale-105 max-w-[500px]"
              src="/eveman5.jpg"
              alt="Event"
              onClick={() => navigate("/about")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contacts;