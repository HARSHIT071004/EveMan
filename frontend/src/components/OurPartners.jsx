import React from "react";

const partners = [
  { name: "EventPro", logo: "https://via.placeholder.com/150" },
  { name: "FestiveX", logo: "https://via.placeholder.com/150" },
  { name: "VenueHub", logo: "https://via.placeholder.com/150" },
  { name: "GlamDecor", logo: "https://via.placeholder.com/150" },
];

const OurPartners = () => {
  return (
    <div className="w-[90%] py-16 text-center mx-auto  rounded-xl ">
      <h2 className="text-5xl font-semibold text-gray-200 mb-12 tracking-wider drop-shadow-md">
        Our Partners
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-16">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-gray-800  p-6 rounded-xl transition duration-300 hover:scale-105 hover:shadow-purple-500/50"
          >
            <p className="text-2xl font-semibold text-gray-200 ">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;












// import React from "react";

// const partners = [
//   { name: "EventPro", logo: "https://via.placeholder.com/150" },
//   { name: "FestiveX", logo: "https://via.placeholder.com/150" },
//   { name: "VenueHub", logo: "https://via.placeholder.com/150" },
//   { name: "GlamDecor", logo: "https://via.placeholder.com/150" },
// ];

// const OurPartners = () => {
//   return (
//     <div className="w-[90%] py-16 text-center mx-auto rounded-xl">
//       <h2 className="text-5xl font-semibold text-gray-200 mb-12 tracking-wider drop-shadow-md">
//         Our Partners
//       </h2>

//       {/* Responsive grid with logos */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4 md:px-16">
//         {partners.map((partner, index) => (
//           <div
//             key={index}
//             className="bg-white/10 backdrop-blur-lg border border-gray-800 p-6 rounded-xl transition duration-300 hover:scale-105 hover:shadow-purple-500/50"
//           >
//             <img
//               src={partner.logo}
//               alt={partner.name}
//               className="w-full h-24 object-contain mx-auto mb-4"
//             />
//             <p className="text-2xl font-semibold text-gray-200">{partner.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurPartners;
