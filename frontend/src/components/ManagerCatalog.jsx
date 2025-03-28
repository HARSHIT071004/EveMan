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

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h2 className="text-3xl font-bold text-center mb-6">📋 Available Services</h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <div 
//             key={index} 
//             onClick={() => handleServiceClick(service)}
//             className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-black">{service.title}</h2>
//             <p className="text-gray-500 mt-2">{service.desc}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-10">
//         <h3 className="text-2xl font-semibold text-center mb-4">🛒 Selected Services</h3>
//         {selectedServices.length === 0 ? (
//           <p className="text-gray-500 text-center">No services added yet.</p>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
//             {selectedServices.map((service, index) => (
//               <div key={index} className="bg-blue-100 p-4 rounded-lg shadow">
//                 <h4 className="text-lg font-semibold">{service.title}</h4>
//                 <p className="text-gray-600">{service.desc}</p>
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
    <div className="min-h-screen  p-8">
      <h2 className="text-4xl font-bold text-center mb-6">📋 Available Services</h2>
      <br/><br/>

      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => handleServiceClick(service)}
            className="bg-[rgb(17,17,17)]   shadow-lg p-9 rounded-2xl hover:shadow-2xl transition cursor-pointer"
          >
            <h2 className="text-3xl font-semibold text-white">{service.title}</h2>
            <p className="text-[#e4e1e1a8] text-2xl mt-2">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 ">
        <h3 className="text-2xl font-semibold text-center mb-4">🛒 Selected Services</h3>
        {selectedServices.length === 0 ? (
          <p className="text-gray-500 text-center">No services added yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4  max-w-4xl mx-auto">
            {selectedServices.map((service, index) => (
              <div key={index} className="bg-[#9271af] p-8 rounded-3xl shadow">
                <h4 className="text-3xl text-black font-semibold">{service.title}</h4>
                <p className=" text-[rgb(233,190,164)] text-2xl">{service.desc}</p>
                <button
                  onClick={() => handleRemoveService(service)}
                  className="mt-2 text-3xl text-[#09ff00] transition"
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
