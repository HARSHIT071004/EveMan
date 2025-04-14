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
  const bgColor = index % 2 === 0 ? "bg-gray-800" : "bg-gray-700";
  // Adjust text color based on background for readability
  const textColor = index % 2 === 0 ? "text-white" : "text-gray-300";

  return (
    <div
      className={`${bgColor} rounded-xl shadow-xl p-2 text-center w-80 border border-purple-600 hover:shadow-2xl transition-all duration-300 ease-in-out`}
    >
      <h3 className={`text-2xl ${textColor} font-semibold`}>{name}</h3>
      <p className={`text-lg ${textColor} mt-4`}>{feedback}</p>
      {/* Rating stars */}
      <div className="flex justify-center mt-3 text-yellow-400">
        {"⭐".repeat(Math.floor(rating))}
        {rating % 1 !== 0 && <span>⭐</span>}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="py-16 px-10 text-center bg-gradient-to-r">
      <h2 className="text-4xl text-white  mb-12 drop-shadow-lg">
        What Our <span className="text-yellow-400">Clients Say?</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6 pb-2 sm:flex-nowrap sm:justify-start sm:overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
