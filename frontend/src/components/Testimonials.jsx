





// import React from "react";

// const testimonials = [
//   {
//     name: "Nikhil Pratap",
//     feedback: "The best event management service! Everything was seamless.",
//     rating: 4.5,
//   },
//   {
//     name: "Akshay Verma",
//     feedback: "Highly professional team, made my wedding memorable!",
//     rating: 3.5,
//   },
//   {
//     name: "Priyanshu Ruhela",
//     feedback: "Excellent coordination and smooth execution of events.",
//     rating: 4,
//   },
//   {
//     name: "Utsav Singh",
//     feedback: "Their attention to detail is unmatched!",
//     rating: 3.5,
//   },
//   {
//     name: "Harsh Singh",
//     feedback: "Flawless planning and amazing team effort.",
//     rating: 6,
//   },
// ];

// const TestimonialCard = ({ name, feedback, rating }) => {
//   return (
//     <div className="bg-black/40 backdrop-blur-xl rounded-xl shadow-lg p-6 text-center w-80 border border-purple-900/60 hover:bg-purple-900/20 transition-all duration-300 ease-in-out">
//       <h3 className="text-2xl text-gray-900 font-semibold">{name}</h3>
//       <p className="text-gray-300 text-lg mt-4">{feedback}</p>
//       {/* Rating stars (commented out in original, keeping it that way) */}
//       {/* <div className="flex justify-center mt-3 text-yellow-500">
//         {"⭐".repeat(Math.floor(rating))}
//         {rating % 1 !== 0 && <span>⭐</span>}
//       </div> */}
//     </div>
//   );
// };

// const Testimonials = () => {
//   return (
//     <div className="py-16 px-10 text-center bg-[rgb(255,255,255)]">
//       <h2 className="text-5xl text-gray-700 font-bold mb-12 drop-shadow-md">
//         What Our <span className="text-purple-600">Clients Say</span>
//       </h2>
//       <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-900 scrollbar-track-black">
//         {testimonials.map((testimonial, index) => (
//           <TestimonialCard key={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;








import React from "react";

const testimonials = [
  {
    name: "Nikhil Pratap",
    feedback: "The best event management service! Everything was seamless.",
    rating: 4.5,
  },
  {
    name: "Akshay Verma",
    feedback: "Highly professional team, made my wedding memorable!",
    rating: 3.5,
  },
  {
    name: "Priyanshu Ruhela",
    feedback: "Excellent coordination and smooth execution of events.",
    rating: 4,
  },
  {
    name: "Utsav Singh",
    feedback: "Their attention to detail is unmatched!",
    rating: 3.5,
  },
  {
    name: "Harsh Singh",
    feedback: "Flawless planning and amazing team effort.",
    rating: 6,
  },
];

const TestimonialCard = ({ name, feedback, rating, index }) => {
  // Alternate background colors based on index
  const bgColor =
    index % 2 === 0 ? "bg-[rgb(59,99,198)]" : "bg-[rgb(251,224,48)]";
  // Adjust text color based on background for readability
  const textColor = index % 2 === 0 ? "text-gray-900" : "text-gray-900";

  return (
    <div
      className={`${bgColor} rounded-xl shadow-lg p-6 text-center w-80 border border-purple-900/60 hover:shadow-xl transition-all duration-300 ease-in-out`}
    >
      <h3 className={`text-2xl ${textColor} font-semibold`}>{name}</h3>
      <p className={`text-lg ${textColor} mt-4`}>{feedback}</p>
      {/* Rating stars (commented out in original, keeping it that way) */}
      <div className="flex justify-center mt-3 text-yellow-500">
        {"⭐".repeat(Math.floor(rating))}
        {rating % 1 !== 0 && <span>⭐</span>}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="py-16 px-10 text-center ">
      <h2 className="text-5xl text-gray-100 font-bold mb-12 drop-shadow-md">
        What Our <span className="text-purple-400">Clients Say?</span>
      </h2>
      <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-900 scrollbar-track-black">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;