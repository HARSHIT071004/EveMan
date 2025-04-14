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
//     <div className="py-5 px-7 text-center rounded-2xl ">
//       <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-[rgb(255,255,255)]">
//         How It <span className="text-[#d86ad8]">Works?</span>
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="bg-[rgb(247,216,140)] p-5 shadow-lg border-4 rounded-2xl flex flex-col items-center"
//           >
//             {step.icon}
//             <h3 className="text-2xl md:text-3xl text-black font-semibold mt-4">
//               {step.title}
//             </h3>
//             <p className="text-[#1e4106] text-sm md:text-base mt-2 text-center">
//               {step.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;




import React from "react";
import { Link } from "react-router-dom";
import { FaCreditCard, FaSearch, FaPause, FaEnvelope, FaDesktop, FaMobileAlt } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16 relative overflow-hidden min-h-screen flex items-center">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffb30010] to-[#1a1a1a] opacity-30 pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#ffb300] tracking-wide">
            How EveMan Works
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            A seamless way to plan, manage, and execute events with complete security.
          </p>
        </div>

        <div className="space-y-12 md:space-y-8 relative">
         
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#ffb30020] h-[calc(100%-6rem)] top-12 hidden md:block"></div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-10 h-10 bg-[#ffb300] rounded-full flex items-center justify-center text-black font-semibold md:order-1">
              1
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaCreditCard className="text-[#ffb300] text-xl" />
                <h2 className="text-lg font-medium text-[#ffb300]">Tracks Every Event</h2>
              </div>
              <p className="text-gray-400 text-base mt-2">
                Tracks event details—venue, date, guest lists, and payments—ensuring everything is organized.
              </p>
            </div>
            <div className="md:w-1/2 hidden md:block"></div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 hidden md:block"></div>
            <div className="w-10 h-10 bg-[#ffb300] rounded-full flex items-center justify-center text-black font-semibold">
              2
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-3">
                <h2 className="text-lg font-medium text-[#ffb300]">Checks for Venue Availability</h2>
                <FaSearch className="text-[#ffb300] text-xl" />
              </div>
              <p className="text-gray-400 text-base mt-2">
                Scans venues for availability, location, and size—24/7 to ensure your event runs smoothly.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-10 h-10 bg-[#ffb300] rounded-full flex items-center justify-center text-black font-semibold md:order-1">
              3
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaPause className="text-[#ffb300] text-xl" />
                <h2 className="text-lg font-medium text-[#ffb300]">Secure Payments</h2>
              </div>
              <p className="text-gray-400 text-base mt-2">
                Safe event payments are processed; refunds or cancellations are handled with ease.
              </p>
            </div>
            <div className="md:w-1/2 hidden md:block"></div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 hidden md:block"></div>
            <div className="w-10 h-10 bg-[#ffb300] rounded-full flex items-center justify-center text-black font-semibold">
              4
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-3">
                <h2 className="text-lg font-medium text-[#ffb300]">Real-time Updates</h2>
                <FaEnvelope className="text-[#ffb300] text-xl" />
              </div>
              <p className="text-gray-400 text-base mt-2">
                Sends notifications to clients about event details, schedules, and any changes made.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-10 h-10 bg-[#ffb300] rounded-full flex items-center justify-center text-black font-semibold md:order-1">
              5
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaDesktop className="text-[#ffb300] text-xl" />
                <h2 className="text-lg font-medium text-[#ffb300]">Comprehensive Dashboard</h2>
              </div>
              <p className="text-gray-400 text-base mt-2">
                The admin dashboard offers insights into ticket sales, event stats, and real-time management tools.
              </p>
            </div>
            <div className="md:w-1/2 hidden md:block"></div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 hidden md:block"></div>
            <div className="w-10 h-10 bg-[#ffb300] rounded-full flex items-center justify-center text-black font-semibold">
              6
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-3">
                <h2 className="text-lg font-medium text-[#ffb300]">Mobile App for Attendees</h2>
                <FaMobileAlt className="text-[#ffb300] text-xl" />
              </div>
              <p className="text-gray-400 text-base mt-2">
                Event participants can track schedules, manage tickets, and stay updated on their phones.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex mr-26 flex-col md:flex-row justify-center gap-6">
          <Link
            to="/signup"
            className="bg-[#ffb300] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#e6a000] transition-all duration-300"
          >
            Create Event Now
          </Link>
          <Link
            to="/about"
            className="bg-[#252525] border border-[#ffb30020] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2a2a2a] transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
