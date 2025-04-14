// import React, { useState, useEffect } from "react";
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
//   const [isMobile, setIsMobile] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [loadedCategories, setLoadedCategories] = useState(categories);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleScroll = () => {
//     if (window.innerWidth <= 768) {
//       const bottom = window.scrollY + window.innerHeight === document.documentElement.scrollHeight;
//       if (bottom && !isScrolling) {
//         setIsScrolling(true);
//         setTimeout(() => {
//           setLoadedCategories((prevCategories) => [...prevCategories, ...categories]);
//           setIsScrolling(false);
//         }, 1500);
//       }
//     }
//   };

//   useEffect(() => {
//     if (isMobile) {
//       window.addEventListener("scroll", handleScroll);
//     }
//     return () => {
//       if (isMobile) {
//         window.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [isMobile, isScrolling]);

//   return (
//     <div className="w-full flex items-center relative bg-gradient-to-r from-purple-800 via-blue-900 to-black py-12 px-16">
//       {/* Left Section - Image */}
//       <div className="w-[40%] flex justify-center">
//         <img
//           className="w-full h-[60vh] object-cover rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500"
//           src="/eve12.jpeg"
//           alt="Event"
//           onClick={() => navigate("/about")}
//         />
//       </div>

//       {/* Right Section - Event Categories */}
//       <div className="w-[60%] ml-8">
//         <h2 className="text-5xl text-[#ffb300]  font-bold mb-8 drop-shadow-lg">
//           Event Categories
//         </h2>

//         <div className="flex gap-6 flex-wrap justify-center">
//           {loadedCategories.map((category, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/ExploreEvent?category=${encodeURIComponent(category.title)}`)}
//               className={`${category.bgColor} p-6 rounded-xl shadow-md transition-transform duration-300 ease-in-out w-full sm:w-[48%] md:w-[32%] lg:w-[20%] cursor-pointer border-2 border-transparent hover:shadow-2xl hover:scale-105 hover:border-[#f39c12]`}
//             >
//               <h3 className={`text-2xl font-semibold mb-4 ${category.textColor}`}>
//                 {category.title}
//               </h3>
//               <ul className="space-y-2">
//                 {category.subcategories.map((item, i) => (
//                   <li
//                     key={i}
//                     className="text-[#d4fcff] hover:text-[#f39c12] transition-all duration-200"
//                   >
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












// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const categories = [
//   {
//     title: "Personal & Social Events",
//     subcategories: ["Weddings", "Birthdays", "Anniversaries", "Baby Showers", "Housewarming"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[#ffb300] ",
//   },
//   {
//     title: "Corporate & Business Events",
//     subcategories: ["Conferences", "Products", "Awards", "Team Building", "Dinners"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[#ffb300] ",
//   },
//   {
//     title: "Cultural & Community Events",
//     subcategories: ["Festivals", "Charity", "Religious", "Art Shows", "Food Festivals"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[#ffb300] ",
//   },
//   {
//     title: "Educational & Training Events",
//     subcategories: ["Workshops", "Webinars", "Career Fairs", "Graduations", "Exhibitions"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[#ffb300] ",
//   },
//   {
//     title: "Entertainment & Public Events",
//     subcategories: ["Concerts", "Sports", "Premieres", "Comedy Shows", "Fashion Shows"],
//     bgColor: "bg-[rgb(15,15,17)]",
//     textColor: "text-[#ffb300] ",
//   },
// ];

// const EventCategories = () => {
//   const navigate = useNavigate();
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="w-full flex items-center relative bg-gradient-to-r from-purple-800 via-blue-900 to-black py-19 px-19">
//       <div className="w-[40%] flex justify-center">
//         <img
//           className="w-[92%] h-[50vh] object-cover rounded-2xl shadow-xl transform "
//           src="/eve12.jpeg"
//           alt="Event"
//           onClick={() => navigate("/about")}
//         />
//       </div>

//       <div className="w-[60%] ">
//         <h2 className="text-4xl text-[#ffb300] font-semibold  mb-8 drop-shadow-lg">
//           Event Categories!??
//         </h2>

//         <div className="flex justify-start gap-6">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/ExploreEvent?category=${encodeURIComponent(category.title)}`)}
//               className={`${category.bgColor} p-3 rounded-2xl shadow-md transition-transform duration-300 ease-in-out w-full sm:w-[43%] md:w-[32%] lg:w-[20%] cursor-pointer border-2 border-transparent hover:shadow-2xl hover:scale-105 hover:border-[#f39c12]`}
//             >
//               <h3 className={`text-1xl overflow-hidden mb-4 ${category.textColor}`}>
//                 {category.title}
//               </h3>
//               <ul className="space-y-2">
//                 {category.subcategories.map((item, i) => (
//                   <li
//                     key={i}
//                     className="text-[#d4fcff] hover:text-[#f39c12] transition-all duration-200"
//                   >
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
    textColor: "text-[#ffb300] ",
  },
  {
    title: "Corporate & Business Events",
    subcategories: ["Conferences", "Products", "Awards", "Team Building", "Dinners"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[#ffb300] ",
  },
  {
    title: "Cultural & Community Events",
    subcategories: ["Festivals", "Charity", "Religious", "Art Shows", "Food Festivals"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[#ffb300] ",
  },
  {
    title: "Educational & Training Events",
    subcategories: ["Workshops", "Webinars", "Career Fairs", "Graduations", "Exhibitions"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[#ffb300] ",
  },
  {
    title: "Entertainment & Public Events",
    subcategories: ["Concerts", "Sports", "Premieres", "Comedy Shows", "Fashion Shows"],
    bgColor: "bg-[rgb(15,15,17)]",
    textColor: "text-[#ffb300] ",
  },
];

const EventCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start relative bg-gradient-to-r from-purple-800 via-blue-900 to-black py-10 px-4 sm:px-6 md:px-10 lg:py-19 lg:px-19">
      <div className="w-full lg:w-[40%] flex justify-center mb-10 lg:mb-0">
        <img
          className="w-[92%] h-[40vh] sm:h-[50vh] object-cover rounded-2xl shadow-xl"
          src="/eve12.jpeg"
          alt="Event"
          onClick={() => navigate("/about")}
        />
      </div>

      <div className="w-full lg:w-[60%]">
        <h2 className="text-3xl sm:text-4xl text-[#ffb300] font-semibold mb-8 drop-shadow-lg text-center lg:text-left">
          Event Categories!??
        </h2>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/ExploreEvent?category=${encodeURIComponent(category.title)}`)}
              className={`${category.bgColor} p-3 rounded-2xl shadow-md transition-transform duration-300 ease-in-out w-[90%] sm:w-[45%] md:w-[30%] lg:w-[20%] cursor-pointer border-2 border-transparent hover:shadow-2xl hover:scale-105 hover:border-[#f39c12]`}
            >
              <h3 className={`text-lg overflow-hidden mb-4 ${category.textColor}`}>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.subcategories.map((item, i) => (
                  <li
                    key={i}
                    className="text-[#d4fcff] hover:text-[#f39c12] transition-all duration-200"
                  >
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
