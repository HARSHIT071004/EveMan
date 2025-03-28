import React from "react";
import { useNavigate } from "react-router-dom";

const LogCall = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="md:text-3xl flex gap-6 ml-125 mt-10">
                <button 
                    onClick={() => navigate("/signup")} 
                    className="px-14 py-5  bg-[#21272b]  
                    text-white font-semibold rounded-full shadow-lg hover:from-gray-600 
                     hover:scale-105 text-2xl transition-all duration-300 flex items-center gap-2 hover:bg-[rgb(1,99,8)]"
                >
                    Subscribe
                </button>

              
                <a
                    href="tel:838404533"
                    onClick={() => navigate("/call")} 
                    className="px-11 py-5 bg-[#564ceb]  
                    text-white font-semibold rounded-full shadow-lg hover:from-blue-600 
                    hover:bg-[#473d37c4] text-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                    Call: 838404533
                </a>
            </div>
        </div>
    );
};

export default LogCall;
