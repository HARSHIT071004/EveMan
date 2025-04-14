// import { useNavigate } from "react-router-dom";
// import React from "react";
// const ThankYou = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200 p-8">
//       <div className="bg-white p-10 shadow-xl rounded-2xl text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4"> Thank You for Choosing Us!</h2>
//         <p className="text-lg text-gray-600 mb-6">We appreciate your trust in our services.</p>
//         <button
//           onClick={() => navigate("/")}
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition"
//         >
//           Go to Home 
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ThankYou;











import { useNavigate } from "react-router-dom";
import React from "react";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-8">
      <div className="bg-[#181e23] p-8 md:p-10 shadow-xl rounded-2xl text-center w-full max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffb300] mb-4">
          Thank You for Choosing Us!
        </h2>
        <p className="text-base md:text-lg text-gray-100 mb-6">
          We appreciate your trust in our services.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-[#ffb300]  text-black rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
