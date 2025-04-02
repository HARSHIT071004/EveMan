import React from "react";
import { useNavigate } from "react-router-dom";

const LogCall = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6  ml-140 mt-10">
        <button 
          onClick={() => navigate("/signup")} 
          className="px-6 py-2 bg-[#21272b] text-white font-medium rounded-full border border-gray-500 shadow-md 
          hover:scale-105 hover:bg-[rgb(1,99,8)] hover:border-green-500 transition-all duration-300 flex items-center gap-2 text-lg md:text-2xl"
        >
          Subscribe
        </button>

        <a
          href="tel:838404533"
          onClick={() => navigate("/call")} 
          className="px-6 py-2 bg-[#564ceb] text-white font-semibold rounded-full shadow-lg hover:from-blue-600 
          hover:bg-[#473d37c4] text-lg md:text-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          Call: 838404533
        </a>
      </div>
    </div>
  );
};

export default LogCall;
