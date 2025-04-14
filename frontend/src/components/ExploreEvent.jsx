// import React from "react";
// import { useLocation } from "react-router-dom";

// const eventsData = {
//   "Personal & Social Events": [
//     { id: 1, name: "Royal Wedding", date: "12th March 2025" },
//     { id: 2, name: "Alice’s Birthday Bash", date: "5th April 2025" },
//     { id: 3, name: "50th Anniversary Gala", date: "20th May 2025" },
//     { id: 4, name: "Baby Shower for Emma", date: "15th June 2025" },
//     { id: 5, name: "Housewarming Party", date: "1st July 2025" },
//   ],
//   "Corporate & Business Events": [
//     { id: 6, name: "Tech Conference 2025", date: "18th March 2025" },
//     { id: 7, name: "Startup Pitch Fest", date: "22nd April 2025" },
//     { id: 8, name: "Annual Business Meet", date: "7th May 2025" },
//     { id: 9, name: "Product Launch - XPhone", date: "30th June 2025" },
//     { id: 10, name: "Team Building Retreat", date: "12th July 2025" },
//   ],
//   "Cultural & Community Events": [
//     { id: 11, name: "Spring Music Festival", date: "10th March 2025" },
//     { id: 12, name: "Food & Wine Carnival", date: "20th April 2025" },
//     { id: 13, name: "Art Exhibition - Modern Masters", date: "12th May 2025" },
//     { id: 14, name: "Charity Gala Night", date: "28th June 2025" },
//     { id: 15, name: "Religious Harmony Meet", date: "9th July 2025" },
//   ],
//   "Educational & Training Events": [
//     { id: 16, name: "AI & ML Bootcamp", date: "5th March 2025" },
//     { id: 17, name: "Career Fair 2025", date: "18th April 2025" },
//     { id: 18, name: "Graduation Celebration", date: "25th May 2025" },
//     { id: 19, name: "Tech Workshop - Web 3.0", date: "15th June 2025" },
//     { id: 20, name: "Online Webinar - Future of Work", date: "29th July 2025" },
//   ],
//   "Entertainment & Public Events": [
//     { id: 21, name: "Rock Concert - The Legends", date: "7th March 2025" },
//     { id: 22, name: "Sports Championship Finale", date: "14th April 2025" },
//     { id: 23, name: "Movie Premiere - Avengers 6", date: "10th May 2025" },
//     { id: 24, name: "Stand-up Comedy Show", date: "23rd June 2025" },
//     { id: 25, name: "Fashion Week 2025", date: "2nd August 2025" },
//   ],
//   "Sports & Fitness Events": [
//     { id: 26, name: "Marathon Championship", date: "5th April 2025" },
//     { id: 27, name: "Yoga Retreat", date: "10th May 2025" },
//     { id: 28, name: "Interstate Basketball Tournament", date: "18th June 2025" },
//     { id: 29, name: "Cricket World Cup Final", date: "15th July 2025" },
//     { id: 30, name: "Gym & Fitness Expo", date: "5th August 2025" },
//   ],
//   "Health & Wellness Events": [
//     { id: 31, name: "Mental Health Awareness Conference", date: "12th April 2025" },
//     { id: 32, name: "Nutrition & Diet Summit", date: "20th May 2025" },
//     { id: 33, name: "Wellness Retreat", date: "10th June 2025" },
//     { id: 34, name: "Medical Camp - Free Checkups", date: "30th July 2025" },
//     { id: 35, name: "Healthcare Tech Conference", date: "15th August 2025" },
//   ],
//   "Tech & Innovation Events": [
//     { id: 36, name: "Blockchain Expo 2025", date: "8th March 2025" },
//     { id: 37, name: "Cybersecurity Summit", date: "15th April 2025" },
//     { id: 38, name: "Robotics & AI Fair", date: "22nd May 2025" },
//     { id: 39, name: "Cloud Computing Workshop", date: "5th July 2025" },
//     { id: 40, name: "Metaverse & AR/VR Conference", date: "25th August 2025" },
//   ],
// };

// const ExploreEvents = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const category = searchParams.get("category");

//   const events = eventsData[category] || [];

//   return (
//     <div className="py-10 px-10 mt-19">
//       <h2 className="text-3xl font-semibold text-center mb-6">
//         {category || "Explore Events"}
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {events.length > 0 ? (
//           events.map((event) => (
//             <div
//               key={event.id}
//               className="p-4 bg-[#060607fd] text-white rounded-lg border border-gray-300 shadow-md 
//               hover:shadow-lg transition-all duration-300 h-auto flex flex-col items-start"
//             >
//               <h4 className="text-lg font-medium text-gray-100">{event.name}</h4>
//               <p className="text-sm text-gray-300 mt-1">{event.date}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No events found for this category.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExploreEvents;










// important down




// import React from "react";
// import { useLocation } from "react-router-dom";

// const eventsData = {
//   "Personal & Social Events": [
//     { id: 1, name: "Royal Wedding", date: "12th March 2025" },
//     { id: 2, name: "Alice’s Birthday Bash", date: "5th April 2025" },
//     { id: 3, name: "50th Anniversary Gala", date: "20th May 2025" },
//     { id: 4, name: "Baby Shower for Emma", date: "15th June 2025" },
//     { id: 5, name: "Housewarming Party", date: "1st July 2025" },
//   ],
//   "Corporate & Business Events": [
//     { id: 6, name: "Tech Conference 2025", date: "18th March 2025" },
//     { id: 7, name: "Startup Pitch Fest", date: "22nd April 2025" },
//     { id: 8, name: "Annual Business Meet", date: "7th May 2025" },
//     { id: 9, name: "Product Launch - XPhone", date: "30th June 2025" },
//     { id: 10, name: "Team Building Retreat", date: "12th July 2025" },
//   ],
//   "Cultural & Community Events": [
//     { id: 11, name: "Spring Music Festival", date: "10th March 2025" },
//     { id: 12, name: "Food & Wine Carnival", date: "20th April 2025" },
//     { id: 13, name: "Art Exhibition - Modern Masters", date: "12th May 2025" },
//     { id: 14, name: "Charity Gala Night", date: "28th June 2025" },
//     { id: 15, name: "Religious Harmony Meet", date: "9th July 2025" },
//   ],
//   "Educational & Training Events": [
//     { id: 16, name: "AI & ML Bootcamp", date: "5th March 2025" },
//     { id: 17, name: "Career Fair 2025", date: "18th April 2025" },
//     { id: 18, name: "Graduation Celebration", date: "25th May 2025" },
//     { id: 19, name: "Tech Workshop - Web 3.0", date: "15th June 2025" },
//     { id: 20, name: "Online Webinar - Future of Work", date: "29th July 2025" },
//   ],
//   "Entertainment & Public Events": [
//     { id: 21, name: "Rock Concert - The Legends", date: "7th March 2025" },
//     { id: 22, name: "Sports Championship Finale", date: "14th April 2025" },
//     { id: 23, name: "Movie Premiere - Avengers 6", date: "10th May 2025" },
//     { id: 24, name: "Stand-up Comedy Show", date: "23rd June 2025" },
//     { id: 25, name: "Fashion Week 2025", date: "2nd August 2025" },
//   ],
//   "Sports & Fitness Events": [
//     { id: 26, name: "Marathon Championship", date: "5th April 2025" },
//     { id: 27, name: "Yoga Retreat", date: "10th May 2025" },
//     { id: 28, name: "Interstate Basketball Tournament", date: "18th June 2025" },
//     { id: 29, name: "Cricket World Cup Final", date: "15th July 2025" },
//     { id: 30, name: "Gym & Fitness Expo", date: "5th August 2025" },
//   ],
//   "Health & Wellness Events": [
//     { id: 31, name: "Mental Health Awareness Conference", date: "12th April 2025" },
//     { id: 32, name: "Nutrition & Diet Summit", date: "20th May 2025" },
//     { id: 33, name: "Wellness Retreat", date: "10th June 2025" },
//     { id: 34, name: "Medical Camp - Free Checkups", date: "30th July 2025" },
//     { id: 35, name: "Healthcare Tech Conference", date: "15th August 2025" },
//   ],
//   "Tech & Innovation Events": [
//     { id: 36, name: "Blockchain Expo 2025", date: "8th March 2025" },
//     { id: 37, name: "Cybersecurity Summit", date: "15th April 2025" },
//     { id: 38, name: "Robotics & AI Fair", date: "22nd May 2025" },
//     { id: 39, name: "Cloud Computing Workshop", date: "5th July 2025" },
//     { id: 40, name: "Metaverse & AR/VR Conference", date: "25th August 2025" },
//   ],
// };

// const ExploreEvents = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const category = searchParams.get("category");

//   const events = eventsData[category] || [];

//   return (
//     <div className="min-h-screen mt-18 py-10 px-6 md:px-10">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-[#ffb300]">
//         {category || "Explore Events"}
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {events.length > 0 ? (
//           events.map((event) => (
//             <div
//               key={event.id}
//               className="p-5 bg-gray-800 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-start group"
//             >
//               <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
//                 {event.name}
//               </h4>
//               <p className="text-sm text-gray-400 mt-2">{event.date}</p>
//               <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-400 col-span-full text-lg">
//             No events found for this category.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExploreEvents;





















import React from "react";
import { useLocation } from "react-router-dom";

const eventsData = {
  "Personal & Social Events": [
    { id: 1, name: "Royal Wedding", date: "12th March 2025" },
    { id: 2, name: "Alice’s Birthday Bash", date: "5th April 2025" },
    { id: 3, name: "50th Anniversary Gala", date: "20th May 2025" },
    { id: 4, name: "Baby Shower for Emma", date: "15th June 2025" },
    { id: 5, name: "Housewarming Party", date: "1st July 2025" },
  ],
  "Corporate & Business Events": [
    { id: 6, name: "Tech Conference 2025", date: "18th March 2025" },
    { id: 7, name: "Startup Pitch Fest", date: "22nd April 2025" },
    { id: 8, name: "Annual Business Meet", date: "7th May 2025" },
    { id: 9, name: "Product Launch - XPhone", date: "30th June 2025" },
    { id: 10, name: "Team Building Retreat", date: "12th July 2025" },
  ],
  "Cultural & Community Events": [
    { id: 11, name: "Spring Music Festival", date: "10th March 2025" },
    { id: 12, name: "Food & Wine Carnival", date: "20th April 2025" },
    { id: 13, name: "Art Exhibition - Modern Masters", date: "12th May 2025" },
    { id: 14, name: "Charity Gala Night", date: "28th June 2025" },
    { id: 15, name: "Religious Harmony Meet", date: "9th July 2025" },
  ],
  "Educational & Training Events": [
    { id: 16, name: "AI & ML Bootcamp", date: "5th March 2025" },
    { id: 17, name: "Career Fair 2025", date: "18th April 2025" },
    { id: 18, name: "Graduation Celebration", date: "25th May 2025" },
    { id: 19, name: "Tech Workshop - Web 3.0", date: "15th June 2025" },
    { id: 20, name: "Online Webinar - Future of Work", date: "29th July 2025" },
  ],
  "Entertainment & Public Events": [
    { id: 21, name: "Rock Concert - The Legends", date: "7th March 2025" },
    { id: 22, name: "Sports Championship Finale", date: "14th April 2025" },
    { id: 23, name: "Movie Premiere - Avengers 6", date: "10th May 2025" },
    { id: 24, name: "Stand-up Comedy Show", date: "23rd June 2025" },
    { id: 25, name: "Fashion Week 2025", date: "2nd August 2025" },
  ],
  "Sports & Fitness Events": [
    { id: 26, name: "Marathon Championship", date: "5th April 2025" },
    { id: 27, name: "Yoga Retreat", date: "10th May 2025" },
    { id: 28, name: "Interstate Basketball Tournament", date: "18th June 2025" },
    { id: 29, name: "Cricket World Cup Final", date: "15th July 2025" },
    { id: 30, name: "Gym & Fitness Expo", date: "5th August 2025" },
  ],
  "Health & Wellness Events": [
    { id: 31, name: "Mental Health Awareness Conference", date: "12th April 2025" },
    { id: 32, name: "Nutrition & Diet Summit", date: "20th May 2025" },
    { id: 33, name: "Wellness Retreat", date: "10th June 2025" },
    { id: 34, name: "Medical Camp - Free Checkups", date: "30th July 2025" },
    { id: 35, name: "Healthcare Tech Conference", date: "15th August 2025" },
  ],
  "Tech & Innovation Events": [
    { id: 36, name: "Blockchain Expo 2025", date: "8th March 2025" },
    { id: 37, name: "Cybersecurity Summit", date: "15th April 2025" },
    { id: 38, name: "Robotics & AI Fair", date: "22nd May 2025" },
    { id: 39, name: "Cloud Computing Workshop", date: "5th July 2025" },
    { id: 40, name: "Metaverse & AR/VR Conference", date: "25th August 2025" },
  ],
};

const ExploreEvents = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  const events = eventsData[category] || [];

  return (
    <div className="min-h-screen mt-16 sm:mt-18 py-6 px-4 sm:px-6 md:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-[#ffb300]">
        {category || "Explore Events"}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="p-4 sm:p-5 bg-gray-800 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-start group"
            >
              <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {event.name}
              </h4>
              <p className="text-sm text-gray-400 mt-2">{event.date}</p>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full text-lg">
            No events found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExploreEvents;
