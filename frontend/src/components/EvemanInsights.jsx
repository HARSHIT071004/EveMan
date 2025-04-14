// import React from "react";

// const EvemanInsights = () => {
//   const insights = {
//     totalEvents: 120,
//     totalClients: 85,
//     successfulEvents: 110,
//     activeManagers: 25,
//     positiveFeedback: "95%",
//   };

//   return (
//     <div className="w-full flex flex-col items-center text-center py-20 px-4 sm:px-6 lg:px-8 ">
//       <div className="w-full max-w-9xl relative">
//         {/* Decorative Background */}
//         {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,156,18,0.15)_0%,transparent_60%)] opacity-50 -z-10"></div>
//         <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#f39c12]/10 rounded-full blur-2xl -z-10"></div> */}

//         <div className="w-full bg-[rgb(27,35,41)]/80 backdrop-blur-md shadow-2xl border-2 border-gray-800/60 rounded-2xl p-6 sm:p-8 lg:p-10">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#f39c12]  mb-8 tracking-wide drop-shadow-lg">
//             Eveman Insights
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
//             <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">
//               <span className="text-blue-200">{insights.totalEvents}+</span> Total Events Managed
//             </p>
//             <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">
//               <span className="text-blue-200">{insights.totalClients}+</span> Clients Served
//             </p>
//             <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">
//               <span className="text-blue-200">{insights.successfulEvents}+</span> Successful Events
//             </p>
//             <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">
//               <span className="text-blue-200">{insights.activeManagers}+</span> Active Event Managers
//             </p>
//             <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium col-span-2 lg:col-span-3 text-center">
//               <span className="text-[#9e3c51]">{insights.positiveFeedback}</span> Positive Feedback
//             </p>
//           </div>
//           <p className="mt-5 text-sm sm:text-base text-gray-400 font-medium">Response Time: 25 minutes</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EvemanInsights;


















import React from "react";

const EvemanInsights = () => {
  const insights = {
    totalEvents: 120,
    totalClients: 85,
    successfulEvents: 110,
    activeManagers: 25,
    positiveFeedback: "95%",
  };

  return (
    <div className="w-full flex flex-col items-center text-center py-14 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-9xl relative">
        {/* Decorative Background */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,156,18,0.15)_0%,transparent_60%)] opacity-50 -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#f39c12]/10 rounded-full blur-2xl -z-10"></div> */}

        <div className="w-full bg-[rgb(27,35,41)]/80 backdrop-blur-md shadow-2xl border-2 border-gray-800/60 rounded-2xl p-4 sm:p-6 lg:p-10">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-[#f39c12] mb-6 sm:mb-8 tracking-wide drop-shadow-lg">
            Eveman Insights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 w-full">
            <p className="text-sm sm:text-lg md:text-xl text-gray-100 font-medium">
              <span className="text-blue-200">{insights.totalEvents}+</span> Total Events Managed
            </p>
            <p className="text-sm sm:text-lg md:text-xl text-gray-100 font-medium">
              <span className="text-blue-200">{insights.totalClients}+</span> Clients Served
            </p>
            <p className="text-sm sm:text-lg md:text-xl text-gray-100 font-medium">
              <span className="text-blue-200">{insights.successfulEvents}+</span> Successful Events
            </p>
            <p className="text-sm sm:text-lg md:text-xl text-gray-100 font-medium">
              <span className="text-blue-200">{insights.activeManagers}+</span> Active Event Managers
            </p>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 font-medium col-span-1 sm:col-span-2 lg:col-span-3 text-center">
              <span className="text-[#9e3c51]">{insights.positiveFeedback}</span> Positive Feedback
            </p>
          </div>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-400 font-medium">
            Response Time: 25 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default EvemanInsights;
