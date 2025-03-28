import React from "react";

const Call = () => {
  const phoneNumber = "8384030544";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r text-white">
      <div className="bg-white text-black p-6 rounded-2xl shadow-xl text-center w-80">
        <h1 className="text-2xl font-bold mb-2">Need Assistance?</h1>
        <p className="text-gray-600">Call us anytime, we are here to help!</p>
        <div className="mt-4">
          <a
            href={`tel:${phoneNumber}`}
            className="bg-blue-600 text-white flex items-center justify-center px-4 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
             Call Now: {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Call;
