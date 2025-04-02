import React from "react";

const Email = () => {
  const email = "harshsharmavatasa@gmail.com";

  return (
    <div className="min-h-screen flex items-center justify-center  text-white">
      <div className="bg-[rgb(6,6,7)] text-white p-8 rounded-2xl shadow-2xl text-center w-96">
        <h1 className="text-3xl font-bold mb-3">Get in Touch ✉️</h1>
        <p className="text-gray-300 mb-4">Feel free to drop an email anytime!</p>
        <a
          href={`mailto:${email}`}
          className="bg-blue-600 text-white px-5 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Email Now 📩
        </a>
        <p className="text-gray-500 mt-4">{email}</p>
      </div>
    </div>
  );
};

export default Email;
