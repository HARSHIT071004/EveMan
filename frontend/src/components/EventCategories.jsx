

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const categories = [
//   {
//     title: "Personal & Social Events",
//     subcategories: ["Weddings", "Birthdays", "Anniversaries", "Baby Showers", "Housewarming"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[rgb(255,255,255)]",
//   },
//   {
//     title: "Corporate & Business Events",
//     subcategories: ["Conferences", "Products", "Awards", "Team Building", "Dinners"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[rgb(255,255,255)]",
//   },
//   {
//     title: "Cultural & Community Events",
//     subcategories: ["Festivals", "Charity", "Religious", "Art Shows", "Food Festivals"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[rgb(255,255,255)]",
//   },
//   {
//     title: "Educational & Training Events",
//     subcategories: ["Workshops", "Webinars", "Career Fairs", "Graduations", "Exhibitions"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[rgb(255,255,255)]",
//   },
//   {
//     title: "Entertainment & Public Events",
//     subcategories: ["Concerts", "Sports", "Premieres", "Comedy Shows", "Fashion Shows"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[rgb(255,255,255)]",
//   },
// ];

// const EventCategories = () => {
//   const navigate = useNavigate();
//   // bg-[rgb(224,231,171)]
//   return (
//     <div className="w-full flex items-center relative border-blue bg-[rgb(255,255,255)] py-12 px-10">
//       {/* Left Section - Image */}
//       <div className="w-[40%] flex justify-center">
// {/* 
//       <div
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       className="md:w-1/2 relative overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] shadow-xl hover:shadow-purple-700 transition-all duration-500 ease-in-out"
//     >
//       <img
//           className="w-full h-[60vh] object-cover rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-500"
//           src="/eve12.jpeg"
//           alt="Event"
//           onClick={() => navigate("/about")}

//         />
//       {hover && (
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex items-center justify-center z-10 animate-fade-in-fast">
//           <h1
//             onClick={() => navigate("/about")}
//             className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-purple-400 cursor-pointer transition-colors duration-300 drop-shadow-md"
//           >
//             About Us
//           </h1>
//         </div>
//       )}
//     </div>
//   </div> */}
// {/* </div> */}
//         <img
//           className="w-full h-[60vh] object-cover rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-500"
//           src="/eve12.jpeg"
//           alt="Event"
//           onClick={() => navigate("/about")}

//         />
//     </div>

//       {/* Right Section - Event Categories */}
//       <div className="w-[60%] ml-8">
//         <h2 className="text-5xl text-[#000000] font-bold mb-8 drop-shadow-lg">
//           Event Categories
//         </h2>

//         <div className="flex gap-4 w-full">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/ExploreEvent?category=${encodeURIComponent(category.title)}`)}
//               className={`${category.bgColor} shadow-xl p-5 rounded-2xl transition duration-300 flex-1 min-w-0 cursor-pointer border border-gray-700 hover:shadow-2xl hover:scale-105 `}
//             >
//               <h3 className={`text-lg font-semibold mb-3 ${category.textColor}`}>
//                 {category.title}
//               </h3>
//               <ul className="text-sm opacity-80 space-y-2">
//                 {category.subcategories.map((item, i) => (
//                   <li key={i} className="text-[rgb(212,252,255)] px-2 py-1 rounded-lg  transition-colors duration-200">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCategories;











// import React from "react";
// import { useNavigate } from "react-router-dom";

// const categories = [
//   {
//     title: "Personal & Social Events",
//     subcategories: ["Weddings", "Birthdays", "Anniversaries", "Baby Showers", "Housewarming"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[rgb(255,255,255)]",
//   },
//   {
//     title: "Corporate & Business Events",
//     subcategories: ["Conferences", "Products", "Awards", "Team Building", "Dinners"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[rgb(255,255,255)]",
//   },
//   {
//     title: "Cultural & Community Events",
//     subcategories: ["Festivals", "Charity", "Religious", "Art Shows", "Food Festivals"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[rgb(255,255,255)]",
//   },
//   {
//     title: "Educational & Training Events",
//     subcategories: ["Workshops", "Webinars", "Career Fairs", "Graduations", "Exhibitions"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[rgb(255,255,255)]",
//   },
//   {
//     title: "Entertainment & Public Events",
//     subcategories: ["Concerts", "Sports", "Premieres", "Comedy Shows", "Fashion Shows"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[rgb(255,255,255)]",
//   },
// ];

// const EventCategories = () => {
//   const navigate = useNavigate();
  
//   return (
//     <div className="w-full flex flex-col lg:flex-row items-center relative bg-[rgb(255,255,255)] py-12 px-10">
//       {/* Left Section - Image */}
//       <div className="w-full lg:w-[40%] flex justify-center mb-8 lg:mb-0">
//         <img
//           className="w-full h-[60vh] object-cover rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-500"
//           src="/eve12.jpeg"
//           alt="Event"
//           onClick={() => navigate("/about")}
//         />
//       </div>

//       {/* Right Section - Event Categories */}
//       <div className="w-full lg:w-[60%] mt-8 lg:mt-0 lg:ml-8">
//         <h2 className="text-3xl lg:text-5xl text-[#000000] font-bold mb-8 drop-shadow-lg text-center lg:text-left">
//           Event Categories
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/ExploreEvent?category=${encodeURIComponent(category.title)}`)}
//               className={`${category.bgColor} shadow-xl p-5 rounded-2xl transition duration-300 flex-1 min-w-0 cursor-pointer border border-gray-700 hover:shadow-2xl hover:scale-105`}
//             >
//               <h3 className={`text-lg font-semibold mb-3 ${category.textColor}`}>
//                 {category.title}
//               </h3>
//               <ul className="text-sm opacity-80 space-y-2">
//                 {category.subcategories.map((item, i) => (
//                   <li key={i} className="text-[rgb(212,252,255)] px-2 py-1 rounded-lg transition-colors duration-200">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCategories;







import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Personal & Social Events",
    subcategories: ["Weddings", "Birthdays", "Anniversaries", "Baby Showers", "Housewarming"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[rgb(255,255,255)]",
  },
  {
    title: "Corporate & Business Events",
    subcategories: ["Conferences", "Products", "Awards", "Team Building", "Dinners"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[rgb(255,255,255)]",
  },
  {
    title: "Cultural & Community Events",
    subcategories: ["Festivals", "Charity", "Religious", "Art Shows", "Food Festivals"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[rgb(255,255,255)]",
  },
  {
    title: "Educational & Training Events",
    subcategories: ["Workshops", "Webinars", "Career Fairs", "Graduations", "Exhibitions"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[rgb(255,255,255)]",
  },
  {
    title: "Entertainment & Public Events",
    subcategories: ["Concerts", "Sports", "Premieres", "Comedy Shows", "Fashion Shows"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[rgb(255,255,255)]",
  },
];

const EventCategories = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false); // To detect mobile screen size
  const [isScrolling, setIsScrolling] = useState(false); // To track if the user is scrolling
  const [loadedCategories, setLoadedCategories] = useState(categories); // Store loaded categories

  useEffect(() => {
    // Detect screen size on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint for your needs
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (window.innerWidth <= 768) {
      const bottom = window.scrollY + window.innerHeight === document.documentElement.scrollHeight;
      if (bottom && !isScrolling) {
        setIsScrolling(true);
        // Simulate loading more categories (this can be replaced with actual data fetching logic)
        setTimeout(() => {
          setLoadedCategories((prevCategories) => [
            ...prevCategories,
            ...categories, // Add more categories (or fetch additional ones)
          ]);
          setIsScrolling(false);
        }, 1500); // Simulate delay
      }
    }
  };

  useEffect(() => {
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isMobile, isScrolling]);

  return (
    <div className="w-full flex items-center relative border-blue bg-[rgb(255,255,255)] py-12 px-10">
      {/* Left Section - Image */}
      <div className="w-[40%] flex justify-center">
        <img
          className="w-full h-[60vh] object-cover rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-500"
          src="/eve12.jpeg"
          alt="Event"
          onClick={() => navigate("/about")}
        />
      </div>

      {/* Right Section - Event Categories */}
      <div className="w-[60%] ml-8">
        <h2 className="text-5xl text-[#000000] font-bold mb-8 drop-shadow-lg">
          Event Categories
        </h2>

        <div className="flex gap-4 w-full flex-wrap">
          {loadedCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/ExploreEvent?category=${encodeURIComponent(category.title)}`)}
              className={`${category.bgColor} shadow-xl p-5 rounded-2xl transition duration-300 flex-1 min-w-0 cursor-pointer border border-gray-700 hover:shadow-2xl hover:scale-105 `}
            >
              <h3 className={`text-lg font-semibold mb-3 ${category.textColor}`}>
                {category.title}
              </h3>
              <ul className="text-sm opacity-80 space-y-2">
                {category.subcategories.map((item, i) => (
                  <li key={i} className="text-[rgb(212,252,255)] px-2 py-1 rounded-lg  transition-colors duration-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCategories;


