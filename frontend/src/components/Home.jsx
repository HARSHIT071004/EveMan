// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import EvemanInsights from "./EvemanInsights";
// import Testimonials from "./Testimonials";
// import HowItWorks from "./HowItWorks";
// import EventCategories from "./EventCategories";
// import ContactSupport from "./ContactSupport";
// import OurPartners from "./OurPartners";
// import Footer from "./footer";
// import LogCall from "./logcall";
// import Createeventttt from "./Createeventttt";

// const Home = () => {
//   const navigate = useNavigate();
//   const [hover, setHover] = useState(false);

//   return (
//     <div className="relative w-full min-h-screen bg-[rgb(15,15,17)] flex flex-col items-center overflow-hidden">
//       {/* Main Container */}
//       <div className="w-full mx-auto pt-20 pb-16">
//         {/* Enhanced Hero Section */}
//         <div className="relative backdrop-blur-2xl bg-[#ffe3e3] h-[78vh] p-8 md:p-12 mb-20 shadow-1xl overflow-hidden">
//           {/* Background Video */}
//           <video
//             className="absolute inset-0 w-full h-full object-cover z-0"
//             src="eveman15.mp4"
//             autoPlay
//             loop
//             muted
//           ></video>

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 opacity-60 animate-pulse-slow z-0" />

//           {/* Hero Content */}
//           <div className="relative z-10 flex items-center justify-center h-full">
//             {/* Text Section */}
//             <div className="md:w-1/2 text-center space-y-8 animate-fade-in-up">
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-200 leading-tight tracking-tight drop-shadow-lg">
//                 Plan Your <span className="text-purple-400">Perfect Event</span>
//               </h1>
//               <p className="text-lg md:text-xl lg:text-2xl text-gray-100 font-light leading-relaxed max-w-md mx-auto">
//                 Effortless event management with cutting-edge tools and seamless planning.
//               </p>
//               <div className="mt-10">
//                 <Createeventttt />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Why Choose Us */}
//         <div className="mb-20">
//           <h2 className="text-4xl md:text-5xl font-semibold text-gray-100 text-center mb-12 drop-shadow-md">
//             Why <span className="text-purple-400">Choose Us?</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {[
//               "Effortless Event Planning",
//               "Certified Event Managers",
//               "Secure Payments Process",
//               "24/7 Support Assistance",
//             ].map((text, index) => (
//               <div
//                 key={index}
//                 className="backdrop-blur-xl bg-[rgb(230,219,209)] border rounded-2xl p-8 text-gray-900 text-center hover:bg-purple-100 transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105"
//               >
//                 <h3 className="text-xl md:text-2xl font-semibold">{text}</h3>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Image Gallery */}
//         <div className="relative mb-20 flex justify-center items-center perspective-1000">
//           <div className="relative w-[900px] md:w-[600px] h-[450px] md:h-[400px] animate-rotate-stack mr-70">
//             {["/evemanphoto2.jpg", "/evemanphoto.jpg", "/evemanphoto3.jpg"].map(
//               (src, index) => (
//                 <img
//                   key={index}
//                   className={`absolute w-[450px] md:w-[300px] h-[550px] md:h-[400px] object-cover rounded-3xl border-2 border-purple-900/60 shadow-lg transition-all duration-500 ease-in-out hover:shadow-purple-700/70 hover:scale-110 hover:z-10 ${
//                     index === 0
//                       ? "rotate-[10deg] translate-x-[200px] translate-z-10"
//                       : index === 1
//                       ? "rotate-[-10deg] translate-z-40 z-10"
//                       : "rotate-[0deg] translate-x-[550px] translate-z-10"
//                   }`}
//                   src={src}
//                   alt="Event"
//                 />
//               )
//             )}
//           </div>
//         </div>

//         {/* Additional Sections */}
//         <div className="space-y-24">
//           <HowItWorks />
//           <LogCall />
//           <Testimonials />
//           <EventCategories />
//           <OurPartners />
//           <EvemanInsights />
//           <ContactSupport />
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;




import React from "react";
import { useNavigate } from "react-router-dom";
import EvemanInsights from "./EvemanInsights";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
import EventCategories from "./EventCategories";
import ContactSupport from "./ContactSupport";
import OurPartners from "./OurPartners";
import Footer from "./footer";
import LogCall from "./logcall";
import Createeventttt from "./Createeventttt";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffb30010] to-[#1a1a1a] opacity-50 pointer-events-none z-0"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 pt-32 pb-24 z-10 relative">
        <div className="flex flex-col justify-center space-y-4 tracking-wide">
          <p className="text-gray-100 text-base sm:text-xl leading-relaxed animate-slideUp">
            Meet <strong className="text-[#ffb300]">Eveman</strong>: a next-gen event platform to make your moments unforgettable. It lets you plan, manage and monitor your events with ease.
          </p>
          <p className="text-gray-100 text-base sm:text-xl leading-relaxed animate-slideUp delay-100">
            Powered by top-notch tools, Eveman ensures smooth booking, quick updates, and a seamless user experience—from start to celebration.
          </p>
          <p className="text-gray-100 text-base sm:text-xl leading-relaxed animate-slideUp delay-200">
            Trusted by event creators nationwide, Eveman brings your dream event to life with just a few clicks.
          </p>
          <div className="pt-4 animate-slideUp delay-300">
            <Createeventttt />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/evemanphoto.jpg"
            alt="Event Showcase"
            className="w-full max-w-[400px] lg:max-w-[500px] h-auto rounded-xl shadow-2xl border border-[#ffb30020] opacity-95 hover:opacity-100 transition-all duration-300 animate-fadeIn delay-300"
          />
        </div>
      </div>

      <div className="space-y-24 z-10 relative w-full px-6">
        <HowItWorks />
        {/* <LogCall /> */}
        <Testimonials />
        <EventCategories />
        <OurPartners />
        <EvemanInsights />
        <ContactSupport />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
