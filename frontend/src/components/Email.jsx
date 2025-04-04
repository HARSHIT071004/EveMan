import React from "react";

const Email = () => {
  const email = "harshsharmavatasa@gmail.com";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(22,16,16)] px-4">
      <div className="bg-black border border-gray-800 text-white p-8 rounded-3xl shadow-2xl shadow-purple-500/10 text-center w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Get in Touch ✉️
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-6 font-light">
          Drop us an email anytime—we’d love to hear from you!
        </p>
        <a
          href={`mailto:${email}`}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center px-8 py-4 rounded-full text-lg md:text-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
        >
          <span className="mr-2">📩</span>
          Email Now
        </a>
        <p className="text-gray-500 mt-6 text-sm md:text-base">{email}</p>
      </div>
    </div>
  );
};

export default Email;