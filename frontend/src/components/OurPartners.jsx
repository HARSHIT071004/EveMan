// import React from "react";
// import { motion } from "framer-motion";
// import { MdEvent } from "react-icons/md";
// import { SiEventbrite } from "react-icons/si";
// import { SiEventstore } from "react-icons/si";
// import { MdEventSeat } from "react-icons/md";

// const partners = [
//   { name: "EventPro", logo: <MdEvent className="text-4xl text-[#f39c12]" /> },
//   { name: "FestiveX", logo: <SiEventbrite className="text-3xl text-[#f39c12]" /> },
//   { name: "VenueHub", logo: <SiEventstore className="text-4xl text-[#f39c12]" /> },
//   { name: "GlamDecor", logo: <MdEventSeat className="text-4xl text-[#f39c12]" /> },
// ];

// // Enhanced animation variants
// const cardVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.9 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.6,
//       ease: [0.43, 0.13, 0.23, 0.96],
//     },
//   }),
//   hover: {
//     scale: 1.15,
//     boxShadow: "0px 15px 30px rgba(243, 156, 18, 0.4)",
//     rotate: 2,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.3,
//     },
//   },
// };

// const OurPartners = () => {
//   return (
//     <div className="w-full py-24 text-center overflow-hidden">
//       <div className="w-[90%] mx-auto max-w-7xl relative">
//         {/* Decorative Background Elements (no solid background color) */}
//         {/* <div className="absolute inset-0 opacity-50 -z-10"></div>
//         <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#f39c12]/10 rounded-full blur-2xl -z-11"></div> */}

//         {/* Header */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#f39c12] mb-12 tracking-wide drop-shadow-lg flex justify-center items-center"
//         >
//           {/* <motion.div
//             animate={{ rotate: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//             className="mr-4"
//           >
//             <MdEvent className="text-3xl md:text-5xl text-[#f39c12]" />
//           </motion.div> */}
//           Our Partners
//         </motion.h2>

//         {/* Partner Grid with Container Animation */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-3 px-4 md:px-8"
//         >
//           {partners.map((partner, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={cardVariants}
//               whileHover="hover"
//               className="bg-[rgb(27,35,41)]/80 backdrop-blur-md border border-gray-700/50 p-3 md:p-3 rounded-2xl flex flex-col justify-center items-center  hover:border-[#f39c12]"
//             >
//               <motion.div
//                 animate={{ y: [0, -5, 0] }}
//                 transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//               >
//                 {partner.logo}
//               </motion.div>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                 className="text-lg md:text-sm  text-gray-200 mt-3 tracking-wide"
//               >
//                 {partner.name}
//               </motion.p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default OurPartners;



















import React from "react";
import { motion } from "framer-motion";
import { MdEvent } from "react-icons/md";
import { SiEventbrite, SiEventstore } from "react-icons/si";
import { MdEventSeat } from "react-icons/md";

const partners = [
  { name: "EventPro", logo: <MdEvent className="text-3xl sm:text-4xl text-[#f39c12]" /> },
  { name: "FestiveX", logo: <SiEventbrite className="text-2xl sm:text-3xl text-[#f39c12]" /> },
  { name: "VenueHub", logo: <SiEventstore className="text-3xl sm:text-4xl text-[#f39c12]" /> },
  { name: "GlamDecor", logo: <MdEventSeat className="text-3xl sm:text-4xl text-[#f39c12]" /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  }),
  hover: {
    scale: 1.15,
    boxShadow: "0px 15px 30px rgba(243, 156, 18, 0.4)",
    rotate: 2,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const OurPartners = () => {
  return (
    <div className="w-full py-16 sm:py-20 md:py-24 text-center overflow-hidden">
      <div className="w-[92%] sm:w-[90%] mx-auto max-w-7xl relative">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#f39c12] mb-10 sm:mb-12 tracking-wide drop-shadow-lg"
        >
          Our Partners
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4 md:px-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-[rgb(27,35,41)]/80 backdrop-blur-md border border-gray-700/50 p-4 sm:p-5 md:p-3 rounded-2xl flex flex-col justify-center items-center hover:border-[#f39c12]"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                {partner.logo}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="text-sm sm:text-base md:text-sm text-gray-200 mt-3 tracking-wide text-center"
              >
                {partner.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurPartners;
