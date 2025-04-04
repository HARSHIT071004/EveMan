


// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0a0412] text-white p-6">
//       <div className="bg-[rgb(17,17,17)] text-gray-100 p-8 rounded-3xl shadow-2xl max-w-3xl text-center border border-gray-900">
//         <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
//           About EveMan
//         </h1>
//         <p className="text-lg text-gray-300 leading-relaxed">
//           EveMan is your ultimate event management companion, designed to bridge the gap between 
//           event organizers and managers. Whether it's a wedding, a corporate event, or a concert, 
//           we ensure seamless planning and execution. Our goal is to make your events 
//           stress-free and extraordinary!
//         </p>
//         <div className="mt-6">
//           <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-indigo-600/50 transition-all duration-300">
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0412] to-[#161010] text-white p-6">
      <div className="bg-black bg-opacity-80 backdrop-blur-lg text-gray-100 p-8 rounded-3xl shadow-2xl max-w-3xl w-full text-center border border-gray-800 transform hover:scale-105 transition-transform duration-300">
      <h1 
  className="text-7xl sm:text-5xl md:text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-500 animate-gradient" 
  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, letterSpacing: '-0.025em' }}
>
  About EveMan
</h1>
        <p className="text-1xl sm:text-1xl md:text-1xl text-gray-200 leading-relaxed tracking-wide">
          EveMan is your ultimate event management companion, crafted to connect event organizers and managers effortlessly. From weddings to corporate gatherings and concerts, we guarantee flawless planning and execution. Our mission? To transform your events into stress-free, unforgettable experiences!
        </p>
        <div className="mt-8">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-indigo-600/70 transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;