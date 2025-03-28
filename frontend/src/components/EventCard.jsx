import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{event.title}</h3>
      <p className="text-gray-600">{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default EventCard;
