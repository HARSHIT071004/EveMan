// import React from "react";

// const EventCard = ({ event }) => {
//   return (
//     <div className="border p-4 rounded-lg shadow-md">
//       <h3 className="text-xl font-bold">{event.title}</h3>
//       <p className="text-gray-600">{event.date}</p>
//       <p>{event.description}</p>
//     </div>
//   );
// };

// export default EventCard;




import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-700 mt-2">{event.description}</p>
    </div>
  );
};

export default EventCard;
