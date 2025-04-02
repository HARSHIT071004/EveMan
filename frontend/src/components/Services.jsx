// import React from "react";
// import { useNavigate } from "react-router-dom";

// const services = [
//   { title: "Event Planning & Management", desc: "Complete event planning from start to finish." },
//   { title: "Venue Booking", desc: "Find the perfect venue for your event." },
//   { title: "Catering Services", desc: "Delicious food arrangements for all guests." },
//   { title: "Decoration & Setup", desc: "Beautiful decorations that match your theme." },
//   { title: "Entertainment & Performers", desc: "Live performances, DJs, and artists for fun events." },
//   { title: "Photography & Videography", desc: "Capture your special moments professionally." },
// ];

// const Services = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[rgb(22,16,16)] text-gray-900 p-7 mt-15">
//       <div className="max-w-3xl mx-auto text-center">
//         <h1 className="text-5xl font-bold text-white mb-6">Our <span className="text-purple-400"> Services</span></h1>
//         <p className="text-gray-200 text-2xl mb-10">We provide end-to-end solutions for all your event needs.</p>
//       </div>
//       <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//         {services.map((service, index) => (
//           <div key={index} className="bg-[rgb(108,173,102)] shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
//             <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
//             <p className="text-gray-200 mt-2">{service.desc}</p>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-10">
//         <button
//           onClick={() => navigate("/createevent")}
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition"
//         >
//           Create Event 
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Services;














import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "Event Planning & Management", desc: "Complete event planning from start to finish." },
  { title: "Venue Booking", desc: "Find the perfect venue for your event." },
  { title: "Catering Services", desc: "Delicious food arrangements for all guests." },
  { title: "Decoration & Setup", desc: "Beautiful decorations that match your theme." },
  { title: "Entertainment & Performers", desc: "Live performances, DJs, and artists for fun events." },
  { title: "Photography & Videography", desc: "Capture your special moments professionally." },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[rgb(22,16,16)] text-gray-900 p-7 mt-15">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Our <span className="text-purple-400"> Services</span>
        </h1>
        <p className="text-gray-200 text-xl sm:text-2xl mb-10">We provide end-to-end solutions for all your event needs.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-[rgb(108,173,102)] shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-900">{service.title}</h2>
            <p className="text-gray-200 mt-2 text-sm sm:text-base">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/createevent")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition"
        >
          Create Event
        </button>
      </div>
    </div>
  );
};

export default Services;







