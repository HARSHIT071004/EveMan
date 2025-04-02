import React, { useEffect, useState } from "react";
import axios from '../utils/axios'

const CurrentEvents = () => {
  const [events, setEvents] = useState([]);
  const userEmail = "test@example.com"; 

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const response = await axios.get(`/api/events/${userEmail}`);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching user events", error);
      }
    };
    fetchUserEvents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Your Created Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <div key={event._id} className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-xl font-semibold text-gray-900">{event.name}</h2>
            <p className="text-gray-700">{event.description}</p>
            <p className="text-gray-500 text-sm">📅 Date: {event.date}</p>
            <p className="text-gray-500 text-sm">📍 Location: {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentEvents;
