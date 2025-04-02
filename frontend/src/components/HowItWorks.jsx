// import React from "react";
// import { FaCalendarCheck, FaUserCheck, FaShieldAlt, FaSmile } from "react-icons/fa";

// const steps = [
//   {
//     icon: <FaCalendarCheck className="text-blue-600 text-4xl" />,
//     title: "Post Your Event Details",
//     description: "Select event type, date, location, budget & requirements",
//   },
//   {
//     icon: <FaUserCheck className="text-green-600 text-4xl" />,
//     title: "Choose Verified Managers",
//     description: "Browse & compare event managers based on reviews & experience",
//   },
//   {
//     icon: <FaShieldAlt className="text-yellow-500 text-4xl" />,
//     title: "Secure Payment & Confirmation",
//     description: "Make a secure payment, and get instant booking confirmation",
//   },
//   {
//     icon: <FaSmile className="text-purple-600 text-4xl" />,
//     title: "Enjoy a Hassle-Free Event",
//     description: "Sit back & relax while professionals handle everything",
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <div className="py-5 px-7 text-center rounded-2xl bg-[rgb(255,255,255)] ">
//       <h2 className="text-5xl font-semibold mb-10 text-[rgb(0,0,0)] ">How It<span className="text-[#d86ad8]"> Works?</span></h2>
//       <br/>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
//         {steps.map((step, index) => (
//           <div key={index} className="bg-[rgb(247,216,140)] p-3 shadow-lg border-4  rounded-2xl flex flex-col items-center">
//             {step.icon}
//             <h3 className="text-2xl text-black font-semibold mt-4">{step.title}</h3>
//             <p className="text-[#1e4106] text-sm mt-2 text-center">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;






import React from "react";
import { FaCalendarCheck, FaUserCheck, FaShieldAlt, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarCheck className="text-blue-600 text-4xl" />,
    title: "Post Your Event Details",
    description: "Select event type, date, location, budget & requirements",
  },
  {
    icon: <FaUserCheck className="text-green-600 text-4xl" />,
    title: "Choose Verified Managers",
    description: "Browse & compare event managers based on reviews & experience",
  },
  {
    icon: <FaShieldAlt className="text-yellow-500 text-4xl" />,
    title: "Secure Payment & Confirmation",
    description: "Make a secure payment, and get instant booking confirmation",
  },
  {
    icon: <FaSmile className="text-purple-600 text-4xl" />,
    title: "Enjoy a Hassle-Free Event",
    description: "Sit back & relax while professionals handle everything",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-5 px-7 text-center rounded-2xl bg-[rgb(255,255,255)]">
      <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-[rgb(0,0,0)]">
        How It <span className="text-[#d86ad8]">Works?</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[rgb(247,216,140)] p-5 shadow-lg border-4 rounded-2xl flex flex-col items-center"
          >
            {step.icon}
            <h3 className="text-2xl md:text-3xl text-black font-semibold mt-4">
              {step.title}
            </h3>
            <p className="text-[#1e4106] text-sm md:text-base mt-2 text-center">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
