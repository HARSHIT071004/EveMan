// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LogCall = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className="flex flex-col md:flex-row gap-6  ml-140 mt-10">
//         <button 
//           onClick={() => navigate("/signup")} 
//           className="px-6 py-2 bg-[#21272b] text-white font-medium rounded-full border border-gray-500 shadow-md 
//           hover:scale-105 hover:bg-[rgb(1,99,8)] hover:border-green-500 transition-all duration-300 flex items-center gap-2 text-lg md:text-2xl"
//         >
//           Subscribe
//         </button>

//         <a
//           href="tel:838404533"
//           onClick={() => navigate("/call")} 
//           className="px-6 py-2 bg-[#564ceb] text-white font-semibold rounded-full shadow-lg hover:from-blue-600 
//           hover:bg-[#473d37c4] text-lg md:text-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
//         >
//           Call: 838404533
//         </a>
//       </div>
//     </div>
//   );
// };

// export default LogCall;







import React from "react";
import { useNavigate } from "react-router-dom";

const LogCall = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center ">
      <div className="text-center space-y-9">
        
        {/* <h1 className="text-3xl md:text-4xl font-semibold text-[#ffb300]">
          Get in Touch with Us
        </h1> */}
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          
          {/* Subscribe Button */}
          <button 
            onClick={() => navigate("/signup")} 
            className="px-5 py-2 bg-[#333333] text-white font-medium rounded-full border border-gray-600 shadow-md 
            hover:scale-105 hover:bg-[#4caf50] hover:border-green-500 transition-all duration-300 flex items-center gap-3 text-lg md:text-xl"
          >
            Subscribe
          </button>

          {/* Call Button */}
          <a
            href="tel:838404533"
            className="px-5 py-2 bg-[#0069d9] text-white font-semibold rounded-full shadow-lg hover:bg-[#0056b3] 
            text-lg md:text-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <span className="text-lg md:text-xl">Call: 838404533</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogCall;
