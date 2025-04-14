// import React from "react";

// const services = [
//   { title: "Event Planning & Management", desc: "Complete event planning from start to finish." },
//   { title: "Venue Booking", desc: "Find the perfect venue for your event." },
//   { title: "Catering Services", desc: "Delicious food arrangements for all guests." },
//   { title: "Decoration & Setup", desc: "Beautiful decorations that match your theme." },
//   { title: "Entertainment & Performers", desc: "Live performances, DJs, and artists for fun events." },
//   { title: "Photography & Videography", desc: "Capture your special moments professionally." },
// ];

// const ManagerCatalog = ({ selectedServices, setSelectedServices }) => {
//   const handleServiceClick = (service) => {
//     setSelectedServices([...selectedServices, service]);
//   };

//   const handleRemoveService = (service) => {
//     setSelectedServices(selectedServices.filter((s) => s.title !== service.title));
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <h2 className="text-2xl  font-sm text-center mb-1">📋 Available Services</h2>
//       <br/>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl ">
//         {services.map((service, index) => (
//           <div 
//             key={index} 
//             onClick={() => handleServiceClick(service)}
//             className="bg-[rgb(10,13,15)] rounded-2xl shadow-lg p-1  rounded-1xl hover:shadow-2xl transition cursor-pointer"
//           >
//             <h2 className="text-sm sm:text-xl font-semibold text-[#ffb300]">{service.title}</h2>
//             <p className="text-[#e4e1e1a8] text-sm sm:text-sm mt-2">{service.desc}</p>
//           </div>
//         ))}
//       </div>
// <br/><br/><br/><br/><br/><br/>
//       <div className="mt-10">
//         <h3 className="text-2xl font-semibold text-center mb-4">🛒 Selected Services</h3>
//         {selectedServices.length === 0 ? (
//           <p className="text-gray-500 text-center">No services added yet.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
//             {selectedServices.map((service, index) => (
//               <div key={index} className=" bg-[rgb(10,13,15)] p-6 rounded-3xl shadow-lg">
//                 <h4 className="text-2xl sm:text-2xl text-[#09ff00] font-semibold">{service.title}</h4>
//                 <p className="text-[rgb(233,190,164)] text-sm sm:text-sm">{service.desc}</p>
//                 <button
//                   onClick={() => handleRemoveService(service)}
//                   className="mt-2 text-xl sm:text-1xl text-white transition"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ManagerCatalog;










import React from "react";

const services = [
  { title: "Event Planning & Management", desc: "Complete event planning from start to finish." },
  { title: "Venue Booking", desc: "Find the perfect venue for your event." },
  { title: "Catering Services", desc: "Delicious food arrangements for all guests." },
  { title: "Decoration & Setup", desc: "Beautiful decorations that match your theme." },
  { title: "Entertainment & Performers", desc: "Live performances, DJs, and artists for fun events." },
  { title: "Photography & Videography", desc: "Capture your special moments professionally." },
];

const ManagerCatalog = ({ selectedServices, setSelectedServices }) => {
  const handleServiceClick = (service) => {
    setSelectedServices([...selectedServices, service]);
  };

  const handleRemoveService = (service) => {
    setSelectedServices(selectedServices.filter((s) => s.title !== service.title));
  };

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-sm text-center mb-1">📋 Available Services</h2>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl ">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => handleServiceClick(service)}
            className="bg-[rgb(10,13,15)] rounded-2xl shadow-lg p-4  hover:shadow-2xl transition cursor-pointer"
          >
            <h2 className="text-sm sm:text-xl font-semibold text-[#ffb300]">{service.title}</h2>
            <p className="text-[#e4e1e1a8] text-sm sm:text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
      <br /><br /><br /><br /><br /><br />
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-center mb-4">🛒 Selected Services</h3>
        {selectedServices.length === 0 ? (
          <p className="text-gray-500 text-center">No services added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {selectedServices.map((service, index) => (
              <div key={index} className="bg-[rgb(10,13,15)] p-6 rounded-3xl shadow-lg">
                <h4 className="text-2xl sm:text-2xl text-[#09ff00] font-semibold">{service.title}</h4>
                <p className="text-[rgb(233,190,164)] text-sm sm:text-sm">{service.desc}</p>
                <button
                  onClick={() => handleRemoveService(service)}
                  className="mt-2 text-xl sm:text-1xl text-white transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerCatalog;