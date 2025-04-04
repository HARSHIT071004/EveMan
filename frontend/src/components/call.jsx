import React from "react";

const Call = () => {
  const phoneNumber = "8384030544";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(22,16,16)] px-4">
      <div className="bg-black border border-gray-800 text-white p-8 rounded-3xl shadow-2xl shadow-blue-500/10 text-center w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Need Assistance?
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-6 font-light">
          We're just a call away, ready to assist you 24/7!
        </p>
        <div className="mt-6">
          <a
            href={`tel:${phoneNumber}`}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center px-8 py-4 rounded-full text-lg md:text-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            <span className="mr-2">📞</span>
            Call Now: {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Call;