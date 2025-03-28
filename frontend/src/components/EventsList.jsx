// import { useEffect, useState } from "react";
// import axios from "axios";

// const EventsList = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/events")
//       .then(response => setEvents(response.data))
//       .catch(error => console.error("Error:", error));
//   }, []);

//   return (
//     <div>
//       <h2>All Events</h2>
//       {events.length > 0 ? (
//         events.map(event => (
//           <div key={event._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
//             <h3>{event.name}</h3>
//             <p>{event.description}</p>
//             <p>Date: {new Date(event.date).toLocaleDateString()}</p>
//           </div>
//         ))
//       ) : (
//         <p>No events found.</p>
//       )}
//     </div>
//   );
// };

// export default EventsList;
