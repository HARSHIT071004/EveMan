// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center  text-white p-6">
//       <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl max-w-3xl text-center">
//         <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
//           About EveMan
//         </h1>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           EveMan is your ultimate event management companion, designed to bridge the gap between 
//           event organizers and managers. Whether it's a wedding, a corporate event, or a concert, 
//           we ensure seamless planning and execution. Our goal is to make your events 
//           stress-free and extraordinary! 
//         </p>
//         <div className="mt-6">
//           <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;





import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0412] text-white p-6">
      <div className="bg-[rgb(17,17,17)] text-gray-100 p-8 rounded-3xl shadow-2xl max-w-3xl text-center border border-gray-900">
        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          About EveMan
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          EveMan is your ultimate event management companion, designed to bridge the gap between 
          event organizers and managers. Whether it's a wedding, a corporate event, or a concert, 
          we ensure seamless planning and execution. Our goal is to make your events 
          stress-free and extraordinary!
        </p>
        <div className="mt-6">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-indigo-600/50 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;