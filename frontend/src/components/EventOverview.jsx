// import React from "react";

// const EventOverview = ({ totalEvents, upcomingEvents, registeredUsers, revenue }) => {
//   const overviewData = [
//     { label: "Total Events", value: 70, gradient: "bg-gradient-to-r from-blue-500 to-blue-700" },
//     { label: "Upcoming Events", value: 19, gradient: "bg-gradient-to-r from-green-500 to-green-700" },
//     { label: "Registered Users", value: 70, gradient: "bg-gradient-to-r from-purple-500 to-purple-700" },
//     { label: "Total Revenue", value: `$${50000}`, gradient: "bg-gradient-to-r from-yellow-500 to-yellow-700" },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 my-9">
//       {overviewData.map((item, index) => (
//         <div 
//           key={index} 
//           className={`p-6 rounded-4xl shadow-lg text-black transition transform hover:scale-105 hover:shadow-xl ${item.gradient}`}
//           style={{
//             backdropFilter: "blur(10px)",
//             boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
//           }}
//         >
//           <h2 className="text-lg font-semibold">{item.label}</h2>
//           <p className="text-3xl font-extrabold">{item.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventOverview;











import React from "react";

const EventOverview = ({ totalEvents, upcomingEvents, registeredUsers, revenue }) => {
  const overviewData = [
    { label: "Total Events", value: totalEvents, gradient: "bg-gradient-to-r from-blue-500 to-blue-700" },
    { label: "Upcoming Events", value: upcomingEvents, gradient: "bg-gradient-to-r from-green-500 to-green-700" },
    { label: "Registered Users", value: registeredUsers, gradient: "bg-gradient-to-r from-purple-500 to-purple-700" },
    { label: "Total Revenue", value: revenue, gradient: "bg-gradient-to-r from-yellow-500 to-yellow-700" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-9">
      {overviewData.map((item, index) => (
        <div 
          key={index} 
          className={`p-6 rounded-4xl shadow-lg text-black transition transform hover:scale-105 hover:shadow-xl ${item.gradient}`}
          style={{
            backdropFilter: "blur(10px)",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
          }}
        >
          <h2 className="text-lg font-semibold">{item.label}</h2>
          <p className="text-3xl font-extrabold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default EventOverview;
